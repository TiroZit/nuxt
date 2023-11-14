export default defineEventHandler(async () => {
	try {
		return await Schema.find({});
	}
	catch (error) {
		return error;
	}
});
