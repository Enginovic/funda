import { inject, onMounted, ref } from 'vue';

export default {
	setup() {
		const axios = inject('axios');
		const houseData = ref();

		function getList() {
			axios
				.get(
					`/api/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f/koop/2d8cbe85-8111-4a56-92c4-6b6821e9e4df/`
					// `/api/feeds/Aanbod.svc/ac1b0b1572524640a0ecc54de453ea9f/?type=koop&zo=/amsterdam/tuin/video/`
				)
				.then((response) => {
					console.log(response.data);
					houseData.value = response.data;
				});
		}

		onMounted(() => {
			getList();
		});

		return { houseData };
	},
};
