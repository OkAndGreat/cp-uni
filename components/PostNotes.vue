<template>
	<view class="post_notes_container">
		<text class="post_tips">你回来啦~今天也很想你噢</text>
		<view class="create_tips">创建便利贴</view>
	</view>
</template>

<script>
	export default {
		name: "PostNotes",
		data() {
			return {

			};
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
</style>