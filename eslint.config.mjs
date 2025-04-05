import { defineConfig } from "eslint/config";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([{
  extends: compat.extends("eslint:recommended", "eslint-config-prettier"),

  languageOptions: {
    globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },

  rules: {
    "no-console": 0,
    "linebreak-style": 0,
    "arrow-parens": ["error", "as-needed"],
    "object-curly-spacing": ["error", "always"],
    "comma-dangle": 0,
    "no-multiple-empty-lines": ["error", {
        max: 1,
    }],
    "no-unused-vars": ["error", {
        args: "none",
    }],
    "max-len": ["error", {
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
    }],
    "switch-colon-spacing": 0,
  },
}]);