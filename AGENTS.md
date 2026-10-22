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

- Keep real portfolio links and preview asset pointers in `src/lib/site.ts` so every portfolio view uses the same verified projects.
- Render client photo/video testimonials through the shared SocialTestimonials component so home and content pages stay consistent; use native video controls without autoplay.
- Store supplied media and actual website screenshots as Lovable Assets pointers; never copy uploaded binaries into the repository.
- Keep merged page content at its canonical route and permanently redirect former public URLs to that route to preserve existing links.
