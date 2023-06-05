import { Colors } from "src/app/my-design/my-design.component";
import { Country } from "src/app/my-translate-menu/Country";


//square logo recommended
export const image_Paths_Logo = [
  "../../assets/images/acad_square.svg",
  // Add more logo if you need it
];

//square logo recommended
export const logo_delete = "../../assets/images/croix.svg";
export const logo_upload = "../../assets/images/logo.svg";


export const max_px = 1000; //max size of export QR code only

export const colors_tab = [new Colors("#552083", "#C3BC25"),
new Colors("#ffffff", "#000000"),
new Colors("#167575", "#c36d25"),
new Colors("#2A9F1E", "#BF242C")
  // Be sure about the contrast between your colors
];

export const countries_tab = [
  new Country("Français", "fr", "../../assets/images/French_Flag.svg"),
  new Country("English", "en", "../../assets/images/british_flag.svg")
];