# eslint-config-ivy

> ⚠️ **CAUTION**  
> We now have a published package available on npm! However, for backward compatibility, we need to maintain two branches for now:
>
> -   **`master`**: For legacy usage (`github:Houzz/eslint-config-ivy#master`).
> -   **`release`**: For the new npm package (`@houzz/eslint-config-ivy`).
>
> Please migrate all old usages to the new package as soon as possible. The legacy branch will eventually be deprecated.

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
