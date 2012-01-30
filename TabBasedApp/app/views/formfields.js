TabBasedApp.views.formfields = new Ext.form.FormPanel({
    id: 'formfields',
    items: [
        {
            xtype: 'textfield',
            name: 'firstname',
            label: 'Voornaam',
            required: true
        },
		{
            xtype: 'textfield',
            name: 'firstname',
            label: 'Achternaam',
            required: true
        },
        /*{
            xtype: 'textareafield',
            name: 'narrative',
            label: 'Narrative'
        }*/
    ]
});
