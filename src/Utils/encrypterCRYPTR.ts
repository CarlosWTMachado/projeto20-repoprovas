import Cryptr from 'cryptr';
import { CRYPTRSECRET } from '../environmentVariables';

export default function EncrypterCRYPTR(string: string){
	const cryptr = new Cryptr(CRYPTRSECRET());
	const encryptedString = cryptr.encrypt(string);
	return encryptedString;
}