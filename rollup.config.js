import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import html from "@rollup/plugin-html";
import nodeResolve from "@rollup/plugin-node-resolve";
import copy from "rollup-copy-smartly";
import postcss from 'rollup-plugin-postcss'

import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

/** @type {import("@rollup/plugin-html").RollupHtmlOptions} */
const htmlOptions = {
    template({ attributes, bundle, files, publicPath, title }) {
        return readFile("src/index.html", "utf8").then((template) => {
            return template.replace(
                "<style></style>",
                `<style>\n${files.css.filter((x) => x.fileName.endsWith("static.css")).map((x) => x.source).join("\n")}\n</style>`
            );
        });
    }
};
const postcssOptions = {
    minimize: true,
    modules: false,
    extract: true,
    autoModules: false,
};
const genPostcssOptions = (file) => ({ ...postcssOptions, include: `src/${file}`, extract: resolve(`build/${file}`) });

/** @type {import("rollup").RollupOptions} */
export default {
    input: [
        "src/index.ts",
        "src/static.css",
        "src/controls.css",
    ],
    output: {
        dir: "build",
        format: "esm",
        sourcemap: true,
    },
    plugins: [
        typescript(),
        nodeResolve(),
        terser(),
        postcss(genPostcssOptions("static.css")),
        postcss(genPostcssOptions("controls.css")),
        html(htmlOptions),
        copy({
            src: "src/",
            pattern: /\.ts$/,
            dest: "build/src/",
        }),
    ],
    treeshake: true,
};
