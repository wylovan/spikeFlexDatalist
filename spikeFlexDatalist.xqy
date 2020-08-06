xquery version "1.0-ml";

declare default element namespace "http://www.w3.org/1999/xhtml";

declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "xhtml";
declare option output:indent "no";
declare option output:indent-untyped "no";

xdmp:set-response-content-type("text/html"),
"<!DOCTYPE html>",
let $title as xs:string := "Spike FlexDatalist",
    $flexgridPath as xs:string := "jquery-flexdatalist-2.2.4"
return
    element html {
        attribute lang {"en-us"},
        element head {
            element title {$title},
            for $href as xs:string in (
                concat($flexgridPath, "/jquery.flexdatalist.min.css"),
                "page.css"
            )
            return
                element link {
                    attribute href {$href},
                    attribute rel {"stylesheet"},
                    attribute type {"text/css"}
                }
        },
        element body {
            element {"div"} {
                attribute id {"imx-base"},
                element header {
                    element h1 {$title}
                },
                element div {
                    attribute class {"imx-datalist"},
                    element input {
                        attribute type {"text"},
                        attribute class {"my-flexdatalist"},
                        attribute autofocus {"autofocus"}
                    },
                    element div {
                        attribute id {"imx-results"},
                        text {"&#160;"}
                    }
                },
                element button {
                    attribute type {"button"},
                    text {"Show data"}
                }
            },
            for $path as xs:string in (
                "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
                concat($flexgridPath, "/jquery.flexdatalist.min.js"),
                "page.js"
            )
            return
                element script {
                    attribute src {$path}
                }
        }
    }
