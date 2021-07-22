import React from 'react';
import Footer from '../Footer/Footer';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './SigninElements';

export const Sginin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>로그인</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your account</FormH1>
                            {/* <FormLabel htmlFor='for'>Id</FormLabel> */}
                            <FormInput type='text' placeholder='아이디를 입력하세요' required></FormInput>
                            {/* <FormLabel htmlFor='for'>password</FormLabel> */}
                            <FormInput type='password' placeholder='비밀번호를 입력하세요' required></FormInput>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>  
        </>
    );
}

export default Sginin;