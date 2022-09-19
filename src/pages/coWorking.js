import * as React from "react";

const CoWorking = () => {
  return (
    <section className="container">
      <div className="background">
        <div class="container">
          <div class="row justify-content-start">
            <div class="col-4">One of two columns</div>
            <div class="col-4">One of two columns</div>
          </div>
          <div class="row justify-content-center">
            <div class="col-4">One of two columns</div>
            <div class="col-4">One of two columns</div>
          </div>
          <div class="row justify-content-end">
            <div class="col-4">One of two columns</div>
            <div class="col-4">One of two columns</div>
          </div>
          <div class="row justify-content-around">
            <div class="col-4">One of two columns</div>
            <div class="col-4">One of two columns</div>
          </div>
          <div class="row justify-content-between">
            <div class="col-4">One of two columns</div>
            <div class="col-4">One of two columns</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoWorking;
