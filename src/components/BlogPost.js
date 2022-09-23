import blog from "../assets/images/Rectangle 9.png"
import { InstagramBtn} from "../components/Buttons/BlogBtn"
import {LinkedInBtn} from "../components/Buttons/BlogBtn"
import {ShareBtn} from "../components/Buttons/BlogBtn"
import {FacebookBtn} from "../components/Buttons/BlogBtn"
import {BlogReadMoreLinkBtn} from "../components/Buttons/BlogBtn"


export const BlogPost = () => {
    return (
        <>
       <BlogReadMoreLinkBtn></BlogReadMoreLinkBtn>
<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasRightLabel">Blog</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
<div class="offcanvas-body  d-lg">
            <header className="hero"></header>
            <div className="border">
            <h6 className="mt-4">19 may 2022</h6>
            <div className="blogBody">
            <h2>Lorem ipsum dolor sit amet consectetur adip  labore et dolore magna aliqua</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla. </p>
            <p>adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel friv</p>
            <img className="blogImage" src={blog}></img>
            <p>lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel friv lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel friv </p>
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