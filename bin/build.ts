import { build, emptyDir } from "@deno/dnt";
import {
  inc as semverInc,
  valid as semverValid,
} from "https://deno.land/x/semver/mod.ts";

const supportedIncrements = ["major", "minor", "patch"];

const existingVersion = Deno.args[0] ?? undefined;
const increment = Deno.args[1] ?? undefined;
if (!semverValid(existingVersion) || !supportedIncrements.includes(increment)) {
  console.log({
    existingVersion,
    increment,
  });
  console.error("Usage: deno task build <version> <increment>");
  console.error("Example: deno task build 1.0.0 patch");
  Deno.exit(1);
}

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
    version: semverInc(
      existingVersion,
      increment as "major" | "minor" | "patch",
    )!,
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
