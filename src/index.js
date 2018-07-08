import nav from './nav';
import { top, bottom } from './footer';
import makeButton from './button';
import { makecolorStyle } from './button-styles';

console.log(
    nav(),
    top,
    bottom,
    makeButton('Boom'),
    makecolorStyle('cyan'),
);
