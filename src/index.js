import nav from "./nav";
import { top, bottom } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

const btn = makeButton("Boom");
btn.style = makeColorStyle("cyan");
document.body.appendChild(btn);
