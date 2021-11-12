<template>
  <div class="task" :class="isPending ? 'pending' : 'done'">
    <span @click="deleteTask" class="close">x</span>

    <p>{{ task.text }}</p>
  </div>
</template>

<script>
export default {
	data() {
		return {
			isPending: true
		}
	},
	props: {
		task: { text: String, completed: Boolean }
	},
	methods: {
		deleteTask() {
			this.$emit('deleteTask', this.$props.task)
		}
	}
}
</script>

<style>
.task {
	position: relative;
	width: 350px;
	height: 150px;
	margin: 10px;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	font-size: 2rem;
	cursor: pointer;
	user-select: none;
}

.close {
	position: absolute;
	top: 10px;
	right: 10px;
	width: 20px;
	height: 20px;
	display: flex;
	justify-content: center;
	border-radius: 50%;
	font-size: 0.9rem;
	font-weight: 600;
	color: white;
}

.pending {
	border-left: 12px solid #b73229;
	background-color: #f44336;
}

.pending .close {
	background-color: #b73229;
}

.done {
	border-left: 12px solid #0a8f08;
	background-color: #4caf50;
	color: #ddd;
	text-decoration: line-through;
}

.done .close {
	background-color: #0a8f08;
}
</style>
