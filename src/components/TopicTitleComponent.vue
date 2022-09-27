<template>
    <div class="topic-title">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#5468FF" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
        <span class="title">{{topicTitle}}</span>
    </div>
</template>

<script>
export default {
    name: 'TopicTitleComponent',

    data: () => {
        return {}
    },

    props: {
        topicTitle: ''
    }

}
</script>
      
<style lang="scss">
.topic-title {
    background: #fff;
    display: grid;
    grid-template-columns: 1fr 9fr;
    margin: 1.5rem 1rem;
    padding: 1.5rem 1rem;
    border-radius: 16px;

    .title {
        margin-left: 1rem;
        font-weight: 600;
    }
}
</style>