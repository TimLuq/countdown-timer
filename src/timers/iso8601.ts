import { defaultFormat } from "../format";
import { defaultStyle } from "../style";
import type { IBaseTimer } from "./base";

export const iso8601: IBaseTimer = {
    ...defaultStyle,
    ...defaultFormat,
    base: "iso8601",
    baseName: "ISO 8601",
    separator: "",
    sepTime: "T",
    prefix: "P",
    gap: 0,
    width: -1,
    unitPlacement: "after",
    unit: "single",
    unitCase: "upper",
    valign: "center",
    halign: "center",
    zeroPad: true,
    forceTimeSeparator: true,
};
