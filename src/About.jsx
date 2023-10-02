import React from "react";
import web from "../src/images/img1.jpg"
import { NavLink } from "react-router-dom";
import Comman from "./Comman";

const About = () => {
    return (
        <>

          <Comman name='welcome to About page' imgsrc={web} visit="/Contact" btname="Contact Now"></Comman>
        </>
    )
}
export default About;