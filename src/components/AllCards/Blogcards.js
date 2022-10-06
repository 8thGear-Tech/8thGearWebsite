import cardData from "../../data/blog.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BlogReadMoreBtn } from "../Buttons/BlogBtn";
import info from "../../data/blog.json";
import { BlogReadMoreLinkBtn } from "../../components/Buttons/BlogBtn";
// import Line2 from "../../assets/images/Line2.jpg";

export const BigBlogCard = () => {
  return (
    <>
      {info.mainCard.map((items) => {
        const { image, title, text, date } = items;
        return (
          // <Card className="" style={{ width: "auto" }}>
          //   <Card.Img variant="top" src={image} />
          //   <Card.Body>
          //     <Card.Title className="h5">{title}</Card.Title>

          //     <Card.Text>{date}</Card.Text>
          //     <Card.Text>{text}</Card.Text>
          //     <BlogReadMoreLinkBtn />
          //   </Card.Body>
          // </Card>
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
{
  /* </div>
              <div className="col-2 d-sm-none d-md-block d-none d-sm-block">
                <img src={Line2} alt="" />
              </div>
            </div> */
}
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
    // <Card style={{ width: "auto" }}>
    //   <Card.Img variant="right" src={image} />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>{text}</Card.Text>
    //     <Button variant="primary">Read More</Button>
    //   </Card.Body>
    // </Card>
    <>
      <div class=" card my-4 ">
        <div class="row ">
          <div class="col-5">
            <img src={image} class="  img-fluid" alt="..." />
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
