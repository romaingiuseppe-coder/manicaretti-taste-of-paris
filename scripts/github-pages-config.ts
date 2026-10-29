import type { Plugin } from "vite";

export function pagesBasePath(enabled: boolean, value?: string) {
  if (!enabled) return "/";
  if (!value || !/^\/[A-Za-z0-9._-]+\/$/.test(value)) {
    throw new Error("GitHub Pages requires VITE_BASE_PATH=/repository-name/.");
  }
  return value;
}

// Asset pointers normally use Lovable's proxy. Export the same original files
// into the static bundle so GitHub Pages needs no Lovable proxy at runtime.
export function githubPagesAssets(base: string): Plugin {
  return {
    name: "manicaretti-github-pages-assets",
    apply: "build",
    async transform(code, id) {
      if (!id.endsWith(".asset.json")) return;
      // Runs before Vite's JSON transform.
      const asset = JSON.parse(code) as { url: string; asset_id: string; original_filename: string };
      const fileName = `assets/${asset.asset_id}/${asset.original_filename}`;
      const response = await fetch(new URL(asset.url, "https://manicaretti-taste-of-paris.lovable.app"));
      if (!response.ok || !response.headers.get("content-type")?.startsWith("image/")) {
        throw new Error(`Could not export image ${asset.original_filename}: ${response.status}`);
      }
      this.emitFile({ type: "asset", fileName, source: new Uint8Array(await response.arrayBuffer()) });
      return { code: JSON.stringify({ ...asset, url: `${base}${fileName}` }), map: null };
    },
    enforce: "pre",
  };
}