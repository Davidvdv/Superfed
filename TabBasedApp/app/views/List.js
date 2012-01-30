TabBasedApp.list = new Ext.List({
	id: 'indexlist',
	store: TabBasedApp.ListStore,
	itemTpl: '<div class="contact">{firstName} {lastName}</div>',
	grouped: true,
	
	onItemDisclosure: function(){
		//TabBasedApp.views.detailPanel.update();
		//TabBasedApp.views.setActiveItem('detailpanel');
	}

});

TabBasedApp.views.ListPanel = Ext.extend(Ext.Panel, {
	layout: 'card', // Zorgt voor de juiste weergave van een lijst
	items: [TabBasedApp.list], // Voegt het object 'List' toe aan het Panel
	title: 'List',
    iconCls: 'organize',
});

Ext.reg('list', TabBasedApp.views.ListPanel);