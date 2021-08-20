import React, { useEffect, useState } from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2 } from './../Services/ServicesElements';
import ProductService from '../../service_backend/ProductService';
import { MenuDetail } from './MenuDetail';
import { GlobalStyle } from './GlobalStyle'

const FoodMenu = () => {

    const [foodList, setFoodList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
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
                {/* {foodList.map((food, i) => (
                        <ServicesCard onClick={openModal}>
                            <ServicesIcon src={food.image}/>
                            <ServicesH2>{food.name}</ServicesH2>
                            <MenuDetail showModal={showModal} setShowModal={setShowModal}/>
                            <GlobalStyle />
                        </ServicesCard>
                ))} */}
                <ServicesCard onClick={openModal}>
                    {/* <ServicesIcon src={food.image}/> */}
                    <ServicesH2>t</ServicesH2>
                    {showModal && <>

                        <MenuDetail showModal={showModal} setShowModal={setShowModal} />
                        {/* <GlobalStyle /> */}
                    </>
                    }

                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
}


export default FoodMenu;