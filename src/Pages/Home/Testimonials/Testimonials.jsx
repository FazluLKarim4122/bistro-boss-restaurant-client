import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'



const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <SectionTitle subHeading="What our client say" heading="Testimonials"></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map((review, i) => <SwiperSlide key={i}>
                        <div className='m-20 text-center '>
                            <div className=' flex  justify-center'>
                            <Rating
                                
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            </div>
                            
                            <p className='text-[#444444] text-xl font-normal'> {review.details}</p>
                            <h3 className='text-[#CD9003] text-3xl font-medium'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;