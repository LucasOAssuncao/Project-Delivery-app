export const validateEmail = (email, password) => {
  const regex = /\S+@+\S+\.\S+/;
  const result = regex.test(email);
  const minLength = 6;
  if (!result || password.length < minLength) return false;
  return result;
};

export const emailPasswaordValidator = (email, password) => {
  const minLength = 6;
  if (!email) return null;
  if (!password) return null;
  if (!validateEmail(email)) return 'Email inválido!';
  if (password.length < minLength) return 'Senha inválida!';

  return null;
};
