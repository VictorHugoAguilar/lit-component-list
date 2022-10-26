import { LitElement, html, css } from "lit-element";

/**
 * `VhaaOption` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
export class VhaaOption extends LitElement {
    static get properties() {
        return {
            active: { type: Boolean, reflect: true },
            checked: { type: Boolean, reflect: true },
            disabled: { type: Boolean, reflect: true },
        };
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
        this.active = false;
        this.checked = false;
        this.disabled = false;
        /** @private */
        this.__onClick = this.__onClick.bind(this);
        /** @private */
        this.__registerEventListeners();
    }

    static get styles() {
        return [
            css`
                :host {
                    display: block;
                    background-color: white;
                    padding: 4px;
                    cursor: default;
                }

                :host([hidden]) {
                    display: none;
                }

                :host(:hover) {
                    background-color: #eee;
                }
                :host([active]) {
                    background-color: #ddd;
                }

                :host([checked]) {
                    background-color: #bde4ff;
                }

                :host([disabled]) {
                    color: #adadad;
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
        return html`
            <div class="choice-field__label">
                <slot></slot>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("role", "option");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.__unRegisterEventListeners();
    }

    /** @private */
    __registerEventListeners() {
        this.addEventListener("click", this.__onClick);
    }

    /** @private */
    __unRegisterEventListeners() {
        this.removeEventListener("click", this.__onClick);
    }

    /** @private */
    __onClick() {
        if (this.disabled) {
            return;
        }
        // TODO: implementar por grupo
        // const parentForm = /** @type {unknown} */ (this._parentFormGroup);
        // this._isHandlingUserInput = true;
        // if (parentForm && /** @type {ChoiceGroupHost} */ (parentForm).multipleChoice) {
        //     this.checked = !this.checked;
        //     this.active = !this.active;
        // } else {
        //     this.checked = true;
        //     this.active = true;
        // }
        // this._isHandlingUserInput = false;
        this.checked = !this.checked;
        this.active = !this.active;
    }
}
