// //    <BigBlogCard />
// //       <SideBlogCard />
// //       <MainBlogCard />

// import React from "react";
// import { BigBlogCard } from "../../components/AllCards/Blogcards";
// import { MainBlogCard } from "../../components/AllCards/Blogcards";
// import { SideBlogCard } from "../../components/AllCards/Blogcards";
// import Line2 from "../../assets/images/Line2.jpg";
// import { Navbar12 } from "../../components/Navbar";
// import { BlogPost } from "../../components/BlogPost";
// import { SideBlogPost } from "../../components/BlogPost";

// const BlogPage = () => {
//   return (
//     <>
//       <Navbar12 />
//       <section className="  container-fluid my-5  px-4 ">
//         <div className=" d-none d-xs-none d-md-block d-lg-block">
//           <div className="row g-3   d-flex justify-content-end ">
//             <div className="col-md-3  col-lg-3 blogCategory ms-5  ">
//               <h6 className=" h6 "> BLOG CATEGORIES</h6>
//               <ul className=" ">
//                 <li>Products</li>
//                 <li>Software</li>
//                 <li>Marketing</li>
//                 <li>Music</li>
//                 <li>Travel</li>
//                 <li>Sport</li>
//               </ul>
//             </div>
//             <div className="col-md-6  col-lg-7">
//               <div className=" d-flex ">
//                 <img src={Line2} className="me-5" alt="" />

//                 <BigBlogCard />

//                 <img src={Line2} className="ms-5   " alt="" />
//               </div>
//             </div>
//             <div className="col-md-3 col-lg-3  ">
//               <SideBlogCard />
//             </div>

//             <div className="">
//               <h3 className="text-center py-3">Lorem ipsum dolor sit amet. </h3>
//               <MainBlogCard />
//               <div className=""></div>
//             </div>
//           </div>
//         </div>
//         <div className=" d-lg-none d-md-none d-sm-block d-xs-block">
//           <h6 className=" h6 "> BLOG CATEGORIES</h6>
//           <ul className=" ">
//             <li>Products</li>
//             <li>Software</li>
//             <li>Marketing</li>
//             <li>Music</li>
//             <li>Travel</li>
//             <li>Sport</li>
//           </ul>

//           <div className="row   d-flex justify-content-center">
//             <div
//               className="d-flex justify-content-center"
//               style={{ width: "33rem" }}
//             >
//               <BigBlogCard />
//             </div>

//             <div
//               className="d-flex justify-content-center my-4"
//               style={{ width: "23rem" }}
//             >
//               <SideBlogCard />
//             </div>
//             <h3 className="text-center py-3">Lorem ipsum dolor sit amet </h3>
//             <div
//               className="d-flex justify-content-center"
//               style={{ width: "35rem" }}
//             >
//               <MainBlogCard />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default BlogPage;
