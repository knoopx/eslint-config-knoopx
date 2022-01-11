# linter-eslint

```bash
git clone https://github.com/knoopx/eslint-config-knoopx ~/.eslint-config
cd ~/.eslint-config
yarn
```

## Atom

```yaml
"linter-eslint":
  autofix:
    fixOnSave: true
  disabling:
    disableWhenNoEslintConfig: false
  global:
    eslintrcPath: "~/.eslint-config/index.js"
    globalNodePath: "~/.eslint-config"
    useGlobalEslint: true
```

## Visual Studio Code

```json
    "eslint.nodePath": "~/.eslint-config/node_modules",
    "eslint.options": {
        "configFile": "~/.eslint-config/index.js"
    }
```
