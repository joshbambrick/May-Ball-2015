/*
|-------------------------------------------
| HeroSectionView
|-------------------------------------------
|
| the view of a 'hero' section
| there should only be one instance of this
| forms the header of the page
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
    'backbone',
], function (
    $,
    _,
    Backbone
) {
    return Backbone.View.extend({
        tagName: 'header',
        BEMClassName: 'section',
        BEMSuffix: 'hero parallax-hero',
        initialize: function (options) {
            this.nav = options.nav;
            this.getSectionHyperLink = options.getSectionHyperLink;
            this.firstContentSectionLabel = options.firstContentSectionLabel;
            this.render();
        },
        render: function () {
            var sectionLabel = this.model.get('label'),
                sectionTitleTemplate = this.model.get('titleTemplate'),
                sectionSubtitle = this.model.get('subtitle'),
                $title, $subtitle, $figure, $arrowRow;

            this.$el.addBEMSuffix(sectionLabel);
            
            $figure = $('<figure>').addClass('section--' + sectionLabel + '__figure section--hero__figure section__figure').appendTo(this.$el);
            $('<span>').addClass('section--' + sectionLabel + '__img section--hero__img section__img').appendTo($figure);

            $title = $('<h1>').addClass('section--' + sectionLabel + '__title section--hero__title section__title').html(_.render(sectionTitleTemplate)).appendTo(this.$el);
            
            $subtitle = $('<h3>').addClass('section--' + sectionLabel + '__subtitle section--hero__subtitle section__subtitle').text(sectionSubtitle).appendTo(this.$el);

            if (this.model.get('jumpArrow')) {
                $arrowRow = $('<div>').addClass('section--' + sectionLabel + '__arrow-row section--hero__arrow-row section__arrow-row').appendTo(this.$el);
                this.getSectionHyperLink(this.firstContentSectionLabel)
                    .addClass('section--' + sectionLabel + '__arrow section--hero__arrow section__arrow')
                    .appendTo($arrowRow);
            }

            _.bindDefer(function () {
                $.breakpoint.on(['palm'], function (breakpoint) {
                    var titlePalmClass = 'section--' + sectionLabel + '__title--palm section--hero__title--palm section__title--palm',
                        subtitlePalmClass = 'section--' + sectionLabel + '__subtitle--palm section--hero__subtitle--palm section__title--palm';
                    
                    if (breakpoint === 'palm') {
                        $title.addClass(titlePalmClass);
                        $subtitle.addClass(subtitlePalmClass);
                    } else {
                        $title.removeClass(titlePalmClass);
                        $subtitle.removeClass(subtitlePalmClass);
                    }
                }, true);
            }, this);

            this.nav.$el.addBEMSuffix('hero-nav').appendTo(this.$el);
        }
    });
});