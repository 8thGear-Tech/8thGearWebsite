//    <BigBlogCard />
//       <SideBlogCard />
//       <MainBlogCard />

import React from "react";
import { BigBlogCard } from "../../components/AllCards/Blogcards";
import { MainBlogCard } from "../../components/AllCards/Blogcards";
import { SideBlogCard } from "../../components/AllCards/Blogcards";
import Line2 from "../../assets/images/Line2.jpg";
import { Navbar12 } from "../../components/Navbar";
import { BlogPost } from "../../components/BlogPost";
import { SideBlogPost } from "../../components/BlogPost";

const BlogPage = () => {
  return (
    <>
      <Navbar12 />
      <section className="  container-fluid my-5   ">
        <div className=" d-none d-md-block d-lg-block">
          <div className="row g-3   d-flex justify-content-end ">
            <div className="col-md-2 blogCategory  ">
              <h6 className=" h6 "> BLOG CATEGORIES</h6>
              <ul className=" ">
                <li>Products</li>
                <li>Software</li>
                <li>Marketing</li>
                <li>Music</li>
                <li>Travel</li>
                <li>Sport</li>
              </ul>
            </div>
            <div className="col-6">
              <div className=" d-flex ">
                <img src={Line2} className="me-5" alt="" />

                <BigBlogCard />

                <img src={Line2} className="ms-5   " alt="" />
              </div>
            </div>

            <div className="col-md-4 col-lg-4  ">
              <SideBlogCard />
            </div>
          </div>

          <h3 className="text-center py-3">Lorem ipsum dolor sit amet </h3>

          <div className="">
            <MainBlogCard />
            <div className="d-md-none d-lg-none d-sm-block d-xs-block">
              <h5 className=""> BLOG CATEGORIES</h5>
              <ul className=" ">
                <li>Products</li>
                <li>Software</li>
                <li>Marketing</li>
                <li>Music</li>
                <li>Travel</li>
                <li>Sport</li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-6 d-flex ">
              {/* <img
                src={Line2}
                className="mx-3 d-none d-md-block  d-lg-block "
                alt=""
              /> */}
              {/* <BigBlogCard /> */}
              {/* <img
                src={Line2}
                className="mx-3  d-none d-md-block  d-lg-block   "
                alt=""
              /> */}
              <BlogPost />
            </div>

            <div className="col-md-4 col-lg-4  ">
              {/* <SideBlogCard /> */}
              <SideBlogPost />
            </div>
          </div>
          {/* display on smaller screen */}
          <div className=" d-xs-block d-sm-block  d-lg-none d-md-none">
            <h6 className=" h6 "> BLOG CATEGORIES</h6>
            <ul className=" ">
              <li>Products</li>
              <li>Software</li>
              <li>Marketing</li>
              <li>Music</li>
              <li>Travel</li>
              <li>Sport</li>
            </ul>

            <div className="row   d-flex justify-content-center">
              <div
                className="d-flex justify-content-center"
                style={{ width: "33rem" }}
              >
                {/* <BigBlogCard /> */}
              </div>

              <div
                className="d-flex justify-content-center my-4"
                style={{ width: "28rem" }}
              >
                <SideBlogCard />
              </div>
              <h3 className="text-center py-3">Lorem ipsum dolor sit amet </h3>
              <div
                className="d-flex justify-content-center"
                style={{ width: "35rem" }}
              >
                <MainBlogCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;

// const BlogPage = () => {
//   return (
//     <main>
//       <Navbar12 />
//       <section className="container-fluid my-5 	d-none d-md-block d-lg-block ">
//         <div className="row g-3   d-flex justify-content-start ">
//           <div className="col-md-2   ">
//             <h6 className=" blogtext text-center  "> BLOG CATEGORIES</h6>
//             <ul className="blogtext ">
//               <li>Products</li>
//               <li>Software</li>
//               <li>Marketing</li>
//               <li>Music</li>
//               <li>Travel</li>
//               <li>Sport</li>
//             </ul>
//           </div>

//           <div className="col-6">
//             <div className=" d-flex ">
//               <img src={Line2} className="mx-3 " alt="" />
//               <BigBlogCard />
//               <img src={Line2} className="mx-3    " alt="" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default BlogPage;
