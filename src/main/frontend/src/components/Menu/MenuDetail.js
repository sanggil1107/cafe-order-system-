import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { Button } from '../ButtonElement';
import withAuth from '../withAuth';

const Background = styled.div`
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.6);
    /* background: transparent; */
    position: fixed;
    z-index: 999;
    padding: 0;
    display: flex;
    /* display: ${(props) => (props.showModal ? 'flex' : 'none')}; */
    justify-content: center;
    align-items: center;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const ModalWrapper = styled.div`
    width: 900px;
    height: 530px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: red;
    display: flex;
    /* grid-template-columns: 1fr 1fr; */
    position: fixed;
    /* z-index: 10; */
    border-radius: 10px;
`;

const ModalImg = styled.img`
    width: 450px;
    height: 500px;
    border-radius: 10px 0 0 10px;
    padding: 16px;
    justify-content: center;
`;

const ModalContent = styled.div`
    display: flex;
    padding: 16px;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    line-height: 1.8;
    color: blue;

    p {
        margin-bottom: 1rem;
    }

    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
        align-items: flex-end;
    }
`;

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
    color: orange;
`

const MenuDetail = ({ lists, setLists, menu, modal, token }) => {

    const [token1, setToken1] = useState(false);
    const modalRef = useRef();
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
        if(token) {
            alert('ㅇㅋ')
        }
        else {
            alert('로그인 후 이용 부탁드립니다.')
        }
    }

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
                            <Button onClick={like}>나만의 메뉴</Button>
                            <h1>{menu.name}</h1>
                            <p>{menu.description}</p>
                            
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