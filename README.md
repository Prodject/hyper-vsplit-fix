# hyper-vsplit-fix
Fixes the vertical split border in hyper

## Install

```bash
cd ~/.hyper_plugins/local/ && git clone https://github.com/harryparkdotio/hyper-vsplit-fix.git
```

Add following to your `~/.hyper.js` config.

```javascript
module.exports = {
  ...
  localPlugins: ['hyper-vsplit-fix']
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