import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';


const Background = styled.div`
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const ModalWrapper = styled.div`
    width: 800px;
    height: 300px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: red;
    display: flex;
    /* grid-template-columns: 1fr 1fr; */
    position: relative;
    z-index: 10;
    border-radius: 10px;
    /* box-sizing: border-box; */
`;

const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: #000;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
`

export const MenuDetail = ({showModal, setShowModal}) => {

    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duraton: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100$)`
    });

    const closeModal = () => {
        // if(modalRef.current === e.target) {
        //     setShowModal(false);
        // }
        setShowModal(false);
    };

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        console.log(showModal);
    });

    return (
        <>
            {showModal ? (
                <Background >
                    {/* <animated.div> */}
                        <ModalWrapper onClick={closeModal}>
                            {/* <ModalImg src={require('./news_board.jpg')}
                            alt='camera'/> */}
                            <ModalContent>
                                <h1>Are you ready</h1>
                                <p>Get exclusive access to our next</p>
                                <button>join now</button>
                            </ModalContent>
                            <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(false)}/>
                        </ModalWrapper>
                    {/* </animated.div> */}
                </Background>
            ) : null}
        </>
    )
};
