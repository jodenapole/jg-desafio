<template>

    <div class="answer-container">
        <div class="icon">
            <svg viewBox="0 0 24 24">
                <path fill="red"
                    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
        </div>

        <span class="title">Você errou.</span>
        <span class="subtitle">Não desista! Estude um pouco mais.</span>
    </div>
</template>

<script>
export default {
    data: () => {
        return {};
    },
    props: {
        topicTitle: ''
    }
}
</script>

<style lang="scss">
.answer-container {
    display: grid;
    grid-template-rows: 1fr auto auto;
    align-items: center;
    justify-items: center;

    .icon {
        width: 10rem;
        height: 10rem;
        margin: 0 auto;
    }

    .title {
        font-weight: 600;
        font-size: 24px;
    }

    .subtitle {
        font-weight: 600;
        font-size: 18px;
    }
}
</style>