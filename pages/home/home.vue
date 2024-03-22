<template>
	<view class="root">
		<view class="home_bg_container">
			<image class="home_bg" src="../../static/home/flowerBg.svg" mode="aspectFill"></image>
		</view>

		<view class="home_real_area">
			<view class="home_top_area">

				<view class="home_head_icon">
					<image class="head_icon_left" src="../../static/home/wangzhongtai.jpg"></image>
					<image class="head_icon_middle" src="../../static/home/fullHeart.svg" ref="animatedHeart"></image>
					<image class="head_icon_right" src="../../static/home/chenxiaowen.jpg"></image>
				</view>
			</view>
			<view class="home_bottom_area"></view>
		</view>


	</view>
</template>

<script>
	export default {
		mounted() {},
		methods: {


		},
		data() {
			return {

			};
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