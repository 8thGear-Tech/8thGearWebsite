import cardData from "../../data/blog.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BlogReadMoreLinkBtn } from "../Buttons/BlogBtn";
import { BlogReadMoreBtn } from "../Buttons/BlogBtn";

export function BigBlogCard() {
  return (
    <>
      {cardData.mainCard.map((items) => {
        const { image, title, text, date } = items;
        return (
          <Card className="" style={{ width: "auto" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title className="h5">{title}</Card.Title>

              <Card.Text>{date}</Card.Text>
              <Card.Text>{text}</Card.Text>
              <BlogReadMoreLinkBtn />
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
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
        {cardData.sideCrads.map((items) => {
          return (
            <div className="" key={items.id}>
              <SingleSideBlogCard {...items} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export function SingleSideBlogCard(items) {
  const { image, text, date } = items;
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
          <div class="col-7">
            <h6 class="">{date}</h6>
            <p class="text-fluid5">{text}</p>
            <BlogReadMoreLinkBtn />
          </div>
        </div>
      </div>
    </>
  );
}
