import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm");

await build({
  entryPoints: ["./src/index.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  packageManager: "pnpm",
  package: {
    name: "@deskpro/app-sdk",
    version: Deno.args[0],
    description: "Deskpro Apps SDK",
    private: false,
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/deskproapps/app-sdk.git",
    },
    bugs: {
      url: "https://github.com/deskproapps/app-sdk/issues",
    },
  },
  compilerOptions: {
    lib: ["ESNext", "DOM", "DOM.Iterable"],
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});
