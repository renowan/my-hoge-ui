import ZButton from "./components/Z/ZButton.vue";
import ZAlert from "./components/Z/ZAlert.vue";
import ZIcon from "./components/Z/ZIcon.vue";
// import ZSelect from "./components/Z/ZSelect.vue";
// import ZErrorMessage from "./components/Z/ZErrorMessage.vue";
import * as utils from "./components/Z/utils";
import { zuiTokens } from "./contants/zuiTokens";

export { ZButton, ZAlert, ZIcon, utils, zuiTokens };

export default {
  install: (app: any) => {
    app.component("ZButton", ZButton);
    app.component("ZAlert", ZAlert);
    app.component("ZIcon", ZIcon);
    // app.component("ZSelect", ZSelect);
    // app.component("ZErrorMessage", ZErrorMessage);
  },
};
