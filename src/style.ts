import { fontManager } from "./fontmanager";

export interface ITimerStyle {
    separator: string;
    sepTime: string;
    prefix: string;
    suffix: string;
    unitPlacement: "after" | "under";
    dir: "h" | "v";

    background: string;
    borderRadius: number;
    paddingTop: number;
    paddingBottom: number;
    paddingSide: number;
    width: number;
    gap: number;
    halign: "start" | "center" | "end";
    valign: "start" | "center" | "end";

    color: string;
    fontSize: number;
    font: string;

    unit: "long" | "short" | "single" | "none";
    unitCase: "upper" | "lower" | "title";
    unitColor: string;
    unitSize: number;
    unitFont: string;
    unitOffsetX: number;
    unitOffsetY: number;

    valueColor: string;
    valueSize: number;
    valueFont: string;
    valueOffsetX: number;
    valueOffsetY: number;
}

export const defaultStyle: ITimerStyle = {
    separator: " ",
    sepTime: "",
    prefix: "",
    suffix: "",
    unitPlacement: "after",
    dir: "h",

    background: "#00000080",
    borderRadius: 0,
    paddingTop: 6,
    paddingBottom: 6,
    paddingSide: 6,
    width: 0,
    gap: 6,
    halign: "center",
    valign: "center",

    color: "#ffffffff",
    fontSize: 32,
    font: "Noto Sans",

    unit: "single",
    unitCase: "lower",
    unitColor: "",
    unitFont: "",
    unitSize: 0,
    unitOffsetX: 0,
    unitOffsetY: 0,

    valueColor: "",
    valueSize: 0,
    valueFont: "",
    valueOffsetX: 0,
    valueOffsetY: 0,
};

function cssEscape(s: string): string {
    return s.replace(/[^a-zA-Z0-9:_ -]/g, (ch) => "\\" + ch.charCodeAt(0).toString(16).padStart(6, "0"));
}

class StyleCollector {
    #items: Map<string, string> = new Map();
    public add(selector: string, style: string): this {
        const old = this.#items.get(selector);
        if (old) {
            style = old + ";" + style;
        }
        this.#items.set(selector, style);
        return this;
    }

    public toString(): string {
        let css = "";
        for (const [selector, style] of this.#items) {
            css += selector + "{" + style + "}\n";
        }
        return css
    }
}

