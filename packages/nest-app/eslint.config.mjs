// @ts-check
import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
  {
    ignores: ["eslint.config.mjs"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: "commonjs",
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
  },
  {
    rules: {
      "no-unused-vars": ["warn", {}],
      "@typescript-eslint/no-explicit-any": ["warn", {}],
      "@typescript-eslint/no-floating-promises": ["warn", {}],
      "@typescript-eslint/no-unsafe-argument": ["warn", {}],
      "import/no-unresolved": ["warn", {}],
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          groups: [
            "type",
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "unknown",
          ],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "after",
            },
          ],
        },
      ],
    },
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
);
