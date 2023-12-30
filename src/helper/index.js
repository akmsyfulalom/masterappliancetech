// const BASE_URL = "https://masterappliancetech.vercel.app/"

// export const getData = async () => {
//     const res = await fetch(`${BASE_URL}json/masterapplienceNews.json`);
//     if (!res.ok) {
//         throw new Error("Failed to fetch data");

//     };
//     return res.json();
// };


// export const getBlogView = async (id) => {
//     let item = await getData();

//     if (!Array.isArray(item)) {
//         item = item.items || [];
//     }

//     const singleItem = item.find(blog => blog?.id === id);
//     console.log(singleItem);
//     return singleItem;
// };





// export const getReviews = async () => {
//   const res = await fetch(`${BASE_URL}json/review.json`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data ok");

//   };
//   return res.json();
// };

