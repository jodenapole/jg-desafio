<template>
	<nav class="nav">
		<ul class="list">
			<li class="list-item" v-for="(topic, i) in topics" :key="i">
				<router-link class="anchor" :to="'/question/'+topic.id">
					<svg style="width:24px;height:24px" viewBox="0 0 24 24">
						<path fill="#5468FF"
							d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
					</svg>
					<span class="topic">{{topic.titulo}}</span>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'TopicList',

	data: () => {
		return {
			url_base: "http://localhost:5000",
			topics: [],
			questions: null
		}
	},

	methods: {
		async fetchTopics() {
			const response = await fetch(`${this.url_base}/questions/topicos`);
			const data = await response.json()
			for (let i = 0; i < data.length; i++) {
				this.topics.push(data[i]);
			}
		}
	},

	created: function () {
		this.fetchTopics()
	}
}
</script>

<style lang="scss">
.list {
	list-style: none;

	.list-item {
		background-color: #fff;
		padding: 0.5rem;
		width: 80vw;
		margin: 0 auto 2rem;
		border-radius: 16px;

		.anchor {
			display: grid;
			grid-template-columns: 1fr 9fr;
			padding: 0.5rem 1rem;
			text-decoration: none;

			.topic {
				margin-left: 1rem;
				font-weight: 600;
			}
		}



	}

	.list-item>* {

		color: #344356;
		background-color: #fff;
	}
}
</style>