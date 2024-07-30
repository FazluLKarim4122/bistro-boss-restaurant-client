import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuBg from '../../assets/menu/banner3.jpg';
import PopularMenu from '../Home/PopularMenu/PopularMenu';
import useMenu from '../../Hooks/useMenu/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
import dessertBg from '../../assets/menu/dessert-bg.jpeg';
import pizzaBg from '../../assets/menu/pizza-bg.jpg';
import saladBg from '../../assets/menu/salad-bg.jpg';
import soupBg from '../../assets/menu/soup-bg.jpg';


const Menu = () => {
    const [menu]= useMenu()
    const dessert = menu.filter((item)=> item.category === "dessert")
    const soup = menu.filter((item)=> item.category === "soup")
    const salad = menu.filter((item)=> item.category === "salad")
    const pizza = menu.filter((item)=> item.category === "pizza")
    const offered = menu.filter((item)=> item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuBg} title={'our menu'}></Cover>
            {/* offered menu items */}
            <SectionTitle subHeading="Don't Miss" heading="today's offer"></SectionTitle>
            <MenuCategory items={offered} ></MenuCategory>
            {/* dessert menu items */}
            {/* title গুলা ‍small letter এ দেই পরবর্তীতে condition match করতে কাজে লাগবে। এই title দিয়েই order page এ নিয়ে যাইতে পারি।*/}
            <MenuCategory items={dessert} title="dessert" coverImg={dessertBg}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} title="pizza" coverImg={pizzaBg}></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={salad} title="salad" coverImg={saladBg}></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soup} title="soup" coverImg={soupBg}></MenuCategory>
            
        </div>
    );
};

export default Menu;