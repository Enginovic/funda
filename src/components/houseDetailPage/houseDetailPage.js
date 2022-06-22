import { inject, onMounted, ref } from 'vue';
import useClipboard from 'vue-clipboard3';

export default {
	setup() {
		const axios = inject('axios');
		const houseData = ref();
		const canReadMore = ref(false);
		const { toClipboard } = useClipboard();

		// Copy to clipboard function - stackoverflow
		const copy = async () => {
			try {
				await toClipboard(houseData.value.URL);
			} catch (e) {
				console.error(e);
			}
		};

		/**
		 * Get the house information for your API
		 */
		function getList() {
			axios
				.get(
					`/api/feeds/Aanbod.svc/json/detail/${
						import.meta.env.VITE_FUNDA_KEY
					}/koop/2d8cbe85-8111-4a56-92c4-6b6821e9e4df/`
					// `/api/feeds/Aanbod.svc/${import.meta.env.VITE_FUNDA_KEY}/?type=koop&zo=/amsterdam/tuin/video/`
				)
				.then((response) => {
					// Log so I can see how many data you guys actually show O_O
					console.log(response.data);
					houseData.value = response.data;

					// Make object like this so I can show you how I do my for loop
					houseData.value.detail = {
						Makelaar: response.data.MakelaarId,
						Verkocht: response.data.IsVerkocht,
						'Balkon Dakterras': response.data.BalkonDakterras,
					};
				});
		}

		/**
		 *
		 * @param {int} value
		 * @returns string with correct format. Your formatted data wasn't working fast enough for me. - stackoverflow
		 */
		function formatPrice(value) {
			let val = (value / 1).toFixed(2).replace('.', ',');
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
		}

		onMounted(() => {
			getList();
		});

		return { houseData, formatPrice, copy, canReadMore };
	},
};
