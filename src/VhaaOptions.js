import { LitElement } from "lit-element";
import { FormRegistrarPortalMixin } from "./mixin/FormRegistrarPortalMixin";
/**
 * VhaaOptions
 */

// TODO: revisar si merece la pena aplicar el registro por un mixin
//  export class VhaaOptions extends FormRegistrarPortalMixin(LitElement) {

export class VhaaOptions extends FormRegistrarPortalMixin(LitElement) {
    static get properties() {
        return {
            role: {
                type: String,
                reflect: true,
            },
            tabIndex: {
                type: Number,
                reflect: true,
                attribute: "tabindex",
            },
        };
    }

    constructor() {
        super();
        this.role = "listbox";
        this.tabIndex = 0;
    }

    createRenderRoot() {
        return this;
    }
}
