"use strict";(self.webpackChunkWebComponents=self.webpackChunkWebComponents||[]).push([[657],{48657:(e,t,o)=>{o.r(t);var n=o(2568),a=[];class i extends n.Z{constructor(e){if(super(e),this.divid=e.orig.id,this.container=$(`#${this.divid}`),this.caption="YouTube",null==document.getElementById("youtubescript")){let e=document.createElement("script");e.id="youtubescript",e.src="https://www.youtube.com/player_api",document.body.appendChild(e)}this.containerDiv=this.container[0].parentElement,this.addCaption("runestone"),this.indicate_component_ready()}}window.onPlayerStateChange=function(e){let t=new n.Z,o=e.target.getCurrentTime(),a={event:"video",div_id:e.target.getIframe().id};e.data==YT.PlayerState.PLAYING?(console.log("playing "+e.target.getIframe().id),a.act="play:"+o):e.data==YT.PlayerState.ENDED?(console.log("ended "+e.target.getIframe().id),a.act="complete"):e.data==YT.PlayerState.PAUSED?(console.log("paused at "+o),a.act="pause:"+o):(console.log(`YT Player State: ${YT.PlayerState}`),a.act="ready"),t.logBookEvent(a)},window.onYouTubeIframeAPIReady=function(){$(".youtube-video").each((function(e,t){let o={};o.start=$(t).data("video-start"),-1!=$(t).data("video-end")&&(o.end=$(t).data("video-end")),new YT.Player($(t).data("video-divid"),{height:$(t).data("video-height"),width:$(t).data("video-width"),videoId:$(t).data("video-videoid"),playerVars:o,events:{onStateChange:window.onPlayerStateChange}})}))},$((function(){let e=document.createElement("script");e.src="https://www.youtube.com/player_api",document.body.appendChild(e)})),$(document).bind("runestone:login-complete",(function(){$("[data-component=youtube]").each((function(e){var t={orig:this,useRunestoneServices:eBookConfig.useRunestoneServices};a[this.id]=new i(t)}))})),void 0===window.component_factory&&(window.component_factory={}),window.component_factory.youtube=function(e){return new i(e)},window.component_factory.vimeo=function(e){return new i(e)}}}]);
//# sourceMappingURL=657.2731087b0408a0a8.bundle.js.map