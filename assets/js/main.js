import { font_awesome_v_4_7_url } from './config/_urls.js';

import { brandIconsElement } from './ui/_dom_selectors.js';

import { getDataAysnc } from './services/_data_service.js';

getDataAysnc(font_awesome_v_4_7_url)
    .then(({ font_awesome: { v_4_7 } }) => {
        v_4_7.forEach(({ base_class_name, icon_class_name, web_url }) => {
            brandIconsElement.innerHTML +=
                `
                    <li class="brand-icons__item">
                        <a href="${web_url}" target="_blank" class="brand-icons__link brand-icons--pulse">
                            <i class="${base_class_name} ${icon_class_name}"></i>
                        </a>
                    </li>
                `;
        });
    })