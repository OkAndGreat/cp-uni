<template>
	<view class="home_time_container">
		<text style="color: white;font-size: 25rpx">我们在一起已经</text>
		<view class="home_time_days_container">
			<text class="home_time_days">367</text>
			<text class="home_time_days_unit">天</text>
		</view>
		<text class="cur_day">2024/03/22&nbsp;&nbsp;&nbsp;周五</text>
	</view>
</template>

<script>
	export default {
		name: "HomeTime",
		data() {
			return {
				text: '123',
			};
		}
	}
</script>

<style lang="less">
	.home_time_container {
		margin-top: 20rpx;
		display: flex;
		z-index: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.home_time_days_container {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-top: 20rpx;

			.home_time_days {
				color: white;
				font-weight: bold;
				font-size: 66rpx;
			}

			.home_time_days_unit {
				margin-left: 15rpx;
				color: white;
				font-size: 32rpx;
			}

		}

		.cur_day {
			margin-top: 20rpx;
			color: white;
			font-size: 25rpx
		}

	}
</style>