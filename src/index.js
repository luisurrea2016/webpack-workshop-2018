import nav from "./nav";
// import * as GSAP from 'gsap'
const getGSAP = () => import('gsap');
// import { footer } from "./footer";
/* webpackChunkName: "footer" */
const getFooter = () => import(/* webpackChunkName: "footer" */'./footer');
// cont getLodashUniq = () => import('lodash-es/uniq');
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";
import css from "./footer.css";
import buttonStyles from "./button.css";

const setButtonStyle = color => import(`./button-styles/${color}.js`);
//or
//const setButtonStyle = color => import(`./button-styles/${color}.json`);

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");

document.body.appendChild(button);

button.addEventListener("click", e => {
    getFooter().then(footerModule => {
        document.body.appendChild(footerModule.footer);
    });

    getGSAP().then(gsap => console.warn(gsap));

    setButtonStyle('red').then(styleStr =>{
        button.style = styleStr.default;
    });
});
;

document.body.appendChild(image);

