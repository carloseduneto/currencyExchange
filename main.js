import * as dialog from "./dialogs.js"
import {data1} from "./dialogs.js"
import * as currencyExchange  from "./getCurrencyExchange.js"
import { setValue1 } from "./getCurrencyExchange.js";
import { setValue2 } from "./getCurrencyExchange.js";

dialog.data1();
dialog.getType();
dialog.getType2();

window.data1 = data1

currencyExchange.getCurrencyExcange2("eur", "brl")

window.setValue1 = setValue1
window.setValue2 = setValue2


