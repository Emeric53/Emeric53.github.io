# Academic website

Run `pixi run start` for local development and `pixi run build` for a strict build.
GitHub Actions checks pull requests and publishes pushes to `main` through GitHub Pages. There is no separate branch-based deployment command.

## Updating publications

Edit `extra.publications` in `mkdocs.yml`. Each entry has a numeric `year`, `status` (normally `published`), title, authors, venue, detail, DOI and BibTeX. Keep the year out of `detail`; entries sort newest first. Non-published status is displayed explicitly.

Optional resources use `links`, for example:

```yaml
links:
  - label: Code
    url: https://github.com/owner/project
  - label: PDF
    url: https://example.org/paper.pdf
```

An empty `links: []` displays no resource row. Add only verified, public resources. CV can be added to `extra.links` once a current public file is available.

## Research content

The homepage is `theme/home.html`; styles are in `docs/css/site.css`. The MLMF showcase reuses the controlled-release comparison preserved in `docs/academic/`, with a citation and descriptive caption. Keep original research assets and their provenance when adding projects. The legacy `/research/`, `/publications/` and `/about/` addresses redirect to homepage sections; preserve those anchors when expanding the site.
