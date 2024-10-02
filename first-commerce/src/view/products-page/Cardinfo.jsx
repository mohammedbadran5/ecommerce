// products.js
import Vasa from "./Vasa.png";
import Stand from "./stand.png";
import Brownsofa from "./BrownSofa.png";
import Bowel from "./bowel.png";
import Stool from "./stool.png";
import Lamb from "./lamb.png";
import WorkChair from "./working-chair.png";
import Fabric from "./fabric-chair.png";
import BedChair from "./bedroom-chair.png";

const Cardinfo = [
    { id: 8, category: "Living Room", name: "Fabric Chair", price: "$250.00", image: Fabric },
    { id: 2, category: "Living Room", name: "Modern Stand", price: "$500.00", image: Stand },
    { id: 3, category: "Living Room", name: "Elegant Brown Sofa", price: "$800.00", image: Brownsofa },
    { id: 4, category: "Kitchen", name: "Stylish Bowel", price: "$60.00", image: Bowel },
    { id: 5, category: "Kitchen", name: "Classic Stool", price: "$150.00", image: Stool },
    { id: 6, category: "Bedroom", name: "Lamb Chair", price: "$450.00", image: Lamb },
    { id: 7, category: "Office", name: "Ergonomic Work Chair", price: "$300.00", image: WorkChair },
    { id: 1, category: "Living Room", name: "Brown Living Room Sofa", price: "$1,200.00", image: Vasa },
    { id: 9, category: "Bedroom", name: "Bedside Chair", price: "$200.00", image: BedChair },
];

export default Cardinfo; // Export the products array
