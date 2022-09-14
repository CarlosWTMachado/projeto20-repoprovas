import bcrypt from 'bcrypt';

export default function EncryptPasswordBCRYPT(password: string): string{
	const encryptedPassword = bcrypt.hashSync(password, 10);
	return encryptedPassword;
}