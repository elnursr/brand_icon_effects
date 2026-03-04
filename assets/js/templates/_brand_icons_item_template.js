export let brandIconsItemTemplate =
    `
        <li class="brand-icons__item">
            <a href="${web_url}" title="${title}" target="_blank" class="brand-icons__link ${this.isShadow ? `brand-icons--${this.iconEffect} ${icon_class_name}-shadow` : `brand-icons--${this.iconEffect}`}">
                <i class="${base_class_name} ${icon_class_name}"></i>
                <span></span>
            </a>
        </li>
    `;