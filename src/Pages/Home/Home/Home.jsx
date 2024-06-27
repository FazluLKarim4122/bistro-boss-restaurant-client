import Banner from '../Banner/Banner' 
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;