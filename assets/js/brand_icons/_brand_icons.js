import { getDataAysnc } from '../services/_data_service.js';

export function BrandIcons({
    isShadow = false,
    iconEffect = '',
    iconVersion = '',
    iconVersionUrl = '',
    iconEffectTitle = ''
} = {}) {
    this.isShadow = isShadow;
    this.iconEffect = iconEffect;
    this.iconVersion = iconVersion;
    this.iconVersionUrl = iconVersionUrl;
    this.iconEffectTitle = iconEffectTitle;
};

BrandIcons.prototype.toUI = function ({ titleElement, iconsElement }) {
    getDataAysnc(this.iconVersionUrl)
        .then((data) => {

            // computed property using here
            // this.iconVersion = 'v_4_7' or 'v_5_15_4';
            // {['v_4_7']:icons} = data;
            // icons = data[v_4_7];
            let { [this.iconVersion]: icons } = data;

            // let icons = data[this.iconVersion];

            for (let i = 0; i < this.iconEffect.length; i++) {

                // titleElement.innerHTML += `<h1>${this.iconEffectTitle[i]}</h1>`;

                icons.forEach(({ title, web_url, base_class_name, icon_class_name }) => {
                    iconsElement.innerHTML +=
                        `
                            <li class="brand-icons__item">
                                <a href="${web_url}" title="${title}" target="_blank" class="brand-icons__link ${this.isShadow ? `brand-icons--${this.iconEffect[i]} ${icon_class_name}-shadow` : `brand-icons--${this.iconEffect[i]}`}">
                                    <i class="${base_class_name} ${icon_class_name}"></i>
                                    <span></span>
                                </a>
                            </li>
                        `;
                });
            }
        })
}