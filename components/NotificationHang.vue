<template>
	<view class="notification_container">
		<image src="../static/home/notification.svg" class="notification_icon"></image>
		<text class="text">没有纪恋日，快去配置吧！</text>
	</view>
</template>

<script>
	export default {
		name: "CelebrateHang",
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	.notification_container {
		margin-top: 40rpx;
		z-index: 1;
		height: 75rpx;
		width: 80%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		border: white 1rpx solid;
		border-radius: 40rpx;
		background-color: #C990A6;

		.text {
			color: white;
			margin-left: 20rpx;
			font-size: 25rpx;
		}

		.notification_icon {
			height: 45rpx;
			width: 45rpx;
			margin-bottom: 5rpx;
			margin-left: 40rpx;
			animation: rotate 3s ease-in-out infinite;

			@keyframes rotate {

				0% {
					transform: rotate(0deg);
				}

				25% {
					transform: rotate(-25deg);
				}

				75% {
					transform: rotate(25deg);
				}

				100% {
					transform: rotate(0deg);
				}
			}
		}
	}
</style>