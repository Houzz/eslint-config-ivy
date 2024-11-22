# eslint-config-ivy

> ⚠️ **CAUTION**  
> We now have a published package available! However, for backward compatibility, we need to maintain two branches for now:

-   master: For legacy usage (`github:Houzz/eslint-config-ivy#master`).
-   [release](https://github.com/Houzz/eslint-config-ivy/tree/release): For the new package (`@houzz/eslint-config-ivy`).

Please migrate all old usages to the new package as soon as possible. The legacy branch will eventually be deprecated.

## Usage

New (Recommended): Install the latest version from npm

```sh
npm install @houzz/eslint-config-ivy --save-dev
```

```json
// .eslintrc
{
    "extends": ["@houzz/eslint-config-ivy"]
}
```

Legacy (Deprecated): For temporary backward compatibility

```sh
npm install github:Houzz/eslint-config-ivy#master
```

```json
// .eslintrc
{
    "extends": ["eslint-config-ivy"]
}
```

## Publish

Push to the `release` branch to publish the package.

-   [Action](https://github.com/Houzz/eslint-config-ivy/actions/workflows/npmpublish.yml)
-   [Package](https://github.com/orgs/Houzz/packages/npm/package/eslint-config-ivy)
