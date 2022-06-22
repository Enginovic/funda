<template>
	<div v-if="houseData" class="house-detail-page">
		<div class="house-detail-page__header">
			<img
				class="house-detail-page__main-image"
				:src="houseData.HoofdFoto"
				alt="Image Text"
			/>
			<div class="house-detail-page__price-card">
				<span class="house-detail-page__price-card-title">Price</span>
				<span class="house-detail-page__price-card-price"
					>€{{ formatPrice(houseData.Prijs.Koopprijs) }}</span
				>
			</div>
		</div>
		<div class="house-detail-page__card">
			<div class="house-detail-page__share">
				<i @click="copy" class="pi pi-link"></i>
			</div>
			<h1 class="house-detail-page__card-title">
				{{ houseData.Adres }}
			</h1>
			<div class="house-detail-page__card-subtitle">
				{{ houseData.Postcode }}, {{ houseData.Plaats }}
			</div>

			<div class="house-detail-page__usp">
				<div class="house-detail-page__usp-item">
					<!-- unfortunately this framework had no good icons :( -->
					<i class="pi pi-prime"></i> {{ houseData.AantalKamers }}
				</div>
				<div class="house-detail-page__usp-item">
					<i class="pi pi-box"></i> {{ houseData.AantalBadkamers }}
				</div>
				<div class="house-detail-page__usp-item">
					<i class="pi pi-github"></i> {{ houseData.PerceelOppervlakte }} m2
				</div>
			</div>

			<h2 class="house-detail-page__section-title">Description</h2>
			<div class="house-detail-page__description">
				<span v-if="!canReadMore"
					>{{ houseData.VolledigeOmschrijving.slice(0, 300) }}...</span
				>
				<!-- slicing this as well so you dont have to scroll all the way down -->
				<span
					v-if="canReadMore"
					v-html="houseData.VolledigeOmschrijving.slice(0, 900)"
				></span>
			</div>
			<a
				class="house-detail-page__read-more"
				@click="canReadMore = !canReadMore"
				href="#"
			>
				<i :class="`pi pi-angle-${canReadMore ? 'up' : 'down'}`"></i>
				{{ canReadMore ? `Read less` : `Read more` }}
			</a>
		</div>

		<div class="house-detail-page__card">
			<h2 class="house-detail-page__section-title">Detail</h2>
			<div
				class="house-detail-page__detail"
				v-for="(item, key) in houseData.detail"
				:key="`item_id-${item.id}`"
			>
				<div class="house-detail-page__detail-key">{{ key }}</div>
				<div class="house-detail-page__detail-item">{{ item }}</div>
			</div>
		</div>

		<iframe
			width="100%"
			height="350"
			frameborder="0"
			scrolling="no"
			marginheight="0"
			marginwidth="0"
			:src="`https://maps.google.com/maps?q=${houseData.WGS84_Y},${houseData.WGS84_X}&hl=es;z=14&amp;output=embed`"
		></iframe>
	</div>
</template>

<script src="./houseDetailPage.js"></script>
<style lang="scss" src="./houseDetailPage.scss"></style>
