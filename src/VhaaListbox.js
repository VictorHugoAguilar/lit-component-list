import { LitElement } from "lit-element";
import { InteractionStateMixin } from "./mixin/InteractionStateMixin";
import { FocusMixin } from "./mixin/FocusMixin";
import { ListboxMixin } from "./ListboxMixin";

// TODO: could we extend from LionField?

/**
 * LionListbox: implements the wai-aria listbox design pattern and integrates it as a Lion
 * FormControl
 */
export class VhaaListbox extends ListboxMixin(FocusMixin(InteractionStateMixin(LitElement))) {
    // /**
    //  * @configure InteractionStateMixin, ValidateMixin
    //  */
    // get _feedbackConditionMeta() {
    //     return { ...super._feedbackConditionMeta, focused: this.focused };
    // }

    /**
     * @configure FocusMixin
     */
    get _focusableNode() {
        return this._inputNode;
    }
}
