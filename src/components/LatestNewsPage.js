import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LatestNewsPage.css';

const LatestNewsPage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-8">
          <h2 className="text-center">Latest News</h2>
          <div className="news-item">
            <h4>Breaking News Title</h4>
            <p className="news-date">August 16, 2023</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dolor euismod, tristique odio eu,
              vestibulum nisi. Aenean ut convallis lorem, at efficitur libero.
            </p>
          </div>
          <div className="news-item">
            <h4>Another News Title</h4>
            <p className="news-date">August 15, 2023</p>
            <p>
              Fusce ut lectus at urna scelerisque dapibus. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
          </div>
          {/* Add more news items here */}
        </div>
      </div>
    </div>
  );
};

export default LatestNewsPage;
