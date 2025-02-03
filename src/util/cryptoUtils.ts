import CryptoJS from 'crypto-js';
import { UserData } from '../store/authStore';

export const encryptData = (data: UserData) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(data),
    `${import.meta.env.CRYPTO_SECRET_KEY}`
  ).toString();
};

export const decryptData = (cipherText: string) => {
  const bytes = CryptoJS.AES.decrypt(
    cipherText,
    `${import.meta.env.CRYPTO_SECRET_KEY}`
  );
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
