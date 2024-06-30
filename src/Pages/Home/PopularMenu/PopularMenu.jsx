import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu]=useState([]) //আমাদের ডাটা হচ্ছে array of object so by default কোন ডাটা থাকবে না empty একটা ‍array হবে।
    console.log(menu);
    useEffect( ()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenu(data.filter(item => item.category === 'popular')))
        .catch(error=> console.log(error))
    } ,[])
    return (
        <div className='mt-16 mb-20'>
            <SectionTitle heading="From our Menu" subHeading="Popular Items"></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    menu.map((item, i)=><MenuItem key={i} item={item}></MenuItem> )
                }
            </div>
            <div className='justify-center flex mt-3'>
            <button className='btn btn-outline border-0 border-b-4 '>View full menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;