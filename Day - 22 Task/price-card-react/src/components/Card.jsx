import React from "react";

function Card({ data }) {
  const {
    plan,
    price,
    user,
    storage,
    publicProjects,
    access,
    isPrivateProjects,
    privateProjects,
    isPhoneSupport,
    phoneSupport,
    isSubdomain,
    subdomain,
    isStatusReports,
    statusReports,
  } = data;

  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-center">{plan}</h5>
          <h6 className="card-price text-center">
            ${price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {user}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {storage}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {publicProjects}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {access}
            </li>
            <li className={isPrivateProjects ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    isPrivateProjects ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {privateProjects}
            </li>
            <li className={isPhoneSupport ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={isPhoneSupport ? "fas fa-check" : "fas fa-times"}
                ></i>
              </span>
              {phoneSupport}
            </li>
            <li className={isSubdomain ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={isSubdomain ? "fas fa-check" : "fas fa-times"}
                ></i>
              </span>
              {subdomain}
            </li>
            <li className={isStatusReports ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={isStatusReports ? "fas fa-check" : "fas fa-times"}
                ></i>
              </span>
              {statusReports}
            </li>
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
