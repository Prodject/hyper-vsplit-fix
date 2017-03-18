'use strict';
exports.decorateConfig = config => {
	return Object.assign({}, config, {
		css: `${config.css || ''}`
	});
};