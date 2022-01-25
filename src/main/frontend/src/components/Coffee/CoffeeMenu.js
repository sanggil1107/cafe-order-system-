import React, { useEffect, useState } from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2 } from './../Menu/ServicesElements';
import ProductService from '../../service_backend/ProductService';
import MenuDetail from './../Menu/MenuDetail';
import ScrollToTop from '../ScrollToTop';

const CoffeeMenu = () => {

    const [coffeeList, setCoffeeList] = useState([]);
    const [modal, setModal] = useState(false);

    const openModal = (i) => {
        setCoffeeList(coffeeList =>
            coffeeList.map(list =>
                list.productId === i ? { ...list, modal: true } : list
            )
        );
        setModal(true);
    }

    useEffect(() => {
        ProductService.getCoffeeList().then(res => {
            const lists = res.data;
            const temp = [];

            lists.map((list, i) => (
                temp.push({
                    productId: list.productId,
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
            
            setCoffeeList(coffeeList.concat(temp));
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
            <ServicesH1>커피</ServicesH1>
            <ServicesWrapper>
                { coffeeList.map((coffee, i) => (
                    <>
                        <ServicesCard onClick={() => openModal(coffee.productId)}>
                            <ServicesIcon src={coffee.images} />
                            <ServicesH2>{coffee.name}</ServicesH2>
                        </ServicesCard>
                        <MenuDetail list={coffeeList} setLists={setCoffeeList} menu={coffee} modal={setModal} />
                    </>
                )) }
            </ServicesWrapper>
        </ServicesContainer>
            
        </>
    );
}

export default CoffeeMenu;
