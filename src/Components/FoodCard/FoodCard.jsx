import React from 'react';


const FoodCard = ({item}) => {
    const {image, price, name, recipe}= item;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <p className='absolute right-10 top-4 bg-black text-white px-2'> ${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;