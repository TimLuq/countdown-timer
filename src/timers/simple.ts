import { defaultFormat } from "../format";
import { defaultStyle } from "../style";
import type { IBaseTimer } from "./base";

export const simple: IBaseTimer = {
    ...defaultStyle,
    ...defaultFormat,
    base: "simple",
    baseName: "Simple",
    separator: " ",
    sepTime: " ",
    prefix: "",
    gap: 8,
    width: -1,
    unitPlacement: "after",
    unit: "short",
    unitCase: "upper",
    valign: "center",
    halign: "center",
    zeroPad: true,
};
