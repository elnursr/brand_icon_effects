import { BrandIcon } from './brand_icon/_brand_icon.js';

import { brandIconsElement } from './ui/_dom_selectors.js';
import { font_awesome_v_4_7_url, font_awesome_v_5_15_4_url } from './config/_urls.js';


let version_4_7 = new BrandIcon({
    iconVersion: 'v_4_7',
    iconEffect: 'circle-rotate',
    iconVersionUrl: font_awesome_v_4_7_url
});

let version_5_15_4 = new BrandIcon({
    iconVersion: 'v_5_15_4',
    iconEffect: 'circle-scale',
    iconVersionUrl: font_awesome_v_5_15_4_url
});

version_4_7.toUI(brandIconsElement);

version_5_15_4.toUI(brandIconsElement);