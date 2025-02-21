import type { IAppConfig } from "./index";
import { emmet, emmetSlots } from "emmet-elem";
import type { IBaseTimer } from "./timers/base";
import type { FontManager } from "./fontmanager";

// -- basic settings
const deadlineElement: HTMLInputElement = emmet`input#ctrl_deadline[type=datetime-local]`;
const baseDesignElement: HTMLSelectElement = emmet`select#ctrl_base`;
const fontSelectElement: HTMLSelectElement = emmet`select#ctrl_font`;
const fontSizeElement: HTMLInputElement = emmet`input#ctrl_fontsize[type=number][min=8][max=512]`;
const fontSizeSliderElement: HTMLInputElement = emmet`input#ctrl_fontsize_slider[type=range][min=8][max=512]`;
const colorRgbElement: HTMLInputElement = emmet`input#ctrl_color_rgb[type=color][pattern="#[0-9a-fA-F]{6}"][title="Hexadecimal color code"]`;
const colorAElement: HTMLInputElement = emmet`input#ctrl_color_a[type=range][min=0][max=255][pattern="\\d{1,3}"][title="Text opacity"]`;
const fieldsetBasic: HTMLFieldSetElement = emmet`fieldset>legend{Basic Settings}+div>label[for=ctrl_base]{Preset}+${baseDesignElement}^div>label[for=ctrl_deadline]{Deadline}+${deadlineElement}^div>label[for=ctrl_font]{Font}+${fontSelectElement}^div>label[for=ctrl_fontsize]{Font Size}+div>${fontSizeElement}+${fontSizeSliderElement}^^div>label[for=ctrl_color_rgb]{Text Color}+div>${colorRgbElement}+${colorAElement}`;

const cleanButton: HTMLButtonElement = emmet`button.clean[title="clean up custom properties"]>span{🧹}`;

// -- background settings
const bgRgbElement: HTMLInputElement = emmet`input#ctrl_bg_rgb[type=color][pattern="#[0-9a-fA-F]{6}"][title="Hexadecimal color code"]`;
const bgAElement: HTMLInputElement = emmet`input#ctrl_bg_a[type=range][min=0][max=255][pattern="\\d{1,3}"][title="Background opacity"]`;
const bgRadiusElement: HTMLInputElement = emmet`input#ctrl_bg_radius[type=number][min=0][max=512][step=1]`;
const bgRadiusSliderElement: HTMLInputElement = emmet`input#ctrl_bg_radius_slider[type=range][min=0][max=512][step=1]`;
const paddingTopElement: HTMLInputElement = emmet`input#ctrl_padding_top[type=number][min=0][max=512][step=1]`;
const paddingTopSliderElement: HTMLInputElement = emmet`input#ctrl_padding_top_slider[type=range][min=0][max=512][step=1]`;
const paddingBottomElement: HTMLInputElement = emmet`input#ctrl_padding_bottom[type=number][min=0][max=512][step=1]`;
const paddingBottomSliderElement: HTMLInputElement = emmet`input#ctrl_padding_bottom_slider[type=range][min=0][max=512][step=1]`;
const paddingSideElement: HTMLInputElement = emmet`input#ctrl_padding_side[type=number][min=0][max=512][step=1]`;
const paddingSideSliderElement: HTMLInputElement = emmet`input#ctrl_padding_side_slider[type=range][min=0][max=512][step=1]`;
const widthElement: HTMLInputElement = emmet`input#ctrl_width[type=number][min=-1][max=2048][step=1]`;
const widthSliderElement: HTMLInputElement = emmet`input#ctrl_width_slider[type=range][min=-1][max=2048][step=1]`;
const fieldsetBackground: HTMLFieldSetElement = emmet`fieldset>legend{Background}+${cleanButton.cloneNode(true)}+div>label[for=ctrl_bg_radius]{Border Radius}+div>${bgRadiusElement}+${bgRadiusSliderElement}^^div>label[for=ctrl_padding_top]{Padding Top}+div>${paddingTopElement}+${paddingTopSliderElement}^^div>label[for=ctrl_padding_bottom]{Padding Bottom}+div>${paddingBottomElement}+${paddingBottomSliderElement}^^div>label[for=ctrl_padding_side]{Padding Side}+div>${paddingSideElement}+${paddingSideSliderElement}^^div>label[for=ctrl_bg_rgb]{Background Color}+div>${bgRgbElement}+${bgAElement}^^div>label[for=ctrl_width]{Width}+div>${widthElement}+${widthSliderElement}`;

