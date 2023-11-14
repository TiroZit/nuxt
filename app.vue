<script lang="ts">
export default defineComponent({
	async setup() {
		const { data } = await useFetch('/api/tests');

		return {
			data,
		};
	},
});
</script>

<template>
	<div>
		{{ data }}
	</div>
</template>
