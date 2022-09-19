import { faker } from "@faker-js/faker";
import prisma from "../../src/Config/db";
import EncryptPasswordBCRYPT from "../../src/Utils/encryptPasswordBCRYPT";

export function generateUser() {
	return {
		email: faker.internet.email(),
		password: faker.internet.password(),
	};
}

export async function createUser() {
	const user = generateUser();
	const encryptedPassword = EncryptPasswordBCRYPT(user.password);

	const insertedUser = await prisma.user.create({
		data: {
			email: user.email,
			password: encryptedPassword
		}
	});

	return { user, insertedUser };
}