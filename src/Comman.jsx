import React from "react";
import web from "../src/images/img1.jpg"
import { NavLink } from "react-router-dom";

const Comman = (props) => {
    return (
        <>

            <section id="header" className="d-flex align-items-center">

                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>{props.name} <strong className="brand-name">Devokar's</strong></h1>
                                <h2 className="my-3">we have most talented employee</h2>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn-get-started">
                                       {props.btname}
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                               <img src={props.imgsrc} className="img-fluid animated" alt="Comman img"></img>
                            </div>
                            </div> 
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Comman;