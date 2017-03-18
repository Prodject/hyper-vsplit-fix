# hyper-vsplit-fix
Fixes the vertical split border in hyper

[hyper-vsplit-fix on npm](https://www.npmjs.com/package/hyper-vsplit-fix)

## Install

Add following to your `~/.hyper.js` config.

```javascript
module.exports = {
  ...
  plugins: ['hyper-vsplit-fix']
  ...
}
```

## Config

Add following to `~/.hyper.js`

### Change extra height
Default value is set to 34

```javascript
module.exports = {
  config: {
    ...
      vsplit_fix: {
      	// in px
        vHeight: 34,
      },
    ...
  }
}
```

> 34px is the tested height for macOS