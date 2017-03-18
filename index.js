exports.decorateConfig = (config) => {
	const vsplit_fix = Object.assign({
        vHeight: 34,
    }, config.vsplit_fix);

	return Object.assign({}, config, {
		css: `
			${config.css || ''}
			.splitpane_panes_vertical .splitpane_pane + .splitpane_divider.splitpane_divider_vertical {
				height: calc(100% + ${vsplit_fix.vHeight}px);
				margin-top: -${vsplit_fix.vHeight}px;
			}

			.splitpane_divider.splitpane_divider_horizontal + .splitpane_pane .splitpane_panes .splitpane_divider.splitpane_divider_vertical {
				height: 100%;
				margin-top: 0;
			}
		`
	});
};