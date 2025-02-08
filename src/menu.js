import {newElement} from "./tools";
import pasta from "./img/pasta.jpg";
import fettuccine from "./img/fettuccine.jpg";
import pizza from "./img/pizza.jpg";
import salad from "./img/salad.jpg";

const newCard = function(image, text){
    const cardNode = newElement("div", ["className", "card"]);
    cardNode.append(...[newElement("img", ["src", image]),
                        newElement("p", ["innerText", text])])
    return cardNode
}

const menuNode = (function(){
    const menuContent = newElement("div", ["className", "menu"]);
    const menuButtonDiv = newElement("div", ["className", "menu-button"]);

    menuButtonDiv.append(newElement("button", ["id", "menu-full"],
                                              ["innerText", "View full menu"]));
    menuContent.append(...[newCard(pasta, "Spaghetti Bolognese"),
                           newCard(fettuccine, "Fettuccine Alfredo"),
                           newCard(pizza, "Margarita pizza"),
                           newCard(salad, "Caesar salad")])
    menuContent.append(menuButtonDiv)

    return menuContent
})()

export default menuNode