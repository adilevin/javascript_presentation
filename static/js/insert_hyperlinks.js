/**
* Created by alevin on 1/2/2015.
*/

var links = [
    {title:'Three.js',url:'http://threejs.org/examples/#webgl_materials_bumpmap'},
    {title:'3D viewer',url:'http://127.0.0.1:5000'},
    {title:'Zen',url:'https://developer.mozilla.org/en-US/demos/detail/zen-photon-garden/launch'},
    {title:'Popularity',url:'https://www.openhub.net/languages/compare?measure=contributors&percent=true&l0=javascript&l1=python&l2=java&l3=csharp&l4=cpp&l5=-1&commit=Update'},
    {url:'http://missictteacher.com/ocr-computing/tim-berners-lee/',class:'Tim-Berners-Lee'},
	{title:'WWW',url:'http://www.w3.org/History/19921103-hypertext/hypertext/WWW/TheProject.html'},
    {title:'Static',url:'html/static_content.html'},
    {title:'Dynamic',url:'dynamic'},
    {title:'Ajax',url:'html/ajax.html'},
    {title:'w3schools',url:'http://www.w3schools.com/js/'},
    {title:'Objects',url:'http://www.objectplayground.com/'},
    {title:'Mixins',url:'http://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/'},
    {url:'http://jquery.com/',class:'JQuery'},
    {title:'Node.js',url:'http://nodejs.org/'},
    {title:'Jasmine',url:'html/jasmine_tests.html'},
    {title:'Typescript',url:'http://www.typescriptlang.org/Playground'},
    {title:'Coffeescript',url:'http://coffeescript.org/'},
    {title:'WinJS',url:'http://try.buildwinjs.com'},
    {title:'ES6',url:'http://sankhs.com/jschannel-es6/#/'}
];

function getColor(index) {
    var b = 128 + Math.floor(Math.sin(index*0.6)*128);
    var g = 0;
    var r = 128 + Math.floor(Math.cos(index*0.6)*128);
    return { backgroundColor: 'rgb('+r+','+g+','+b+')', textColor: 'white' }
}

function assignStyleToLink(index) {
    var color = getColor(index);
    var elem = $("#link" + index);
    elem.css('background-color',color.backgroundColor).
         css('color',color.textColor).
         mouseover(function() { elem.stop().fadeTo("fast",1.0); }).
         mouseout(function() { elem.stop().fadeTo("slow",0.25); })
}

$(document).ready(function(){
    var template_text = '<a id="link{{ index }}" href="{{ url }}" class="{{ class }}">{{ title }}</a>';
    for(var i=0;i<links.length;i+=1) {
        var link = links[i];
        link.index = i;
        $("body").append(Mustache.render(template_text, link));
        assignStyleToLink(i);
    }
});
