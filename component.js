// custom-elements.js
class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <a href="index.html" class="menu-home"><span>Home</span></a>
      <a href="1.html" class="menu-1"><span>Naming</span></a>
      <a href="2.html" class="menu-2"><span>OFT</span></a>
      <a href="Update.html" target="_blank">☢️</a>
        `
    }
}
window.customElements.define('app-header', AppHeader)