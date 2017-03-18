'use strict';
exports.decorateConfig = config => {
	return Object.assign({}, config, {
		css: `
		${config.css || ''}
		.splitpane_panes_vertical .splitpane_pane+.splitpane_divider.splitpane_divider_vertical{height:calc(100% + 34px);margin-top:-34px}.splitpane_divider.splitpane_divider_horizontal+.splitpane_pane .splitpane_panes .splitpane_divider.splitpane_divider_vertical{height:100%;margin-top:0}
		`
	});
};