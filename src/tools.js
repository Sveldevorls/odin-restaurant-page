export function newElement(type, ...attributesArr) {
    const thisElement = document.createElement(type);
    if (attributesArr) {
        for (let [attribute, value] of attributesArr) {
            thisElement[attribute] = value;
        }
    }
    return thisElement
}