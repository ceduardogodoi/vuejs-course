<template>
  <div class="task-progress">
    <span class="progress-value">{{ progress }}%</span>
    <div class="progress-bar" :style="{ width: `${progress}%` }" />
  </div>
</template>

<script>
export default {
	data() {
		return {
			progress: 30
		}
	}
}
</script>

<style>
.task-progress {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 80%;
	border: 1px solid white;
	border-radius: 8px;
	text-align: center;
}

.progress-bar {
	position: absolute;
	height: 100%;
	border-radius: inherit;
	background-color: #4caf50;
	text-align: center;
}

.progress-value {
	z-index: 1;
	font-size: 1.5rem;
	color: white;
}
</style>
