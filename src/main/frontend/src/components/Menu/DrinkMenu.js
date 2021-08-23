import React, { useEffect, useState } from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2 } from './../Services/ServicesElements';
import ProductService from '../../service_backend/ProductService';
import MenuDetail from './MenuDetail';
import ScrollToTop from '../ScrollToTop';

const DrinkMenu = () => {

    const [drinkList, setDrinkList] = useState([]);
    const [modal, setModal] = useState(false);

    const openModal = (i) => {
        setDrinkList(drinkList =>
            drinkList.map(list =>
                list.productId === i ? { ...list, modal: true } : list
            )
        );
        setModal(true);
    }

    useEffect(() => {
        
        ProductService.getDrinkList().then(res => {
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

            setDrinkList(drinkList.concat(temp));
  
        })
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
        <>
        <ScrollToTop />
        <ServicesContainer>
            <ServicesH1>음료</ServicesH1>
            <ServicesWrapper>
                { drinkList.map((drink, i) => (
                    <>
                        <ServicesCard onClick={()=> openModal(drink.productId)}>
                            <ServicesIcon src={drink.images}/>
                            <ServicesH2>{drink.name}</ServicesH2>
                        </ServicesCard>
                        <MenuDetail lists={drinkList} setLists={setDrinkList} menu={drink} modal={setModal}/>
                    </>
                )) }
            </ServicesWrapper>
        </ServicesContainer>
        </>
    );
}

export default DrinkMenu;