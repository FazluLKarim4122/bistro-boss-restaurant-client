import React from 'react';

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Freatured = () => {
    return (
        <div className="fetured-item bg-fixed pt-6 ">
            <SectionTitle heading='From our menu' subHeading='Check it out'></SectionTitle>
            <div className="flex justify-center items-center gap-4 px-16 py-16 ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className=" text-[#D9D9D9] space-y-2">
                    <h4>March 20, 2023</h4>
                    <h3 className="uppercase">where can i cget some?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ipsa quidem dignissimos quas! Quis, nulla voluptate? A saepe ipsam, magnam sequi vitae maiores placeat dignissimos in. Quo illo minus sapiente fuga aspernatur inventore assumenda id doloribus asperiores dolores iure rerum voluptatum dolorem ea, voluptates dignissimos maiores doloremque hic? Id, dolorem.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-[#D9D9D9]">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Freatured;