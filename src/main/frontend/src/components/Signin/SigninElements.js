import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

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
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
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

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #010101;
    width: 350px;
    height: 300px;
    /* max-width: 400px; */
    height: auto;
    /* width: 100%; */
    z-index: 10;
    display: grid;
    margin: 0 auto;
    padding: 30px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: relative;
    top: 0;
    margin-right: 0;
    right: 0;
    width: 32px;
    height: 32px;
    padding-left: 320px;
    z-index: 10;
    color: orange;
    left: 0;
    /* align-items: center; */

`;