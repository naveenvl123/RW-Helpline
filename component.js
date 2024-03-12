// custom-elements.js
class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<a href="index.html"><span>Home</span></a>
<a href="naming.html"><span>Naming</span></a>
<a href="2.html"><span>OFT</span></a>
<a href="picklist.html"><span>Picklist</span></a>
<a href="customertype.html"><span>Customer Type</span></a>
<a href="industry.html"><span>Industry</span></a>
<a href="jobfunction.html"><span>Job Function</span></a>
<a href="joblevel.html"><span>Job Level</span></a>
<a href="prank.html" tar>Danger☢️</a>
        `
    }
}
window.customElements.define('app-header', AppHeader)

class copiedSuccess extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<div id="copied-success" class="copied">Copied</div>
        `
    }
}
window.customElements.define('dan-copied', copiedSuccess)