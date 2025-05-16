import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { FaArrowDown, FaSearch, FaTimes } from "react-icons/fa";
import "../Insights/insights.css";
import insightsheroimg from "../../assets/images/insights/insights-hero-img.png";
import blog from "../../assets/images/insights/blog.png";
import dropdownicon from "../../assets/images/insights/dropdownicon.png";
import blogcard1 from "../../assets/images/insights/blogcard1.png";
import blogcard2 from "../../assets/images/insights/blogcard2.png";
import blogcard3 from "../../assets/images/insights/blogcard3.png";
import arrowdown from "../../assets/images/insights/arrowdown.png";
import searchicon from "../../assets/images/insights/searchicon.png";
import { HomepageNav } from "../../components/Navbar";
import { Link } from "react-router-dom";

export const Insights = () => {
  return (
    <>
      <HomepageNav />
      <Hero />
      <Blog />
      <BlogSection />
    </>
  );
};

const Hero = () => {
  return (
    <section className="bg-purple py-5">
      <div
        className="container bg-white position-relative px-3 px-md-5 py-5"
        style={{ minHeight: "600px" }}
      >
        <div className="row align-items-center">
          {/* Left Section (Text) */}
          <div
            className="col-12 col-md-6 d-flex flex-column justify-content-between"
            style={{ minHeight: "450px" }}
          >
            <div className="my-auto text-center text-md-start">
              <h2 className="mb-3 fw-bold">Insights and News</h2>
              <p className="mx-auto mx-md-0" style={{ maxWidth: "90%" }}>
                At 8thGear Hub, we provide a wealth of insights through informed
                articles, news, and blogs on current developments in various
                topics, both locally and internationally.
              </p>
              <div className="my-4 d-flex justify-content-center justify-content-md-start">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    backgroundColor: "#7C0C91",
                  }}
                >
                  <span className="text-white fs-4">↓</span>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section (Image) */}
          <div className="col-12 col-md-6">
            <img
              src={insightsheroimg}
              alt="Buildings"
              className="img-fluid"
              style={{ maxHeight: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);

  // Handle overflow scroll when modal is visible
  useEffect(() => {
    if (isCategoriesVisible) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [isCategoriesVisible]);

  // Toggle modal visibility
  const toggleCategories = () => {
    setIsCategoriesVisible((prev) => !prev);
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-start">
        <div className="mb-3" style={{ position: "relative", top: "-20px" }}>
          <div
            className="input-group w-100 w-md-75 w-lg-50"
            style={{ maxWidth: "500px" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Type your search"
              style={{ borderRadius: "5px" }}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              style={{ borderRadius: "0 5px 5px 0" }}
            >
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Blogs Section */}
        <div
          className="col-lg-8 col-md-12 position-relative"
          style={{ marginBottom: "20px", height: "400px" }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={blog}
              alt="Building at night"
              className="img-fluid w-100"
              style={{ height: "100%", objectFit: "cover", display: "block" }}
            />
            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to top, rgba(128, 0, 128, 0.8) 0%, rgba(128, 0, 128, 0.6) 50%, rgba(128, 0, 128, 0) 100%)",
                zIndex: 1,
              }}
            ></div>
          </div>

          <button
            className="btn position-absolute d-md-block d-lg-none"
            onClick={toggleCategories}
            style={{
              top: "10px",
              right: "10px",
              background: "transparent",
              border: "none",
              zIndex: "3",
            }}
          >
            <img
              src={dropdownicon}
              alt="Menu"
              style={{ width: "30px", height: "30px" }}
            />
          </button>

          <div
            className="position-absolute text-white"
            style={{ bottom: "3%", left: "5%", zIndex: "2" }}
          >
            <h2>Blogs</h2>
            <p>Here you can browse recent blog releases.</p>
          </div>
        </div>

        {/* Categories Card for Large Screens */}
        <div
          className="col-lg-4 d-none d-lg-block"
          style={{
            backgroundColor: "#f0f0f0",
            borderLeft: "1px solid #ccc",
            padding: "20px",
            height: "400px",
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>Categories</h3>
          <ul className="list-unstyled">
            <li className="py-2 border-bottom">Blogs</li>
            <li className="py-2 border-bottom">News</li>
            <li className="py-2 border-bottom">Press Release</li>
            <li className="py-2 border-bottom">Newsletter</li>
          </ul>
        </div>

        {/* Mobile Modal (Fixed and Non-Scrolling) */}
        {isCategoriesVisible && (
          <div
            className="d-md-block d-lg-none position-fixed"
            onClick={toggleCategories} // Close modal when clicking the overlay
            style={{
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: "10",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
              style={{
                width: "90%",
                maxWidth: "300px",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                zIndex: "11",
                padding: "20px",
                borderRadius: "8px",
                position: "relative",
              }}
            >
              <button
                className="btn position-absolute"
                onClick={toggleCategories} // Close modal when clicking the close button
                style={{
                  top: "10px",
                  right: "10px",
                  background: "transparent",
                  border: "none",
                }}
              >
                <FaTimes size={24} color="#000" />
              </button>

              <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
                Categories
              </h3>
              <ul className="list-unstyled">
                <li className="py-2 border-bottom">Blogs</li>
                <li className="py-2 border-bottom">News</li>
                <li className="py-2 border-bottom">Press Release</li>
                <li className="py-2 border-bottom">Newsletter</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const BlogSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const blogPosts = [
    {
      id: 1,
      category: "Startup",
      date: "March 29, 2025",
      readTime: "5 min read",
      title:
        "From Startup to Scale-Up: Key Strategies for Navigating the Growth Phase",
      image: blogcard1,
      content: "This is the full blog content for the first post...",
    },
    {
      id: 2,
      category: "Startup",
      date: "April 5, 2025",
      readTime: "5 min read",
      title:
        "The Future of Business Efficiency: A Closer Look at 8thGear’s Transformational Services.",
      image: blogcard2,
      content: "This is the full blog content for the second post...",
    },
    {
      id: 3,
      category: "Startup",
      date: "May 16, 2025",
      readTime: "5 min read",
      title: "Unlock Business Growth with 8thGear’s Growth-as-a-Service (GaaS)",
      image: blogcard3,
      content: "This is the full blog content for the second post...",
    },
  ];

  const filteredBlogPosts = selectedFilter
    ? blogPosts.filter((post) => post.category === selectedFilter)
    : blogPosts;

  return (
    <div className="container mt-5">
      {/* Filter Dropdown */}
      <select
        className="form-select"
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
        style={{
          width: "180px",
          backgroundColor: "#920F84",
          color: "#ffffff",
          borderRadius: "5px",
          padding: "8px",
          fontWeight: "bold",
          border: "none",
          fontSize: "0.9rem",
          cursor: "pointer",
        }}
      >
        <option value="">Filter Blog Posts</option>
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Press Release">Press Release</option>
      </select>

      {/* Blog Cards */}
      <div className="row mt-4">
        {filteredBlogPosts.map((post) => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div
              className="card h-100 border-0"
              style={{
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "5px",
              }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="card-img-top"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                }}
              />

              <div
                className="p-3"
                style={{
                  backgroundColor: "#f5f5f5",
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}
              >
                <p
                  className="mb-1 text-uppercase"
                  style={{
                    fontSize: "0.85rem",
                    color: "#6a1b9a",
                    fontWeight: "bold",
                  }}
                >
                  {post.category} • {post.date} • {post.readTime}
                </p>
                <h5
                  className="mb-1"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {post.title}
                </h5>

                {/* Updated Read More Link */}
                <Link
                  to={`/read-more/${post.id}`}
                  style={{
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    color: "#6a1b9a",
                    fontWeight: "bold",
                  }}
                >
                  Read More ➔
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
