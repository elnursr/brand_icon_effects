import { BrandIcons } from './brand_icons/_brand_icons.js';

import { font_awesome_url } from './config/_urls.js';

import { brandIconsElement, brandIconTitleElement } from './ui/_dom_selectors.js';

let icons = new BrandIcons({
    isShadow: true,
    iconEffects: ['diamond'],
    // iconEffects: ['scale', 'fill', 'flash', 'diamond', 'blocks-in', 'circle-scale', 'circle-rotate', 'rotate-scale-clockwise', 'rotate-top-left-clockwise', 'highlight'],
    iconVersions: ['v_4_7'],
    // iconVersions: ['v_4_7', 'v_5_15_4', 'v_6_7_2', 'v_7_2'],
    // iconEffectTitles: ['Highlight', 'Flash'],
    iconVersionUrl: font_awesome_url
});

icons.toUI({
    iconsElement: brandIconsElement
    // titleElement: brandIconTitleElement
});