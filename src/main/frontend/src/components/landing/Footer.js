import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className=" font-small bg-light w-100  mt-5  footer">
        <div className="container text-center ">
          <div className="row ">
            <div className="col-md-12 py-4 ">
              <div className=" flex-center">
                <a
                  className="fb-ic"
                  style={{ color: "#0C2C54" }}
                  href="https://facebook.com/"
                >
                  <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>

                <a
                  className="tw-ic"
                  style={{ color: "#0C2C54" }}
                  href="https://twitter.com/"
                >
                  <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a
                  className="gplus-ic"
                  style={{ color: "#0C2C54" }}
                  href="https://plus.google.com/"
                >
                  <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a
                  className="li-ic"
                  style={{ color: "#0C2C54" }}
                  href="https://www.linkedin.com/"
                >
                  <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>

                <a
                  className="ins-ic"
                  style={{ color: "#0C2C54" }}
                  href="https://www.instagram.com/"
                >
                  <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>

                <a
                  className="pin-ic"
                  style={{ color: "#0C2C54" }}
                  href="https://www.pinterest.com/"
                >
                  <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center pb-3">
          © 2023 Copyright:
          <a href="https://www.defever.se/" style={{ color: "#0C2C54" }}>
            {" "}
            www.defever.se
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
