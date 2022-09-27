<template>
	<div id="app">
		<router-view></router-view>
	</div>

</template>

<script>
export default {
	name: 'App',

	components: {},

	data() {
		return {}
	},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

* {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
	font-family: 'Montserrat', sans-serif;
}

#app {
	background-color: #dbdde2;
}
</style>
