// import { Vehicle } from "./vehicle";
import { BatMobile } from "./BatMobile";
import { MiniVan } from "./MiniVan";


let batMobile = new BatMobile(false,"T123","23K")
batMobile.getSpeed()
console.log(batMobile.getSpeed())

let MinIVan = new MiniVan(3,4,"23e","45K")
console.log(MinIVan.getSpeed())