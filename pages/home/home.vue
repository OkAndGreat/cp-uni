<template>
	<view class="root">
		<view class="home_bg_container">
			<image class="home_bg" src="../../static/home/flowerBg.svg" mode="aspectFill"></image>
		</view>

		<view class="home_real_area">
			<view class="home_top_area">
				<HeadIcon></HeadIcon>

			</view>
			<view class="home_bottom_area"></view>
		</view>


	</view>
</template>

<script>
	import HeadIcon from '../../components/HeadIcon.vue'

	export default {
		mounted() {},
		methods: {


		},
		data() {
			return {

			};
		},
		components: {
			HeadIcon
		}
	}
</script>

<style lang="less">
	.root {
		width: 100%;
		/* 或者使用 100vw */
		height: 100%;
		/* 或者使用 100vh */
		position: fixed;
	}

	.home_real_area {
		.home_top_area {
			display: flex;
			justify-content: center;
		}

		.home_bottom_area {}
	}

	.home_bg_container {

		position: absolute;
		width: 100%;
		height: 100%;

		.home_bg {
			width: 100%;
			height: 65%;
		}
	}
</style>