<template>
	<view class="post_notes_container">
		<text class="post_tips">你回来啦~今天也很想你噢</text>

		<view class="create_tips" :class="{'slide_in_animation': isAnimated}">创建便利贴</view>

	</view>
</template>

<script>
	import {
		GlobalStorge
	} from '../pages/home/storge.js';


	export default {
		name: "PostNotes",
		data() {
			return {
				isAnimated: false,
			};
		},
		mounted() {
			this.isAnimated = true
			setTimeout(() => {
				this.isAnimated = false;
			}, 2000);
		},
		onTabItemTap() {

		}
	}
</script>

<style lang="less">
	.post_notes_container {
		margin-top: 460rpx;
		width: 100%;
		display: flex;
		z-index: 1;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		.post_tips {
			margin-left: 30rpx;
			font-size: 25rpx;
		}

		.create_tips {
			margin-right: 30rpx;
			color: white;
			border-radius: 10rpx;
			background-color: #FE6FA1;
			padding: 8rpx 16rpx;

		}
	}

	.slide_in_animation {
		animation: slide-in 2s forwards;
	}

	@keyframes slide-in {
		0% {
			transform: translateX(200rpx);
		}

		100% {
			transform: translateX(0);
		}
	}
</style>