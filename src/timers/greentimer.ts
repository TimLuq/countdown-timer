import { defaultFormat } from "../format";
import { defaultStyle } from "../style";
import type { IBaseTimer } from "./base";

export const greentimer: IBaseTimer = {
    ...defaultStyle,
    ...defaultFormat,
    base: "greentimer",
    baseName: "Green Timer",
    separator: ":",
    sepTime: ":",
    forceMinutes: true,
    forceSeconds: true,
    unit: "none",
    color: "#00cc00",
    zeroPad: true,
};
