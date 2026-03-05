import { getDataAysnc } from '../services/_data_service.js';

export function BrandIcons({
    isShadow = false,
    iconEffects = '',
    iconVersions = '',
    iconVersionUrl = '',
    iconEffectTitles = ''
} = {}) {
    this.isShadow = isShadow;
    this.iconEffects = iconEffects;
    this.iconVersions = iconVersions;
    this.iconVersionUrl = iconVersionUrl;
    this.iconEffectTitles = iconEffectTitles;
};

BrandIcons.prototype.toUI = function ({ iconsElement }) {
    
    getDataAysnc(this.iconVersionUrl)
        .then(({ icons, icon_version_base_class_name }) => {

            for (let i = 0; i < this.iconVersions.length; i++) {

                let baseClassNames = icon_version_base_class_name[this.iconVersions[i]];

                for (let i = 0; i < this.iconEffects.length; i++) {

                    icons.forEach(({ title, web_url, icon_class_name }) => {

                        iconsElement.innerHTML +=
                            `
                                <li class="brand-icons__item">
                                    <a href="${web_url}" title="${title}" target="_blank" class="brand-icons__link ${this.isShadow ? `brand-icons--${this.iconEffects[i]} ${icon_class_name}-shadow` : `brand-icons--${this.iconEffects[i]}`}">
                                        <i class="${baseClassNames} ${icon_class_name}"></i>
                                        <span></span>
                                    </a>
                                </li>
                            `;
                    });
                }
            }
        })
}

// in this section works only 2 different .json file (for example v_4_7.json and v_5_15_4)
// BrandIcons.prototype.toUI = function ({ titleElement, iconsElement }) {
//     getDataAysnc(this.iconVersionUrl)
//         .then((data) => {

//             // computed property using here
//             // this.iconVersion = 'v_4_7' or 'v_5_15_4';
//             // {['v_4_7']:icons} = data;
//             // icons = data[v_4_7];
//             let { [this.iconVersion]: icons } = data;

//             // let icons = data[this.iconVersion];

//             for (let i = 0; i < this.iconEffect.length; i++) {

//                 // titleElement.innerHTML += `<h1>${this.iconEffectTitle[i]}</h1>`;

//                 icons.forEach(({ title, web_url, base_class_name, icon_class_name }) => {
//                     iconsElement.innerHTML +=
//                         `
//                             <li class="brand-icons__item">
//                                 <a href="${web_url}" title="${title}" target="_blank" class="brand-icons__link ${this.isShadow ? `brand-icons--${this.iconEffect[i]} ${icon_class_name}-shadow` : `brand-icons--${this.iconEffect[i]}`}">
//                                     <i class="${base_class_name} ${icon_class_name}"></i>
//                                     <span></span>
//                                 </a>
//                             </li>
//                         `;
//                 });
//             }
//         })
// }