import React from "react";
import web from "../src/images/img2.jpg"
import Card from "./Card";
import Sdata from './Sdata'

const Service = () => {
    return (
        <>
            <div className="my-5">

                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">

                            <div className="row gy-4" >
                                {/* <Card></Card> */}

                                {
                                    Sdata.map((val,ind)=>{
                                        return <Card key={ind} imgsrc={val.imgsrc}
                                        title={val.title}>
                                            
                                        </Card>
                                    })
                                }

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Service;