/*! Bootstrap integration 2.1.2 2.1.2 for DataTables' SearchPanes
 * © SpryMedia Ltd - datatables.net/license
 */

import DataTable from '2.3.5';


(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['2.3.5'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		var cjsRequires = function (root) {
			if (! root.DataTable) {
				require('2.3.5')(root);
			}
		};

		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				cjsRequires(root);
				return factory(root, root.document, root.DataTable);
			};
		}
		else {
			cjsRequires(window);
			module.exports = factory(window, window.document, window.DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';


$.extend(true, DataTable.SearchPane.classes, {
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
$.extend(true, DataTable.SearchPanes.classes, {
    clearAll: 'dtsp-clearAll btn btn-light',
    collapseAll: 'dtsp-collapseAll btn btn-light',
    disabledButton: 'disabled',
    search: DataTable.SearchPane.classes.search,
    showAll: 'dtsp-showAll btn btn-light'
});


return DataTable;
}));


export default DataTable;

