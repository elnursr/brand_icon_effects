export function Helper() { }

Helper.prototype.createElement = function ({ tagName, attributeName, className, parentElement }) {

    let elementName = document.createElement(tagName);
    elementName.setAttribute(attributeName, className)
    parentElement.appendChild(elementName);
}