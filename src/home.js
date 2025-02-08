import {newElement} from "./tools.js"
import main from "./img/main.jpg"

const homeNode = (function() {
    const homeContent = newElement("div", ["className", "home"]);
    const mainImage = newElement("img", ["src", main], ["height", 600]);
    const textField = newElement("div");
    const introduction = newElement("p", ["innerText", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit repudiandae sint laborum, accusamus ipsum laboriosam, rerum praesentium sapiente modi et quae ea cum voluptas. Maiores voluptatibus quo voluptatem sunt facilis."])
    const openingHours = newElement("div");
    const bookButton = newElement("button", ["id", "book"], ["innerText", "Book now"])

    openingHours.append(...[newElement("p", ["innerText", "Opening hours"]),
                            newElement("p", ["innerText", "Monday - Saturday: 10AM - 10PM"]),
                            newElement("p", ["innerText", "Sunday: 10AM - 2PM"]),]);
    textField.append(...[introduction, openingHours, bookButton]);
    homeContent.append(...[mainImage, textField]);

    return homeContent
})();

export default homeNode