import gsap from 'gsap';

window.gsap = gsap;

// Support component names relative to this directory:
const componentRequireContext = require.context("init", true);
const ReactRailsUJS = require("react_ujs");

ReactRailsUJS.useContext(componentRequireContext);
