<template>
        <div class="question-container" v-if="question">
            <h1>{{question.enunciado}}</h1>
            <ul class="question-list">
                <li class="question" v-bind:class="{'selected': isQuestionSelected(i)}"
                    v-for="(alternativa, i) in question.alternativas" :key=i
                    @click="handleClick(alternativa.correta, i)">
                    {{String.fromCharCode(65+i)}}. {{alternativa.valor}}
                </li>
            </ul>
        </div>
</template>
  
<script>
export default {
    name: 'QuestionComponent',

    data: () => {
		return {
			url_base: "http://localhost:5000",
			questionsArray: null,
			question: null,
			questionSelectedIndex: null,
			answer: null,
		};
	},
	methods: {
		async fetchQuestions() {
			const topicId = this.$route.params.id;
			const response = await fetch(`${this.url_base}/questions/topicos/${topicId}/questoes`);
			const data = await response.json();
			this.questionsArray = data;
			this.fillQuestion();
		},
		fillQuestion() {
			this.questionsArray.map(question => {
				if (question.resultado === null) {
					this.question = question;
					return;
				}
			});
		},
		handleClick(alternative, index) {
			this.questionSelectedIndex = index;
			this.validateQuestion(alternative);
		},
		isQuestionSelected(index) {
			if (index == this.questionSelectedIndex) {
				return true;
			}
			else {
				return false;
			}
		},
		validateQuestion(alternative) {
			this.$emit('clicked', alternative)
		}
	},
	created: function () {
		this.fetchQuestions();
	},
}
</script>
  
<style lang="scss">

    .question-container {
        display: grid;
        grid-auto-rows: 1fr auto;
        background: #fff;
        margin: 1.5rem 1rem;
        padding: 1.5rem 1rem;
        border-radius: 16px;

        h1 {
            font-size: 24px;
            margin: 0.5rem;
            padding: 0.5rem;
        }

        .question-list {
            list-style: none;

            .question {
                border: 1px solid #616E7B;
                padding: 1rem;
                margin: 1rem;
                border-radius: 8px;
                font-weight: 600;
                transition: all 200ms;

                &:hover {
                    cursor: pointer;
                    background-color: orangered;
                    color: white;
                }
            }

            .selected {
                color: white;
                background-color: orangered;
            }
        }
    }

   
</style>