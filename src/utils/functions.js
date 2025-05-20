// import Kid from "../assets/kid.jpg";
// import Men from "../assets/men.png";
// import Women from "../assets/women.jpg";


// export const getImageUrl = (img) => {
//   return `http://localhost:5000/uploads/${img[0].url}`;
// };
// // console.log(getImageUrl(img));

// export const imagesProduct = {
//   Kids: Kid,
//   Men: Men,
//   Women: Women,
// };


import Kid from "../assets/kid.jpg";
import Men from "../assets/men.png";
import Women from "../assets/women.jpg";

// Assuming Cloudinary URL is stored in product.images[0].url
export const getImageUrl = (img) => {
  return img?.url || '';  // Return the Cloudinary URL directly, in case it's available
};

export const imagesProduct = {
  Kids: Kid,
  Men: Men,
  Women: Women,
};
