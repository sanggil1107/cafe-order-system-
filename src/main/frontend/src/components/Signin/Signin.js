import React, { useState } from 'react';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text, CloseButton, FormInputField, FormI, Text1 } from './SigninElements';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import SignUp from './SignUp';
import { Button } from 'react-scroll';


const Signin = ({ open, setOpen }) => {

    const [signup, setSignup] = useState(false);
    const [signin, setSignin] = useState(true);

    const onClose = () => {
        setOpen(false);
    }

    const onUp = () => {
        setSignin(false);
        // setOpen(false);
    }

    return (
        <>
            {open &&
                <Container>
                    <FormWrap>
                        <FormContent>
                            {signin ?
                                <>
                                    <Form action='#'>
                                        <CloseButton color="black" onClick={onClose} />
                                        <FormH1>로그인</FormH1>
                                        <FormInputField>
                                            <FormI icon={faUser}></FormI>
                                            <FormInput type='text' placeholder='아이디를 입력하세요' required></FormInput>
                                        </FormInputField>
                                        <FormInputField>
                                            <FormI icon={faLock}></FormI>
                                            <FormInput type='password' placeholder='비밀번호를 입력하세요' required></FormInput>
                                        </FormInputField>
                                        <FormButton type='submit'>Continue</FormButton>
                                        <Text>Forgot password</Text>
                                        <button onClick={onUp}>회원가입</button>
                                    </Form>
                                </>
                                :
                                <>
                                    <Form action='#'>
                                    <CloseButton color="black" onClick={onClose} />
                                        <FormH1>회원가입</FormH1>
                                        <FormInputField>
                                            <FormI icon={faUser}></FormI>
                                            <FormInput type='text' placeholder='아이디를 입력하세요' required></FormInput>
                                        </FormInputField>
                                        <FormInputField>
                                            <FormI icon={faLock}></FormI>
                                            <FormInput type='password' placeholder='비밀번호를 입력하세요' required></FormInput>
                                        </FormInputField>
                                        <FormButton type='submit'>Continue</FormButton>
                                        <Text></Text>
                                    </Form>
                                </>}
                        </FormContent>
                    </FormWrap>
                </Container>
            }
        </>
    );
}

export default Signin;