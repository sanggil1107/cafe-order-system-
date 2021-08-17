import React, { useEffect, useState } from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2 } from './../Services/ServicesElements';
import ProductService from '../../service_backend/ProductService';

const DrinkMenu = () => {

    const [drinkList, setDrinkList] = useState([]);

    useEffect(() => {
        ProductService.getDrinkList().then(res => {
            setDrinkList(res.data);
            console.log(res.data);
        })
    }, []);

    return (
        <ServicesContainer>
            <ServicesH1>음료</ServicesH1>
            <ServicesWrapper>
                {drinkList.map((drink, i) => (
                    <ServicesCard>
                        <ServicesIcon src={drink.image}/>
                        <ServicesH2>{drink.name}</ServicesH2>
                    </ServicesCard>
                ))}
            </ServicesWrapper>
        </ServicesContainer>
    );
}

export default DrinkMenu;