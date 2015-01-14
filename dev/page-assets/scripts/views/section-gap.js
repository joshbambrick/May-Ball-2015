/*
|-------------------------------------------
| SectionGapView
|-------------------------------------------
|
| the view of a 'section-gap' section
| appears in between other types of sections for aesthetics
|
| type:         Class
| augments:     BackBone.View
| model:        information about the section
| author:       Josh Bambrick
| version:      0.0.1
| modified:     16/12/14
|
*/

define([
    'jquery',
    'underscore',
    'backbone',
], function (
    $,
    _,
    Backbone
) {
    return Backbone.View.extend({
        tagName: 'div',
        BEMClassName: 'section',
        BEMSuffix: 'section-gap',
        initialize: function () {
            this.render();
        },
        render: function () {
            var sectionLabel = this.model.get('label');

            this.$el.addBEMSuffix(sectionLabel);

            _.each(this.model.get('layers'), function (curLayerType, curLayerIndex) {
                $('<div>').addClass([
                    'section--section-gap__img',
                    'section--' + sectionLabel + '__img',
                    'section--section-gap__img--layer-' + curLayerIndex,
                    'section--' + sectionLabel + '__img--layer-' + curLayerIndex,
                    'section--section-gap__img--' + curLayerType,
                    'section--' + sectionLabel + '__img--' + curLayerType
                ].join(' ')).appendTo(this.$el);
            }, this);

            _.bindDefer(function () {
                this.$el.onScrollCoeffChange(function (/*coeff*/) {
                    // use coeff to calculate the degree of rotation (or whatever else) in the img
                }, true);
            }, this);
        }
    });
});