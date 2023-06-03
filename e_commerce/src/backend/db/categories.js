import { v4 as uuid } from "uuid";

// import autopart from "../assets/autopart.jpg";
// import clothes from "../assets/clothes.jpg";
// import food from "../assets/food.jpg";
// import lappy from "../assets/lappy.jpg";
// import mobiles_phones from "../assets/mobiles_phones.jpg";
// import sale from "../assets/sale.jpg";
// import appliances from "../assets/appliances.jpg";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "fiction",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "non-fiction",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "horror",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
];

// const imageArr = [
//   {
//     image: mobiles_phones,
//     value: "smartphones",
//   },

//   {
//     image: lappy,
//     value: "laptops",
//   },

//   {
//     image: clothes,
//     value: "fashion",
//   },

//   {
//     image: food,
//     value: "groceries",
//   },

//   {
//     image: appliances,
//     value: "home-appliances",
//   },

//   {
//     image: autopart,
//     value: "automotivevehicle",
//   },

//   {
//     image: sale,
//     value: "",
//   },
// ];
