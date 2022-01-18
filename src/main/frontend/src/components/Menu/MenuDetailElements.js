import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
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

export const ModalWrapper = styled.div`
    width: 960px;
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

export const ModalImg = styled.img`
    width: 450px;
    height: 500px;
    border-radius: 10px 0 0 10px;
    padding: 16px;
    justify-content: center;
`;

export const ModalContent = styled.div`
    display: flex;
    padding: 16px;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    line-height: 1.8;
    color: black;
    padding-left: 10px;
    padding-top: 35px;
`;

export const Modaldiv = styled.div`
    width: 430px;
    position: relative;
`;

export const Modalh4 = styled.h4`
    font-size: 24px;
    font-weight: bold;
    color: #222;
    border-bottom: 2px solid #333;
    padding-bottom: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
`;

export const Modalp = styled.p`
    font-size: 17px;
    color: #444;
    margin-bottom: 20px;
    line-height: 1.6;
    min-height: 40px;
`;

export const ModalFieldset = styled.fieldset`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
`;

export const Modalviewinfo = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
`;

export const Modalheadinfo = styled.div`
    position: relative;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const Modalmaininfo = styled.div`
    width: 100%;
    /* background: url(//image.istarbucks.co.kr/common/img/menu/detail_bg.jpg) center 0 repeat-y; */
    margin: 20px 0;
`;

export const Modalul1 = styled.ul`
    width: 50%;
    float: left;
    border-right: 1px dotted #ddd;
`;


export const Modalul2 = styled.ul`
    width: 49%;
    float: left;
`;

export const Modalil = styled.li`
    margin-bottom: 15px;
    padding: 0 8px;
    line-height: 2.5;
`;

export const Modaldl = styled.dl`
    width: 100%;
    font-size: 14.5px;
    color: #444;
    margin: 0;
`;

export const Modaldt = styled.dt`
    float: left;
    width: 60%;
`;

export const Modaldd = styled.dd`
    float: right;
    width: 15%;
    text-align: right;
    margin-left: 0;
`;

export const Modalbutton = styled.button`
    width: 40%;
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
    white-space: nowrap;
    padding: 8px 20px;
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
    }
`;

export const CloseModalButton = styled(MdClose)`
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