// -- layout settings
const prefixElement: HTMLInputElement = emmet`input#ctrl_prefix[type=text]`;
const sepTimeElement: HTMLInputElement = emmet`input#ctrl_septime[type=text]`;
const separatorElement: HTMLInputElement = emmet`input#ctrl_separator[type=text]`;
const suffixElement: HTMLInputElement = emmet`input#ctrl_suffix[type=text]`;
const unitPlacementElement: HTMLSelectElement = emmet`select#ctrl_unitplacement>option[value=after]{After}+option[value=under]{Under}`;
const dirElement: HTMLSelectElement = emmet`select#ctrl_dir>option[value=h]{Horizontal}+option[value=v]{Vertical}`;
const gapElement: HTMLInputElement = emmet`input#ctrl_gap[type=number][min=0][max=512][step=1]`;
const gapSliderElement: HTMLInputElement = emmet`input#ctrl_gap_slider[type=range][min=0][max=512][step=1]`;
const fieldsetLayout: HTMLFieldSetElement = emmet`fieldset>legend{Layout}+${cleanButton.cloneNode(true)}+div>label[for=ctrl_prefix]{Prefix}+${prefixElement}^div>label[for=ctrl_septime]{Time Separator}+${sepTimeElement}^div>label[for=ctrl_separator]{Component Separator}+${separatorElement}^div>label[for=ctrl_suffix]{Suffix}+${suffixElement}^div>label[for=ctrl_unitplacement]{Unit Placement}+${unitPlacementElement}^div>label[for=ctrl_dir]{Direction}+${dirElement}^div>label[for=ctrl_gap]{Gap}+div>${gapElement}+${gapSliderElement}`;

// -- unit settings
const unitSizeElement: HTMLInputElement = emmet`input#ctrl_unitsize[type=number][min=8][max=512]`;
const unitSizeSliderElement: HTMLInputElement = emmet`input#ctrl_unitsize_slider[type=range][min=8][max=512]`;
const unitOffsetXElement: HTMLInputElement = emmet`input#ctrl_unitoffsetx[type=number][min=-512][max=512][step=1]`;
const unitOffsetXSliderElement: HTMLInputElement = emmet`input#ctrl_unitoffsetx_slider[type=range][min=-512][max=512][step=1]`;
const unitOffsetYElement: HTMLInputElement = emmet`input#ctrl_unitoffsety[type=number][min=-512][max=512][step=1]`;
const unitOffsetYSliderElement: HTMLInputElement = emmet`input#ctrl_unitoffsety_slider[type=range][min=-512][max=512][step=1]`;
const unitFontElement: HTMLSelectElement = emmet`select#ctrl_unitfont`;
const unitColorRgbElement: HTMLInputElement = emmet`input#ctrl_unitcolor_rgb[type=color][pattern="#[0-9a-fA-F]{6}"][title="Hexadecimal color code"]`;
const unitColorAElement: HTMLInputElement = emmet`input#ctrl_unitcolor_a[type=range][min=0][max=255][pattern="\\d{1,3}"][title="Text opacity"]`;
const unitElement: HTMLSelectElement = emmet`select#ctrl_unit>option[value=none]{None}+option[value=single]{Single}+option[value=short]{Short}+option[value=long]{Long}`;
const unitCaseElement: HTMLSelectElement = emmet`select#ctrl_unitcase>option[value=upper]{UPPER}+option[value=lower]{lower}+option[value=title]{Title}`;
const fieldsetUnitOverrides: HTMLFieldSetElement = emmet`fieldset>legend{Unit Overrides}+${cleanButton.cloneNode(true)}+div>label[for=ctrl_unitoffsetx]{Offset X}+div>${unitOffsetXElement}+${unitOffsetXSliderElement}^^div>label[for=ctrl_unitoffsety]{Offset Y}+div>${unitOffsetYElement}+${unitOffsetYSliderElement}^^div>label[for=ctrl_unitfont]{Font}+${unitFontElement}^div>label[for=ctrl_unitsize]{Size}+div>${unitSizeElement}+${unitSizeSliderElement}^^div>label[for=ctrl_unitcolor_rgb]{Text Color}+div>${unitColorRgbElement}+${unitColorAElement}^^div>label[for=ctrl_unit]{Unit}+${unitElement}^div>label[for=ctrl_unitcase]{Case}+${unitCaseElement}`;

