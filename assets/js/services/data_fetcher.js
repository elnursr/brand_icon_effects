import { brandIconsDataUrl } from '../config/config.js';


export function dataFetcher(element) {
    fetch(brandIconsDataUrl)
        .then(res => res.json())
        .then(
            (
                { brandIcons:
                    { fontAwesome:
                        { version:
                            { v_4_7 }
                        }
                    }
                }
            ) => {

                v_4_7.forEach(({ className, webUrl }) => {
                    element.innerHTML +=
                        `
                            <li class="brand-icons__item">
                                <a href="${webUrl}" target="_blank" class="brand-icons__link brand-icons-pulse">
                                    <i class="fa ${className}"></i>
                                </a>
                            </li>
                        `
                });
            }
        )
}