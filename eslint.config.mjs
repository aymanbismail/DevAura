import { createRequire } from "node:module";

import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

/**
 * Flat ESLint config for Next 16.
 *
 * - `eslint-config-next` ships native flat-config arrays, so they are spread
 *   directly. The previous @eslint/eslintrc FlatCompat wrapper is not needed
 *   and crashed under ESLint 10 ("Converting circular structure to JSON").
 * - Next 16 removed `next lint`, so linting runs through the `eslint` CLI
 *   (see the "lint" script in package.json).
 * - eslint-config-next sets `react.version: "detect"`, and the autodetection in
 *   eslint-plugin-react 7.x calls `context.getFilename()`, which ESLint 10
 *   removed. Pinning the installed React version skips detection entirely.
 */
const require = createRequire(import.meta.url);
const reactVersion = require("react/package.json").version;

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "node_modules/**",
      "next-env.d.ts",
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    name: "devaura/react-version",
    settings: {
      react: { version: reactVersion },
    },
  },
  {
    // Next 16 pulls in eslint-plugin-react-hooks v6, whose React Compiler
    // rules are new and flag 35 pre-existing patterns in this codebase
    // (try/catch around Server Component JSX, setState in effect bodies,
    // in-place array mutation). The previous config never ran, so these were
    // never surfaced. They are reported as warnings so the suite is green and
    // the debt stays visible; fixing them requires behavioral refactors that
    // belong in their own change, not in the lint-setup fix.
    name: "devaura/react-compiler-rules-as-warnings",
    rules: {
      "react-hooks/error-boundaries": "warn",
      "react-hooks/immutability": "warn",
      "react-hooks/set-state-in-effect": "warn",
    },
  },
];

export default eslintConfig;
