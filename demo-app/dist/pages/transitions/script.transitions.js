module.exports=function(n){function t(s){if(i[s])return i[s].exports;var e=i[s]={exports:{},id:s,loaded:!1};return n[s].call(e.exports,e,e.exports,t),e.loaded=!0,e.exports}var i={};return t.m=n,t.c=i,t.p="",t(0)}({0:function(n,t,i){n.exports=i(40)},40:function(n,t,i){"use strict";var s=i(41);n.exports={template:s,data:{visible:!0},methods:{toggleVisibility:function(){this.visible=!this.visible}}}},41:function(n,t){n.exports='<div class="screen-bar shadow-1 fixed-top">Quasar Vue Transitions</div>\n\n<h2>"Slide" Transition</h2>\n\n<p>\n  Click/Tap on the button below to see the transition in action.\n</p>\n<p>\n  <button class="primary" @click="toggleVisibility()">Toggle</button>\n</p>\n\n<p>\n  <img\n    class="responsive"\n    v-show="visible"\n    transition="slide"\n    src="assets/quasar.jpg"\n  >\n</p>\n'}});