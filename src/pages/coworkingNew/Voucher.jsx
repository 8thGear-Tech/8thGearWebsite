export const Voucher = () => {
  return (
    <div className="voucher text-center">
      <div className="m-4">
        <h3>LAGOS INNOVATES: FREE WORKSPACE VOUCHER</h3>
        <p>
          Redeem your workspace voucher <a href="https://www.8thgearpartners.com/">here</a>. To apply for your
          workspace grant, click <a href="https://www.8thgearpartners.com/">here</a>.
        </p>
      </div>
      <div className="video-container">
        <div className="responsive-iframe">
          <iframe
            src="https://www.youtube.com/embed/roWmniP_NUc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
