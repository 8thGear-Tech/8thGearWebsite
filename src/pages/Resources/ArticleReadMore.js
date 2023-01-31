//internal import
import { Navbar21 } from "../../components/Navbar";
import { ArticleReadMoreHero } from "../../components/Hero/BGColorandTextHero";

//images
import resourceshero from "../../assets/images/resources/resourceshero.png";

const ArticleReadMore = () => {
  return (
    <>
      <Navbar21 />
      <ArticleReadMoreHero />
      <Article />
    </>
  );
};

const Article = () => {
  return (
    <div className="container py-5 px-4">
      <img
        src={resourceshero}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      ></img>{" "}
      <div className="float-start float-end">
        {" "}
        <p className="pt-5">
          For entrepreneurship, combining company building with venture funding
          combining company building with venture funding. For entrepreneurship,
          combining company building with venture funding, combining company
          building with venture funding. FFor entrepreneurship, combining
          company building with venture funding combining company building with
          venture funding. For entrepreneurship, combining company building with
          venture funding, combining company building
        </p>
      </div>
      <h3 className="">Tech</h3>
      <p className="">
        For entrepreneurship, combining company building with venture funding
        combining company building with venture funding. For entrepreneurship,
        combining company building with venture funding, combining company
        building with venture funding. FFor entrepreneurship, combining company
        building with venture funding combining company building with venture
        funding. For entrepreneurship, combining company building with venture
        funding, combining company building
      </p>
      <h3 className="">Tech</h3>
      <p className="">
        For entrepreneurship, combining company building with venture funding
        combining company building with venture funding. For entrepreneurship,
        combining company building with venture funding, combining company
        building with venture funding. FFor entrepreneurship, combining company
        building with venture funding combining company building with venture
        funding. For entrepreneurship, combining company building with venture
        funding, combining company building
      </p>
      <h3 className="">Tech</h3>
      <p className="pb-5">
        For entrepreneurship, combining company building with venture funding
        combining company building with venture funding. For entrepreneurship,
        combining company building with venture funding, combining company
        building with venture funding. FFor entrepreneurship, combining company
        building with venture funding combining company building with venture
        funding. For entrepreneurship, combining company building with venture
        funding, combining company building
      </p>
    </div>
  );
};

export default ArticleReadMore;
