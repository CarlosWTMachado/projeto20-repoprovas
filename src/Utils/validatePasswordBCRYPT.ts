import bcrypt from 'bcrypt';

export default function VerifyPassword(password: string, encryptedPassword: string): boolean{
	const compare: boolean = bcrypt.compareSync(password, encryptedPassword);
	return compare;
}