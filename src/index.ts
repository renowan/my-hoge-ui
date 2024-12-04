import ZButton from "./components/Z/ZButton.vue";
import ZAlert from "./components/Z/ZAlert.vue";
import ZIcon from "./components/Z/ZIcon.vue";
import * as utils from "./components/Z/utils";
import { zuiTokens } from "./contants/zuiTokens";

export { ZButton, ZAlert, utils, zuiTokens };

export default {
  install: (app) => {
    app.component("ZButton", ZButton);
    app.component("ZAlert", ZAlert);
    app.component("ZIcon", ZIcon);
  },
};
