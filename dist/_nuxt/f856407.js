(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{303:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(2),r(1),r(6),r(3),r(7);var n=r(0),l=r(80);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{}},computed:c(c({},Object(l.d)(["history","drill"])),Object(l.b)(["countHistory","reportCard","reportCardLast"])),mounted:function(){},methods:c(c({},Object(l.c)(["removeHistory"])),{},{removeAnserHistory:function(){this.removeHistory()}})},h=r(69),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.countHistory?r("div",{staticClass:"my-3 py-3 text-center"},[r("h3",[t._v("かいとうのきろく")]),t._v(" "),r("div",[r("b-card",[t._l(t.reportCardLast,(function(e){return r("div",{key:e.id},[r("p",[t._v("さいごのせいせき"),r("br"),t._v("ドリルID :"+t._s(e.drill.id))]),t._v(" "),r("b-card",[r("ul",t._l(e.records,(function(e){return r("li",{key:e.id,staticClass:"card-text text-left"},[t._v("\n                第"+t._s(e.recordID)+"問: "+t._s(e.question)+" =\n                "+t._s(e.answerResult)+"\n                "),e.isCorrect?r("span",{},[r("b-badge",{attrs:{variant:"danger"}},[t._v("正解")])],1):r("span",[r("b-badge",{attrs:{variant:"secondary"}},[t._v("不正解")])],1)])})),0)])],1)})),t._v(" "),r("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"morecol",expression:"'morecol'"}],staticClass:"my-1",attrs:{size:"sm",variant:"success",blocks:"",pill:""}},[t._v("もっとみる")]),t._v(" "),r("b-collapse",{staticClass:"my-1",attrs:{id:"morecol"}},t._l(t.reportCard,(function(e){return r("div",{key:e.id,staticClass:"card-text text-center"},[r("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"collapse-"+e.drill.id+"-inner",expression:"'collapse-' + card.drill.id + '-inner'"}],staticClass:"my-1",attrs:{size:"sm",blocks:"",pill:""}},[t._v("ドリルID: "+t._s(e.drill.id))]),t._v(" "),r("b-collapse",{staticClass:"my-1",attrs:{id:"collapse-"+e.drill.id+"-inner"}},[r("b-card",[r("ul",t._l(e.records,(function(e){return r("li",{key:e.id,staticClass:"card-text text-left"},[t._v("\n                    第"+t._s(e.recordID)+"問: "+t._s(e.question)+" =\n                    "+t._s(e.answerResult)+"\n                    "),e.isCorrect?r("span",{},[r("b-badge",{attrs:{variant:"danger"}},[t._v("正解")])],1):r("span",[r("b-badge",{attrs:{variant:"secondary"}},[t._v("不正解")])],1)])})),0)])],1)],1)})),0),t._v(" "),r("div",[r("b-btn",{attrs:{variant:"outline-success",pill:"",blocks:"",size:"sm"},on:{click:function(e){return t.removeAnserHistory()}}},[t._v("回答履歴を削除する")])],1)],2)],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports},306:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(2),r(1),r(6),r(3),r(7);var n=r(0),l=(r(14),r(228),r(80));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{drillMode:"sample",isBeforeDrill:!0,isAnswering:!1,isAfterAnswering:!1,isAfterDrill:!1,q1:{left:0,right:0,total:0},q2:{left:0,right:0,total:0},q3:{left:0,right:0,total:0},answerBtn:[],answer:"",correctAnswer:{left:0,right:0,total:0},isSuccess:!1,input:""}},computed:c(c({},Object(l.d)(["name","numberQ","record","drill","history"])),Object(l.b)(["countDrillHistory"])),mounted:function(){},methods:c(c({},Object(l.c)(["addName","addDrillID","addRecordID","addQuestion","addAnswer","addAnswerResult","addIsCorrect","addStartTime","addEndTime","pushHistory","pushDrillHistory","addDrillType","addDrillStartTime","addDrillEndTime"])),{},{initDrill:function(){var t=1;this.countDrillHistory&&(t=this.countDrillHistory+1),this.addDrillID(t),this.addDrillType(this.drillMode);var e=new Date;this.addDrillStartTime(e.toLocaleString("ja"))},startDrill:function(){this.initDrill(),this.addRecordID(0),this.nextQuestion(),this.isBeforeDrill=!1,this.isAnswering=!0,this.isAfterAnswering=!1,this.isAfterDrill=!1},stopDrill:function(){this.isBeforeDrill=!1,this.isAnswering=!1,this.isAfterAnswering=!1,this.isAfterDrill=!0},createQuestion:function(){var t=Math.floor(11*Math.random()),e=Math.floor(11*Math.random());return{left:t,right:e,total:t+e}},selectAnser:function(){this.q1=this.createQuestion(),this.q2=this.createQuestion(),this.q3=this.createQuestion(),this.correctAnswer=this.q1;var t=new Date;this.addStartTime(t.toLocaleString("ja"));var e=[[this.q1,this.q2,this.q3],[this.q1,this.q3,this.q2],[this.q2,this.q3,this.q1],[this.q2,this.q1,this.q3],[this.q3,this.q1,this.q2],[this.q3,this.q2,this.q1]],r=Math.floor(Math.random()*e.length);this.answerBtn=e[r]},checkAnser:function(t){if(this.input=t,t===this.correctAnswer.total?(this.answer="せいかい",this.isSuccess=!0):(this.answer="まちがい",this.isSuccess=!1),this.addAnserHistory(t),this.record.recordID>=this.numberQ){this.isBeforeDrill=!1,this.isAnswering=!1,this.isAfterAnswering=!0,this.isAfterDrill=!0,this.addRecordID(0);var e=new Date;this.addDrillEndTime(e.toLocaleString("ja"));var r=c({},this.drill);this.pushDrillHistory(r)}else this.isBeforeDrill=!1,this.isAnswering=!1,this.isAfterAnswering=!0,this.isAfterDrill=!1},addAnserHistory:function(t,e){var r=new Date;this.addQuestion("".concat(this.correctAnswer.left,"+").concat(this.correctAnswer.right)),this.addAnswer(Number("".concat(this.correctAnswer.total))),this.addAnswerResult(t),this.addIsCorrect(this.isSuccess),this.addEndTime(r.toLocaleString("ja"));var n=c({},this.record);this.pushHistory(n)},nextQuestion:function(){var t=this.record.recordID;this.addRecordID(t+1),this.selectAnser(),this.isBeforeDrill=!1,this.isAnswering=!0,this.isAfterAnswering=!1,this.isAfterDrill=!1}})},h=r(69),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-3"},[r("h3",{staticClass:"text-center"},[t._v("たしざん "+t._s(t.record.recordID)+" 問")]),t._v(" "),t.isBeforeDrill?r("div",{staticClass:"text-center"},[r("b-row",[r("b-col",{staticClass:"my-2",attrs:{lg:"12"}},[r("b-btn",{attrs:{block:"",pill:"",size:"lg",variant:"outline-danger"},on:{click:t.startDrill}},[t._v("スタート")])],1)],1)],1):t._e(),t._v(" "),t.isAnswering?r("div",{staticClass:"text-center"},[r("b-alert",{staticClass:"h1",attrs:{show:"",variant:"success"}},[t._v(t._s(t.q1.left)+"+"+t._s(t.q1.right)+"=□")]),t._v(" "),r("p",{staticClass:"text-center my-3"},[t._v("正解をクリック")]),t._v(" "),r("b-row",{staticClass:"my-3"},t._l(t.answerBtn,(function(e){return r("b-col",{key:e.id,staticClass:"text-center",attrs:{cols:"4"}},[r("b-btn",{attrs:{block:"",pill:"",size:"lg",variant:"outline-danger"},on:{click:function(r){return t.checkAnser(e.total)}}},[t._v(t._s(e.total))])],1)})),1),t._v(" "),r("b-button",{attrs:{size:"lg"},on:{click:t.stopDrill}},[t._v("とちゅうでやめる")])],1):t._e(),t._v(" "),t.isAfterAnswering?r("div",{staticClass:"text-center"},[t.isSuccess?r("b-alert",{staticClass:"h1",attrs:{show:"",variant:"danger"}},[t._v(t._s(t.q1.left)+"+"+t._s(t.q1.right)+"="+t._s(t.input))]):r("b-alert",{staticClass:"h1",attrs:{show:"",variant:"dark"}},[t._v(t._s(t.q1.left)+"+"+t._s(t.q1.right)+"="+t._s(t.input))]),t._v(" "),r("p",{staticClass:"my-3"},[t._v("入力したこたえ->「"+t._s(t.input)+"」"+t._s(t.answer))]),t._v(" "),!1===t.isAfterDrill?r("div",{staticClass:"my-3"},[r("b-btn",{attrs:{block:"",pill:"",size:"lg",variant:"outline-danger"},on:{click:t.nextQuestion}},[t._v("次の問題")])],1):t._e(),t._v(" "),!1===t.isAfterDrill?r("div",[r("b-button",{attrs:{size:"lg"},on:{click:t.stopDrill}},[t._v("とちゅうでやめる")])],1):t._e(),t._v(" "),t.isAfterDrill?r("div",{staticClass:"text-center"},[t._v("\n      ドリルがおわりました。\n      "),r("p",[t._v("こんかいのせいせき")]),t._v(" "),r("anser-history")],1):t._e()],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AnserHistory:r(303).default})}}]);