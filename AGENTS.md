<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Define social brand colors in global semantic tokens and expose them through Button variants so Contact controls share the design-system styling boundary.
- Keep GitHub Pages export conditional on GITHUB_PAGES=true; normal Lovable builds retain their server configuration and root base path.
- Export Lovable asset pointers as bundled originals only during the Pages build so static hosting does not depend on a runtime asset proxy.
- Explicitly enumerate public static routes for Pages prerendering and verify their exported links; GitHub Pages has no application server.
