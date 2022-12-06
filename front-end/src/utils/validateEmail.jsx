const validateEmail = (email) => {
  const regex = /\S+@+\S+\.\S+/;
  return regex.test(email);
};

const emailPasswaordValidator = (email, password) => {
  const minLength = 6;
  if (!email) return null;
  if (!password) return null;
  if (!validateEmail(email)) return 'Email inválido!';
  if (password.length < minLength) return 'Senha inválida!';

  return null;
};

export default emailPasswaordValidator;
