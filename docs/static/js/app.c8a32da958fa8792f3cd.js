webpackJsonp([1],{1068:function(t,s,n){var e=n(2)(n(8),n(1070),null,null);t.exports=e.exports},1069:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),n("Kanban",{attrs:{stages:t.statuses,blocks:t.blocks},on:{"update-block":t.updateBlock}},[t._l(t.statuses,function(s){return n("div",{key:s,slot:s},[n("h2",[t._v("\n        "+t._s(s)+"\n        "),n("a",[t._v("+")])])])}),t._v(" "),t._l(t.blocks,function(s){return n("div",{key:s.id,slot:s.id},[n("div",[n("strong",[t._v("id:")]),t._v(" "+t._s(s.id)+"\n      ")]),t._v(" "),n("div",[t._v("\n        "+t._s(s.title)+"\n      ")])])})],2)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"section"},[n("h4",[t._v("\n      Vue adoptation of Ettric's\n      "),n("a",{attrs:{href:"//codepen.io/ettrics/pen/QbPEeg"}},[t._v("Codepen")])])])}]}},1070:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"drag-container"},[n("ul",{staticClass:"drag-list"},t._l(t.stages,function(s){return n("li",{key:s,staticClass:"drag-column",class:(e={},e["drag-column-"+s]=!0,e)},[n("span",{staticClass:"drag-column-header"},[t._t(s,[n("h2",[t._v(t._s(s))])])],2),t._v(" "),n("div",{staticClass:"drag-options"}),t._v(" "),n("ul",{ref:"list",refInFor:!0,staticClass:"drag-inner-list",attrs:{"data-status":s}},[t._t("top"),t._v(" "),t._l(t.getBlocks(s),function(s){return n("li",{key:s.id,staticClass:"drag-item",attrs:{"data-block-id":s.id}},[t._t(s.id,[n("strong",[t._v(t._s(s.status))]),t._v(" "),n("div",[t._v(t._s(s.id))])])],2)})],2)]);var e}))])},staticRenderFns:[]}},16:function(t,s){},3:function(t,s,n){n(16);var e=n(2)(n(7),n(1069),null,null);t.exports=e.exports},6:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=n(4),a=n(3),o=n.n(a);e.a.config.productionTip=!1,new e.a({el:"#app",template:"<App/>",components:{App:o.a}})},7:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=n(17),a=n.n(e),o=n(1064),i=(n.n(o),n(1068)),r=n.n(i);s.default={name:"app",components:{Kanban:r.a},data:function(){return{statuses:["on-hold","in-progress","needs-review","approved"],blocks:[]}},mounted:function(){for(var t=0;t<=10;t+=1)this.blocks.push({id:t,status:this.statuses[Math.floor(4*Math.random())],title:a.a.company.bs()})},methods:{updateBlock:n.i(o.debounce)(function(t,s){this.blocks.find(function(s){return s.id===Number(t)}).status=s},500)}}},8:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=n(15),a=n.n(e);s.default={name:"KanbanBoard",props:{stages:{},blocks:{}},data:function(){return{}},computed:{localBlocks:function(){return this.blocks}},methods:{getBlocks:function(t){return this.localBlocks.filter(function(s){return s.status===t})}},mounted:function(){var t=this;a()(this.$refs.list).on("drag",function(t){t.classList.add("is-moving")}).on("drop",function(s,n){var e=0;for(e=0;e<n.children.length&&!n.children[e].classList.contains("is-moving");e+=1);t.$emit("update-block",s.dataset.blockId,n.dataset.status,e)}).on("dragend",function(t){t.classList.remove("is-moving"),window.setTimeout(function(){t.classList.add("is-moved"),window.setTimeout(function(){t.classList.remove("is-moved")},600)},100)})}}}},[6]);
//# sourceMappingURL=app.c8a32da958fa8792f3cd.js.map