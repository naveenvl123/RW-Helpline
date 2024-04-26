// custom-elements.js
class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<a href="index.html"><span>Home</span></a>
<a href="leads-repost.html"><span>LeadsRepost</span></a>
<a href="email-naming.html"><span>Naming</span></a>
<a href="email.html"><span>Email</span></a>
<a href="email-oft.html"><span>OFT</span></a>
<a href="segments-customertype.html"><span>Customer Type</span></a>
<a href="segments-industry.html"><span>Industry</span></a>
<a href="segments-jobfunction.html"><span>Job Function</span></a>
<a href="segments-joblevel.html"><span>Job Level</span></a>
<a href="prank.html" tar>Danger☢️</a>
 `
    }
}
window.customElements.define('app-header', AppHeader)