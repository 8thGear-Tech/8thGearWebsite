import cardData from "../../data/blog.json";
import info from "../../data/blog.json"
import {BlogReadMoreLinkBtn} from "../../components/Buttons/BlogBtn";
// import Line2 from "../../assets/images/Line2.jpg";

//MainBlogCard
export const BigBlogCard = () => {
  return (
    <>
      {info.mainCard.map((items) => {
        const { image, title, text, date } = items;
        return (
          <>
            {/* <div className="d-flex">
              <div className="col-2 d-sm-none d-md-block  d-none d-sm-block">
                <img src={Line2} alt="" />
              </div>
              <div className="col-10"> */}

            <div className="card1 card mx-3 ">
              <img src={image} className="card-img-top" alt={"img"} />
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <h6>{date}</h6>
                <p>{text}</p>
                <BlogReadMoreLinkBtn></BlogReadMoreLinkBtn>
              </div>
            </div>

            {/* </div>
              <div className="col-2 d-sm-none d-md-block d-none d-sm-block">
                <img src={Line2} alt="" />
              </div>
            </div> */}
          </>
        );
      })}
    </>
  );
};

// subBlogCards
export const MainBlogCard = () => {
  return (
    <>
      <div className="container-fluid mx-3  ">
        <div className=" row d-flex justify-content-end mx-1 ">
          {cardData.subCards.map((items) => {
            return (
              <>
                <div
                  className=" col-lg-5 col-md-5 col-sm-12 col- xs-12 py-2  "
                  key={items.id}
                >
                  <SingleMainBlogCard {...items} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export const SingleMainBlogCard = (items) => {
  const { image, title, text } = items;
  return (
    <>
      <div className="card mx-3 my-3">
        <img
          src={image}
          className="card-img-top  img-responsive h-100"
          alt={"img"}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{text}</p>
          <button>Read More</button>
        </div>
      </div>
    </>
  );
};

//SideBlogCard

// subBlogCards
export const SideBlogCard = () => {
  return (
    <div className="">
      <div className="">
        {info.sideCrads.map((props) => {
          return (
            <div className="" key={props.id}>
              <SingleSideBlogCard {...props} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const SingleSideBlogCard = (props) => {
  const { image, text, date } = props;
  return (
    <>
      <div className="card    sidecard mb-3 img-fluid">
        <div className="row g-0 ">
          <div className="col-5">
            <img src={image} className="sideimg  img-fluid" alt={"img"} />
          </div>
          <div className="col-7">
            <h6 className="card-title  text-fluid1">{date}</h6>
            <p className="card-text text-fluid2">{text}</p>
            <BlogReadMoreLinkBtn></BlogReadMoreLinkBtn>
          </div>
        </div>
      </div>
    </>
  );
};
