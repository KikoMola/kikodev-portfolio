/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_GITHUB_USERNAME: string;
    readonly GITHUB_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}