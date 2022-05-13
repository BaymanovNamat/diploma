import coversImage from "../assets/covers.jpg";
import chargingImage from "../assets/charging.jpg";
import accessoriesImage from "../assets/accessories.jpg";
import safety_glassImage from "../assets/safety_glass.jpg";


const categories = [
  {
    title: "Covers",
    categoryId: "covers",
    image: coversImage,
    description: "Holsters are commonly used alone for devices that include rubberized padding, and/or are made of plastic and without exposed rigid corners. Heavy duty cases are designed to protect from drops and scratches  A standing (or kickstand) case keeps the device standing upright. The claspible kickstand of some horizontal cases holds the device in a flatter or steeper angle, depending on whether it is horizontally placed on a surface clockwise or counter-clockwise. The flat angle allows tapping without pushing the device over, while the steep angle is intended for watching",
  },
  {
    title: "Charging",
    categoryId: "charging",
    image: chargingImage,
    description: "A battery charger, or recharger,[1][2] is a device that stores energy in a battery by running an electric current through it. The charging protocol (how much voltage or current for how long, and what to do when charging is complete) depends on the size and type of the battery being charged. Some battery types have high tolerance for overcharging (i.e., continued charging after the battery has been fully charged) and can be recharged by connection to a constant voltage source or a constant current source, depending on battery type. Simple chargers of this type must be manually disconnected at the end of the charge cycle. Other battery types use a timer to cut off when charging should be complete. Other battery types cannot withstand over-charging, becoming damaged (reduced capacity, reduced lifetime), over heating or even exploding. The charger may have temperature or voltage sensing circuits and a microprocessor controller to safely adjust the charging current and voltage, determine the state of charge, and cut off at the end of charge Chargers may elevate the output voltage proportionally with current to compensate for impedance in the wires",
  },
  {
    title: "Accessories",
    categoryId: "accessories",
    image: accessoriesImage,
    description: "Photo accessories Smart lenses are larger and more capable than the phone''s camera having optical zoom and other features. The smartphone connects to them over Wi-Fi using an app. They are compatible with most smartphones.[1] Smart flash can be used also for selfies Selfie stick Main article: Selfie stick Selfie sticks are hand-held extensible monopods used to move the devices further away than would have been possible with the reach of the human arm, allowing for the camera to take shots to be taken at angles that wouldn’t have been possible before. Smartphone tripod mount A tripod; it is designed to hold the device in place in a fixed location on the ground during the capture of photographs.",
  },

  {
    title: "Safety-glasses",
    categoryId: "safety-glasses",
    image: safety_glassImage,
    description: "Safety glasses provide eye protection for general working conditions where there may be dust, chips or flying particles. Additional side protection can be provided by the use of side shields and wraparound-style safety glasses. Safety lenses are available in glass, plastic, polycarbonate and Trivex™ materials.",
  },
];


export function getCategories() {
  return categories;
}

export function getCategory(categoryId) {
  return categories[
    categories.findIndex(
      category => category.categoryId === categoryId
    )
  
  ]
}