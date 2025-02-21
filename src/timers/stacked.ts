import { defaultFormat } from "../format";
import { defaultStyle } from "../style";
import type { IBaseTimer } from "./base";

export const stackedH: IBaseTimer = {
    ...defaultStyle,
    ...defaultFormat,
    base: "stackedH",
    baseName: "Stacked-H",
    separator: "",
    sepTime: "",
    prefix: "",
    gap: 24,
    width: -1,
    unitPlacement: "under",
    unit: "long",
    unitCase: "lower",
    valign: "center",
    halign: "center",
    zeroPad: true,
    valueSize: 72,
    valueOffsetY: -8,
    unitOffsetY: 32,
    fontSize: 24,
    unitColor: "#ffffff80",
    unitFont: "Sankofa Display",
};

export const stackedV: IBaseTimer = {
    ...stackedH,
    base: "stackedV",
    baseName: "Stacked-V",
    gap: 4,
    dir: "v",
    borderRadius: 64,
    width: 128,
    paddingTop: 16,
    paddingBottom: 24,
};