// -- value settings
const valueSizeElement: HTMLInputElement = emmet`input#ctrl_valuesize[type=number][min=8][max=512]`;
const valueSizeSliderElement: HTMLInputElement = emmet`input#ctrl_valuesize_slider[type=range][min=8][max=512]`;
const valueOffsetXElement: HTMLInputElement = emmet`input#ctrl_valueoffsetx[type=number][min=-512][max=512][step=1]`;
const valueOffsetXSliderElement: HTMLInputElement = emmet`input#ctrl_valueoffsetx_slider[type=range][min=-512][max=512][step=1]`;
const valueOffsetYElement: HTMLInputElement = emmet`input#ctrl_valueoffsety[type=number][min=-512][max=512][step=1]`;
const valueOffsetYSliderElement: HTMLInputElement = emmet`input#ctrl_valueoffsety_slider[type=range][min=-512][max=512][step=1]`;
const valueFontElement: HTMLSelectElement = emmet`select#ctrl_valuefont`;
const valueColorRgbElement: HTMLInputElement = emmet`input#ctrl_valuecolor_rgb[type=color][pattern="#[0-9a-fA-F]{6}"][title="Hexadecimal color code"]`;
const valueColorAElement: HTMLInputElement = emmet`input#ctrl_valuecolor_a[type=range][min=0][max=255][pattern="\\d{1,3}"][title="Text opacity"]`;
const fieldsetValueOverrides: HTMLFieldSetElement = emmet`fieldset>legend{Value Overrides}+${cleanButton.cloneNode(true)}+div>label[for=ctrl_valueoffsetx]{Offset X}+div>${valueOffsetXElement}+${valueOffsetXSliderElement}^^div>label[for=ctrl_valueoffsety]{Offset Y}+div>${valueOffsetYElement}+${valueOffsetYSliderElement}^^div>label[for=ctrl_valuefont]{Font}+${valueFontElement}^div>label[for=ctrl_valuesize]{Size}+div>${valueSizeElement}+${valueSizeSliderElement}^^div>label[for=ctrl_valuecolor_rgb]{Text Color}+div>${valueColorRgbElement}+${valueColorAElement}`;

// -- about
const aboutAuthorElement: HTMLAnchorElement = emmet`h4{Author}+a.gh[target=_blank][href="https://github.com/TimLuq"]>span{TimLuq}`;
const aboutRepoElement: HTMLAnchorElement = emmet`h4{Repository}+a.gh[target=_blank][href="https://github.com/TimLuq/countdown-timer"]>span{TimLuq/countdown-timer}`;
const aboutLicenseElement: HTMLAnchorElement = emmet`h4{License}+a[target=_blank][href="https://spdx.org/licenses/AGPL-3.0-or-later.html"]>span{AGPL-3.0-or-later}`;
const aboutDescriptionElement: HTMLParagraphElement = emmet`h4{Description}+p{A countdown (or count-up) timer, primarily designed for use in an OBS browser source.}+p{If you use this for streaming, please consider giving credit if anyone asks what timer you're using. This project is free and open-source software, licensed under AGPL-3.0-or-later.}`;
const fieldsetAbout: HTMLFieldSetElement = emmet`fieldset>legend{About}+div>${aboutAuthorElement}^div>${aboutRepoElement}^div>${aboutLicenseElement}^div>${aboutDescriptionElement}`;


const controlsElement = emmet`div#controls>${fieldsetBasic}+${fieldsetBackground}+${fieldsetLayout}+${fieldsetUnitOverrides}+${fieldsetValueOverrides}+${fieldsetAbout}`;
const baseOptions: Record<string, HTMLOptionElement> = {};

let currentBase: IBaseTimer | undefined = undefined;

