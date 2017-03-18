# hyper-vsplit-fix
Fixes the vertical split border in hyper

[![npm](https://img.shields.io/npm/v/hyper-vsplit-fix.svg)](https://www.npmjs.com/package/hyper-vsplit-fix) [![npm](https://img.shields.io/npm/dt/hyper-vsplit-fix.svg)](https://www.npmjs.com/package/hyper-vsplit-fix)


<img width="444px" style="display: inline-block;" src="https://raw.githubusercontent.com/harryparkdotio/hyper-vsplit-fix/master/installed.png" meta="installed"><img width="444px" style="display: inline-block;" src="https://raw.githubusercontent.com/harryparkdotio/hyper-vsplit-fix/master/not-installed.png" meta="installed">

> **`white` border is for indication only**

## Install

`hpm install hyper-vsplit-fix`
> you'll need [hpm](https://www.npmjs.com/package/hpm-cli) installed for this method

or

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
Default value is set to 34 (macOS)

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