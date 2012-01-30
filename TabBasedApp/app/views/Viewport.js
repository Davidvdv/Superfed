TabBasedApp.views.Viewport = Ext.extend(Ext.TabPanel, {
	fullscreen: true,
	scroll: 'vertical',
	
	dockedItems: [{
		xtype: 'toolbar',
		title: 'Demo'
	}],
	
	tabBar: {
		dock: 'bottom',
		layout: {
			pack: 'center'
		}
	},
	
	items: [
		{ xtype: 'home', id: 'home' },
		{ xtype: 'list'	},
		{ xtype: 'action' },
		{ xtype: 'info' }
	]
});