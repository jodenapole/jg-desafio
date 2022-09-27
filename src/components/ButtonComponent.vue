<template>
    <div class="button-container">
        <button class="button" @click="handleClick(answerSelected, questionInProgress)">
            <span class="button-title">
                Continuar
            </span>
            <svg class="button-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
            </svg>
        </button>
    </div>

</template>
  
<script>
export default {
    name: 'ButtonComponent',

    data: () => {
        return {}
    },

    props: {
        answerSelected: null,
        questionInProgress: null,
    },

    methods: {
        handleClick(answerSelected, questionInProgress) {
            this.questionInProgress = !questionInProgress
            this.$emit('toggleQuestionInProgress', this.questionInProgress)
            this.checkAnswer(answerSelected)
        },

        checkAnswer(answerSelected){
            this.$emit('clicked', answerSelected)
        },


    }

}
</script>
  
<style lang="scss">
.button-container {
    padding: 1.5rem 1rem;

    .button {
        display: grid;
        grid-template-columns: 1fr auto;
        padding: 1rem;
        align-items: center;
        background: #5468FF;
        width: 100%;
        border-radius: 16px;
        height: 4rem;
        color: white;
        transition: all 200ms;

        &:hover {
            cursor: pointer;
            filter: brightness(0.9);
        }

        .button-title {
            font-size: 24px;
            font-weight: 600;
        }

        .button-icon {
            width: 24px;
            height: 24px;
            padding: 4px;
            background: #3D53FF;
            border-radius: 100%;
        }
    }
}
</style>