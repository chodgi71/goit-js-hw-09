!function(){var t=null,n={body:document.querySelector("body"),btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};n.btnStart.addEventListener("click",(function(){n.btnStart.disabled||(t=setInterval((function(){return n.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3));n.btnStart.disabled=!0,n.btnStop.disabled=!1})),n.btnStop.addEventListener("click",(function(){n.btnStart.disabled=!1,n.btnStop.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.ee726ffb.js.map
