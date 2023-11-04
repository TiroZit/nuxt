<script setup>
const { data } = await useFetch('/api/hello');
console.log(data.value);

const data2 = data.value;
</script>

<template>
	<div>
		<h1 class="text-8xl m-auto flex justify-center">
			Index page
		</h1>
		<NuxtLink to="/about">
			asdasd
		</NuxtLink>
		<UButton label="Button" />
		<div>
			{{ data2 }}
		</div>
	</div>
</template>