export function renderControls(config: IAppConfig, bases: Record<string, IBaseTimer>, fontManager: FontManager): void {
    const base = bases[config.base];
    currentBase = base;

    // -- basic settings
    deadlineElement.valueAsNumber = config.deadline * 1000;
    if (!baseDesignElement.firstChild) {
        for (const baseItem of Object.keys(bases)) {
            const item: HTMLOptionElement = emmet`option`;
            item.value = baseItem;
            item.textContent = bases[baseItem].baseName;
            baseOptions[baseItem] = item;
            baseDesignElement.appendChild(item);
        }
    }
    baseDesignElement.value = config.base;
    if (!controlsElement.parentNode) {
        renderFontList(fontManager);
    }
    fontSelectElement.value = config.font;
    fontSizeElement.valueAsNumber = config.fontSize;
    fontSizeElement.placeholder = base.fontSize.toString();
    fontSizeSliderElement.valueAsNumber = config.fontSize;
    {
        const [rgb, a] = parseColor(config.color);
        colorRgbElement.value = rgb;
        colorAElement.valueAsNumber = a;
    }

    // -- background settings
    {
        const [rgb, a] = parseColor(config.background);
        bgRgbElement.value = rgb;
        bgAElement.valueAsNumber = a;
    }
    bgRadiusElement.valueAsNumber = config.borderRadius;
    bgRadiusSliderElement.valueAsNumber = config.borderRadius;
    paddingTopElement.valueAsNumber = config.paddingTop;
    paddingTopSliderElement.valueAsNumber = config.paddingTop;
    paddingBottomElement.valueAsNumber = config.paddingBottom;
    paddingBottomSliderElement.valueAsNumber = config.paddingBottom;
    paddingSideElement.valueAsNumber = config.paddingSide;
    paddingSideSliderElement.valueAsNumber = config.paddingSide;
    widthElement.valueAsNumber = config.width;
    widthSliderElement.valueAsNumber = config.width;

    // -- layout settings
    prefixElement.value = config.prefix;
    sepTimeElement.value = config.sepTime;
    separatorElement.value = config.separator;
    suffixElement.value = config.suffix;
    unitPlacementElement.value = config.unitPlacement;
    dirElement.value = config.dir;
    gapElement.valueAsNumber = config.gap;
    gapSliderElement.valueAsNumber = config.gap;

    // -- unit settings
    unitSizeElement.valueAsNumber = config.unitSize || config.fontSize;
    unitSizeSliderElement.valueAsNumber = config.unitSize || config.fontSize;
    unitOffsetXElement.valueAsNumber = config.unitOffsetX;
    unitOffsetXSliderElement.valueAsNumber = config.unitOffsetX;
    unitOffsetYElement.valueAsNumber = config.unitOffsetY;
    unitOffsetYSliderElement.valueAsNumber = config.unitOffsetY;
    unitFontElement.value = config.unitFont || config.font;
    unitElement.value = config.unit;
    unitCaseElement.value = config.unitCase;
    {
        const [rgb, a] = parseColor(config.unitColor || config.color);
        unitColorRgbElement.value = rgb;
        unitColorAElement.valueAsNumber = a;
    }

    // -- value settings
    valueSizeElement.valueAsNumber = config.valueSize || config.fontSize;
    valueSizeSliderElement.valueAsNumber = config.valueSize || config.fontSize;
    valueOffsetXElement.valueAsNumber = config.valueOffsetX;
    valueOffsetXSliderElement.valueAsNumber = config.valueOffsetX;
    valueOffsetYElement.valueAsNumber = config.valueOffsetY;
    valueOffsetYSliderElement.valueAsNumber = config.valueOffsetY;
    valueFontElement.value = config.valueFont || config.font;
    {
        const [rgb, a] = parseColor(config.valueColor || config.color);
        valueColorRgbElement.value = rgb;
        valueColorAElement.valueAsNumber = a;
    }
    
    // -- attach controls
    if (!controlsElement.parentNode) {
        attachControls();
    }
}

