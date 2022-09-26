//import blog from "../assets/images/Rectangle 9.png"
//import data from "../data/BlogPost.json"
import { InstagramBtn} from "../components/Buttons/BlogBtn"
import {LinkedInBtn} from "../components/Buttons/BlogBtn"
import {ShareBtn} from "../components/Buttons/BlogBtn"
import {FacebookBtn} from "../components/Buttons/BlogBtn"
import {BlogReadMoreLinkBtn} from "../components/Buttons/BlogBtn"


export const BlogPost = (props) => {
  const {heroImage, date, text1, text2, text3, bodyImage, text4, id } = props;
    return (
        <>
       <BlogReadMoreLinkBtn></BlogReadMoreLinkBtn>
<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasRightLabel">Blog</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
<div class="offcanvas-body d-lg" key={id}>
            <header className="hero"><img src={heroImage}/></header>
            <div className="border">
            <h6 className="mt-4">{date}</h6>
            <div className="blogBody">
            <h2>{text1}</h2>
            <p>{text2} </p>
            <p>{text3}</p>
            <img className="blogImage" src={bodyImage}></img>
            <p>{text4} </p>
            <FacebookBtn></FacebookBtn>
            < InstagramBtn></InstagramBtn>
            <LinkedInBtn></LinkedInBtn>
            <ShareBtn></ShareBtn>
            </div>
            </div>
<div className="mt-4">
                <h5 className="">John Doe:</h5>
              </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
        👍 👎  Reply
<div class="mt-4">
                <h5 className="">John Doe:</h5>
              </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
        👍 👎  Reply
<div className="mt-4">
                <h5 class="">John Doe:</h5>
              </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
        👍 👎  Reply
        </div>
        </div>
        </>
    )
}