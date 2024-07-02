import { useState } from 'react';
import orderCover from '../../../assets/shop/order.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import FoodCard from '../../../Components/FoodCard/FoodCard';
import useMenu from '../../../Hooks/useMenu/useMenu';
import OrderTab from '../OrderTab/OrderTab';

const Order = () => {
    const [tabIndex, setTabIndex]= useState(0)
    const [menu]= useMenu()
    const salad = menu.filter((item)=> item.category === "salad")
    const pizza = menu.filter((item)=> item.category === "pizza")
    const soup = menu.filter((item)=> item.category === "soup")
    const dessert = menu.filter((item)=> item.category === "dessert")
    const drinks = menu.filter((item)=> item.category === "drinks")
    return (
        <div>
            <Cover img={orderCover} title='order food'></Cover>
            {/* <div role="tablist" className="tabs tabs-boxed">
                <a role="tab" className="tab">Tab 1</a>
                <a role="tab" className="tab tab-active">Tab 2</a>
                <a role="tab" className="tab">Tab 3</a>
            </div> */}
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='text-center mt-4'>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drink</Tab>
                </TabList>
                <TabPanel >
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;