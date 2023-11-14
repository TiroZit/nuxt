import { defineMongooseModel } from '#nuxt/mongoose';

export const TestSchema = defineMongooseModel({
	name: 'Test',
	schema: {
		name: {
			type: 'string',
			required: true,
		},
		slug: {
			type: 'string',
			required: true,
			unique: true,
		},
	},
});