export function generateCss(style: ITimerStyle): string {
    const css = new StyleCollector();

    if (style.separator) {
        css.add("#time .sep", "display:inline;display:inline-block;text-align:center");
        css.add("#time .sep::before", `content:'${cssEscape(style.separator)}'`);
    } else {
        css.add("#time .sep", "display:none !important");
    }
    if (style.sepTime) {
        css.add("#time .septime", "display:inline;display:inline-block;text-align:center");
        css.add("#time .septime::before", `content:'${cssEscape(style.sepTime)}'`);
    } else {
        css.add("#time .septime", "display:none");
    }

    if (style.prefix) {
        css.add("#time .prefix", "display:inline;display:inline-block");
        css.add("#time .prefix::before", `content:'${cssEscape(style.prefix)}'`);
    } else {
        css.add("#time .prefix", "display:none !important");
    }

    if (style.suffix) {
        css.add("#time .suffix", "display:inline;display:inline-block");
        css.add("#time .suffix::before", `content:'${cssEscape(style.suffix)}'`);
    } else {
        css.add("#time .suffix", "display:none !important");
    }

    if (style.unitPlacement == "after") {
        css.add("#time .c", "display:flex;flex-direction:row;align-items:center");
    } else {
        css.add("#time .c", "display:grid;align-items:center;justify-items:center");
        css.add("#time .c>*", "grid-area:1 / 1");
    }

    if (style.dir == "v") {
        // make css grid that is just one column and automatically stacks each item
        css.add("#time", "grid-auto-flow:row");
    } else {
        // make css grid that is just one row and automatically stacks each child element in a continuous line.
        css.add("#time", "grid-auto-flow:column");
    }

    const width = style.width > 0 ? style.width + "px" : style.width == 0 ? "100vw" : "auto";
    const textAlign = style.halign == "start" ? "left" : style.halign == "center" ? "center" : "right";
    const fontFamily = cssEscape(style.font.replace(/:.+$/, ""));
    const fontWeight = /:wght@(\d+)/.exec(style.font)?.[1] ?? "400";
    css.add("#time", `background:${style.background};border-radius:${style.borderRadius}px`);
    css.add("#time", `padding:${style.paddingTop}px ${style.paddingSide}px ${style.paddingBottom}px;width:${width};gap:${style.gap}px`);
    css.add("#time", `justify-content:${style.valign};align-items:${style.halign};text-align:${textAlign}`);
    css.add("#time", `color:${style.color};font-size:${style.fontSize}px;font-family:${fontFamily};font-weight:${fontWeight}`);

    if (style.unit == "long") {
        css.add("#time .unit>span.long", "display:inline;display:inline-block");
    } else if (style.unit == "short") {
        css.add("#time .unit>span.short", "display:inline;display:inline-block");
    } else if (style.unit == "single") {
        css.add("#time .unit>span.single", "display:inline;display:inline-block");
    }

    if (style.unitCase == "upper") {
        css.add("#time .unit", "text-transform:uppercase");
    } else if (style.unitCase == "lower") {
        css.add("#time .unit", "text-transform:lowercase");
    } else if (style.unitCase == "title") {
        css.add("#time .unit", "text-transform:capitalize");
    }

    if (style.unitColor) {
        css.add("#time .unit", `color:${style.unitColor}`);
    }

    if (style.unitSize) {
        css.add("#time .unit", `font-size:${style.unitSize}px`);
    }

    if (style.unitFont && style.unitFont != style.font) {
        css.add("#time .unit", `font-family:'${cssEscape(style.unitFont.replace(/:.+$/, ""))}'`);
        if (style.unitFont.includes(":wght@")) {
            css.add("#time .unit", `font-weight:${/:wght@(\d+)$/.exec(style.unitFont)?.[1]}`);
        } else {
            css.add("#time .unit", `font-weight:400`);
        }
    }

    if (style.unitOffsetX || style.unitOffsetY) {
        css.add("#time .unit", `transform:translate(${style.unitOffsetX}px,${style.unitOffsetY}px)`);
    }

    if (style.valueColor) {
        css.add("#time .value", `color:${style.valueColor}`);
    }

    if (style.valueSize) {
        css.add("#time .value", `font-size:${style.valueSize}px`);
    }

    if (style.valueFont && style.valueFont != style.font) {
        css.add("#time .value", `font-family:'${cssEscape(style.valueFont.replace(/:.+$/, ""))}'`);
        if (style.valueFont.includes(":wght@")) {
            css.add("#time .value", `font-weight:${/:wght@(\d+)$/.exec(style.valueFont)?.[1]}`);
        } else {
            css.add("#time .value", `font-weight:400`);
        }
    }

    if (style.valueOffsetX || style.valueOffsetY) {
        css.add("#time .value", `transform:translate(${style.valueOffsetX}px,${style.valueOffsetY}px)`);
    }

    return css.toString();
}

function validate<K extends keyof ITimerStyle>(obj: Partial<ITimerStyle>, key: K, value: ITimerStyle[K]): value is ITimerStyle[K] {
    switch (key) {
        case "separator":
        case "sepTime":
        case "prefix":
        case "suffix":
            return typeof value === "string";
        case "unitPlacement":
            return value === "after" || value === "under";
        case "dir":
            return value === "h" || value === "v";
        case "background":
        case "color":
        case "unitColor":
        case "valueColor":
            return typeof value === "string" && /^(?:#[0-9a-fA-F]{6})(?:[0-9a-fA-F]{2})$/.test(value);
        case "borderRadius":
        case "paddingTop":
        case "paddingBottom":
        case "paddingSide":
        case "width":
        case "gap":
        case "fontSize":
        case "unitSize":
        case "valueSize":
        case "unitOffsetX":
        case "unitOffsetY":
        case "valueOffsetX":
        case "valueOffsetY":
            if (typeof value === "number") {
                return true;
            }
            if (typeof value === "string" && /^-?\d+$/.test(value)) {
                obj[key] = parseInt(value) as ITimerStyle[K];
                return true;
            }
            return false;
        case "halign":
            case "valign":
            return value === "start" || value === "center" || value === "end";
        case "font":
        case "unitFont":
        case "valueFont":
            return typeof value === "string" && (value === "" || fontManager.loadFont(value));
        case "unit":
            return value === "long" || value === "short" || value === "single" || value === "none";
        case "unitCase":
            return value === "upper" || value === "lower" || value === "title";
    }
    return false;
}

export function styleApplyDefault(config: Partial<ITimerStyle>, base: ITimerStyle): void {
    for (const key of Object.keys(defaultStyle) as (keyof ITimerStyle)[]) {
        const currValue = config[key];
        if (currValue === undefined || !validate(config, key, currValue)) {
            (config as Record<typeof key, ITimerStyle[typeof key]>)[key] = base[key];
        }
    }
}
