import React, { useState } from 'react';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text, CloseButton, FormInputField, FormI, Text1 } from './SigninElements';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import './../../service_backend/UserService';
import SignUp from './SignUp';
import { Button } from 'react-scroll';
import UserService from './../../service_backend/UserService';


const Signin = ({ open, setOpen }) => {

    const [signin, setSignin] = useState(true);
    const [err, setErr] = useState('');
    const [user, setUser] = useState({
        userId: '',
        pwd: ''
    })

    const { userId, pwd } = user;

    const onChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name] : value
        });

        // 회원가입
        if (!signin) {            
            if (name === "userId") {
                var user_id = e.target.value;
                UserService.checkId(user_id).then(res => {
                    console.log(res.data);
                    if (res.data) {
                        setErr('사용 불가능합니다.');
                    }
                    else {
                        setErr('');
                    }
                })
            }
        }
    }

    const onSigninSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        UserService.getUser(user).then(res => {
            console.log(res.data);
            if (res.data === '로그인 성공') {
                setOpen(false);
            }
        }).catch(err => {
            console.log(err);
        });
    }

    const onSignupSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        if (err === '') {
            UserService.setUser(user).then(res => {
                alert('회원가입이 완료되었습니다.');
                setUser({
                    userId: '',
                    pwd: ''
                });
                setSignin(true);
            })
            .catch(err => {
                console.log(err);
            });
        }
    }

    const onClose = () => {
        setOpen(false);
    }

    const onSignup = () => {
        setSignin(false);
        setUser({
            userId: '',
            pwd: ''
        });
    }

    return (
        <>
            {open &&
                <Container>
                    <FormWrap>
                        <FormContent>
                            {signin ?
                                <>
                                    <Form>
                                        <CloseButton color="black" onClick={onClose} />
                                        <FormH1>로그인</FormH1>
                                        <FormInputField>
                                            <FormI icon={faUser}></FormI>
                                            <FormInput name='userId' placeholder='아이디를 입력하세요' onChange={onChange} value={userId} required></FormInput>
                                        </FormInputField>
                                        <FormInputField>
                                            <FormI icon={faLock}></FormI>
                                            <FormInput name='pwd' type='password' placeholder='비밀번호를 입력하세요' onChange={onChange} value={pwd} required></FormInput>
                                        </FormInputField>
                                        <FormButton type='submit' onClick={onSigninSubmit}>Continue</FormButton>
                                        <Text>Forgot password</Text>
                                        <button onClick={onSignup}>회원가입</button>
                                    </Form>
                                </>
                                :
                                <>
                                    <Form>
                                    <CloseButton color="black" onClick={onClose} />
                                        <FormH1>회원가입</FormH1>
                                        <FormInputField>
                                            <FormI icon={faUser}></FormI>
                                            <FormInput name='userId' placeholder='아이디를 입력하세요' onChange={onChange} value={userId} required></FormInput>
                                        </FormInputField>
                                        <span>{err}</span>
                                        <FormInputField>
                                            <FormI icon={faLock}></FormI>
                                            <FormInput name='pwd' type='password' placeholder='비밀번호를 입력하세요' onChange={onChange} value={pwd} required ></FormInput>
                                        </FormInputField>
                                        <FormButton type='submit' onClick={onSignupSubmit}>가입</FormButton>
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