import { LitElement, html, css } from "lit-element";
import { SlotMixin, DisabledMixin } from "./mixin/core";
import { FormRegisteringMixin } from "./mixin/form-registration";
import { ChoiceInputMixin } from "./mixin/form-choice-group";
/**
 * `VhaaOption` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
export class VhaaOption extends DisabledMixin(
    ChoiceInputMixin(FormRegisteringMixin(SlotMixin(LitElement)))
) {
    /** @type {any} */
    static get properties() {
        return {
            active: {
                type: Boolean,
                reflect: true,
            },
        };
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
     * @override We want to start with a clean slate, so we omit slots inherited from FormControl
     */
    // eslint-disable-next-line class-methods-use-this
    get slots() {
        return {};
    }

    constructor() {
        super();
        this.active = false;
        /** @private */
        this.__onClick = this.__onClick.bind(this);
        /** @private */
        this.__registerEventListeners();
    }

    /**
     * @param {string} name
     * @param {unknown} oldValue
     */
    requestUpdate(name, oldValue) {
        super.requestUpdate(name, oldValue);

        if (name === "active" && this.active !== oldValue) {
            this.dispatchEvent(new Event("active-changed", { bubbles: true, composed: true }));
        }
    }

    /**
     * @param changedProperties
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("checked")) {
            this.setAttribute("aria-selected", `${this.checked}`);
        }

        if (changedProperties.has("disabled")) {
            this.setAttribute("aria-disabled", `${this.disabled}`);
        }
    }

    /**
     *
     * @returns {TemplateResult}
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
        const parentForm = this._parentFormGroup;
        this._isHandlingUserInput = true;
        if (parentForm && parentForm.multipleChoice) {
            this.checked = !this.checked;
            this.active = !this.active;
        } else {
            this.checked = true;
            this.active = true;
        }
        this._isHandlingUserInput = false;
    }
}
