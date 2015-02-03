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
                sectionTitleShowTime = this.model.get('titleShowTime'),
                sectionSubheadings = this.model.get('subheadings'),
                getClasses = _.partial(_.getBEMClasses, 'section', [sectionLabel, 'hero']),
                $title, $subheadings, $figure, $arrowRow;

            this.$el.addBEMSuffix(sectionLabel);
            
            $figure = $('<figure>').addClass(getClasses('figure')).appendTo(this.$el);
            $('<span>').addClass(getClasses('img')).appendTo($figure);

            $title = $('<h1>').addClass(getClasses('title', 'unshown')).html(_.render(sectionTitleTemplate)).appendTo(this.$el);

            $(function () {
                setTimeout(function () {
                    $title.removeClass(getClasses('title', 'unshown', true));
                }, sectionTitleShowTime);
            });

            $subheadings = $();

            _.each(sectionSubheadings, function (curSubheading) {
                var $curSubheading = $('<h3>').addClass(getClasses('subheading', [curSubheading.label, 'unshown'])).text(curSubheading.text).appendTo(this.$el);

                $subheadings.add($curSubheading);

                $(function () {
                    setTimeout(function () {
                        $curSubheading.removeClass(getClasses('subheading', 'unshown', true));
                    }, curSubheading.showTime);
                });
            }, this);

            if (this.model.get('jumpArrow')) {
                $arrowRow = $('<div>').addClass(
                    getClasses('arrow-row')
                ).appendTo(this.$el);

                this.getSectionHyperLink(this.firstContentSectionLabel)
                    .addClass(getClasses('arrow'))
                    .appendTo($arrowRow);
            }

            _.bindDefer(function () {
                $.breakpoint.on(['palm'], function (breakpoint) {
                    var titlePalmClass = getClasses('title', 'palm', true),
                        subheadingPalmClass = getClasses('subheading', 'palm', true);
                    
                    if (breakpoint === 'palm') {
                        $title.addClass(titlePalmClass);
                        $subheadings.addClass(subheadingPalmClass);
                    } else {
                        $title.removeClass(titlePalmClass);
                        $subheadings.removeClass(subheadingPalmClass);
                    }
                }, true);
            }, this);

            this.nav.$el.addBEMSuffix('hero-nav').appendTo(this.$el);
        }
    });
});