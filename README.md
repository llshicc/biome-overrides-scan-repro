# biome-overrides-scan-repro

`project`/`types` domain rules enabled only in `overrides` never run.

```sh
npm i
npx biome check
```

Only `noConsole` is reported. Move the three rules from `overrides[0].linter.rules` to top-level `linter.rules` and `noUnresolvedImports` and `noFloatingPromises` are reported too.
