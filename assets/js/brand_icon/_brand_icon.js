import { getDataAysnc } from '../services/_data_service.js';


export function BrandIcon({
    iconVersion = '',
    iconVersionUrl = ''
} = {}) {
    this.iconVersion = iconVersion;
    this.iconVersionUrl = iconVersionUrl;
};

BrandIcon.prototype.toUI = function (element) {
    getDataAysnc(this.iconVersionUrl)
        .then((data) => {

            // computed property using here
            // this.iconVersion = 'v_4_7' or 'v_5_15_4';
            // {['v_4_7']:icons} = data;

            let { [this.iconVersion]: icons } = data;

            // let icons = data[this.iconVersion];

            icons.forEach(({ title, web_url, base_class_name, icon_class_name }) => {
                element.innerHTML +=
                    `
                        <li class="brand-icons__item">
                            <a href="${web_url}" title="${title}" target="_blank" class="brand-icons__link brand-icons--pulse">
                                <i class="${base_class_name} ${icon_class_name}"></i>
                            </a>
                        </li>
                    `;
            });
        })
}