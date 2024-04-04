'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './AdminLogin.mudle.scss'
import classNames from 'classnames/bind'
import { faCircleUser, faEnvelope, faEye, faEyeSlash, faKey } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const cx = classNames.bind(style);

function AdminLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const emailInput = useRef();

    const validateLogin = (email, password) => {
        if (email === 'nkha2888@gmail.com' && password === '123456')
            return true;
        return false;
    }

    const handleLogin = () => {
        let isAdmin = validateLogin(email, password);

        if (isAdmin) {
            // create a token
            const token = 'ueser token'
            localStorage.setItem('token', JSON.stringify(token))

            router.push('/Admin');
        }
        else {
            emailInput.current.focus();
            setEmail('');
            setPassword('');
            setValid(false);
        }
    }

    useEffect(() => {
        const handleEnter = (event) => {
            if (event.keyCode === 13) {
                handleLogin();
            }
        }

        window.addEventListener('keydown', handleEnter)

        return () => {
            window.removeEventListener('keydown', handleEnter)
        }
    }, [email, password])

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))
        if (token)
            router.push('/Admin');
    }, [])

    return (
        <div className={cx('container-fluid')} >
            <div className={cx('row', 'justify-content-center', 'content')}>
                <div className={cx('login')}>
                    <i className={cx('icon')}><FontAwesomeIcon icon={faCircleUser} /></i>
                    <div className={cx('input', 'email')}>
                        <input
                            ref={emailInput}
                            value={email}
                            maxLength={30}
                            className={cx('email__input')}
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className={cx('email__lable')}><FontAwesomeIcon icon={faEnvelope} /></label>
                    </div>
                    <div className={cx('input', 'password')}>
                        <input
                            value={password}
                            maxLength={30}
                            className={cx('password__input'
                            )} placeholder='Password'
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className={cx('password__lable')}><FontAwesomeIcon icon={faKey} /></label>
                        <i
                            onClick={() => setShowPassword(!showPassword)}
                            className={cx('eye')}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </i>
                    </div>
                    <p className={cx('login--fail')}>{!valid ? 'Email hoặc mật khẩu không chính xác' : ''}</p>
                    <button className={cx('submit')}
                        onClick={handleLogin}
                    >
                        Đăng nhập
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin