<template>
    <div class="answer-container">
        <div class="icon">
            <svg viewBox="0 0 24 24">
                <path fill="green" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
            </svg>
        </div>

        <span class="title">Você é incrível!</span>
        <span class="subtitle">Parabéns por acertar a questão!</span>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
        };
    },
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