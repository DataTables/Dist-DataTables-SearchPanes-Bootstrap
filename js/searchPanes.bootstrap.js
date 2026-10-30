/*! SearchPanes Bootstrap 3 styling 3.0.1 for DataTables
 * Copyright (c) SpryMedia Ltd - https://datatables.net/license/plus
 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net-bs', 'datatables.net-searchpanes'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}
				
				var DataTable = root.DataTable ?
					root.DataTable :
					require('datatables.net-bs')(root);

				if (! root.DataTable.SearchPanes) {
					require('datatables.net-searchpanes')(root);
				}

				return factory(root, root.document, DataTable);
			};
		}
		else {
			var DataTable = window.DataTable ?
				window.DataTable :
				require('datatables.net-bs');

			if (! window.DataTable.SearchPanes) {
				require('datatables.net-searchpanes');
			}

			module.exports = factory(window, window.document, DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';

var util = DataTable.util;

util.object.assignDeep(DataTable.SearchPane.classes, {
    buttonGroup: 'btn-group',
    disabledButton: 'disabled',
    narrow: 'col narrow',
    narrowSub: 'row',
    pane: {
        container: 'table'
    },
    paneButton: 'btn btn-light',
    pill: 'badge badge-pill badge-light pill',
    search: 'col-sm form-control search',
    searchCont: 'input-group dtsp-searchCont',
    searchLabelCont: 'input-group-btn',
    subRow1: 'dtsp-subRow1 text-right',
    subRow2: 'dtsp-subRow2 text-right',
    table: 'table table-condensed'
});
util.object.assignDeep(DataTable.SearchPanes.classes, {
    clearAll: 'dtsp-clearAll btn btn-light',
    collapseAll: 'dtsp-collapseAll btn btn-light',
    disabledButton: 'disabled',
    search: DataTable.SearchPane.classes.search,
    showAll: 'dtsp-showAll btn btn-light'
});


return DataTable;
}));
