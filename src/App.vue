<script setup>
import { inject, onMounted } from 'vue';

onMounted(() => {
	getList();
});

const axios = inject('axios');

const getList = () => {
	axios
		.get(
			`/api/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f/koop/2d8cbe85-8111-4a56-92c4-6b6821e9e4df/`
			// `/api/feeds/Aanbod.svc/ac1b0b1572524640a0ecc54de453ea9f/?type=koop&zo=/amsterdam/tuin/video/`
		)
		.then((response) => {
			console.log(response.data);
		});
};
</script>

<template>Hello World.</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
