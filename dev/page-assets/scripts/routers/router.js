/*
|-------------------------------------------
| Router
|-------------------------------------------
|
| peforms the necessary logic for generally navigating around the app
|
| type:         Class
| augments:     BackBone.Router
| author:       Josh Bambrick
| version:      0.0.1
| modified:     11/12/14
|
*/

define([
    'underscore',
    'backbone'
], function (
    _,
    Backbone
) {
    var Router = Backbone.Router.extend({
        routes: {
            // no page
            '': 'browserNavigateRequest',
            // any page
            '*request': 'browserNavigateRequest'
        },
        browserNavigateRequest: function (sectionName) {
            sectionName = sectionName || '';
            
            // ignore trailing forward slash
            sectionName = sectionName.replace(/\/$/, '');

            // no url change since that is already the url
            this.changeSection(sectionName, true);

            // don't actually call `navigate` (this adds an extra 'back' step in browser)
            this.trigger('sectionHighlightChanged', sectionName);
        },
        changeUrl: function (sectionName) {
            this.navigate(sectionName);
            this.trigger('sectionHighlightChanged', sectionName);
        },
        changeSection: function (sectionName, noUrlChange) {
            if (!noUrlChange) {
                this.changeUrl(sectionName);
            }
            
            this.trigger('sectionChanged', sectionName);
        }
    });

    return Router;
});