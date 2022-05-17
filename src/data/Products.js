import productImage from "../assets/product1.jpg";
import productImage2 from "../assets/product2.jpg";
import productImage3 from "../assets/product3.jpg";
import productImage4 from "../assets/product4.jpg";


const products = [
  {
    image: productImage,
    price: "1200",
    title: "iPhone 13 Pro Max",
    productId: "iphone13-pro-max",
    categoryId: "covers",
    description: "Our stores, offices, and data centers are already carbon neutral. By 2030 our products — and your carbon footprint from using them — will be, too. We have also eliminated the plastic wrap around the iPhone 13 and iPhone 13 Pro boxes, saving 600 metric tons of plastic.",
  },
  {
    image: productImage2,
    price: "1500",
    title: "Sumung Galaxy S22 ultra",
    productId: "sumung-galaxys22-ultra",
    categoryId: "charging",
    description: "The Samsung Galaxy S22 is a series of Android-based smartphones designed, developed, manufactured, and marketed by Samsung Electronics as part of its Galaxy S series. Unveiled at Samsung's Galaxy Unpacked event on 9 February 2022, the series serves as the successor to the Galaxy S21 series and Galaxy Note 20 series.",
  },
  {
    image: productImage3,
    price: "1800",
    title: "iPhone 13",
    productId: "iphone13",
    categoryId: "accessories",
    description: "The iPhone 13 and iPhone 13 Mini (stylized as iPhone 13 mini) are smartphones designed, developed, marketed, and sold by Apple Inc. They are the fifteenth generation of iPhones (succeeding the iPhone 12 and iPhone 12 Mini). They were unveiled at an Apple Event in Apple Park in Cupertino, California on September 14, 2021, alongside the higher priced iPhone 13 Pro and iPhone 13 Pro Max flagships. Pre-orders for the iPhone 13 and iPhone 13 Mini began on September 17, 2021. They were officially released on September 24, 2021.",
  },
  {
    image: productImage4,
    price: "2200",
    title: "Google Pixel 6",
    productId: "google-pixel6",
    categoryId: "safety-glasses",
    description: "The Pixel 6 and Pixel 6 Pro are a pair of Android smartphones designed, developed, and marketed by Google as part of the Google Pixel product line. They collectively serve as the successor to the Pixel 5. The phones were first previewed in August 2021, confirming reports that they would be powered by a custom system on a chip named Google Tensor. The cameras are housed in a horizontal bar on the back, while the front features a hole-punch display notch in the center. They shipped with Android 12, with Google announcing numerous artificial intelligence and ambient computing features during the phones' launch event.",
  },
];


export function getProducts(categoryId) {
  if(categoryId) {
    return products.filter(product => product.categoryId === categoryId);
  }
  return products;
}

export function getProduct(productId) {
  return products[
    products.findIndex(
      product => product.productId === productId
    )
  
  ]
}