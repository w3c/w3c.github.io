
var fs = require("fs")
,   jn = require("path").join
,   rfs = function (f) { return fs.readFileSync(jn(__dirname, f), "utf8"); }
,   head = rfs("tmpl/top.html")
,   foot = rfs("tmpl/bottom.html")
,   nav = rfs("tmpl/nav.html")
;

// this is a super simple generator
// it only looks at the .src files at the root
// it special-cases index.html
// it sandwiches content
// and that's about it

fs.readdirSync(__dirname)
    .filter(function (f) { return /\.src$/.test(f); })
    .forEach(function (f) {
        var content = rfs(f)
        ,   outName = f.replace(/\.src$/, ".html")
        ,   parts = content.split("---")
        ,   locals = JSON.parse(parts[0])
        ,   body = parts[1]
        ,   out = head.replace(/\{\{(\w+)\}\}/g, function (m, p1) {
                if (p1 === "h1" && !locals.h1) return locals.title;
                return locals[p1] || "XXX";
            })
        ;
        out += nav;
        out += body + foot;
        fs.writeFileSync(jn(__dirname, outName), out, "utf8");
    })
;

