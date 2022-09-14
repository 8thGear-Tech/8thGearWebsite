//    <BigBlogCard />
//       <SideBlogCard />
//       <MainBlogCard />

import React from "react";
import { BigBlogCard } from "../components/AllCards/Blogcards";
import { MainBlogCard } from "../components/AllCards/Blogcards";
import { SideBlogCard } from "../components/AllCards/Blogcards";
import Line2 from "../assets/images/Line2.jpg";

function BlogPage() {
  return (
    <>
      <section className="  container-fluid my-4 ">
        <div className="row g-3   d-flex justify-content-end ">
          {/* displaying on a large screen */}
          <div className="col-md-2 col-lg-2   blogCategory  	d-none d-md-block d-lg-block">
            <h5 className=" blogtext "> BLOG CATEGORIES</h5>

            <ul className="blogtext">
              <li>Products</li>
              <li>Software</li>
              <li>Marketing</li>
              <li>Music</li>
              <li>Travel</li>
              <li>Sport</li>
            </ul>
          </div>

          {/* displaying on a small screen */}

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
            <img
              src={Line2}
              className="mx-3 d-none d-md-block  d-lg-block "
              alt=""
            />
            <BigBlogCard />
            <img
              src={Line2}
              className="mx-3  d-none d-md-block  d-lg-block   "
              alt=""
            />
          </div>

          <div className="col-md-4 col-lg-4  ">
            <SideBlogCard />
          </div>
        </div>

        <h2 className="text-center">Lorem ipsum dolor sit amet </h2>

        <div className="">
          <MainBlogCard />
        </div>
      </section>
    </>
  );
}

export default BlogPage;
