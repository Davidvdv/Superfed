TabBasedApp = new Ext.Application({
    name: "TabBasedApp",

    launch: function() {
        this.views.viewport = new this.views.Viewport();
        this.views.home = this.views.viewport.getComponent('home');
    }
});