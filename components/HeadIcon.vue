<template>
				<view class="home_head_icon">
					<image class="head_icon_left" src="../static/home/wangzhongtai.jpg"></image>
					<image class="head_icon_middle" src="../static/home/fullHeart.svg" ref="animatedHeart"></image>
					<image class="head_icon_right" src="../static/home/chenxiaowen.jpg"></image>
				</view>
</template>

<script>
	export default {
		name:"headIcon",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
			.home_head_icon {
				margin-top: 200rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;

				.head_icon_left {
					width: 75rpx;
					height: 75rpx;
					margin-right: 20rpx;
					border-radius: 50%;
				}

				.head_icon_middle {
					width: 35rpx;
					height: 35rpx;
					animation: moveUpDown 2s linear infinite;

					@keyframes moveUpDown {
						0% {
							transform: translateY(0);
						}

						25% {
							transform: translateY(4px);
						}

						75% {
							transform: translateY(-4px);
						}

						100% {
							transform: translateY(0);
						}
					}
				}

				.head_icon_right {
					width: 75rpx;
					height: 75rpx;
					margin-left: 20rpx;
					border-radius: 50%;
				}

			}
</style>