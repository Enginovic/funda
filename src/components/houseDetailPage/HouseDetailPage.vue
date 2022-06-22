<template>
	<div v-if="houseData" class="house-detail-page">
		<Image :src="houseData.HoofdFoto" alt="Image Text" />
	</div>
</template>

<script src="./houseDetailPage.js"></script>

<style lang="scss">
.house-detail-page {
}
</style>
