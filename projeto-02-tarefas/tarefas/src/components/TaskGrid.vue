<template>
  <div class="task-grid">
    <p v-if="!tasks.length" class="no-task">Sua vida está em dia :)</p>

    <Task
			v-else
			v-for="(task, index) in tasks"
			:task="task"
			:key="task.text"
			@deleteTask="$emit('deleteTask', index)" />
  </div>
</template>

<script>
import Task from './Task.vue'

export default {
	components: {
		Task
	},
	props: {
		tasks: {
			type: Array,
			default() {
				return []
			}
		}
	}
}
</script>

<style>
.task-grid {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}

.no-task {
	color: #aaa;
	font-size: 1.7rem;
}
</style>
