import VideoData from "../../data/bmcvideos.json";

export const BmCvideos = (props) => {
  const { video, title, articletype } = props;
  return (
    <>
      <div className="container-fluid mt-5">
        <div class="card">
          <iframe src={video} title="YouTube video"></iframe>
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{articletype}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export const DetailsCard = () => {
  return (
    <>
      <div className="container my-5 mt-5">
        <div class="card h-50 w-100 p-5 detailCardBg">
          <div class="card-body">
            <h5 class="card-title"> Brief</h5>
            <p class="card-text">
              A business model canvas (BMC) aids an entrepreneur in achieving
              clarity of thoughts regarding their business concern. It is a
              powerful tool that allows business owners to analyze and describe
              all aspects of their business in a single glance. It is a
              one-pager that helps in the simplification of any business
              procedure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export const VideoCard = () => {
  return (
    <>
      <div className="container">
        <div className=" row d-flex justify-content-end mx-1 ">
          {VideoData.Videoresources.map((videos) => {
            return (
              <>
                <div className=" col-lg-4 col-md-6 col-sm-12" key={videos.id}>
                  <BmCvideos {...videos} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
