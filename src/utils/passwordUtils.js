import bcrypt from "bcrypt";

export const passwordEncrypt = (password) => {
  const encryptedPassword = bcrypt.hashSync(password, 12);
  return encryptedPassword;
};

export const passwordDecrypt = (password, encryptedPassword) => {
  return bcrypt.compareSync(password, encryptedPassword);
};
