(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3],{303:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(2),n(1),n(6),n(3),n(7);var r=n(0),o=n(80);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={data:function(){return{}},computed:c(c({},Object(o.d)(["history","drill"])),Object(o.b)(["countHistory","reportCard","reportCardLast"])),mounted:function(){},methods:c(c({},Object(o.c)(["removeHistory"])),{},{removeAnserHistory:function(){this.removeHistory()}})},d=n(69),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.countHistory?n("div",{staticClass:"my-3 py-3 text-center"},[n("h3",[t._v("かいとうのきろく")]),t._v(" "),n("div",[n("b-card",[t._l(t.reportCardLast,(function(e){return n("div",{key:e.id},[n("p",[t._v("さいごのせいせき"),n("br"),t._v("ドリルID :"+t._s(e.drill.id))]),t._v(" "),n("b-card",[n("ul",t._l(e.records,(function(e){return n("li",{key:e.id,staticClass:"card-text text-left"},[t._v("\n                第"+t._s(e.recordID)+"問: "+t._s(e.question)+" =\n                "+t._s(e.answerResult)+"\n                "),e.isCorrect?n("span",{},[n("b-badge",{attrs:{variant:"danger"}},[t._v("正解")])],1):n("span",[n("b-badge",{attrs:{variant:"secondary"}},[t._v("不正解")])],1)])})),0)])],1)})),t._v(" "),n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"morecol",expression:"'morecol'"}],staticClass:"my-1",attrs:{size:"sm",variant:"success",blocks:"",pill:""}},[t._v("もっとみる")]),t._v(" "),n("b-collapse",{staticClass:"my-1",attrs:{id:"morecol"}},t._l(t.reportCard,(function(e){return n("div",{key:e.id,staticClass:"card-text text-center"},[n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"collapse-"+e.drill.id+"-inner",expression:"'collapse-' + card.drill.id + '-inner'"}],staticClass:"my-1",attrs:{size:"sm",blocks:"",pill:""}},[t._v("ドリルID: "+t._s(e.drill.id))]),t._v(" "),n("b-collapse",{staticClass:"my-1",attrs:{id:"collapse-"+e.drill.id+"-inner"}},[n("b-card",[n("ul",t._l(e.records,(function(e){return n("li",{key:e.id,staticClass:"card-text text-left"},[t._v("\n                    第"+t._s(e.recordID)+"問: "+t._s(e.question)+" =\n                    "+t._s(e.answerResult)+"\n                    "),e.isCorrect?n("span",{},[n("b-badge",{attrs:{variant:"danger"}},[t._v("正解")])],1):n("span",[n("b-badge",{attrs:{variant:"secondary"}},[t._v("不正解")])],1)])})),0)])],1)],1)})),0),t._v(" "),n("div",[n("b-btn",{attrs:{variant:"outline-success",pill:"",blocks:"",size:"sm"},on:{click:function(e){return t.removeAnserHistory()}}},[t._v("回答履歴を削除する")])],1)],2)],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports},304:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(2),n(1),n(6),n(3),n(7);var r=n(0),o=(n(22),n(80));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={props:{isOpenDrill:{type:Boolean}},data:function(){return{isInputOrigin:!1,isNowChanging:!1,noName:"とうろくされていません",options:[{value:"",text:"とうろくしない"},{value:"どらえもん",text:"どらえもん"},{value:"のびた",text:"のびた"},{value:"しずか",text:"しずか"},{value:"スネオ",text:"スネオ"},{value:"ジャイアン",text:"ジャイアン"}]}},computed:c(c({},Object(o.d)(["name"])),{},{inputName:{get:function(){return this.name},set:function(t){this.addName(t)}}}),mounted:function(){},methods:c(c({},Object(o.c)(["addName","addDrillID"])),{},{startName:function(){this.isNowChanging=!0},endName:function(){this.isNowChanging=!1},startSelectName:function(){this.isInputOrigin=!1},endSelectName:function(){this.isInputOrigin=!0}})},d=n(69),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isOpenDrill?n("div",[n("h3",[t._v("じぶんのなまえ")]),t._v(" "),n("b-alert",{attrs:{show:"",variant:"info"}},[t._v(t._s(t.name||t.noName))])],1):n("div",[n("h3",[t._v("じぶんのなまえ")]),t._v(" "),n("b-row",[n("b-col",{staticClass:"pr-1",attrs:{cols:"8"}},[n("b-alert",{attrs:{show:"",variant:"info"}},[t._v(t._s(t.name||t.noName))])],1),t._v(" "),n("b-col",{staticClass:"pl-1",attrs:{cols:"4"}},[t.isNowChanging?n("div",[n("b-btn",{attrs:{block:"",pill:"",size:"lg",variant:"outline-success"},on:{click:t.endName}},[t._v("ほぞん")])],1):n("div",[n("b-btn",{attrs:{block:"",pill:"",size:"lg",variant:"outline-secondary"},on:{click:t.startName}},[t._v("名前")])],1)])],1),t._v(" "),t.isNowChanging?n("b-row",[n("b-col",{staticClass:"pb-2",attrs:{cols:"12"}},[t.isInputOrigin?n("b-form-input",{attrs:{placeholder:"なまえ"},model:{value:t.inputName,callback:function(e){t.inputName=e},expression:"inputName"}}):n("b-form-select",{attrs:{options:t.options},model:{value:t.inputName,callback:function(e){t.inputName=e},expression:"inputName"}})],1)],1):t._e(),t._v(" "),t.isNowChanging?n("b-row",[n("b-col",{staticClass:"pb-2",attrs:{cols:"12"}},[t.isInputOrigin?n("b-btn",{attrs:{block:"",pill:"",size:"lg",variant:"outline-secondary"},on:{click:t.startSelectName}},[t._v("なまえをえらぶ")]):n("b-btn",{attrs:{block:"",pill:"",size:"lg",variant:"outline-secondary"},on:{click:t.endSelectName}},[t._v("ほかのなまえ")])],1)],1):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports},317:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{}},mounted:function(){},methods:{}},o=n(69),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("b-container",{staticClass:"bg-light my-3"},[n("h1",[t._v("たしざん")]),t._v(" "),n("h2",[t._v("ドリルのじゅんび")]),t._v(" "),n("p",[t._v("じぶんのなまえをとうろくしてみよう!")]),t._v(" "),n("p",[t._v("へんこうするボタンをおすとなまえがえらべるよ")]),t._v(" "),n("my-name")],1),t._v(" "),n("b-container",{staticClass:"bg-light mt-3"},[n("anser-history")],1),t._v(" "),n("b-container",{staticClass:"bg-light my-3 p-3"},[n("b-row",[n("b-col",{staticClass:"pb-2",attrs:{lg:"6"}},[n("b-btn",{attrs:{block:"",pill:"",size:"lg",variant:"outline-secondary"},on:{click:function(e){return t.$router.push("/addition/time-limit")}}},[t._v("はやおしドリル")])],1),t._v(" "),n("b-col",{staticClass:"pb-2",attrs:{lg:"6"}},[n("b-btn",{attrs:{block:"",pill:"",size:"lg",variant:"outline-secondary"},on:{click:function(e){return t.$router.push("/addition/number-limit")}}},[t._v("じっくりドリル")])],1)],1),t._v(" "),n("b-row",[n("b-col",{staticClass:"pb-2",attrs:{lg:"12"}},[n("b-btn",{attrs:{block:"",pill:"",size:"lg",variant:"outline-success"},on:{click:function(e){return t.$router.push("/")}}},[t._v("さいしょにもどる")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MyName:n(304).default,AnserHistory:n(303).default})}}]);