import {newElement} from "./tools.js"
import about from "./img/about.jpg"

const aboutNode = (function() {
    const aboutContent = newElement("div", ["className", "about"]);
    const aboutImage = newElement("img", ["src", about], ["height", 600]);
    const aboutText = newElement("p", ["innerText", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, recusandae. Atque quisquam dolor dolorum dolore aperiam in nemo earum quibusdam culpa! Laudantium voluptate animi inventore facere pariatur, laboriosam natus quis."]);

    aboutContent.append(...[aboutText, aboutImage]);
    
    return aboutContent
})();

export default aboutNode