import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, coverImg, title}) => {
    return (
        <div className='mt-12 mb-10 '>
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-4 mt-24'>
                {
                    items.map((item, i)=><MenuItem key={i} item={item}></MenuItem> )
                }
            </div>
            <div className='justify-center flex mt-3'>
            <Link to={`/order/${title}`} > 
            <button className='btn btn-outline border-0 border-b-4 uppercase'>Open your favourite food</button>
            </Link>
            </div>
        </div>
    );
};

export default MenuCategory;