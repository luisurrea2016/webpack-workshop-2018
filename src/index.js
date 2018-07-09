import nav from "./nav";
//import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import css from './footer.css';
import btn from  './button.css';
import imageUrl from './ferrari.jpg';
import makeImage from './image';
const loadFooter = () => import('./footer');

const button = makeButton("Yay! A Button!");
button.addEventListener('click', e => {
    loadFooter().then(m => document.body.appendChild(m.footer));
});
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(makeImage(imageUrl));
