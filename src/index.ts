import { fontManager } from "./fontmanager";
import { formatApplyDefault, fromatDuration, getDuration, type IFormatOptions } from "./format";
import { generateCss, type ITimerStyle, styleApplyDefault } from "./style";
import type { IBaseTimer } from "./timers/base";

import { greentimer } from "./timers/greentimer";
import { iso8601 } from "./timers/iso8601";
import { simple } from "./timers/simple";

export interface IAppConfig extends IFormatOptions, ITimerStyle {
    controls: boolean;
    base: string;
    deadline: number;
}


const bases: Record<string, IBaseTimer> = {
    iso8601,
    greentimer,
    simple,
};

const loadConfig = (): [IAppConfig, IFormatOptions & ITimerStyle] => {
    const deadline = new Date(Date.now() + 1000 * 60 * 61);
    deadline.setUTCMilliseconds(0);
    deadline.setUTCSeconds(0);
    deadline.setUTCMinutes(0);
    const config: Partial<IAppConfig> = {
        controls: typeof (window as unknown as { obsstudio?: object }).obsstudio === "undefined",
        deadline: deadline.getTime() / 1000,
        base: "iso8601",
    };
    const hash = window.location.hash.substring(1);
    if (hash) {
        for (const [k, v] of new URLSearchParams(hash)) {
            if (k === "controls") {
                config.controls = v === "1";
            } else if (k === "base") {
                config.base = v;
            } else if (k === "deadline" && /^\d+$/.test(v)) {
                config.deadline = parseInt(v);
            } else {
                (config as Record<string, unknown>)[k as keyof IAppConfig] = v;
            }
        }
    }
    const base = Object.hasOwn(bases, config.base ?? "") ? bases[config.base!] : iso8601;
    formatApplyDefault(config, base);
    styleApplyDefault(config, base);
    return [config as IAppConfig, base];
};

const style = document.createElement("style");
let activeConfig: undefined | IAppConfig = undefined;

const render = (config: IAppConfig) => {
    const dur = getDuration(config.deadline * 1000);
    const element = fromatDuration(dur, config);
    if (!element.parentNode) {
        document.body.appendChild(element);
    }
};

const refresh = () => {
    const [config, base] = loadConfig();

    style.textContent = generateCss(config);
    if (!style.parentNode) {
        document.head.appendChild(style);
    }

    const prevConfig = activeConfig;
    activeConfig = config;
    if (!prevConfig) {
        setInterval(() => { render(activeConfig!); }, 1000);
    }
    render(activeConfig);
    
    if (activeConfig.controls) {
        fontManager.loadFont("Noto Sans");
        import("./controls").then(({ renderControls }) => {
            renderControls(activeConfig!, bases, fontManager);
        });
    }
};

refresh();
window.addEventListener("hashchange", refresh);

