<template>
	<div class="container">
		<div class="btn-group m-1" role="group" aria-label="dark-mode">
			<button v-if="isLight" class="btn-secondary" @click="setMode">
				<i class="fas fa-sun">Ligth Mode</i>
			</button>
			<button v-else @click="setMode" class="btn-secondary">
				<i class="fas fa-moon">Dark Mode</i>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'mode',
	data() {
		return {
			isLight: false
		};
	},

	methods: {
		setMode: function() {
			this.isLight = !this.isLight;
			this.$emit('setMode', this.isLight);
		}
	}
};
</script>
