import cardData from "../../data/blog.json";
import Card from "react-bootstrap/Card";
import { BlogReadMoreBtn } from "../Buttons/BlogBtn";
import info from "../../data/blog.json";
import { BlogReadMoreLinkBtn } from "../../components/Buttons/BlogBtn";

export const BigBlogCard = () => {
  return (
    <>
      {info.mainCard.map((items) => {
        const { image, title, text, date } = items;
        return (
          <div className="card1 card mx-3 ">
            <img src={image} className="card-img-top" alt={"img"} />
            <div className="card-body">
              <h3 className="card-title">{title}</h3>
              <h6>{date}</h6>
              <p>{text}</p>
              <BlogReadMoreLinkBtn></BlogReadMoreLinkBtn>
            </div>
          </div>
        );
      })}
    </>
  );
};

export const MainBlogCard = () => {
  return (
    <>
      <div className="container-fluid  ">
        <div className=" row d-flex justify-content-end mx-1 ">
          {cardData.subCards.map((items) => {
            return (
              <>
                <div
                  className=" col-lg-5 col-md-5 col-sm-12 col- xs-12 py-2 mx-2 "
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
          <h5 className="card-title h5">{title}</h5>
          <p>{text}</p>
          <BlogReadMoreBtn />
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
      <Card className=" card  sideCardImg mb-3">
        <Card.Img variant="top" src={image} className="" />
        <div className="sidecard-date-text ">{date}</div>
        <Card.Body className="text-center">
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        <div className="text-center">
          <BlogReadMoreLinkBtn></BlogReadMoreLinkBtn>
        </div>
      </Card>
    </>
  );
};
