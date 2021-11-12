<template>
  <div class="task-grid">
    <p v-if="!tasks.length" class="no-task">Sua vida está em dia :)</p>

    <Task @deleteTask="deleteTask($event)" v-else v-for="task in tasks" :task="task" :key="task.text" />
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
	},
	methods: {
		deleteTask($event) {
			const index = this.$props.tasks.findIndex(
				task => task.text === $event.text
			)
			this.$props.tasks.splice(index, 1)
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
