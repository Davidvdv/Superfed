TabBasedApp.views.ActionPanel = Ext.extend(Ext.Panel, {
	title: "Action",
	iconCls: "action",
	html: '<p>Ook badges werkt in Sencha Touch.</p>',
	styleHtmlContent: true,
	
	dockedItems: [{
		xtype: 'toolbar',
		items: [
			{ 
				text: 'Wis',
				handler: function() {
					TabBasedApp.views.home.tab.setBadge('');
				}
		 	},
			{ xtype: 'spacer'},
			{ 
				text: 'Touch',
				handler: function() {
					var tabHome = TabBasedApp.views.home.tab;
					var badgeNr = parseInt(tabHome.badgeText);
					var nextNr = isNaN(badgeNr) ? 1 : badgeNr+1;
					tabHome.setBadge(nextNr);
				}
			},
			{
				text: '+',
				ui: 'action',
				handler: function() {
					//TabBasedApp.views.ActionPanel.setActiveItem('formfields', {type: 'slide', direction: 'left'});
				}
			}]
	}],
	
});

Ext.reg('action', TabBasedApp.views.ActionPanel);