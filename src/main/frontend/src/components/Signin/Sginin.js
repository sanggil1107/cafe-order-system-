import React from 'react';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text, CloseModalButton } from './SigninElements';

const Sginin = ({ open, setOpen }) => {

    const onClose = () => {
        setOpen(false);
    }

    return (
        <>
            {open &&
                <Container>
                    <FormWrap>
                        <FormContent>
                            <Form action='#'>
                            <CloseModalButton aria-label='Close modal' onClick={onClose} />
                                <FormH1>로그인</FormH1>
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
            }
        </>
    );
}

export default Sginin;