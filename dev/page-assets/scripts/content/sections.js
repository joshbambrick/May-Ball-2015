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
    'text!templates/sponsors.html'
], function (
    nightTemplate,
    entsTemplate,
    ticketInfoTemplate,
    sponsorsTemplate
) {
    return [{
        // identifier-friendly label
        label: 'hero',
        // title (defaults to `label` if undefined)
        // used to refer to this section with user  (eg navigation links)
        title: 'Wildcard',
        titleTemplate: 'WILD<wbr>CARD',
        subheadings: [{
            text: 'JESUS COLLEGE MAY BALL',
            label: 'subtitle'
        }, {
            text: '15 - 06 -15',
            label: 'date'
        }],
        jumpArrow: false,
        type: 'hero'
    }, {
        label: 'section-gap-0',
        type: 'section-gap',
        layers: ['parallax']
    }, {
        label: 'night',
        title: 'The Night',
        titleTemplate: 'The Night',
        type: 'content',
        template: nightTemplate
    }, {
        label: 'section-gap-1',
        type: 'section-gap',
        layers: ['parallax']
    }, {
        label: 'entertainment',
        title: 'Entertainment',
        titleTemplate: 'Entertainment',
        type: 'content',
        template: entsTemplate
    }, {
        label: 'section-gap-2',
        type: 'section-gap',
        layers: ['parallax']
    }, {
        label: 'ticket-info',
        title: 'Tickets',
        titleTemplate: 'Tickets',
        type: 'content',
        template: ticketInfoTemplate
    }, {
        label: 'section-gap-3',
        type: 'section-gap',
        layers: ['parallax', 'rotate']
    }, {
        label: 'sponsors',
        title: 'Sponsors',
        titleTemplate: 'Spon<wbr>sors',
        type: 'content',
        template: sponsorsTemplate
    }, {
        label: 'section-gap-4',
        type: 'section-gap',
        layers: ['parallax']
    }, {
        label: 'charities',
        title: 'Charities',
        titleTemplate: 'Char<wbr>ities',
        type: 'content',
        template: '<p>' + 'hello' + '</p>',
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
        template: '<p>' + 'hello' + '</p><a href="work/apply" class="section--work__apply-button">Apply to work</a>'
    }, {
        label: 'section-gap-6',
        type: 'section-gap',
        layers: ['parallax']
    }, {
        label: 'committee',
        title: 'Committee',
        titleTemplate: 'Commi<wbr>ttee',
        type: 'content',
        template: '<p>' + 'hello' + '</p>',
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