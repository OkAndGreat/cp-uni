<template>
	<view class="post_notes">
		<view class="post_notes_container">
			<text class="post_tips">你回来啦~今天也很想你噢</text>

			<view class="create_tips" ref="createTips" :class="{'slide_in_animation': isAnimated}"
				@click="onCreateTipsClicked()">创建便利贴
			</view>
		</view>
		<view class="notes_hang_container" ref="notesHangContainer">

		</view>
		<image src="../static/24gl-paperclip.svg" class="paper_clip"></image>
	</view>

</template>

<script>
	import {
		fade
	} from '../utils/UIUtils.js'

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
		methods: {
			onCreateTipsClicked() {
				this.toggleVisibility(false)
			},
			toggleVisibility(showCreateTips) {
				if (showCreateTips) {
					fade(this.$refs.createTips.$el, true, 250)
					fade(this.$refs.notesHangContainer.$el, false, 250)
				} else {
					fade(this.$refs.createTips.$el, false, 200)
					fade(this.$refs.notesHangContainer.$el, true, 250)
				}
			}
		}
	}
</script>

<style lang="less">
	.post_notes {
		position: relative;
		width: 100%;
	}
	
	.paper_clip{
		position: absolute;
		width: 50rpx;
		height: 50rpx;
		top: 168rpx;
		fill: #FD417E;

		rotate:z 190deg;
		left: 86%;
	}

	.notes_hang_container {
		position: absolute;
		border-radius: 20rpx;
		background-color: #FFFFFF;
		width: 300rpx;
		visibility: visible;
		height: 300rpx;
		top: 200rpx;
		left: 56%;
	}



	.post_notes_container {
		margin-top: 460rpx;
		width: 100%;
		display: flex;
		position: absolute;

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