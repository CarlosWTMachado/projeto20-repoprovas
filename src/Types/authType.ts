import { User } from '@prisma/client';

export type CreateUser = Omit<User, 'id'>;
export type userType = Partial<User>;