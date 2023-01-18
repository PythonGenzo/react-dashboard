import React from "react";

const EarningCard = (props) => {
  return (
    <React.Fragment>
      <div className="col-xl-3 col-md-6 mb-4">
        <div
          className={`card border-left-${props.data.type} shadow h-100 py-2`}
        >
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div
                  className={`text-xs font-weight-bold text-${props.data.type} text-uppercase mb-1`}
                >
                  {props.data.name}
                </div>
                {props.data.name !== "Tasks" ? (
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {props.data.amount
                      ? `$${props.data.amount}`
                      : props.data.number}
                  </div>
                ) : (
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                        50%
                      </div>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm mr-2">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: `${props.data.number}` }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-auto">
                <i
                  className={`fas fa-${props.data.icon} fa-2x text-gray-300`}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EarningCard;
