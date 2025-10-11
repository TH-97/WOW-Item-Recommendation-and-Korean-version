const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    // service 폴더 안 모든 JS import를 TS로 매핑
    "^\\.\\./service/(.*)\\.js$": "<rootDir>/src/service/$1.ts",

    // adapter 폴더
    "^\\.\\./adapter/(.*)\\.js$": "<rootDir>/src/adapter/$1.ts",

    // DTO 폴더
    "^\\.\\./DTO/(.*)\\.js$": "<rootDir>/src/DTO/$1.ts",

    "^\\.\\./config/(.*)\\.js$": "<rootDir>/src/config/$1.ts",
  },
};
