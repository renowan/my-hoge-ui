import ZButton from "./components/Z/ZButton.vue";
import ZAlert from "./components/Z/ZAlert.vue";
import ZIcon from "./components/Z/ZIcon.vue";
import ZSelect from "./components/Z/ZSelect.vue";
import ZInput from "./components/Z/ZInput.vue";
import ZRadio from "./components/Z/ZRadio.vue";
import ZModal from "./components/Z/ZModal.vue";
import ZRadioGroup from "./components/Z/ZRadioGroup.vue";
import ZDropdown from "./components/Z/ZDropdown.vue";
import ZLinkCustom from "./components/Z/ZLinkCustom.vue";
import ZTooltip from "./components/Z/ZTooltip.vue";
import ZCheckbox from "./components/Z/ZCheckbox.vue";
import ZKbd from "./components/Z/ZKbd.vue";
import ZErrorMessage from "./components/Z/ZErrorMessage.vue";
import * as utils from "./components/Z/utils";
import { zuiTokens } from "./contants/zuiTokens";

export { ZButton, ZAlert, ZIcon, utils, zuiTokens };

export default {
  install: (app: any) => {
    app.component("ZButton", ZButton);
    app.component("ZAlert", ZAlert);
    app.component("ZIcon", ZIcon);
    app.component("ZSelect", ZSelect);
    app.component("ZInput", ZInput);
    app.component("ZRadio", ZRadio);
    app.component("ZModal", ZModal);
    app.component("ZRadioGroup", ZRadioGroup);
    app.component("ZDropdown", ZDropdown);
    app.component("ZLinkCustom", ZLinkCustom);
    app.component("ZTooltip", ZTooltip);
    app.component("ZCheckbox", ZCheckbox);
    app.component("ZKbd", ZKbd);
    app.component("ZErrorMessage", ZErrorMessage);
  },
};
