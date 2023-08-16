import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-6">
          <h2 className="text-center">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dolor euismod, tristique odio eu,
            vestibulum nisi. Aenean ut convallis lorem, at efficitur libero.
          </p>
          <p>
            Fusce ut lectus at urna scelerisque dapibus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas.
          </p>
          <p>
            Vestibulum aliquet justo vitae justo hendrerit, eget iaculis dui volutpat. Praesent ut arcu at nunc
            tincidunt viverra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
