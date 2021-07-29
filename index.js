const { get } = require('powercord/http');
const { Plugin } = require('powercord/entities');
const injectCss = (id, css) => {
    const style = document.createElement('style');
    style.id = id;
    style.innerText = css;
    document.head.appendChild(style);
    return style;
}


module.exports = class txtanim extends Plugin {
  startPlugin() {
  	injectCss('Reziztslide', `
@keyframes slide-up {
    0% {
        opacity: 0;
        transform: translateX(20px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
.message-2qnXI6 {
  animation: slide-up 0.4s ease;
}
`);
  }

  pluginWillUnload() {
    injectCss('Reziztslide', `
@keyframes slide-up {
    100% {
        opacity: 0;
        transform: translateX(20px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
.message-2qnXI6 {
  animation: slide-up 0.4s ease;
}
`);
  }
}
