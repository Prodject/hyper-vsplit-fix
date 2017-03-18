# hyper-vsplit-fix
Fixes the vertical split border in hyper

[![npm](https://img.shields.io/npm/v/hyper-vsplit-fix.svg?maxAge=86400?style=flat-square)](https://www.npmjs.com/package/hyper-vsplit-fix) [![npm](https://img.shields.io/npm/dt/hyper-vsplit-fix.svg?maxAge=86400?style=flat-square)](https://www.npmjs.com/package/hyper-vsplit-fix)

## Install

Add following to your `~/.hyper.js` config.

```javascript
module.exports = {
  ...
  plugins: ['hyper-vsplit-fix']
  ...
}
```

![installed](https://raw.githubusercontent.com/harryparkdotio/hyper-vsplit-fix/master/installed.png)
> *installed*

![not-installed](https://raw.githubusercontent.com/harryparkdotio/hyper-vsplit-fix/master/not-installed.png)
> *not installed*

> ***white border color is not included in package, only used to highlight the effect of the plugin***

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