import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Bharat_Logo.png";
import logoDark from "../../assets/img/logo-2.png";

const LogoArea = ({ className, dark }) => {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    getBanner();
  }, []);

  const getBanner = async () => {
    try {
      const res = await fetch(
        "https://api.bharattvmedia.com/api/advertisements",
      );

      const result = await res.json();

      if (result.success) {
        const ad = result.data
          .filter(
            (item) => item.position === "homepage_top" && item.status === true,
          )
          .sort((a, b) => a.priority - b.priority)[0];

        setBanner(ad);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={`logo_area ${className ? className : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 align-self-center">
            <div className="logo">
              <Link to="/">
                <img src={dark ? logoDark : logo} alt="logo" />
              </Link>
            </div>
          </div>

          <div className="col-lg-8 align-self-center">
            <div className="banner1">
              {banner && (
                <a
                  href={banner.redirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://api.bharattvmedia.com/uploads/advertisements/${banner.image}`}
                    alt={banner.title}
                    className="img-fluid"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LogoArea.propTypes = {
  className: PropTypes.string,
  dark: PropTypes.bool,
};

export default LogoArea;
