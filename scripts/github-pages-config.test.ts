import { describe, expect, test } from "bun:test";
import { githubPagesAssets, pagesBasePath } from "./github-pages-config";

describe("hosting base path", () => {
  test("Lovable remains at the root even if a Pages path is supplied", () => {
    expect(pagesBasePath(false, "/manicaretti/")).toBe("/");
  });
  test("Pages uses the repository sub-path", () => {
    expect(pagesBasePath(true, "/manicaretti/")).toBe("/manicaretti/");
  });
  test("Pages rejects a missing or invalid sub-path", () => {
    expect(() => pagesBasePath(true)).toThrow();
    expect(() => pagesBasePath(true, "//external/")).toThrow();
  });
});

test("Pages exports the original image and prefixes its URL", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async () => new Response(new Uint8Array([1, 2, 3]), {
    headers: { "content-type": "image/png" },
  })) as typeof fetch;
  try {
    const plugin = githubPagesAssets("/manicaretti/");
    const transform = plugin.transform;
    if (typeof transform !== "function") throw new Error("Missing transform");
    const emitted: unknown[] = [];
    const result = await transform.call({ emitFile: (asset: unknown) => { emitted.push(asset); return "image"; } } as never,
      JSON.stringify({ url: "/__l5e/assets-v1/photo/photo.png", asset_id: "photo", original_filename: "photo.png" }),
      "/src/assets/photo.png.asset.json");
    if (!result || typeof result === "string") throw new Error("Missing transformed asset");
    expect(JSON.parse(result.code).url).toBe("/manicaretti/assets/photo/photo.png");
    expect(emitted).toHaveLength(1);
  } finally {
    globalThis.fetch = originalFetch;
  }
});