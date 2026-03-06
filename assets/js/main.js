import { BrandIcons } from './brand_icons/_brand_icons.js';

import { font_awesome_url } from './config/_urls.js';

let iconsDevelopment = new BrandIcons({
    isShadow: true,
    isDevelopment: true,
    iconEffects: ['scale', 'fill', 'flash', 'diamond', 'blocks-in', 'circle-scale', 'circle-rotate', 'rotate-scale-clockwise', 'rotate-top-left-clockwise', 'highlight'],
    iconVersions: ['v_5_15_4'],
    // iconVersions: ['v_4_7', 'v_5_15_4', 'v_6_7_2', 'v_7_2'],
    iconVersionUrl: font_awesome_url
});

iconsDevelopment.toUI();

// let iconsProduction = new BrandIcons({
//     isShadow: true,
//     iconEffects: ['flash'],
//     iconVersions: ['v_5_15_4'],
//     iconVersionUrl: font_awesome_url
// });

// iconsProduction.toUI();