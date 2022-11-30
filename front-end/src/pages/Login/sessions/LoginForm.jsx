import React, { Children } from 'react'
import { Input } from '../../../components/Input/Input'
import { Botao } from '../../../components/Botao/Botao'

const LoginForm = () => {
    return (
        <form onSubmit={() => {}}>
            <Input label='Login' placeholder='email@trybeer.com' classname='input-email' dataTestId='common_login__input-email' />
            <Input label='Senha' placeholder='******' classname='input-senha' dataTestId='common_login__input-password' />
            <Botao onclick={() => {}} children='LOGIN' classname='botao-login' dataTestId='common_login__button-login' type='submit' />
            <Botao onclick={() => {}} children='Ainda não tenho conta' dataTestId='common_login__button-register' />
        </form>
    )
}

export default LoginForm;