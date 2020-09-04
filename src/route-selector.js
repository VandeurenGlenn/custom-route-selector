import SelectorMixin from '../../custom-select-mixins/src/selector-mixin.js';
const define  = klass => customElements.define('custom-selector', klass)
export default define(class CustomRouteSelector extends SelectorMixin(HTMLElement) {
  
  get hashBang() {
    return this.hasAttribute('hash-bang')
  }
  
  set hashBang(value) {
    if (value) return this.setAttribute('hash-bang', '')
    this.removeAttribute('hash-bang')
  }
  
  constructor() {
    super();
    this._onhashchange = this._onhashchange.bind(this)
    
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = '<slot></slot>';
    
    
    this.setAttribute('attr-for-selected', 'data-route')
  }
  
  connectedCallback() {
    if (super.connectedCallback) super.connectedCallback()
    
    globalThis.onhashchange = this._onhashchange
  }
  
  _onhashchange() {
    const detail = this.hashBang ? location.hash.replace('#!/') : location.hash.replace('#')
    
    this.dispatchEvent(new CustomEvent('route-selected', { detail }))
  }
  
  _onClick(event) {
    super._onClick(event)
    
    const target = event.composedPath()[0]
    
    if (target.hasAttribute('url')) {
      location.href = target.getAttribute('url')
      return
    }
    
    const hash = target.getAttribute('hash')
    location.hash = this.hashBang ? `!/${hash}` : hash
  }
});