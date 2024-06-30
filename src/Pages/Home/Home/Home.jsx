import Banner from '../Banner/Banner' 
import Category from '../Category/Category';
import Freatured from '../Featured/Freatured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Freatured></Freatured>
            <Testimonials></Testimonials>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;