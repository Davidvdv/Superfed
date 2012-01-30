TabBasedApp.views.HomePanel = Ext.extend(Ext.Panel, {
    title: 'Home',
    iconCls: 'home',
	styleHtmlContent: true,
	scroll: 'vertical',
	html: '<h3>Intro</h3><p>Sencha Touch is a user interface (UI) JavaScript library, or framework, specifically built for Mobile Web. It can be used by Web developers to develop user interface for mobile web applications that look and feel like native applications on supported mobile devices. It is fully based on web standards such as HTML5, CSS3 and JavaScript.</p><h3>GUI controls</h3><p>Sencha Touch includes a set of graphical user interface GUI-based controls or "components" for use within mobile web applications. These components are highly optimized for touch input.</p>'
});

Ext.reg('home', TabBasedApp.views.HomePanel);