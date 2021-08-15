import React, { useEffect, useState } from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon } from './../Services/ServicesElements';


const FoodMenu = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238720.jpg"/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238720.jpg"/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238720.jpg"/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238720.jpg"/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238720.jpg"/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238720.jpg"/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238720.jpg"/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238720.jpg"/>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
}


export default FoodMenu;