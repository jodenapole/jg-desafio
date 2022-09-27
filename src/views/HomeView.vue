<template>
	<div class="container">
		<main class="main">
			<div class="title">Olá, Aluno!</div>

			<TopicList />

			<div class="circle-container">
				<div class="circle1"></div>
				<div class="circle2"></div>
			</div>
			<span class="subtitle">Preste atenção no professor.</span>
		</main>
		<footer>
			<FooterComponent />
		</footer>
	</div>

</template>

<script>
import TopicList from '../components/TopicList.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
	name: 'HomeView',

	components: {
    TopicList,
    FooterComponent
},

	data() {
		return {
			url_base: "http://localhost:5000",
		}
	},

	methods: {
	},

	mounted: function () {
	}
};
</script>

<style lang="scss">
.container {
	.main {
		.title {
			font-weight: bold;
			font-size: 18pt;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 2rem;
		}

		.circle-container {
			display: flex;
			justify-content: center;
			padding: 2rem;

			.circle1 {
				background: #5468FF;
				width: 10rem;
				height: 10rem;
				border-radius: 100%;
			}

			.circle2 {
				background: #FD7900;
				width: 6.5rem;
				height: 6.5rem;
				border-radius: 100%;
				transform: translate(-75%, 75%);
			}
		}

		.subtitle {
			display: flex;
			justify-content: center;
			font-weight: 600;
			color: #616E7B;
			padding: 2rem;
		}
	}

	
}
</style>
