import { InstagramBtn } from "../components/Buttons/BlogBtn";
import { LinkedInBtn } from "../components/Buttons/BlogBtn";
import { ShareBtn } from "../components/Buttons/BlogBtn";
import { FacebookBtn } from "../components/Buttons/BlogBtn";
//import info from "../data/BlogPost.json"
import info from "../data/blog.json";
import CardData from "../data/blog.json";

export const BlogPost = () => {
  return (
    <>
      {CardData.mainCard.map((mainCards) => {
        const { heroImage, date, text1, text2, text3, bodyImage, text4, id } =
          mainCards;
        return (
          <>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
              key={id}
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                  Blog
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body d-lg">
                <header className="">
                  <img src={heroImage} alt="" />
                </header>
                <div>
                  <h6 className="mt-4">{date}</h6>
                  <div className="blogBody">
                    <h2>{text1}</h2>
                    <p>{text2} </p>
                    <p>{text3}</p>
                    <img className="blogImage" src={bodyImage}></img>
                    <p>{text4} </p>
                    <div>
                      <FacebookBtn></FacebookBtn>
                      <InstagramBtn></InstagramBtn>
                      <LinkedInBtn></LinkedInBtn>
                      <ShareBtn></ShareBtn>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h5 className="">John Doe:</h5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                👍 👎 Reply
                <div className="mt-4">
                  <h5 className="">John Doe:</h5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                👍 👎 Reply
                <div className="mt-4">
                  <h5 className="">John Doe:</h5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                👍 👎 Reply
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export const SideBlogPost = () => {
  return (
    <>
      {info.sideCrads.map((sideCrad) => {
        const { heroImage, date, text1, text2, text3, bodyImage, text4, id } =
          sideCrad;
        return (
          <>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
              key={id}
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                  Blog
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body d-lg">
                <header className="">
                  <img src={heroImage} />
                </header>
                <div>
                  <h6 className="mt-4">{date}</h6>
                  <div className="blogBody">
                    <h2>{text1}</h2>
                    <p>{text2} </p>
                    <p>{text3}</p>
                    <img className="blogImage" src={bodyImage}></img>
                    <p>{text4} </p>
                    <div>
                      <FacebookBtn></FacebookBtn>
                      <InstagramBtn></InstagramBtn>
                      <LinkedInBtn></LinkedInBtn>
                      <ShareBtn></ShareBtn>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h5 className="">John Doe:</h5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                👍 👎 Reply
                <div className="mt-4">
                  <h5 className="">John Doe:</h5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                👍 👎 Reply
                <div className="mt-4">
                  <h5 className="">John Doe:</h5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                👍 👎 Reply
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
