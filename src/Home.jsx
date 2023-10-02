
import React from "react";
import web from "../src/images/img1.jpg"
import { NavLink } from "react-router-dom";
import Comman from "./Comman";

const Home = () => {
    return (
        <>
       <Comman name='Grow your business with ' imgsrc={web} visit="/Service" btname="Get Started"></Comman>
        </>
    )
}
export default Home;