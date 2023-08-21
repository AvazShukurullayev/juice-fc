import { v4 as uuidv4 } from "uuid";
import {
  Apple,
  Beet,
  Cranberry,
  Grape,
  Orange,
  Prune,
  Sugarcane,
  Tomato,
} from "./assets";

const juiceArray = [
  {
    name: "Black Grape Juice",
    imgURL: Apple,
    discount: 20,
    price: 4.49,
    desc: "One of the few advantages of black grape juice is that it lowers the risk of diabetes and promotes healthy hair development. ",
    id: uuidv4(),
  },
  {
    name: "Cranberry Juice",
    imgURL: Beet,
    discount: 20,
    price: 4.49,
    desc: "These different types of fruit juice provide health benefits, and the efficacy of cranberry juice in protecting against urinary tract infections is well documented (UTIs)",
    id: uuidv4(),
  },
  {
    name: "Sugarcane Juice",
    imgURL: Grape,
    discount: 20,
    price: 4.49,
    desc: "Sugarcane juice is one of the essential precursors to rum and is obtained by crushing peeled sugar cane in a mill. ",
    id: uuidv4(),
  },
  {
    name: "Tomato Juice",
    imgURL: Cranberry,
    discount: 20,
    price: 4.49,
    desc: "Tomato juice is not only an essential ingredient in Bloody Marys, but it’s also a tasty and healthy drink on its own.  ",
    id: uuidv4(),
  },
  {
    name: "Orange Juice",
    imgURL: Orange,
    discount: 20,
    price: 4.49,
    desc: "Next On our list of different types of fruit juice is Orange Juice. Orange Juice is a classic breakfast staple worldwide and is well known for its dietary properties.",
    id: uuidv4(),
  },
  {
    name: "Beet Juice",
    imgURL: Prune,
    discount: 20,
    price: 4.49,
    desc: "Beet juice has gained popularity due to its related well-being benefits. This colorful juice is made by mixing beets and water.  ",
    id: uuidv4(),
  },
  {
    name: "Apple Juice",
    imgURL: Sugarcane,
    discount: 20,
    price: 4.49,
    desc: "Apple juice is one of the most popular types of fruit juice. There are two fundamental sorts — cloudy and clear.",
    id: uuidv4(),
  },
  {
    name: "Prune juice",
    imgURL: Tomato,
    discount: 20,
    price: 4.49,
    desc: "Prunes are dried plums. They’re frequently enjoyed as nibble, but prune juice is another well-known choice.",
    id: uuidv4(),
  },
];

export default juiceArray;
