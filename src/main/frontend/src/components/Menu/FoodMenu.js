import React, { useEffect, useState } from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2 } from './ServicesElements';
import ProductService from '../../service_backend/ProductService';
import MenuDetail from './MenuDetail';

const FoodMenu = () => {

    const [foodList, setFoodList] = useState([]);
    const [modal, setModal] = useState(false);

    const openModal = (i) => {
        setFoodList(foodList =>
            foodList.map(list =>
                list.productId === i ? { ...list, modal: true } : list
            )
        );
        setModal(true);
    }

    useEffect(() => {
        ProductService.getFoodList().then(res => {

            const lists = res.data;
            const temp = [];

            lists.map((list, i) => (
                temp.push({
                    productId: list.productId - 1,
                    name: list.name,
                    description: list.description,
                    caffeine: list.caffeine,
                    fat: list.fat,
                    images: list.image,
                    kcal: list.kcal,
                    price: list.price,
                    protein: list.protein,
                    sodium: list.sodium,
                    subId: list.subId,
                    sugars: list.sugars,
                    modal: false
                })
            ))

            setFoodList(foodList.concat(temp));

        });
    }, []);

    useEffect(() => {
        if(modal) {
            document.body.style.cssText = `
              position: fixed; 
              top: -${window.scrollY}px;
              overflow: hidden;
              width: 100%;`;
            return () => {
              const scrollY = document.body.style.top;
              document.body.style.cssText = '';
              window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
            };
        }
      }, [modal]);

    return (
        <ServicesContainer>
            <ServicesH1>푸드</ServicesH1>
            <ServicesWrapper>
                { foodList.map((food, i) => (
                    <>
                        <ServicesCard onClick={() => openModal(food.productId)}>
                            <ServicesIcon src={food.images}></ServicesIcon>
                            <ServicesH2>{food.name}</ServicesH2>
                        </ServicesCard>
                        <MenuDetail lists={foodList} setLists={setFoodList} menu={food} modal={setModal}/>
                    </>
                )) }

            </ServicesWrapper>
        </ServicesContainer>
    );
}


export default FoodMenu;