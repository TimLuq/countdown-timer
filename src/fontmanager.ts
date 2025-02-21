import { emmet } from "emmet-elem";

export interface IFontOption {
    font: string;
    versions: Record<string, string>;
}

class FontManager {
    readonly #loaded: Set<string> = new Set();
    readonly #available: Map<string, IFontOption> = new Map();
    
    constructor() {
        this.#available.set("Noto Sans", {
            font: "Noto Sans",
            versions: {
                ":wght@200": "ExtraLight",
                "": "Regular",
                ":wght@600": "SemiBold",
                ":wght@800": "ExtraBold",
            },
        });
        this.#available.set("Doto", {
            font: "Doto",
            versions: {
                ":wght@200": "ExtraLight",
                "": "Regular",
                ":wght@600": "SemiBold",
                ":wght@800": "ExtraBold",
            },
        });
        this.#available.set("Sankofa Display", {
            font: "Sankofa Display",
            versions: {
                "": "Regular",
            },
        });
        this.#available.set("Gentium Plus", {
            font: "Gentium Plus",
            versions: {
                "": "Regular",
                ":ital": "Italic",
                ":wght@700": "Bold",
            },
        });
    }

    public get availableFonts(): Readonly<IFontOption>[] {
        return Array.from(this.#available.values());
    }

    public loadFont(font: string): boolean {
        if (this.#loaded.has(font)) {
            return true;
        }
        const fontPrefix = font.replace(/:.+$/, "");
        const fontOpt = this.#available.get(fontPrefix);
        if (!fontOpt) {
            return false;
        }
        const fontVersion = font.replace(/^[^:]+/, "");
        const version = fontOpt.versions[fontVersion];
        if (!version) {
            return false;
        }
        const link: HTMLLinkElement = emmet`link[rel=stylesheet]`;
        link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/ /g, "+")}${fontVersion}&display=swap`;
        document.head.appendChild(link);
        this.#loaded.add(font);
        return true;
    }
}

export type { FontManager };

export const fontManager = new FontManager();
