/*
|-------------------------------------------
| ContentSectionView
|-------------------------------------------
|
| the view of a 'contents' section
| represents a single article eg 'Ents' or 'Staffing'
|
| type:         Class
| augments:     BackBone.View
| model:        information about the section
| author:       Josh Bambrick
| version:      0.0.1
| modified:     15/12/14
|
*/

define([
    'jquery',
    'underscore',
    'backbone'
], function (
    $,
    _,
    Backbone
) {
    return Backbone.View.extend({
        tagName: 'article',
        BEMClassName: 'section',
        BEMSuffix: 'contents parallax-contents',
        initialize: function () {
            this.render();
        },
        render: function () {
            var sectionLabel = this.model.get('label'), titleTemplate = this.model.get('titleTemplate'), $contents, $title, $imgFigure;

            this.$el.addBEMSuffix(sectionLabel);

            $contents = $('<div>').addClass('section__contents section--' + sectionLabel + '__contents').appendTo(this.$el);

            $title = $('<h4>').addClass('section--' + sectionLabel + '__title section--contents__title section__title').html(_.render(titleTemplate)).appendTo($contents);

            $imgFigure = $('<figure>').addClass('section--' + sectionLabel + '__img-figure section--contents__img-figure section__img-figure').appendTo($contents);
            $('<span>').addClass('section--' + sectionLabel + '__img section--contents__img section__img').appendTo($imgFigure);
            
            $('<div>').addClass('section--' + sectionLabel + '__text section--contents__text section__text').appendTo($contents).html(_.render(this.model.get('template')));


            $.breakpoint.on(['thumb', 'palm'], _.bind(function (breakpoint) {
                var palmClass = 'section--' + sectionLabel + '__title--palm section--contents__title--palm section__title--palm',
                    thumbClass = 'section--' + sectionLabel + '__title--thumb section--contents__title--thumb section__title--thumb';

                if (breakpoint === 'palm') {
                    $title.addClass(palmClass);
                }  else {
                    $title.removeClass(palmClass);
                }

                if (breakpoint === 'thumb') {
                    $title.addClass(thumbClass);
                } else {
                    $title.removeClass(thumbClass);
                }
            }, this), true);
        }
    });
});