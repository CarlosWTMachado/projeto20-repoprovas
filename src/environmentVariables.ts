import dotenv from 'dotenv';
dotenv.config();

export const APPLICATIONPORT = () => Number(process.env.PORT) || 5000;
export const DATABASEURL = () => process.env.DATABASE_URL;
export const JWTSECRET = () => process.env.JWT_SECRET || '';
export const CRYPTRSECRET = () => process.env.CRYPTR_SECRET || '';