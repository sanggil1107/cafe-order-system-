import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { Button } from '../ButtonElement';
import '../../service_backend/LikeService'
import withAuth from '../withAuth';
import { Background, ModalWrapper, ModalImg, ModalContent, Modaldiv, Modalh4, Modalp, ModalFieldset, Modalviewinfo, Modalheadinfo, Modalmaininfo, Modalul1, Modalul2, Modalil, Modaldl, Modaldt, Modaldd, Modalbutton, CloseModalButton } from './MenuDetailElements';
import LikeService from '../../service_backend/LikeService';


const MenuDetail = ({ lists, setLists, menu, modal, token }) => {

    const [token1, setToken1] = useState(false);
    const tokenvalue = localStorage.getItem('token');
    const modalRef = useRef();
    const [likeitem, setLikeitem] = useState({
        userId: '',
        productId: 0,
        likeyn: 'Y'
    });
    const animation = useSpring({
        config: {
            duraton: 250
        },
        opacity: menu.modal ? 1 : 0,
        transform: menu.modal ? 'translateY(0%)' : 'translateY(-100$)'
    });

    useEffect(() => {

        if (token != null) {
            setToken1(true);
        }
        else {
            setToken1(false);
        }
    }, [token]);

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
         return () => document.removeEventListener('keydown', keyPress);
    }, []);

    useEffect(() => {
        setLikeitem({
            ...likeitem,
            userId: tokenvalue,
            productId: menu.productId
        });
    }, [menu.productId]);

    useEffect(() => {
        function handleTouchMove(event) {
          event.preventDefault(); 
        }
        function disableScroll() {
          document.body.style.overflow = 'hidden';
          document.querySelector('html').scrollTop = window.scrollY; // dimmed 되기 전 스크롤 위치 고정
        }
        window.addEventListener('touchmove', handleTouchMove, { passive: false })
        window.addEventListener('scroll', disableScroll);
        
        return () => {
          window.removeEventListener('touchmove', handleTouchMove);
          window.removeEventListener('scroll', disableScroll);
          document.body.style.overflow = 'visible';
        }
      }, []);

    const like = () => {
    
        // console.log(likeitem);

        if(token) {
            LikeService.setLike(likeitem).then(res => {

            })
            .catch(err => {
                console.log(err);
            });
        }
        else {
            alert('로그인 후 이용 부탁 드립니다.')
        }
    };


    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setLists(lists =>
                lists.map(list =>
                    list.productId === menu.productId ? { ...list, modal: false } : list
                )
            );
        }
    };

    const onClose = () => {
        setLists(lists =>
            lists.map(list =>
                list.productId === menu.productId ? { ...list, modal: false } : list
            )
        );
        modal(false);

    };

    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && menu.modal) {
            setLists(lists =>
                lists.map(list =>
                    list.productId === menu.productId ? { ...list, modal: false } : list
                )
            );
        }
    }, [setLists, menu.modal])

    return (
        <>
            { menu.modal &&
                <Background onClick={closeModal}>
                    {/* <animated.div> */}
                    <ModalWrapper>
                        <ModalImg src={menu.images}/>
                        <ModalContent>
                            <Modaldiv>
                                <Modalbutton onClick={like}>나만의 메뉴로 등록</Modalbutton>
                                <Modalh4>{menu.name}</Modalh4>
                                <Modalp>{menu.description}</Modalp>
                                <ModalFieldset>
                                    <Modalviewinfo>
                                        <Modalheadinfo>제품 영양 정보</Modalheadinfo>
                                        <Modalmaininfo>
                                            <Modalul1>
                                                <Modalil>
                                                    <Modaldl>
                                                        <Modaldt>1회 제공량(kcal)</Modaldt>
                                                        <Modaldd>{menu.kcal}</Modaldd>
                                                    </Modaldl>
                                                </Modalil>
                                                <Modalil>
                                                    <Modaldl>
                                                        <Modaldt>포화지방(g)</Modaldt>
                                                        <Modaldd>{menu.fat}</Modaldd>
                                                    </Modaldl>
                                                </Modalil>
                                                <Modalil>
                                                    <Modaldl>
                                                        <Modaldt>나트륨(g)</Modaldt>
                                                        <Modaldd>{menu.sodium}</Modaldd>
                                                    </Modaldl>
                                                </Modalil>
                                            </Modalul1>
                                            <Modalul2>
                                                <Modalil>
                                                    <Modaldl>
                                                        <Modaldt>단백질(mg)</Modaldt>
                                                        <Modaldd>{menu.protein}</Modaldd>
                                                    </Modaldl>
                                                </Modalil>
                                                <Modalil>
                                                    <Modaldl>
                                                        <Modaldt>당류(g)</Modaldt>
                                                        <Modaldd>{menu.sugars}</Modaldd>
                                                    </Modaldl>
                                                </Modalil>
                                                <Modalil>
                                                    <Modaldl>
                                                        <Modaldt>카페인(mg)</Modaldt>
                                                        <Modaldd>{menu.caffeine}</Modaldd>
                                                    </Modaldl>
                                                </Modalil>
                                            </Modalul2>
                                        </Modalmaininfo>
                                    </Modalviewinfo>
                                </ModalFieldset>
                            
                            </Modaldiv>
                        </ModalContent>
                        <CloseModalButton aria-label='Close modal' onClick={onClose} />
                    </ModalWrapper>
                    {/* </animated.div> */}
                </Background>
            }
        </>

    );
}

export default withAuth(MenuDetail);