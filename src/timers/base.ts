import type { IFormatOptions } from "../format";
import type { ITimerStyle } from "../style";

export interface IBaseTimer extends IFormatOptions, ITimerStyle {
    base: string;
    baseName: string;
}
