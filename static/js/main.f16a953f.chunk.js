(this.webpackJsonpaudio_bot_app=this.webpackJsonpaudio_bot_app||[]).push([[0],{158:function(e,t,a){e.exports=a(249)},248:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);a(159),a(185),a(187),a(188),a(190),a(191),a(192),a(193),a(194),a(195),a(196),a(197),a(199),a(200),a(201),a(202),a(203),a(204),a(205),a(206),a(207),a(208),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227);var n=a(0),r=a.n(n),c=a(83),s=a.n(c),i=a(18),o=a.n(i),l=a(25),u=a.n(l),d=a(34),h=a(84),p=a(85),m=a(92),k=a(91),f=a(16),g=(a(247),a(248),function(e){Object(m.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).pickedTracks=[],n.vkId=null,n.telegramId=null,n.hash=null,n.icon="data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m0%200h24v24h-24z%22%20opacity%3D%22.4%22%2F%3E%3Cpath%20d%3D%22m13%2011.4849987v5.6482897c0%204.5123987-.8747233%205.3834431-4.37440289%205.8421935-1.6682259.2186769-3.62559711-.5384568-3.62559711-3.1617096%200-1.2814037.80181302-2.498263%202.46114282-2.8162494%201.26723039-.2428462-.09078118.0181935%202.77607228-.5140396.6959753-.1292083.7748413-.3782301.7748413-.908791%200-.2664094-.0013183-2.5951438-.0022416-4.1936475l-.0073943-.0003862v-4.31781414s-.0054461-2.05827203%200-3.08739758c.0065136-1.23086488.6796458-1.68321833%202.6637921-2.08397579%200%200%203.0232113-.57396781%204.6852252-.87541989.367783-.06670761.6485622.07018054.6485622.49202579%200%200-.0106774%202.62210108%200%204.05433854.0031006.41590408-.168424.60420104-.5899711.67902227-1.6816987.29848801-4.8649278.86036181-4.8649278.86036181-.3738792.09182758-.5451011.35499958-.5451011.73329156z%22%20fill%3D%22%236f99c8%22%20fill-rule%3D%22nonzero%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",n.API_URL="https://s23209.h10.modhost.pro",n.onCheckboxChange=function(e){var t=JSON.parse(e.currentTarget.dataset.track);n.pickedTracks[t.index]=n.pickedTracks[t.index]?null:{url:t.url,title:t.title,artist:t.artist}},n.sendTracks=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.vkId){e.next=4;break}return e.next=3,o.a.send("VKWebAppJoinGroup",{group_id:184374271});case 3:return e.abrupt("return",e.sent);case 4:if(n.telegramId){e.next=9;break}return e.next=7,fetch("".concat(n.API_URL,"/getHash?id=").concat(n.vkId)).then((function(e){return e.json()}));case 7:return n.hash=e.sent.hash,e.abrupt("return",n.setActiveModal("TelegramAuth"));case 9:if(n.pickedTracks=n.pickedTracks.filter((function(e){return!!e})),n.pickedTracks.length){e.next=12;break}return e.abrupt("return");case 12:fetch("".concat(n.API_URL,"/sendTracks?id=").concat(n.telegramId),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.pickedTracks)});case 13:case"end":return e.stop()}}),e)}))),n.setActiveModal=function(e){n.setState({activeModal:e})},n.state={scheme:"bright_light",tracks:[],activeModal:null},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.a.subscribe(function(){var e=Object(d.a)(u.a.mark((function e(a){var n,r,c,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.detail,r=n.type,c=n.data,"VKWebAppUpdateConfig"!==r){e.next=5;break}t.setState({scheme:c.scheme}),e.next=34;break;case 5:if("VKWebAppInitResult"!==r){e.next=34;break}return e.next=8,o.a.send("VKWebAppGetUserInfo",{});case 8:return t.vkId=e.sent.id,e.next=11,o.a.send("VKWebAppStorageGet",{keys:["telegramId"]});case 11:return t.telegramId=e.sent.keys[0].value,console.log(t.telegramId),e.next=15,fetch("".concat(t.API_URL,"/getUser?id=").concat(t.vkId)).then((function(e){return e.json()}));case 15:if(s=e.sent,console.log(s),s.permission){e.next=21;break}return e.next=21,o.a.send("VKWebAppJoinGroup",{group_id:184374271});case 21:if(t.telegramId&&"false"!==t.telegramId){e.next=33;break}if(console.log(s),t.telegramId=s.telegramId,t.telegramId){e.next=29;break}return e.next=27,fetch("".concat(t.API_URL,"/getHash?id=").concat(t.vkId)).then((function(e){return e.json()}));case 27:return t.hash=e.sent.hash,e.abrupt("return",t.setActiveModal("TelegramAuth"));case 29:return e.next=31,o.a.send("VKWebAppStorageSet",{key:"telegramId",value:"".concat(t.telegramId)});case 31:i=e.sent,console.log(i);case 33:fetch("".concat(t.API_URL,"/getTracks?id=").concat(t.vkId)).then((function(e){return e.json()})).then((function(e){t.pickedTracks=new Array(e.tracks.length),t.setState({tracks:e.tracks})}));case 34:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=r.a.createElement(f.h,{activeModal:this.state.activeModal,onClose:this.modalBack},r.a.createElement(f.g,{id:"TelegramAuth",onClose:function(){return e.setActiveModal(null)},header:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0441\u044f \u0432 \u0442\u0435\u043b\u0435\u0433\u0440\u0430\u043c\u0435",caption:"\u0427\u0442\u043e\u0431\u044b \u044f \u0441\u043c\u043e\u0433 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u0431\u0435 \u0442\u0440\u0435\u043a \u0432 \u0442\u0435\u043b\u0435\u0433\u0440\u0430\u043c, \u0442\u0435\u0431\u0435 \u043d\u0443\u0436\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043d\u0435\u043c"},r.a.createElement(f.a,{style:{marginTop:16},mode:"secondary",size:"xl",href:"https://t.me/ilushaR_bot?start=".concat(this.vkId,"-").concat(this.hash),target:"_blank"},"Telegram Authorization \ud83d\udd13")));return r.a.createElement(f.d,{scheme:this.state.scheme},r.a.createElement(f.n,{activePanel:"main",modal:t},r.a.createElement(f.i,{id:"main"},r.a.createElement(f.j,{left:r.a.createElement(f.k,{onClick:Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e.API_URL,"/getHash?id=").concat(e.vkId)).then((function(e){return e.json()}));case 2:e.hash=t.sent.hash,e.setActiveModal("TelegramAuth");case 4:case"end":return t.stop()}}),t)})))},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435")},"Audio Bot"),this.state.tracks.map((function(t,a){return r.a.createElement(f.e,{key:t.id},r.a.createElement(f.m,{before:r.a.createElement(f.b,{size:"m",style:{width:40,height:40,marginRight:10,background:"url(".concat(t.album&&t.album.thumb?t.album.thumb.photo_68:e.icon,") no-repeat center #e5ebf1"),backgroundSize:"cover"}}),after:r.a.createElement(f.c,{"data-track":JSON.stringify({index:a,url:t.url,title:t.title,artist:t.artist}),onChange:e.onCheckboxChange}),description:t.artist},t.title))})),r.a.createElement(f.f,{vertical:"bottom"},r.a.createElement(f.l,{wide:!0}),r.a.createElement(f.a,{onClick:this.sendTracks,size:"xl"},"\u0421\u043a\u0430\u0447\u0430\u0442\u044c")))))}}]),a}(r.a.Component));o.a.send("VKWebAppInit"),s.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.f16a953f.chunk.js.map