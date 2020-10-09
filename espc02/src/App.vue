<template>
	<div id="app" v-bind:class="setBackground ? 'darkMode' : 'liteMode'">
		<Header />
		<Mode v-on:setMode="setingModes($event)" />
		<Game />
	</div>
</template>

<script>
import Header from './components/Herder';
import Game from './components/game';
import Mode from './components/Mode';

export default {
	name: 'App',
	data() {
		return {
			setBackground: null
		};
	},
	components: {
		Header,
		Game,
		Mode
	},
	beforeMount: function() {
		if (document.cookie === 'false') {
			this.setBackground = false;
		}
	},

	methods: {
		setingModes: function(isMode) {
			let mediaDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			let medialight = window.matchMedia('(prefers-color-scheme: ligth)')
				.matches;

			if (mediaDark) {
				this.setBackground = true;
				document.cookie = true;
			} else if (medialight) {
				this.setBackground = true;
				document.cookie = medialight;
			} else {
				this.setBackground = isMode;
				document.cookie = isMode;
			}
		}
	}
};
</script>

<style>
body {
	margin: 0px;
	padding: 0px;
	font-family: 'Courier New', Courier, monospace;
}

.darkMode {
	background-color: black;
	color: white;
}
.liteMode {
	background-color: white;
	color: black;
}
</style>
