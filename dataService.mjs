/*
 * dataService.mjs
 */

var classnames = cts.doc('/json/classnames.json');
if (! classnames)
classnames = fn.head(xdmp.documentGet('C:\\_projects_\\_current_\\markLogic\\Docs\\spikeFlexDatalist\\classnames-default.json', {
    "format": "json"
})).root;
xdmp.log('CLASSNAMES: ' + classnames);
for (var x in classnames)
xdmp.log(typeof x + ': ' + x + ': ' + classnames[x]);

var keyword = xdmp.getRequestField("keyword");
if (keyword) {
    keyword = keyword.trim();
    xdmp.log("KEYWORD: " + keyword);
    //classnames = xdmp.fromJSON(classnames).filter(classname => classname.name.includes(keyword.trim()))
    classnames = classnames.xpath('object-node()[contains(name, "' + keyword + '")]');
}
new Object({
    "results": classnames.toArray().sort(function (a, b) {
        if (a.name < b.name)
        return -1; else if (a.name > b.name)
        return 1; else
        return 0;
    })
});