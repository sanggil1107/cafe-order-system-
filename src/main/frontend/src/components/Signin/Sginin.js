import React from 'react';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './SigninElements';

export const Sginin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>ysg</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Eamil</FormLabel>
                            <FormInput type='email' required></FormInput>
                            <FormLabel htmlFor='for'>password</FormLabel>
                            <FormInput type='password' required></FormInput>
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