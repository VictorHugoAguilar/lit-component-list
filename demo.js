import { LitElement, html, css, nothing } from "lit-element";
import "./index.js";
/**
 * `demo-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class DemoComponent extends LitElement {
    static get properties() {
        return {
            selected: { type: String },
        };
    }

    static get styles() {
        return [
            css`
                :host {
                    display: block;
                }
                .listbox {
                    width: 200px;
                    height: 150px;
                    overflow: auto;
                    padding: 10px;
                    border: thin solid #c3c3c3;
                }
            `,
        ];
    }

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    render() {
        return html`<h3>
                ListBox ${this.selected ? html`<span>(${this.selected})</span>` : nothing}
            </h3>
            <h4>Orientation Vertical Multi-check</h4>
            <vhaa-listbox id="listbox" class="listbox" name="combo" label="Selected List">
                <vhaa-option .choiceValue="${"Apple"}">Apples</vhaa-option>
                <vhaa-option .choiceValue="${"Artichoke"}">Artichoke</vhaa-option>
                <vhaa-option .choiceValue="${"Asparagus"}">Asparagus</vhaa-option>
                <vhaa-option .choiceValue="${"Banana"}">Banana</vhaa-option>
                <vhaa-option .choiceValue="${"Beets"}">Beets</vhaa-option>
                <vhaa-option .choiceValue="${"Bell pepper"}">Bell pepper</vhaa-option>
                <vhaa-option .choiceValue="${"Broccoli"}">Broccoli</vhaa-option>
                <vhaa-option .choiceValue="${"Brussels sprout"}">Brussels sprout</vhaa-option>
                <vhaa-option .choiceValue="${"Cabbage"}">Cabbage</vhaa-option>
                <vhaa-option .choiceValue="${"Carrot"}">Carrot</vhaa-option>
            </vhaa-listbox> `;
    }

    constructor() {
        super();
        this._onChildActiveChanged = this._onChildActiveChanged.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        this.__setupEventListeners();
    }

    __setupEventListeners() {
        this.shadowRoot.addEventListener("active-changed", this._onChildActiveChanged);
    }

    _onChildActiveChanged({ path: [{ choiceValue, checked, innerHTML }] }) {
        if (!!checked) {
            this.selected = choiceValue;
            innerHTML;
        }
    }
}

customElements.define("demo-component", DemoComponent);
