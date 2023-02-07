import VideoData from "../../data/bmcvideos.json";

export const BmCvideos = (props) => {
  const { video, title, articletype } = props;
  return (
    <>
      <div className="container-fluid mt-5 mb-5">
        <div className="card">
          <iframe src={video} height="280" title="YouTube video"></iframe>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text" style={{ fontSize: "0.8rem" }}>
              {articletype}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export const DetailsCard = () => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center pt-5">
        <div className="card w-75 p-3 m-5">
          <div className="card-body">
            <h5 className="card-title"> Brief</h5>
            <p className="card-text">
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
      <div className="container-fluid">
        <div className="row d-flex justify-content-evenly">
          {VideoData.Videoresources.map((videos) => {
            return (
              <>
                <div
                  className="col-lg-4 col-md-6 col-sm-12 px-5 d-flex align-items-stretch"
                  key={videos.id}
                >
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
