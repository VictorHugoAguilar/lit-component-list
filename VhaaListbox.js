import { LitElement } from "lit-element";
import { InteractionStateMixin } from "./mixin/form/InteractionStateMixin";
import { FocusMixin } from "./mixin/form";
import { ValidateMixin } from "./mixin/validate";
import { ListboxMixin } from "./ListboxMixin";

/**
 * VhaaListbox: implements the wai-aria listbox design pattern and integrates it as a FormControl
 */
export class VhaaListbox extends ListboxMixin(
    FocusMixin(InteractionStateMixin(ValidateMixin(LitElement)))
) {
    /**
     * @configure InteractionStateMixin, ValidateMixin
     */
    get _feedbackConditionMeta() {
        return { ...super._feedbackConditionMeta, focused: this.focused };
    }

    /**
     * @configure FocusMixin
     */
    get _focusableNode() {
        return this._inputNode;
    }
}
