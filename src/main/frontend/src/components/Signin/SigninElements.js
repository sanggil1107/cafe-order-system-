import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
    /* min-height: 692px;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 20;
    overflow: hidden;
    background: white; */
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

export const FormWrap = styled.div`
    width: 400px;
    height: 300px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: red;
    display: flex;
    /* grid-template-columns: 1fr 1fr; */
    position: fixed;
    /* z-index: 10; */
    border-radius: 10px;
    /* height: 100%; */
    display: flex;
    

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const FormI = styled(FontAwesomeIcon)`
    text-align: center;
    line-height: 55px;
    color: #acacac;
    font-size: 1.1rem;
    padding: 18px;
`;


export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #010101;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #fff;
    width: 350px;
    height: 300px;
    /* max-width: 400px; */
    height: auto;
    /* width: 100%; */
    z-index: 10;
    display: grid;
    margin: 0 auto;
    padding: 30px 32px;
    border-radius: 14px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
    transition: .12s .1s ease-in-out;

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #010101;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
`;

export const FormInputField = styled.div`
    max-width: 360px;
    width: 335px;
    height: 55px;
    background-color: #f0f0f0;
    margin: 10px 0;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 .4rem;
`;

export const FormInput = styled.input`
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 500;
    font-size: 1.0rem;
    color: #333;

    ::placeholder {
        color: #aaa;
        font-weight: 600;
    }
`;

// export const FormInput = styled.input`
//     background: none;
//     outline: none;
//     border: none;
//     line-height: 1;
//     font-weight: 600;
//     font-size: 1.1rem;
//     color: #333;
// `;

export const FormButton = styled.button`
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 24px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin-top: 20px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    margin-left: 70px;
    margin-right: 70px;
`;

export const Text = styled.span`
    text-align: left;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;

export const Text1 = styled.p`
    text-align: right;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    :hover {
        color: red;
    }
`;
export const CloseButton = styled(MdClose)`
    cursor: pointer;
    position: inherit;
    display: flex;
    top: 0;
    margin-right: 0;
    right: 0;
    width: 32px;
    height: 32px;
    margin-left: auto;
    z-index: 20;
    color: black;
    :not(:no-button) {
        color: black;
    }
`;