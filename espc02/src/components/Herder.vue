<template>
	<div class="container-fluid mb-0 p-0">
		<nav class="navbar navbar-light bg-info">
			<a href="" class="navbar-brand text-white"> ESPC02 </a>
			<button class="btn-warning" @click="reloadWindow">Play Again</button>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'header',

	methods: {
		reloadWindow: function() {
			location.reload();
		}
	}
};
</script>
