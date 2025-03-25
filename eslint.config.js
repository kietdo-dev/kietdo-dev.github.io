import importPlugin from "eslint-plugin-import";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";

export default tseslint.config({
  files: ["**/*.{js,jsx,ts,tsx}"],
  ignores: [
    "**/node_modules/**",
    ".next/**",
    "out/**",
    "public/**",
    ".gitignore",
    ".husky",
  ],
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2020,
    },
  },
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    prettierRecommended,
  ],
  plugins: {
    "@typescript-eslint": tseslint.plugin,
    "react-hooks": reactHooks,
    "@next/next": nextPlugin,
    "simple-import-sort": simpleImportSort,
    import: importPlugin,
    react: reactPlugin,
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs["core-web-vitals"].rules,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        trailingComma: "es5",
      },
    ],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-console": "error",
    "require-await": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^react$", "^next", "^[a-z]"],
          ["^@"],
          ["^~"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ["^.+\\.s?css$"],
          ["^\\u0000"],
        ],
      },
    ],
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
});
