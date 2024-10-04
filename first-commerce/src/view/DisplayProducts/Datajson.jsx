import bath1 from "../DisplayProducts/bath1.png";
import bath2 from "../DisplayProducts/images/bath2.png";
import bath3 from "../DisplayProducts/images/bath3.png";
import bath4 from "../DisplayProducts/images/bath4.png";

import bedroom1 from "../DisplayProducts/images/bedroom1.png"
import bedroom2 from "../DisplayProducts/images/bedroom2.png"
import bedroom3 from "../DisplayProducts/images/bedroom3.png"
import bedroom4 from "../DisplayProducts/images/bedroom4.png"

import cabinet1 from "../DisplayProducts/images/cabinet1.png"
import cabinet2 from "../DisplayProducts/images/cabient2.png"

import chair1 from "../DisplayProducts/images/chair1.png";
import chair2 from "../DisplayProducts/images/chair2.png";

import homeoffice1 from "../DisplayProducts/images/homeoffice1.png";
import homeoffice2 from "../DisplayProducts/images/homeoffice2.png";
import homeoffice3 from "../DisplayProducts/images/homeoffice3.png";
import homeoffice4 from "../DisplayProducts/images/homeoffice4.png";

import kit1 from "../DisplayProducts/images/kit1.png";
import kit2 from "../DisplayProducts/images/kit2.png";
import kit3 from "../DisplayProducts/images/kit3.png";
import kit4 from "../DisplayProducts/images/kit4.png";


import live1 from "../DisplayProducts/images/live1.png";
import live2 from "../DisplayProducts/images/live2.png";
import live3 from "../DisplayProducts/images/live3.png";
import live4 from "../DisplayProducts/images/live4.png";




const productsData = {
    bathroom: [
      {
        categorie:"Bathroom",
        name: "Bathroom Golden Ring Mirror",
        cost: "$124.25",
        url: bath1, // Local image path
      },
      {
        categorie:"Bathroom",
        name: "Bathroom Wooden Table",
        cost: "$550.00",
        url: bath2,
      },
      {
        categorie:"Bathroom",
        name: "Ceramic Oval Bathtub",
        cost: "$11,200.00",
        url: bath3,
      },
      {
        categorie:"Bathroom",
        name: "Wooden Bath Room Stool",
        cost: "$220.50",
        url: bath4,
      },
    ],
    bedroom: [
      {
        categorie:"Bedroom",
        name: "Bedroom Single Chair",
        cost: "$504.00",
        url: bedroom1,
      },
      {
        categorie:"Bedroom",
        name: "Blue Comfy Fabric Chair",
        cost: "$580.50",
        url: bedroom2,
      },
      {
        categorie:"Bedroom",
        name: "King Size Master Bedroom",
        cost: "$14,500.50",
        url: bedroom3,
      },
      {
        categorie:"Bedroom",
        name: "Wooden Console Table",
        cost: "$724.00",
        url: bedroom4,
      },
    ],
    cabinet: [
      {
        categorie:"Cabinet",
        name: "Wall Hanging Cabinet",
        cost: "$840.00",
        url: cabinet1,
      },
      {
        categorie:"Cabinet",
        name: "Kitchen Cabinet",
        cost: "$1,150.25",
        url: cabinet2,
      },
    ],
    chair: [
      {
        categorie:"Chair",
        name: "Modern Emerald Fabric Chair",
        cost: "$860.00",
        url: chair1,
      },
      {
        categorie:"Chair",
        name: "Bedroom Single Chair",
        cost: "$504.00",
        url: chair2,
      },
    ],
    homeoffice: [
      {
        categorie:"HomeOffice",
        name: "Beige Working Chair With Armrest",
        cost: "$784.00",
        url: homeoffice1,
      },
      {
        categorie:"HomeOffice",
        name: "Black Metal Lamp",
        cost: "$265.00",
        url: homeoffice2,
      },
      {
        categorie:"HomeOffice",
        name: "Egyptian Vase",
        cost: "$400.00",
        url:homeoffice3,
      },
      {
        categorie:"HomeOffice",
        name: "Wooden Console Table",
        cost: "$724.00",
        url: homeoffice4,
      },
    ],
    kitchen: [
      {
        categorie:"Kitchen",
        name: "Brown Circle Stool",
        cost: "$224.00",
        url: kit2,
      },
      {
        categorie:"Kitchen",
        name: "White Kitchen Island",
        cost: "$5,350.75",
        url: kit4,
      },
      {
        categorie:"Kitchen",
        name: "Bathroom Golden Ring Mirror",
        cost: "$124.25",
        url: kit1,
      },
      {
        categorie:"Kitchen",
        name: "Kitchen Cabinet",
        cost: "$1,150.25",
        url: kit3,
      },
    ],
    livingroom: [
      {
        categorie:"LivingRoom",
        name: "Brown Living Room Sofa",
        cost: "$1,200.00",
        url: live1,
      },
      {
        categorie:"LivingRoom",
        name: "Green Living Room Sofa",
        cost: "$1,840.00",
        url: live3,
      },
      {
        categorie:"Chair",
        name: "Modern Emerald Fabric Chair",
        cost: "$860.00",
        url: live4,
      },
      {
        categorie:"Home Office",
        name: "Egyptian Vase",
        cost: "$400.00",
        url: live2,
      },
    ],
    stool : [
      {
        categorie:"Kitchen",
        name: "Brown Circle Stool",
        cost: "$224.00",
        url: kit2,
      },
    ]
  };
  

export default productsData