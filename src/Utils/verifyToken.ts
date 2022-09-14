import jwt from 'jsonwebtoken';
import {JWTSECRET} from '../environmentVariables';

export default function VerifyToken(token: string){
	try{
		const dados = jwt.verify(token, JWTSECRET());
		return dados;
	}catch (error){
		throw {type: 'Unauthorized', message: 'Invalid Token'};
	}
}