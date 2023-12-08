// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

let banner = document.getElementById("remove-banner");

banner.onclick = function () {
  this.parentNode.remove();
};
