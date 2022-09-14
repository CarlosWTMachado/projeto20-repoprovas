import Cryptr from 'cryptr';
import { CRYPTRSECRET } from '../environmentVariables';

export default function DecrypterCRYPTR(encryptedString: string){
	const cryptr = new Cryptr(CRYPTRSECRET());
	const decryptedString = cryptr.decrypt(encryptedString);
	return decryptedString;
}