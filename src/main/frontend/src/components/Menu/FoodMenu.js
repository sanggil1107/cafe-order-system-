import React, { useEffect, useState } from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2 } from './../Services/ServicesElements';
import ProductService from '../../service_backend/ProductService';
import MenuDetail from './MenuDetail';

const FoodMenu = () => {

    const [foodList, setFoodList] = useState([]);
    const [open, setOpen] = useState(false);
    const handleCheck = () => {
        setOpen(true);
    }

    useEffect(() => {
        ProductService.getFoodList().then(res => {
            setFoodList(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <ServicesContainer>
            <ServicesH1>푸드</ServicesH1>
            <ServicesWrapper>
                {foodList.map((food, i) => (
                        <ServicesCard onClick={handleCheck}>
                            <ServicesIcon src={food.image}/>
                            <ServicesH2>{food.name}</ServicesH2>
                            {/* <MenuDetail open={open} setOpen={setOpen}/> */}
                        </ServicesCard>
                ))}
            </ServicesWrapper>
        </ServicesContainer>
    );
}


export default FoodMenu;