/*
|-------------------------------------------
| sections
|-------------------------------------------
|
| an array containing the data for all sections
|
| type:     Array
| author:   Josh Bambrick
| version:  0.0.1
| modified: 11/12/14
|
*/

define([
    'text!templates/night.html',
    'text!templates/entertainment.html',
    'text!templates/ticket-info.html',
    'text!templates/sponsors.html',
    'text!templates/charities.html',
    'text!templates/work.html',
    'text!templates/committee.html'
], function (
    nightTemplate,
    entsTemplate,
    ticketInfoTemplate,
    sponsorsTemplate,
    charitiesTemplate,
    workTemplate,
    committeeTemplate
) {
    return [{
        // identifier-friendly label
        label: 'hero',
        // second is important
        // given special styling in locations (eg navigation links)
        important: true,
        // title (defaults to `label` if undefined)
        // used to refer to this section with user  (eg navigation links)
        title: 'Wildcard',
        titleTemplate: 'WILD<wbr>CARD',
        titleShowTime: 250,
        subheadings: [{
            text: 'JESUS COLLEGE MAY BALL',
            label: 'subtitle',
            showTime: 1250
        }, {
            text: '15 - 06 - 15',
            label: 'date',
            showTime: 1750
        }],
        backgroundLayers: [{
            showTime: 1250
        }, {
            showTime: 1250
        }, {
            showFromStart: true
        }, {
            showFromStart: true
        }],
        jumpArrow: false,
        type: 'hero'
    }, {
        label: 'section-gap-0',
        type: 'section-gap',
        layers: ['parallax', 'rotate', 'rotate', 'rotate']
    }, {
        label: 'night',
        title: 'The Night',
        titleTemplate: 'The Night',
        type: 'content',
        showNavUnderline: true,
        template: nightTemplate
    }, {
        label: 'section-gap-1',
        type: 'section-gap',
        layers: ['parallax', 'rotate', 'rotate', 'rotate', 'rotate']
    }, {
        label: 'entertainment',
        title: 'Entertainment',
        titleTemplate: 'Enter<wbr>tain<wbr>ment',
        type: 'content',
        showNavUnderline: true,
        template: entsTemplate
    }, {
        label: 'section-gap-2',
        type: 'section-gap',
        layers: ['parallax', 'rotate', 'rotate', 'rotate']
    }, {
        label: 'ticket-info',
        title: 'Tickets',
        titleTemplate: 'Tick<wbr>ets',
        type: 'content',
        showNavUnderline: true,
        template: ticketInfoTemplate
    }, {
        label: 'section-gap-3',
        type: 'section-gap',
        layers: ['parallax', 'rotate', 'rotate', 'rotate']
    }, {
        label: 'sponsors',
        title: 'Sponsors',
        titleTemplate: 'Spon<wbr>sors',
        type: 'content',
        showNavUnderline: true,
        template: sponsorsTemplate
    }, {
        label: 'section-gap-4',
        type: 'section-gap',
        layers: ['parallax', 'rotate', 'rotate']
    }, {
        label: 'charities',
        title: 'Charities',
        titleTemplate: 'Char<wbr>ities',
        type: 'content',
        showNavUnderline: true,
        template: charitiesTemplate,
        noImage: true
    }, {
        label: 'section-gap-5',
        type: 'section-gap',
        layers: ['parallax', 'rotate']
    }, {
        label: 'work',
        title: 'Work',
        titleTemplate: 'Work',
        type: 'content',
        showNavUnderline: true,
        template: workTemplate
    }, {
        label: 'section-gap-6',
        type: 'section-gap',
        layers: ['parallax', 'rotate']
    }, {
        label: 'committee',
        title: 'Committee',
        titleTemplate: 'Commi<wbr>ttee',
        type: 'content',
        showNavUnderline: true,
        template: committeeTemplate,
        noImage: true
    }, {
        label: 'section-gap-7',
        type: 'section-gap',
        layers: ['parallax']
    }, {
        label: 'footer',
        template: '<small>&copy; Jesus May Ball 2015</small>',
        type: 'footer'
    }];
});