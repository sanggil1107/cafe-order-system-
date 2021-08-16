import React, { useEffect, useState } from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon } from './../Services/ServicesElements';
import ProductService from '../../service_backend/ProductService';

const FoodMenu = () => {

    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        ProductService.getFoodList().then(res => {
            setFoodList(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <ServicesContainer id="services">
            <ServicesH1>푸드</ServicesH1>
            <ServicesWrapper>
                {foodList.map((food, i) => (
                    <ServicesCard>
                        <ServicesIcon src={food.image}/>
                    </ServicesCard>
                ))}
            </ServicesWrapper>
        </ServicesContainer>
    );
}


export default FoodMenu;