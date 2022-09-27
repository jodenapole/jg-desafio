<template>
	<div>
	<main class="container" v-if="questionInProgress">
		<TopicTitleComponent :topicTitle = topicTitle />
		<QuestionComponent @clicked="selectAnswer" />
		<ButtonComponent :answerSelected = answerSelected @clicked="toggleAnswerView" />
	</main>

	<div class="container-answer" v-else-if="!questionInProgress && finalAnswer">
		<TopicTitleComponent :topicTitle = topicTitle />
		<CorrectAnswerComponent />
		<ButtonComponent :questionInProgress = questionInProgress @toggleQuestionInProgress="toggleQuestionInProgress" />
	</div>

	<div class="container-answer" v-else-if="!questionInProgress && !finalAnswer">
		<TopicTitleComponent :topicTitle = topicTitle />
		<WrongAnswerComponent />
		<ButtonComponent :questionInProgress = questionInProgress @toggleQuestionInProgress="toggleQuestionInProgress" />
	</div>
</div>

</template>
  
<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import QuestionComponent from '../components/QuestionComponent.vue';
import TopicTitleComponent from '@/components/TopicTitleComponent.vue';
import CorrectAnswerComponent from '@/components/CorrectAnswerComponent.vue';
import WrongAnswerComponent from '@/components/WrongAnswerComponent.vue';
export default {
	name: "QuestionView",

	components: {
    ButtonComponent,
    QuestionComponent,
    TopicTitleComponent,
    CorrectAnswerComponent,
    WrongAnswerComponent
},
	data: () => {
		return {
			url_base: "http://localhost:5000",
			topicTitle: "",
			answerSelected: null,
			finalAnswer: null,
			questionInProgress: true
		};
	},
	methods: {
		async fetchTopics() {
			const response = await fetch(`${this.url_base}/questions/topicos`);
			const data = await response.json();
			const topicId = this.$route.params.id;
			this.topicTitle = data.find(topic => topic.id == topicId).titulo;
		},

		selectAnswer(answerSelected) {
			this.answerSelected = answerSelected
		},

		toggleAnswerView(finalAnswer) {
			this.finalAnswer = finalAnswer
			this.questionInProgress = false
		},

		toggleQuestionInProgress(isQuestionInProgress) {
			this.questionInProgress = isQuestionInProgress
		}
	},
	created: function () {
		this.fetchTopics();
	},
}
</script>
  
<style lang="scss">
.container {
	display: grid;
	grid-template-rows: 1fr auto;
}
.container-answer {
	display: grid;
	grid-template-rows: 1fr auto 2fr;
    height: 100vh;
}
</style>