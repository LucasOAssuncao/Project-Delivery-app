const validateEmail = (email) => {
    const regex = /\S+@+\S+\.\S+/
    return regex.test(email)
}

export const emailValidator = (email) => {
    if (!email) return null
    if (!validateEmail(email)) return 'Email inválido!'

    return null
}