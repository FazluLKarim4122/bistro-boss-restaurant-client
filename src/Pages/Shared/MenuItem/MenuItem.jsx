import React from 'react';

const MenuItem = ({item}) => {
    const {image, price, name, recipe}= item;
    return (
        <div className='flex space-x-4'>
            <img  className='w-[118px] h-[104px] rounded-tl-none rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]' src={image} alt="" />
            <div>
                <h3 className='text-xl font-normal'>{name}</h3>
                <p className='font-normal text-[#737373]'>{recipe}</p>
                
            </div>
            <p className='text-xl font-normal text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default MenuItem;