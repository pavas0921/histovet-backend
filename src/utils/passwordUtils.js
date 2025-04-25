import bcrypt from "bcrypt";

export const passwordEncrypt = (password) => {
  const encryptedPassword = bcrypt.hashSync(password, 12);
  return encryptedPassword;
};
