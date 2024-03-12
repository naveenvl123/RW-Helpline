// custom-elements.js
class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <a href="index.html"><span>Home</span></a>
      <a href="naming.html"><span>Naming</span></a>
      <a href="2.html"><span>OFT</span></a>
      <a href="picklist.html"><span>Picklist</span></a>
      <a href="prank.html" tar>Danger☢️</a>
        `
    }
}
window.customElements.define('app-header', AppHeader)