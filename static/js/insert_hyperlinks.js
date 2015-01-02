/**
* Created by alevin on 1/2/2015.
*/

var links = [
    {title:'Static',url:'html/static_content.html'},
    {title:'Dynamic',url:'dynamic'},
    {title:'Popularity',url:'https://www.openhub.net/languages/compare?measure=contributors&percent=true&l0=csharp&l1=cpp&l2=java&l3=javascript&l4=python&l5=-1&commit=Update'},
    {title:'Ajax',url:'html/ajax.html'},
    {title:'w3schools',url:'http://www.w3schools.com/js/'},
    {title:'Objects',url:'http://www.objectplayground.com/'},
    {title:'Mixins',url:'http://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/'},
    {title:'JSLint',url:'http://www.jslint.com/'},
    {title:'QUnit',url:'html/qunit_tests.html'},
    {title:'Typescript',url:'http://www.typescriptlang.org/Playground'},
    {title:'Coffeescript',url:'http://coffeescript.org/'},
    {title:'Dart',url:'https://www.dartlang.org/'},
    {title:'ES6',url:'http://sankhs.com/jschannel-es6/#/'}
];

function assignStyleToLink(index) {
    var r = 100 + (index*50) % 256;
    var g = (index*120) % 256;
    var b = (index*20) % 256;
    var elem = $("#link" + index)
    elem.css('background-color','rgb('+r+','+g+','+b+')').
         css('color',(r+g+b > 256*3/2) ? 'black' : 'white').
         mouseover(function() {
            elem.stop().fadeTo("fast",1.0);
         }).
         mouseout(function() {
            elem.stop().fadeTo("slow",0.25);
         })
}

$(document).ready(function(){
    var template_text = '<a id="link{{ index }}" href="{{ url }}">{{ title }}</a>'
    for(var i=0;i<links.length;i+=1) {
        var link = links[i];
        link.index = i;
        $("body").append(Mustache.render(template_text, link));
        assignStyleToLink(i);
    }
});
