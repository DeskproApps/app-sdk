import { build, emptyDir } from "@deno/dnt";
import {
  inc as semverInc,
  valid as semverValid,
} from "https://deno.land/x/semver/mod.ts";
import { parseArgs } from "jsr:@std/cli/parse-args";

const buildDir = "./npm";

const flags = parseArgs(Deno.args, {
  string: ["version", "milestone"],
});

if (
  !semverValid(flags.version ?? "") ||
  !["major", "minor", "patch"].includes(flags.milestone ?? "")
) {
  console.error(
    "Usage: deno task build --version <version> --milestone <milestone>",
  );
  console.error("Example: deno task build 1.0.0 patch");
  Deno.exit(1);
}

const version = semverInc(
  flags.version!,
  flags.milestone as "major" | "minor" | "patch",
)!;

await emptyDir(buildDir);

await build({
  entryPoints: ["./src/index.ts"],
  outDir: buildDir,
  shims: {
    deno: true,
  },
  packageManager: "pnpm",
  package: {
    name: "@deskpro/app-sdk",
    version,
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
    Deno.copyFileSync("README.md", `${buildDir}/README.md`);
  },
});

console.log(`Build completed successfully! Version: ${version}`);