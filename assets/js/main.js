import { BrandIcons } from './brand_icons/_brand_icons.js';

import { brandIconsElement, brandIconTitleElement } from './ui/_dom_selectors.js';

import { font_awesome_v_4_7_url, font_awesome_v_5_15_4_url, font_awesome_v_6_7_2_url } from './config/_urls.js';


// let v_4_7 = new BrandIcons({
//     isShadow: true,
//     iconVersion: 'v_4_7',
//     iconEffect: ['highlight'],
//     // iconEffectTitle: ['Highlight', 'Flash'],
//     // iconEffect: ['scale', 'fill', 'flash', 'diamond', 'blocks-in', 'circle-scale', 'circle-rotate', 'rotate-scale-clockwise', 'rotate-top-left-clockwise', 'highlight'],
//     iconVersionUrl: font_awesome_v_4_7_url
// });

// v_4_7.toUI({
//     iconsElement: brandIconsElement,
//     titleElement: brandIconTitleElement
// });

let v_5_15_4 = new BrandIcons({
    isShadow: true,
    iconVersion: 'v_5_15_4',
    iconEffect: ['flash'],
    // iconEffectTitle: ['Highlight', 'Flash'],
    // iconEffect: ['scale', 'fill', 'flash', 'diamond', 'blocks-in', 'circle-scale', 'circle-rotate', 'rotate-scale-clockwise', 'rotate-top-left-clockwise', 'highlight'],
    iconVersionUrl: font_awesome_v_5_15_4_url
});

let v_6_7_2 = new BrandIcons({
    isShadow: true,
    iconVersion: 'v_6_7_2',
    iconEffect: ['flash'],
    // iconEffectTitle: ['Highlight', 'Flash'],
    // iconEffect: ['scale', 'fill', 'flash', 'diamond', 'blocks-in', 'circle-scale', 'circle-rotate', 'rotate-scale-clockwise', 'rotate-top-left-clockwise', 'highlight'],
    iconVersionUrl: font_awesome_v_6_7_2_url
});

v_6_7_2.toUI({
    iconsElement: brandIconsElement,
    titleElement: brandIconTitleElement
});