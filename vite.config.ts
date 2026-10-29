// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { githubPagesAssets, pagesBasePath } from "./scripts/github-pages-config";

const githubPages = process.env.GITHUB_PAGES === "true";
const base = pagesBasePath(githubPages, process.env.VITE_BASE_PATH);

export default defineConfig({
  vite: { base },
  ...(githubPages ? { nitro: false, plugins: [githubPagesAssets(base)] } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(githubPages ? {
      router: { basepath: base.replace(/\/$/, "") },
      pages: [{ path: "/" }],
      prerender: { enabled: true, autoStaticPathsDiscovery: false, crawlLinks: false },
    } : {}),
  },
});
