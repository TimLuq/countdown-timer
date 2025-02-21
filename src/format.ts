import { emmet } from "emmet-elem";

export interface ITimeDuration {
    /** current millisecond epoch time **/
    now: number;
    /** total number of milliseconds until deadline */
    duration: number;
    /** millisecond epoch time **/
    deadline: number;
    /** absolute number of days from the deadline */
    d: number;
    /** absolute number of hours from the deadline */
    h: number;
    /** absolute number of minutes from the deadline */
    m: number;
    /** absolute number of seconds from the deadline */
    s: number;
}

export interface IFormatOptions {
    /** always show days, even if duration is less than a day */
    forceDays: boolean;
    /** always show hours, even if duration is less than an hour */
    forceHours: boolean;
    /** always show minutes, even if duration is less than a minute */
    forceMinutes: boolean;
    /** always show seconds, even if duration is less than a second */
    forceSeconds: boolean;
    /** zero pad hms to always be two characters */
    zeroPad: boolean;
    /** zero pad days to always be a specific number of characters */
    zeroPadDays: number;
    /** force a time separator between days and time even if no days are counted */
    forceTimeSeparator: boolean;
}

function validate<K extends keyof IFormatOptions>(obj: Partial<IFormatOptions>, key: K, value: IFormatOptions[K]): value is IFormatOptions[K] {
    const to = typeof defaultFormat[key];
    if (typeof value === to) {
        return true;
    }
    if (to === "boolean" && value as unknown === "1") {
        obj[key] = true as IFormatOptions[K];
        return true;
    }
    if (to === "boolean" && value as unknown === "0") {
        obj[key] = false as IFormatOptions[K];
        return true;
    }
    if (to === "number" && typeof value === "string" && /^\d+$/.test(value)) {
        const n = parseInt(value);
        obj[key] = n as IFormatOptions[K];
        return true;
    }
    return false;
}

export const defaultFormat: IFormatOptions = {
    forceDays: false,
    forceHours: false,
    forceMinutes: false,
    forceSeconds: false,
    zeroPad: false,
    zeroPadDays: 1,
    forceTimeSeparator: false,
};

export function getDuration(deadline: number): ITimeDuration {
    const now = Date.now();
    const duration = deadline - now;
    const abs = Math.abs(duration);
    const ms_ms = abs % 1000;
    const s_ms = (abs - ms_ms) % (1000 * 60);
    const m_ms = (abs - s_ms) % (1000 * 60 * 60);
    const h_ms = (abs - m_ms - s_ms) % (1000 * 60 * 60 * 24);
    const d_ms = abs - h_ms - m_ms - s_ms;
    const s = Math.round(s_ms / 1000);
    const m = Math.round(m_ms / (1000 * 60));
    const h = Math.round(h_ms / (1000 * 60 * 60));
    const d = Math.round(d_ms / (1000 * 60 * 60 * 24));
    return {
        now,
        duration,
        deadline,
        d,
        h,
        m,
        s
    };
}

type FormatUnitElement = HTMLSpanElement & {
    className: "unit",
    children: [
        HTMLSpanElement & { className: "single" },
        HTMLSpanElement & { className: "short" },
        HTMLSpanElement & { className: "long" },
    ]
};

type FormatComponentElement<Component extends string> = HTMLSpanElement & {
    className: `c ${Component}`,
    firstChild:  HTMLSpanElement & { className: "value" },
    lastChild:   FormatUnitElement,
};

type FormatElement = HTMLTimeElement & {
    id: "time",
    firstChild: HTMLSpanElement & { className: "prefix" },
    lastChild:  HTMLSpanElement & { className: "suffix" },
    children: [
        HTMLSpanElement & { className: "prefix" },
        FormatComponentElement<"d">,
        HTMLSpanElement & { className: "septime" },
        FormatComponentElement<"h">,
        HTMLSpanElement & { className: "sep" },
        FormatComponentElement<"m">,
        HTMLSpanElement & { className: "sep" },
        FormatComponentElement<"s">,
        HTMLSpanElement & { className: "suffix" },
    ],
    querySelector: <Component extends "d" | "h" | "m" | "s">(selector: `.${Component}`) => FormatComponentElement<Component>,
};

const fromatElem: FormatElement = emmet`time#time>span.prefix+span.c.d>span.value+span.unit>span.single{d}+span.short{day}+span.long{days}^^span.septime+span.c.h>span.value+span.unit>span.single{h}+span.short{hrs}+span.long{hours}^^span.sep+span.c.m>span.value+span.unit>span.single{m}+span.short{min}+span.long{minutes}^^span.sep+span.c.s>span.value+span.unit>span.single{s}+span.short{sec}+span.long{seconds}^^span.suffix`;
export function fromatDuration(duration: ITimeDuration, options: IFormatOptions): FormatElement {
    let iso = duration.duration < 0 ? "-P" : "P";
    if (duration.d != 0 || options.forceDays) {
        const ds = duration.d.toFixed(0).padStart(options.zeroPadDays || 1);
        iso += ds + "D";
        const de = fromatElem.querySelector<"d">(".d");
        de.firstChild.textContent = ds;
        de.hidden = false;
        (de.nextSibling as HTMLElement).hidden = false;
    } else {
        const de = fromatElem.querySelector<"d">(".d");
        de.hidden = true;
        (de.nextSibling as HTMLElement).hidden = !options.forceTimeSeparator;
    }
    iso += "T";
    if (duration.h != 0 || duration.d != 0 || options.forceHours) {
        let hs = duration.h.toFixed(0);
        if (options.zeroPad) {
            hs = hs.padStart(2, "0");
        }
        iso += hs + "H";
        const he = fromatElem.querySelector<"h">(".h");
        he.firstChild.textContent = hs;
        he.hidden = false;
        (he.nextSibling as HTMLElement).hidden = false;
    } else {
        const he = fromatElem.querySelector<"h">(".h");
        he.hidden = true;
        (he.nextSibling as HTMLElement).hidden = true;
    }
    if (duration.m != 0 || duration.h != 0 || duration.d != 0 || options.forceMinutes) {
        let ms = duration.m.toFixed(0);
        if (options.zeroPad) {
            ms = ms.padStart(2, "0");
        }
        iso += ms + "M";
        const me = fromatElem.querySelector<"m">(".m");
        me.firstChild.textContent = ms;
        me.hidden = false;
        (me.nextSibling as HTMLElement).hidden = false;
    } else {
        const me = fromatElem.querySelector<"m">(".m");
        me.hidden = true;
        (me.nextSibling as HTMLElement).hidden = true;
    }
    let ss = duration.s.toFixed(0);
    if (options.zeroPad) {
        ss = ss.padStart(2, "0");
    }
    iso += ss + "S";
    const se = fromatElem.querySelector<"s">(".s");
    se.firstChild.textContent = ss;
    se.hidden = false;
    fromatElem.dateTime = iso;
    return fromatElem;
}

export function formatApplyDefault(config: Partial<IFormatOptions>, base: IFormatOptions) {
    for (const key of Object.keys(defaultFormat) as (keyof IFormatOptions)[]) {
        const currValue = config[key];
        if (currValue === undefined || !validate(config, key, currValue)) {
            (config as Record<typeof key, IFormatOptions[typeof key]>)[key] = base[key];
        }
    }
}
