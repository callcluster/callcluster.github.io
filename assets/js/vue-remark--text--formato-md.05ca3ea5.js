(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3k5y":function(e,n,a){"use strict";a.r(n);var o=a("KHd+"),i=a("UQSp"),r=a("Kw5r");function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.a.config.optionMergeStrategies;var s={VueRemarkRoot:i.a},c=function(e){var n=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===t(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?n[e]=s[e]:a[e]=function(){return s[e]}}))},l=r.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",p={excerpt:null,title:"Especificación del formato de callgraphs para callcluster `analysis.json`"};var u=function(e){e.options[d]&&(e.options[d]=p),r.a.util.defineReactive(e.options,d,p),e.options.computed=l.computed({$frontmatter:function(){return e.options[d]}},e.options.computed)},m=Object(o.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("VueRemarkRoot",[a("h1",{attrs:{id:"especificación-del-formato-de-callgraphs-para-callcluster-analysisjson"}},[a("a",{attrs:{href:"#especificaci%C3%B3n-del-formato-de-callgraphs-para-callcluster-analysisjson","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Especificación del formato de callgraphs para callcluster "),a("code",{pre:!0},[e._v("analysis.json")])]),a("p",[e._v("Este permite expresar 3 datos extraídos del análisis de un programa, a saber:")]),a("ul",[a("li",[e._v("callgraph (llamadas entre funciones)")]),a("li",[e._v("funciones: metadatos y métricas sobre las funciones que componen el programa")]),a("li",[e._v("estructura jerárquica del programa")])]),a("p",[e._v("Los campos marcados con "),a("code",{pre:!0},[e._v("(*)")]),e._v(" son opcionales: "),a("code",{pre:!0},[e._v("callcluster-visu")]),e._v(" los interpreta, pero no requiere su existencia.")]),a("h2",{attrs:{id:"archivo-emitido-por-los-extractores"}},[a("a",{attrs:{href:"#archivo-emitido-por-los-extractores","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Archivo emitido por los extractores")]),a("p",[e._v("El archivo permite agregar métricas arbitrarias a las funciones, como campos en los diccionarios contenidos en el array de funciones.")]),a("pre",[a("code",{pre:!0,attrs:{class:"language-json"}},[e._v('{\n    "calls":[\n        {\n            "from":<indice en el array \'functions\' (entero)>,\n            "to":<indice en el array \'functions\' (entero)>,\n        }\n    ],\n    "functions":[\n        {\n            "location":<Cadena de caracteres que permite vincular esta función con la ubicación donde se escribió la misma, formato libre>,\n            "name":<Nombre de la función>,\n            "written": < (*) valor booleano, indica si esta función fue escrita por el programador o no. Es opcional >,\n            "<nombre de la métrica>":<(*) valor de la métrica>\n        }\n    ],\n    "community":<un diccionario tal como definido en la sección \'diccionario Comunidad\'>\n}\n')])]),a("h2",{attrs:{id:"diccionario-comunidad"}},[a("a",{attrs:{href:"#diccionario-comunidad","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("diccionario Comunidad")]),a("p",[e._v("Representa una comunidad, y contiene instancias de sí mismo para representar niveles inferiores")]),a("pre",[a("code",{pre:!0,attrs:{class:"language-json"}},[e._v('{\n    "name":<nombre de la comunidad>,\n    "functions":<Array índices del array \'functions\'>,\n    "communities":<Array de diccionarios Comunidad>,\n    "type":<(*) nombre de este tipo de >\n}\n')])]),a("h2",{attrs:{id:"extensibilidad"}},[a("a",{attrs:{href:"#extensibilidad","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Extensibilidad")]),a("p",[e._v("Este formato está diseñado para aceptar la adición de cualquier cantidad de métricas arbitrarias. Si bien los nombres hacen referencia al caso concreto de análisis de callgraphs, podría usarse con otros fines; o para expresar otras dependencias.")])])}),[],!1,null,null,null);"function"==typeof c&&c(m),"function"==typeof u&&u(m);n.default=m.exports},UQSp:function(e,n,a){"use strict";n.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);