import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuBg from '../../assets/menu/banner3.jpg';
import PopularMenu from '../Home/PopularMenu/PopularMenu';


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>
            <Cover img={menuBg} title={'our menu'}></Cover>
            <PopularMenu></PopularMenu>
            <h1>This is the menu bar</h1>
        </div>
    );
};

export default Menu;