<template>
	<div class="container text-center p-5">
		<div class="row mb-2">
			<div class="col-12">Correct: {{ hits }}</div>
			<div class="col-12">Miss: {{ miss }}</div>
		</div>
		<div class="row game-card m-2">
			<div class="flip-card">
				<div class="flip-card-front shake">
					<img
						width="200"
						height="300"
						src="../img/dota.png"
						alt="Front Image"
					/>
				</div>
				<div
					class="flip-card-back "
					v-show="showImage"
					v-bind:class="shake ? 'shaking' : ''"
				>
					<img :src="currentImage" alt="Avatar" width="200" height="300" />
				</div>
			</div>
		</div>
		<div class="row select-card text-center">
			<div class="col imgs" v-for="card of cards" v-bind:key="card.name">
				<img
					class="image-fuid mx-auto"
					@click="displyaCard(card.name)"
					width="200"
					height="300"
					:src="card.imgSrc"
					:alt="card.name"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import _ from 'lodash';

export default {
	name: 'game',
	components: {},
	data() {
		return {
			currentImage: require(`../img/circle.svg`),
			showImage: false,
			imagePick: '',
			shake: false,
			count: 0,
			hits: 0,
			miss: 0,
			totalScore: 0,

			cards: [
				{ name: 'Circle', imgSrc: require('../img/circle.svg') },
				{ name: 'Square', imgSrc: require('../img/square.svg') },
				{ name: 'Star', imgSrc: require('../img/star.svg') },
				{ name: 'Plus', imgSrc: require('../img/plus.svg') },
				{ name: 'Waves', imgSrc: require('../img/waves.svg') }
			]
		};
	},

	created: function() {
		this.randomCard();
	},

	methods: {
		displyaCard: function(name) {
			if (name !== '') {
				this.count++;
				if (this.count <= 11) {
					this.showTheImage();
					if (this.imagePick === name.toLowerCase()) {
						this.hits++;
						this.sound();
						console.log('hello');
					} else {
						this.miss++;
						this.shake = true;
						setTimeout(() => {
							this.shake = false;
						}, 1000);
						this.doVibrate(200);
					}
					// console.log(name, this.imagePick);
					this.randomCard();
				} else {
					this.totalScore = this.hits - this.miss;
					alert(`Good job, to play again click the play again button!`);
				}
			}
		},

		randomCard: function() {
			let shuffleCards = _.shuffle(this.cards);
			let randomCard = _.random(0, shuffleCards.length);
			this.imagePick = this.cards[randomCard].name.toLowerCase();
			console.log(randomCard);
			// this.currentImage = require(`../img/${name.toLowerCase()}.svg`);
			this.currentImage = require(`../img/${this.imagePick}.svg`);
		},

		sound: async function() {
			let sound = await new Audio(require('../sounds/Trap.mp3'));
			await sound.play();
		},

		doVibrate: function(ms) {
			return navigator.vibrate(ms);
		},
		showTheImage: function() {
			this.showImage = true;
			setTimeout(() => {
				this.showImage = false;
			}, 2000);
		}
	}
};
</script>

<style scoped>
.flip-card {
	width: 200px;
	height: 300px;
	background-color: transparent;
	position: relative;
	margin-left: 25px;
}
.flip-card-front {
	align-content: center;
	width: 100%;
	height: 100%;
	position: absolute;
	margin: 0;
	padding: 0;
	border-radius: 10px;

	/* right: 10%; */
}

.flip-card-back {
	align-content: center;
	width: 100%;
	height: 100%;
	position: absolute;
	margin: 0;
	padding: 0;
	background-color: #000;

	/* right: 10%; */
}
.imgs {
	margin: 5px;
	padding: 0;
	width: 80px;
	height: 160px;
}
.imgs img {
	padding: 0;
	margin: 0;
	width: 100%;
	height: 100%;

	/* fill: transparent; */
}

.shaking {
	animation: shake 0.5s;
	animation-iteration-count: infinite;
}

@keyframes shake {
	0% {
		transform: translate(1px, 1px) rotate(0deg);
	}
	10% {
		transform: translate(-1px, -2px) rotate(-1deg);
	}
	20% {
		transform: translate(-3px, 0px) rotate(1deg);
	}
	30% {
		transform: translate(3px, 2px) rotate(0deg);
	}
	40% {
		transform: translate(1px, -1px) rotate(1deg);
	}
	50% {
		transform: translate(-1px, 2px) rotate(-1deg);
	}
	60% {
		transform: translate(-3px, 1px) rotate(0deg);
	}
	70% {
		transform: translate(3px, 1px) rotate(-1deg);
	}
	80% {
		transform: translate(-1px, -1px) rotate(1deg);
	}
	90% {
		transform: translate(1px, 2px) rotate(0deg);
	}
	100% {
		transform: translate(1px, -2px) rotate(-1deg);
	}
}
</style>