function parseColor(color: string): [string, number] {
    const hex = /^(#[0-9a-fA-F]{6})([0-9a-fA-F]{2})?$/.exec(color);
    if (hex) {
        const a = hex[2] ? parseInt(hex[2], 16) : 255;
        return [hex[1], a];
    }
    const rgba = /^rgba\((\d+),(\d+),(\d+),(\d+(\.\d+)?)\)$/.exec(color);
    if (rgba) {
        const a = Math.round(parseFloat(rgba[4]) * 255);
        return [`#${(+rgba[1]).toString(16).padStart(2, "0")}${(+rgba[2]).toString(16).padStart(2, "0")}${(+rgba[3]).toString(16).padStart(2, "0")}`, a];
    }
    const rgb = /^rgb\((\d+),(\d+),(\d+)\)$/.exec(color);
    if (rgb) {
        return [`#${(+rgb[1]).toString(16).padStart(2, "0")}${(+rgb[2]).toString(16).padStart(2, "0")}${(+rgb[3]).toString(16).padStart(2, "0")}`, 255];
    }
    return ["#000000", 255];
}

function renderFontList(fontManager: FontManager): void {
    for (const font of fontManager.availableFonts) {
        const group: HTMLOptGroupElement = emmet`optgroup`;
        group.label = font.font;
        for (const version of Object.keys(font.versions)) {
            const fullFont = font.font + version;
            fontManager.loadFont(fullFont);
            const item: HTMLOptionElement = emmet`option`;
            item.value = fullFont;
            item.textContent = font.font + " " + font.versions[version];
            item.style.fontFamily = font.font;
            item.style.fontWeight = /:wght@(\d+)/.exec(version)?.[1] ?? "400";
            group.appendChild(item);
        }
        unitFontElement.appendChild(group.cloneNode(true));
        valueFontElement.appendChild(group.cloneNode(true));
        fontSelectElement.appendChild(group);
    }
}

function attachControls(): void {
    document.head.appendChild(emmet`link[rel=stylesheet][href=controls.css]`);
    document.body.appendChild(controlsElement);

    // -- basic settings
    deadlineElement.addEventListener("input", handleDeadlineChange);
    baseDesignElement.addEventListener("change", handleBaseChange);
    fontSelectElement.addEventListener("change", handleFontChange);
    fontSizeElement.addEventListener("change", handleFontSizeChange);
    fontSizeSliderElement.addEventListener("input", debounce(() => {
        fontSizeElement.valueAsNumber = fontSizeSliderElement.valueAsNumber;
        handleFontSizeChange();
    }));
    colorRgbElement.addEventListener("input", debounce(handleColorChange));
    colorAElement.addEventListener("input", debounce(handleColorChange));
    fieldsetBasic.querySelector(".clean")?.addEventListener("click", () => {
        const qparams = new URLSearchParams(window.location.hash.substring(1));
        qparams.delete("font");
        qparams.delete("fontSize");
        qparams.delete("color");
        window.location.hash = "#" + qparams.toString();
    });

    // -- background settings
    bgRgbElement.addEventListener("input", debounce(handleBgChange));
    bgAElement.addEventListener("input", debounce(handleBgChange));
    bgRadiusElement.addEventListener("change", handleRadiusChange);
    bgRadiusSliderElement.addEventListener("input", debounce(() => {
        bgRadiusElement.valueAsNumber = bgRadiusSliderElement.valueAsNumber;
        handleRadiusChange();
    }));
    paddingTopElement.addEventListener("change", handlePaddingChange);
    paddingTopSliderElement.addEventListener("input", debounce(() => {
        paddingTopElement.valueAsNumber = paddingTopSliderElement.valueAsNumber;
        handlePaddingChange();
    }));
    paddingBottomElement.addEventListener("change", handlePaddingChange);
    paddingBottomSliderElement.addEventListener("input", debounce(() => {
        paddingBottomElement.valueAsNumber = paddingBottomSliderElement.valueAsNumber;
        handlePaddingChange();
    }));
    paddingSideElement.addEventListener("change", handlePaddingChange);
    paddingSideSliderElement.addEventListener("input", debounce(() => {
        paddingSideElement.valueAsNumber = paddingSideSliderElement.valueAsNumber;
        handlePaddingChange();
    }));
    widthElement.addEventListener("change", handleWidthChange);
    widthSliderElement.addEventListener("input", debounce(() => {
        widthElement.valueAsNumber = widthSliderElement.valueAsNumber;
        handleWidthChange();
    }));
    fieldsetBackground.querySelector(".clean")?.addEventListener("click", () => {
        const qparams = new URLSearchParams(window.location.hash.substring(1));
        qparams.delete("background");
        qparams.delete("borderRadius");
        qparams.delete("paddingTop");
        qparams.delete("paddingBottom");
        qparams.delete("paddingSide");
        qparams.delete("width");
        window.location.hash = "#" + qparams.toString();
    });

    // -- layout settings
    prefixElement.addEventListener("change", handlePrefixChange);
    sepTimeElement.addEventListener("change", handleSepTimeChange);
    separatorElement.addEventListener("change", handleSeparatorChange);
    suffixElement.addEventListener("change", handleSuffixChange);
    unitPlacementElement.addEventListener("change", handleUnitPlacementChange);
    dirElement.addEventListener("change", handleDirChange);
    gapElement.addEventListener("change", handleGapChange);
    gapSliderElement.addEventListener("input", debounce(() => {
        gapElement.valueAsNumber = gapSliderElement.valueAsNumber;
        handleGapChange();
    }));
    fieldsetLayout.querySelector(".clean")?.addEventListener("click", () => {
        const qparams = new URLSearchParams(window.location.hash.substring(1));
        qparams.delete("prefix");
        qparams.delete("sepTime");
        qparams.delete("separator");
        qparams.delete("suffix");
        qparams.delete("unitPlacement");
        qparams.delete("dir");
        qparams.delete("gap");
        window.location.hash = "#" + qparams.toString();
    });

    // -- unit settings
    unitSizeElement.addEventListener("change", handleUnitSizeChange);
    unitSizeSliderElement.addEventListener("input", debounce(() => {
        unitSizeElement.valueAsNumber = unitSizeSliderElement.valueAsNumber;
        handleUnitSizeChange();
    }));
    unitOffsetXElement.addEventListener("change", handleUnitOffsetXChange);
    unitOffsetXSliderElement.addEventListener("input", debounce(() => {
        unitOffsetXElement.valueAsNumber = unitOffsetXSliderElement.valueAsNumber;
        handleUnitOffsetXChange();
    }));
    unitOffsetYElement.addEventListener("change", handleUnitOffsetYChange);
    unitOffsetYSliderElement.addEventListener("input", debounce(() => {
        unitOffsetYElement.valueAsNumber = unitOffsetYSliderElement.valueAsNumber;
        handleUnitOffsetYChange();
    }));
    unitFontElement.addEventListener("change", handleUnitFontChange);
    unitElement.addEventListener("change", handleUnitChange);
    unitCaseElement.addEventListener("change", handleUnitCaseChange);
    unitColorRgbElement.addEventListener("input", debounce(handleUnitColorChange));
    unitColorAElement.addEventListener("input", debounce(handleUnitColorChange));
    fieldsetUnitOverrides.querySelector(".clean")?.addEventListener("click", () => {
        const qparams = new URLSearchParams(window.location.hash.substring(1));
        qparams.delete("unitSize");
        qparams.delete("unitOffsetX");
        qparams.delete("unitOffsetY");
        qparams.delete("unitFont");
        qparams.delete("unit");
        qparams.delete("unitCase");
        window.location.hash = "#" + qparams.toString();
    });

    // -- value settings
    valueSizeElement.addEventListener("change", handleValueSizeChange);
    valueSizeSliderElement.addEventListener("input", debounce(() => {
        valueSizeElement.valueAsNumber = valueSizeSliderElement.valueAsNumber;
        handleValueSizeChange();
    }));
    valueOffsetXElement.addEventListener("change", handleValueOffsetXChange);
    valueOffsetXSliderElement.addEventListener("input", debounce(() => {
        valueOffsetXElement.valueAsNumber = valueOffsetXSliderElement.valueAsNumber;
        handleValueOffsetXChange();
    }));
    valueOffsetYElement.addEventListener("change", handleValueOffsetYChange);
    valueOffsetYSliderElement.addEventListener("input", debounce(() => {
        valueOffsetYElement.valueAsNumber = valueOffsetYSliderElement.valueAsNumber;
        handleValueOffsetYChange();
    }));
    valueFontElement.addEventListener("change", handleValueFontChange);
    valueColorRgbElement.addEventListener("input", debounce(handleValueColorChange));
    valueColorAElement.addEventListener("input", debounce(handleValueColorChange));
    fieldsetValueOverrides.querySelector(".clean")?.addEventListener("click", () => {
        const qparams = new URLSearchParams(window.location.hash.substring(1));
        qparams.delete("valueSize");
        qparams.delete("valueOffsetX");
        qparams.delete("valueOffsetY");
        qparams.delete("valueFont");
        qparams.delete("valueColor");
        window.location.hash = "#" + qparams.toString();
    });
}

const debouncing = new Map<(...args: any[]) => void, unknown>();
function debounce<T extends (...args: any[]) => void>(fn: T, delay = 64): T {
    return function(this: ThisParameterType<T>, ...args: Parameters<T>): void {
        const timer = debouncing.get(fn);
        if (timer) {
            return;
        }
        debouncing.set(fn, setTimeout(() => {
            debouncing.delete(fn);
            fn.apply(this, args);
        }, delay));
    } as T;
}

function handleDeadlineChange(): void {
    const deadline = deadlineElement.valueAsNumber / 1000;
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    qparams.set("deadline", deadline.toString());
    window.location.hash = "#" + qparams.toString();
}

function handleBaseChange(): void {
    const base = baseDesignElement.value;
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    qparams.set("base", base);
    window.location.hash = "#" + qparams.toString();
}

function handleFontChange(): void {
    const font = fontSelectElement.value;
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    if (font === "" || font === currentBase!.font) {
        qparams.delete("font");
    } else {
        qparams.set("font", font);
    }
    window.location.hash = "#" + qparams.toString();
}

function handleFontSizeChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const fontSize = fontSizeElement.valueAsNumber;
    if (isNaN(fontSize) || fontSize === 0 || currentBase!.fontSize === fontSize) {
        qparams.delete("fontSize");
    } else {
        qparams.set("fontSize", fontSize.toString());
    }
    window.location.hash = "#" + qparams.toString();
}

function handleColorChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const rgbColor = colorRgbElement.value;
    if (!/^#[0-9a-fA-F]{6}$/.test(rgbColor)) {
        qparams.delete("color");
    } else {
        const color = rgbColor + colorAElement.valueAsNumber.toString(16).padStart(2, "0").substring(0, 2);
        if (color === currentBase!.color) {
            qparams.delete("color");
        } else {
            qparams.set("color", color);
        }
    }
    window.location.hash = "#" + qparams.toString();
}

function handleBgChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const rgbColor = bgRgbElement.value;
    if (!/^#[0-9a-fA-F]{6}$/.test(rgbColor)) {
        qparams.delete("background");
    } else {
        const color = rgbColor + bgAElement.valueAsNumber.toString(16).padStart(2, "0").substring(0, 2);
        if (color === currentBase!.background) {
            qparams.delete("background");
        } else {
            qparams.set("background", color);
        }
    }
    window.location.hash = "#" + qparams.toString();
}

function handleRadiusChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const radius = bgRadiusElement.valueAsNumber;
    if (isNaN(radius) || currentBase!.borderRadius === radius) {
        qparams.delete("borderRadius");
    } else {
        qparams.set("borderRadius", radius.toString());
    }
    window.location.hash = "#" + qparams.toString();
}

function handlePaddingChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const top = paddingTopElement.valueAsNumber;
    if (isNaN(top) || currentBase!.paddingTop === top) {
        qparams.delete("paddingTop");
    } else {
        qparams.set("paddingTop", top.toString());
    }
    const bottom = paddingBottomElement.valueAsNumber;
    if (isNaN(bottom) || currentBase!.paddingBottom === bottom) {
        qparams.delete("paddingBottom");
    } else {
        qparams.set("paddingBottom", bottom.toString());
    }
    const side = paddingSideElement.valueAsNumber;
    if (isNaN(side) || currentBase!.paddingSide === side) {
        qparams.delete("paddingSide");
    } else {
        qparams.set("paddingSide", side.toString());
    }
    window.location.hash = "#" + qparams.toString();
}

function handleWidthChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const width = widthElement.valueAsNumber;
    if (isNaN(width) || currentBase!.width === width) {
        qparams.delete("width");
    } else {
        qparams.set("width", width.toString());
    }
    window.location.hash = "#" + qparams.toString();
}

function handleUnitSizeChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const size = unitSizeElement.valueAsNumber;
    if (isNaN(size) || (currentBase!.unitSize || currentBase!.fontSize) === size) {
        qparams.delete("unitSize");
    } else {
        qparams.set("unitSize", size.toString());
    }
    window.location.hash = "#" + qparams.toString();
}

function handleUnitOffsetXChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const offsetX = unitOffsetXElement.valueAsNumber;
    if (isNaN(offsetX) || currentBase!.unitOffsetX === offsetX) {
        qparams.delete("unitOffsetX");
    } else {
        qparams.set("unitOffsetX", offsetX.toString());
    }
    window.location.hash = "#" + qparams.toString();
}

function handleUnitOffsetYChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const offsetY = unitOffsetYElement.valueAsNumber;
    if (isNaN(offsetY) || currentBase!.unitOffsetY === offsetY) {
        qparams.delete("unitOffsetY");
    } else {
        qparams.set("unitOffsetY", offsetY.toString());
    }
    window.location.hash = "#" + qparams.toString();
}

function handleUnitFontChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const font = unitFontElement.value;
    if (font === "" || font === fontSelectElement.value) {
        qparams.delete("unitFont");
    } else {
        qparams.set("unitFont", font);
    }
    window.location.hash = "#" + qparams.toString();
}

function handleUnitChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const unit = unitElement.value;
    if (unit != currentBase!.unit) {
        qparams.set("unit", unit);
    } else {
        qparams.delete("unit");
    }
    window.location.hash = "#" + qparams.toString();
}

function handleUnitCaseChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const unitCase = unitCaseElement.value;
    if (unitCase != currentBase!.unitCase) {
        qparams.set("unitCase", unitCase);
    } else {
        qparams.delete("unitCase");
    }
    window.location.hash = "#" + qparams.toString();
}

function handleUnitColorChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const rgbColor = unitColorRgbElement.value;
    if (!/^#[0-9a-fA-F]{6}$/.test(rgbColor)) {
        qparams.delete("unitColor");
    } else {
        const color = rgbColor + unitColorAElement.valueAsNumber.toString(16).padStart(2, "0").substring(0, 2);
        if (color === currentBase!.unitColor) {
            qparams.delete("unitColor");
        } else {
            qparams.set("unitColor", color);
        }
    }
    window.location.hash = "#" + qparams.toString();
}

function handlePrefixChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const prefix = prefixElement.value;
    if (prefix != currentBase!.prefix) {
        qparams.set("prefix", prefix);
    } else {
        qparams.delete("prefix");
    }
    window.location.hash = "#" + qparams.toString();
}

function handleSepTimeChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const sepTime = sepTimeElement.value;
    if (sepTime != currentBase!.sepTime) {
        qparams.set("sepTime", sepTime);
    } else {
        qparams.delete("sepTime");
    }
    window.location.hash = "#" + qparams.toString();
}

function handleSeparatorChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const separator = separatorElement.value;
    if (separator != currentBase!.separator) {
        qparams.set("separator", separator);
    } else {
        qparams.delete("separator");
    }
    window.location.hash = "#" + qparams.toString();
}

function handleSuffixChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const suffix = suffixElement.value;
    if (suffix != currentBase!.suffix) {
        qparams.set("suffix", suffix);
    } else {
        qparams.delete("suffix");
    }
    window.location.hash = "#" + qparams.toString();
}

function handleUnitPlacementChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const unitPlacement = unitPlacementElement.value;
    if (unitPlacement != currentBase!.unitPlacement) {
        qparams.set("unitPlacement", unitPlacement);
    } else {
        qparams.delete("unitPlacement");
    }
    window.location.hash = "#" + qparams.toString();
}

function handleDirChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const dir = dirElement.value;
    if (dir != currentBase!.dir) {
        qparams.set("dir", dir);
    } else {
        qparams.delete("dir");
    }
    window.location.hash = "#" + qparams.toString();
}

function handleGapChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const gap = gapElement.valueAsNumber;
    if (isNaN(gap) || currentBase!.gap === gap) {
        qparams.delete("gap");
    } else {
        qparams.set("gap", gap.toString());
    }
    window.location.hash = "#" + qparams.toString();
}

function handleValueSizeChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const size = valueSizeElement.valueAsNumber;
    if (isNaN(size) || (currentBase!.valueSize || currentBase!.fontSize) === size) {
        qparams.delete("valueSize");
    } else {
        qparams.set("valueSize", size.toString());
    }
    window.location.hash = "#" + qparams.toString();
}

function handleValueOffsetXChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const offsetX = valueOffsetXElement.valueAsNumber;
    if (isNaN(offsetX) || currentBase!.valueOffsetX === offsetX) {
        qparams.delete("valueOffsetX");
    } else {
        qparams.set("valueOffsetX", offsetX.toString());
    }
    window.location.hash = "#" + qparams.toString();
}

function handleValueOffsetYChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const offsetY = valueOffsetYElement.valueAsNumber;
    if (isNaN(offsetY) || currentBase!.valueOffsetY === offsetY) {
        qparams.delete("valueOffsetY");
    } else {
        qparams.set("valueOffsetY", offsetY.toString());
    }
    window.location.hash = "#" + qparams.toString();
}

function handleValueFontChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const font = valueFontElement.value;
    if (font === "" || font === fontSelectElement.value) {
        qparams.delete("valueFont");
    } else {
        qparams.set("valueFont", font);
    }
    window.location.hash = "#" + qparams.toString();
}

function handleValueColorChange(): void {
    const qparams = new URLSearchParams(window.location.hash.substring(1));
    const rgbColor = valueColorRgbElement.value;
    if (!/^#[0-9a-fA-F]{6}$/.test(rgbColor)) {
        qparams.delete("valueColor");
    } else {
        const color = rgbColor + valueColorAElement.valueAsNumber.toString(16).padStart(2, "0").substring(0, 2);
        if (color === currentBase!.valueColor) {
            qparams.delete("valueColor");
        } else {
            qparams.set("valueColor", color);
        }
    }
    window.location.hash = "#" + qparams.toString();
}
