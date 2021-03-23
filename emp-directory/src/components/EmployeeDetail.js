import React from "react";

function EmployeeDetail(props) {
    return (
        <main className="card" style={{ width: "750px" }}>
            <div className="row no-gutters">
                <section className="col-sm-4 col-md-2">
                    <img className="card-img" src={props.picture} alt={props.title + " Card"} />
                </section>
                <section className="col-sm-8 col-md-10">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-7">
                                <h5 className="card-title">{props.title}</h5>
                            </div>
                            <div className="col-5 location">
                                <h6>{props.location}</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h6>Email: {props.email}</h6>
                                <h6>Phone: {props.phone}</h6>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default EmployeeDetail;