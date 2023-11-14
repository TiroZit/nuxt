export default defineEventHandler(async () => {
	try {
		return await TestSchema.find({});
	}
	catch (error) {
		return error;
	}
});
