var carousel = new Ext.Carousel({
    items: [
		{
			html: '<img src="app/img/sencha-touch1.png" alt="" />',
            cls : 'card card1'
		},
		{
			html: '<img src="app/img/sencha-touch2.jpg" alt="" />',
			cls : 'card card2'
		},
		{
			html: '<img src="app/img/sencha-touch3.jpg" alt="" />',
			cls : 'card card3'
		}
	]
});

TabBasedApp.views.InfoPanel = Ext.extend(Ext.Panel, {
	title: 'Info',
	iconCls: 'info',
	
	//html: '<p>Gemaakt door David en Daniello.</p>',
	
	cls: 'cards',
    layout: {
        type : 'vbox',
        align: 'stretch'
    },
    defaults: {
        flex: 1
    },
    items: [carousel]
});

Ext.reg('info', TabBasedApp.views.InfoPanel);