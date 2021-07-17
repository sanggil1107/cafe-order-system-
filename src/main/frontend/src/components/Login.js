import React from 'react';

const Login = () => {

    const onChangeId = () => {

    }

    const onChangePw = () => {

    }
    
    const onLogin = () => {

    }

    return (
        <div>
            <h1>Login</h1>

            <form>
                <div>
                    <input type="text" onChange={onChangeId} required />
                    <span></span>
                    <label>ID</label>
                    <input type="password" onChange={onChangePw} required />
                    <span></span>
                    <label>PW</label>
                </div>
                <input type="submit" value="Login" onClick={onLogin} />
            </form>
        </div>
    );
}

export default Login;