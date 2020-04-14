webpackJsonp([1],[,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return a}),n.d(e,"d",function(){return c}),n.d(e,"c",function(){return r}),n.d(e,"e",function(){return d}),n.d(e,"f",function(){return u});var o=n(16),i=n.n(o),s=function(t){return i.a.get("/todo/list",{params:t})},a=function(t){return i.a.get("/todo/listId",{params:t})},c=function(t){return i.a.post("/todo/addRecord",t).then(function(t){return t.data})},r=function(t){return i.a.post("/todo/editTodo",t).then(function(t){return t.data})},d=function(t){return i.a.post("/todo/editRecord",t).then(function(t){return t.data})},u=function(t){return i.a.post("/todo/addTodo",t).then(function(t){return t.data})}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var o=n(76);e.a=o.a},function(t,e,n){"use strict";var o=n(15),i=n(131),s=n(123),a=n.n(s),c=n(125),r=n.n(c);o.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Hello",component:a.a,children:[{path:"/todo/:id",name:"todo",component:r.a}]}]})},function(t,e,n){"use strict";var o=n(15),i=n(133),s=n(77),a=n(78);o.a.use(i.a);var c={todoList:[],menuOpen:!1},r={EDITTODE:function(t,e){t.todoList=e},MENUOPEN:function(t){t.menuOpen=!t.menuOpen}};e.a=new i.a.Store({actions:s,getters:a,state:c,mutations:r})},function(t,e){},function(t,e,n){n(117);var o=n(8)(n(69),n(128),null,null);t.exports=o.exports},,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(9);e.default={props:["list","index","id","init","locked"],name:"Item",data:function(){return{}},computed:{item:function(){return this.list}},methods:{onChange:function(){var t=this;console.log(2),n.i(o.e)({id:this.id,record:this.item,index:this.index}).then(function(e){t.init(),t.$store.dispatch("getTodo")})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(124),i=n.n(o);e.default={data:function(){return{todoId:""}},created:function(){var t=this;this.$store.dispatch("getTodo").then(function(){t.$nextTick(function(){t.goList(t.todoList[0].id)})})},computed:{todoList:function(){return this.$store.getters.getTodoList},menuOpen:function(){return this.$store.state.menuOpen}},components:{menus:i.a},methods:{goList:function(t){this.todoId=t,this.$router.push({name:"todo",params:{id:this.todoId}})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(9);e.default={props:["todoList","id"],computed:{todos:function(){return this.todoList},todoId:function(){return this.id}},methods:{addTodoList:function(){var t=this;n.i(o.f)({}).then(function(e){t.$store.dispatch("getTodo").then(function(){t.$nextTick(function(){setTimeout(function(){t.goList(t.todoList[t.todoList.length-1].id)},500)})})})},goList:function(t){this.$emit("go-list",t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(122),i=n.n(o),s=n(9);e.default={data:function(){return{lists:[],todo:"",text:"",isUpdate:!1}},components:{item:i.a},watch:{"$route.params.id":function(){this.init()}},created:function(){this.init()},methods:{init:function(){var t=this,e=this.$route.params.id;n.i(s.b)({id:e}).then(function(e){var n=e.data.tode,o=n.id,i=n.title,s=n.count,a=n.isDelete,c=n.locked,r=n.record;t.lists=r,t.todo={id:o,title:i,count:s,locked:c,isDelete:a}})},updateTodo:function(){var t=this;n.i(s.c)({todo:this.todo}).then(function(e){t.init(),t.$store.dispatch("getTodo")})},onAdd:function(){var t=this;n.i(s.d)({id:this.todo.id,text:this.text}).then(function(e){t.init(),t.$store.dispatch("getTodo"),t.text=""})},updateTitle:function(){this.updateTodo(),this.isUpdate=!1},onDelete:function(){this.todo.isDelete=!0,this.updateTodo()},onlock:function(){this.todo.locked=!this.todo.locked,this.updateTodo()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(15),i=n(48),s=n.n(i),a=n(45),c=n(47),r=(n.n(c),n(44)),d=n(46);r.a.start(),o.a.config.productionTip=!1,new o.a({el:"#app",router:a.a,store:d.a,template:"<App/>",components:{App:s.a}})},function(t,e,n){"use strict";n.d(e,"a",function(){return s});for(var o=n(43),i=n.n(o),s=[],a=a=[1,2,3,4,5],c=1;c<=a.length;c++)s.push(i.a.mock({id:i.a.Random.guid(),title:i.a.Random.first(),isDelete:!1,locked:i.a.Random.boolean(),record:a.map(function(){return{text:i.a.Random.cparagraph(2),isDelete:!1,checked:i.a.Random.boolean()}})}))},function(t,e,n){"use strict";var o=n(30),i=n.n(o),s=n(16),a=n.n(s),c=n(50),r=n.n(c),d=n(43),u=n.n(d),l=n(75);e.a={start:function(){var t=new r.a(a.a);t.onGet("/success").reply(200,{msg:"success"}),t.onGet("/error").reply(500,{msg:"failure"}),t.onGet("/todo/list").reply(function(t){var e=l.a.map(function(t){return{id:t.id,title:t.title,count:t.record.filter(function(t){return!1===t.checked}).length,locked:t.locked,isDelete:t.isDelete}}).filter(function(t){return!0!==t.isDelete});return new i.a(function(t,n){setTimeout(function(){t([200,{todos:e}])},200)})}),t.onGet("/todo/listId").reply(function(t){var e=t.params.id,n=l.a.filter(function(t){return!(!e||t.id!==e)})[0];return n.count=n.record.filter(function(t){return!1===t.checked}).length,new i.a(function(t,e){setTimeout(function(){t([200,{tode:n}])},200)})}),t.onPost("/todo/addTodo").reply(function(t){return l.a.push({id:u.a.Random.guid(),title:"newList",isDelete:!1,locked:!1,record:[]}),new i.a(function(t,e){setTimeout(function(){t([200])},200)})}),t.onPost("/todo/addRecord").reply(function(t){var e=JSON.parse(t.data),n=e.id,o=e.text;return l.a.some(function(t,e){if(t.id===n)return t.record.push({text:o,isDelete:!1,checked:!1}),!0}),new i.a(function(t,e){setTimeout(function(){t([200])},200)})}),t.onPost("/todo/editTodo").reply(function(t){var e=JSON.parse(t.data),n=e.todo;return l.a.some(function(t,e){if(t.id===n.id)return t.title=n.title,t.locked=n.locked,t.isDelete=n.isDelete,!0}),new i.a(function(t,e){setTimeout(function(){t([200])},200)})}),t.onPost("/todo/editRecord").reply(function(t){var e=JSON.parse(t.data),n=e.id,o=e.record,s=e.index;return l.a.some(function(t){if(t.id===n)return t.record[s]=o,!0}),new i.a(function(t,e){setTimeout(function(){t([200])},200)})})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"getTodo",function(){return a}),n.d(e,"updateMenu",function(){return c});var o=n(30),i=n.n(o),s=n(9),a=function(t){var e=t.commit;return new i.a(function(t){n.i(s.a)().then(function(n){e("EDITTODE",n.data.todos),t()})})},c=function(t){(0,t.commit)("MENUOPEN")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"getTodoList",function(){return o});var o=function(t){return t.todoList}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,n){n(116);var o=n(8)(n(70),n(127),null,null);t.exports=o.exports},function(t,e,n){n(115);var o=n(8)(n(71),n(126),null,null);t.exports=o.exports},function(t,e,n){n(119);var o=n(8)(n(72),n(130),null,null);t.exports=o.exports},function(t,e,n){n(118);var o=n(8)(n(73),n(129),null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container",class:{"menu-open":t.menuOpen}},[n("section",{staticClass:"menu"},[n("menus",{attrs:{todoList:t.todoList,id:t.todoId},on:{"go-list":t.goList}})],1),t._v(" "),n("div",{staticClass:"content-overlay",on:{click:function(e){t.$store.dispatch("updateMenu")}}}),t._v(" "),n("div",{staticClass:"content-container"},[n("router-view")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.item.isDelete,expression:"!item.isDelete"}],staticClass:"list-item  editingClass editing ",class:{checked:t.item.checked}},[n("label",{staticClass:"checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.checked,expression:"item.checked"}],attrs:{type:"checkbox",name:"checked",disabled:t.locked},domProps:{checked:Array.isArray(t.item.checked)?t._i(t.item.checked,null)>-1:t.item.checked},on:{change:t.onChange,__c:function(e){var n=t.item.checked,o=e.target,i=!!o.checked;if(Array.isArray(n)){var s=t._i(n,null);i?s<0&&(t.item.checked=n.concat(null)):s>-1&&(t.item.checked=n.slice(0,s).concat(n.slice(s+1)))}else t.item.checked=i}}}),t._v(" "),n("span",{staticClass:"checkbox-custom"})]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.text,expression:"item.text"}],attrs:{type:"text",placeholder:"写点什么。。。",disabled:t.item.checked||t.locked},domProps:{value:t.item.text},on:{change:t.onChange,input:function(e){e.target.composing||(t.item.text=e.target.value)}}}),t._v(" "),t.item.checked&&!t.locked?n("a",{staticClass:"delete-item",on:{click:function(e){t.item.isDelete=!0,t.onChange()}}},[n("span",{staticClass:"icon-trash"})]):t._e()]),t._v(" "),n("span")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:!t.todo.isDelete,expression:"!todo.isDelete"}],staticClass:"page lists-show"},[n("nav",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isUpdate,expression:"isUpdate"}],staticClass:"form list-edit-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.title,expression:"todo.title"}],attrs:{type:"text",disabled:t.todo.locked},domProps:{value:t.todo.title},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.updateTitle(e)},input:function(e){e.target.composing||(t.todo.title=e.target.value)}}}),t._v(" "),n("div",{staticClass:"nav-group right"},[n("a",{staticClass:"nav-item",on:{click:function(e){t.isUpdate=!1}}},[n("span",{staticClass:"icon-close"})])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isUpdate,expression:"!isUpdate"}],staticClass:"nav-group",on:{click:function(e){t.$store.dispatch("updateMenu")}}},[t._m(0)]),t._v(" "),n("h1",{directives:[{name:"show",rawName:"v-show",value:!t.isUpdate,expression:"!isUpdate"}],staticClass:"title-page",on:{click:function(e){t.isUpdate=!0}}},[n("span",{staticClass:"title-wrapper"},[t._v(t._s(t.todo.title))]),t._v(" "),n("span",{staticClass:"count-list"},[t._v(t._s(t.todo.count||0))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isUpdate,expression:"!isUpdate"}],staticClass:"nav-group right"},[n("div",{staticClass:"options-web"},[n("a",{staticClass:" nav-item",on:{click:t.onlock}},[t.todo.locked?n("span",{staticClass:"icon-lock"}):n("span",{staticClass:"icon-unlock"})]),t._v(" "),n("a",{staticClass:" nav-item"},[n("span",{staticClass:"icon-trash",on:{click:t.onDelete}})])])]),t._v(" "),n("div",{staticClass:" form todo-new input-symbol"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",placeholder:"请输入",disabled:t.todo.locked},domProps:{value:t.text},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.onAdd(e)},input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),n("span",{staticClass:"icon-add"})])]),t._v(" "),n("div",{staticClass:"content-scrollable list-items"},t._l(t.lists,function(e,o){return n("div",[n("item",{attrs:{list:e,index:o,id:t.todo.id,init:t.init,locked:t.todo.locked}})],1)}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"nav-item"},[n("span",{staticClass:"icon-list-unordered"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-todos"},[n("transition-group",{attrs:{tag:"div",name:"list"}},t._l(t.todos,function(e){return n("a",{key:e.id,staticClass:"list-todo activeListClass list",class:{active:e.id===t.todoId},on:{click:function(n){t.goList(e.id)}}},[e.locked?n("span",{staticClass:"icon-lock"}):t._e(),t._v(" "),e.count>0?n("span",{staticClass:"count-list"},[t._v(t._s(e.count))]):t._e(),t._v("\n      "+t._s(e.title)+"\n    ")])})),t._v(" "),n("a",{staticClass:" link-list-new",on:{click:t.addTodoList}},[n("span",{staticClass:"icon-plus"}),t._v("\n    新增\n  ")])],1)},staticRenderFns:[]}}],[74]);