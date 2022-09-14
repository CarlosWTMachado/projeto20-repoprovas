import { Error as errorInterface } from '../Interfaces/errorInterface';

export default class Error implements errorInterface {
	type: string;
	message: string;

	constructor(type: string, message: string) {
		this.type = type;
		this.message = message;
	}
}