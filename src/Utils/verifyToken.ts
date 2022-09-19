import jwt from 'jsonwebtoken';
import {JWTSECRET} from '../environmentVariables';
import Error from '../Error/error';

export default function VerifyToken(token: string){
	try{
		const dados = jwt.verify(token, JWTSECRET());
		return dados;
	}catch (error){
		throw new Error('Unauthorized', 'Invalid Token');
	}
}