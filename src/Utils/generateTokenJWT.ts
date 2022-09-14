import jwt from 'jsonwebtoken';
import {JWTSECRET} from '../environmentVariables';

export default function GenerateToken(dados: any): string{
	const configuracoes = { expiresIn: 60*60*2}
	const token: string = jwt.sign(dados, JWTSECRET(), configuracoes);
	return token;
}