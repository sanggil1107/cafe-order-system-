import React from 'react';
import './Login.css';

const Login = () => {

    const onChangeId = () => {

    }

    const onChangePw = () => {

    }

    const onLogin = () => {

    }

    return (
        <div class="body">
            <div class="center">
                <h1>로그인</h1>

                <form>
                    <div class="txt_field">
                        <input type="text" onChange={onChangeId} required />
                        <span></span>
                        <label>ID</label>
                    </div>
                    <div class="txt_field">
                        <input type="password" onChange={onChangePw} required />
                        <span></span>
                        <label>PW</label>
                    </div>
                    <input type="submit" value="로그인" onClick={onLogin} />
                </form>
            </div>
            </div>
    );
}

export default Login;