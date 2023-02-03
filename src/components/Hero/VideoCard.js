const ResourceNavBar = () => {
  return (
    <>
      <div className="container-fluid d-none d-lg-block d-md-block d-sm-block d-xs-none detailHeroBg">
        <div className="position-relative">
          <div class="card w-75 p-5 position-absolute top-50 start-50 translate-middle-x mt-5">
            <div class="card-body ">
              <h5 class="card-title text-center">Business Model Canva</h5>
              <p class="card-text">
                Created by: 8thGear Venture Studio.
                <br></br>
                Last Updated: Feburary 1st,2023.
                <br></br>
                No. of Videos:6
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid d-xs-block d-sm-none d-md-none d-lg-none detailHeroBg">
        <div className="position-relative">
          <div class="card w-75 position-absolute top-50 start-50 translate-middle-x mt-5">
            <div class="card-body ">
              <h5 class="card-title text-center">Business Model Canva</h5>
              <p class="card-text">
                Created by: 8thGear Venture Studio.
                <br></br>
                Last Updated: Feburary 1st,2023.
                <br></br>
                No. of Videos:6
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourceNavBar;
