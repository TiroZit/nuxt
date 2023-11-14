import { defineMongooseModel } from '#nuxt/mongoose';

export const Schema = defineMongooseModel({
	name: '',
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
