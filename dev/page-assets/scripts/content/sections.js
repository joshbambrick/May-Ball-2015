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

define([], function () {
    var filler1 = "Williamsburg keffiyeh hashtag, 90's irony kogi narwhal pickled mustache sustainable wolf raw denim Odd Future. Biodiesel 90's bitters paleo, organic cardigan selvage craft beer Brooklyn post-ironic. Small batch post-ironic food truck mlkshk tousled, stumptown next level fixie butcher Portland viral photo booth banjo tote bag.",
        filler2 = "Selvage Pitchfork fingerstache fanny pack, Cosby sweater pug Echo Park 90's cray dreamcatcher mumblecore Bushwick craft beer. Marfa Brooklyn aesthetic irony. Marfa scenester stumptown, fingerstache cornhole XOXO PBRB. Lomo pour-over tote bag, Neutra artisan direct trade wolf street art roof party cray chambray meggings pug quinoa freegan.";
        // filler3 = "\n\nTumblr meh sriracha Odd Future Marfa messenger bag, small batch cray Godard plaid. Kickstarter locavore normcore post-ironic. Brooklyn single-origin coffee meh whatever ethnic, biodiesel fap Godard gentrify banjo. Chillwave sustainable you probably haven't heard of them viral keytar. Brunch pop-up cardigan McSweeney's freegan, locavore sriracha selfies 8-bit next level blog keytar. Freegan aesthetic sartorial, Blue Bottle chillwave iPhone Thundercats wolf craft beer meggings salvia direct trade mlkshk Tumblr fap. Post-ironic tote bag ethnic gluten-free Truffaut.\n\nMlkshk letterpress Intelligentsia vegan mumblecore fanny pack, sriracha master cleanse small batch irony YOLO kale chips squid. Scenester hoodie gentrify, polaroid pour-over readymade Blue Bottle selvage art party ugh Cosby sweater kitsch Tonx wayfarers. Brunch try-hard Schlitz raw denim. Pour-over cornhole Echo Park, Tumblr seitan raw denim slow-carb. Squid crucifix DIY mixtape Portland selvage Pitchfork 90's scenester art party trust fund messenger bag banjo stumptown Tonx. Banksy cornhole craft beer art party selvage fixie. Tote bag tattooed semiotics selfies";

    return [{
        // identifier-friendly label
        label: 'hero',
        // url-friendly label (defaults to `label` if undefined)
        title: 'ThemeName',
        // title: 'Wildcard',
        titleTemplate: 'Theme<wbr>Name',
        // titleTemplate: 'Wild<wbr>card',
        subtitle: 'Jesus College May Ball 2015',
        jumpArrow: true,
        type: 'hero'
    }, {
        label: 'section-gap-0',
        type: 'section-gap',
        layers: ['parallax']
    }, {
        label: 'tickets',
        title: 'Tickets',
        titleTemplate: 'Tickets',
        type: 'content',
        template: '<p>' + filler1 + '</p><p>' + filler2 + '</p>'
    }, {
        label: 'section-gap-1',
        type: 'section-gap',
        layers: ['parallax', 'rotate']
    }, {
        label: 'charities',
        title: 'Charities',
        titleTemplate: 'Char<wbr>ities',
        type: 'content',
        template: '<p>' + filler1 + '</p><p>' + filler2 + '</p>'
    }, {
        label: 'section-gap-2',
        type: 'section-gap',
        layers: ['parallax']
    }, {
        label: 'staffing',
        title: 'Staffing',
        titleTemplate: 'Staff<wbr>ing',
        type: 'content',
        template: '<p>' + filler1 + '</p><a href="staffing/apply" class="section--staffing__apply-button">Apply to work</a>'
    }, {
        label: 'section-gap-3',
        type: 'section-gap',
        layers: ['parallax']
    }, {
        label: 'entertainment',
        title: 'Entertainment',
        titleTemplate: 'Entertain<wbr>ment',
        type: 'content',
        template: '<p>' + filler2 + '</p><a href="entertainment/apply" class="section--entertainment__apply-button">Apply to perform</a>'
    }, {
        label: 'section-gap-4',
        type: 'section-gap',
        layers: ['parallax']
    }, {
        label: 'committee',
        title: 'Committee',
        titleTemplate: 'Commi<wbr>ttee',
        type: 'content',
        template: '<p>' + filler1 + '</p><p>' + filler2 + '</p>'
    }, {
        label: 'section-gap-5',
        type: 'section-gap',
        layers: ['parallax']
    }, {
        label: 'footer',
        template: '<small>&copy; Jesus May Ball 2015</small>',
        type: 'footer'
    }];
});