import { brandIcon, brandIconsElement } from '../ui/_dom_selectors.js';
import { Helper } from '../utility/_helper.js';
import { getDataAysnc } from '../services/_data_service.js';

export function BrandIcons({
    isShadow = false,
    isDevelopment = false,
    iconHelper = new Helper(),
    iconSize = '',
    iconEffects = '',
    iconVersions = '',
    iconVersionUrl = ''
} = {}) {
    this.isShadow = isShadow;
    this.isDevelopment = isDevelopment;
    this.iconSize = iconSize;
    this.iconHelper = iconHelper;
    this.iconEffects = iconEffects;
    this.iconVersions = iconVersions;
    this.iconVersionUrl = iconVersionUrl;
};

BrandIcons.prototype.toUI = function () {

    getDataAysnc(this.iconVersionUrl)
        .then(({ icons, icon_version_base_class_name }) => {

            for (let i = 0; i < this.iconVersions.length; i++) {

                let baseClassNames = icon_version_base_class_name[this.iconVersions[i]];

                for (let i = 0; i < this.iconEffects.length; i++) {

                    let brandIconsElementDevelopment, brandIconsTitleElementDevelopment;

                    if (this.isDevelopment) {

                        brandIcon.classList.add('brand-icon--development');
                        brandIconsElement.remove();

                        this.iconHelper.createElement({
                            tagName: 'h1',
                            attributeName: 'class',
                            className: 'brand-icons__title',
                            parentElement: brandIcon
                        });

                        this.iconHelper.createElement({
                            tagName: 'ul',
                            attributeName: 'class',
                            className: `brand-icons ${this.iconEffects[i]}`,
                            parentElement: brandIcon
                        });

                        brandIconsElementDevelopment = document.querySelectorAll('.brand-icons');
                        brandIconsTitleElementDevelopment = document.querySelectorAll('.brand-icons__title');

                        // in this line for development 
                        brandIconsTitleElementDevelopment[i].innerHTML += this.iconEffects[i].replace(/-/g, ' ');

                        icons.forEach(({ title, web_url, icon_class_name }) => {

                            brandIconsElementDevelopment[i].innerHTML +=
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
                    else {

                        icons.forEach(({ title, web_url, icon_class_name }) => {

                            brandIconsElement.innerHTML +=
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
            }
        })
}