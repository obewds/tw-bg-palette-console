"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var e=require("vue");const l=e.createTextVNode("TwBgPaletteConsole"),n=e.defineComponent({props:{text:{default:""}},setup(t){return(o,r)=>(e.openBlock(),e.createElementBlock("div",null,[t.text?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createTextVNode(e.toDisplayString(t.text),1)],64)):e.renderSlot(o.$slots,"default",{key:1},()=>[l])]))}});exports.TwBgPaletteConsole=n;
