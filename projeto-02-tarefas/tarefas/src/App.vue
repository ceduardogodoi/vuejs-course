<template>
	<div id="app">
		<h1>Tarefas</h1>
		<ProgressBar :progress="progress" />
		<Input :tasks="tasks" />
		<TaskGrid :tasks="tasks" @deleteTask="deleteTask" />
	</div>
</template>

<script>
import ProgressBar from './components/ProgressBar'
import Input from './components/Input.vue'
import TaskGrid from './components/TaskGrid.vue'

export default {
	components: { ProgressBar, Input, TaskGrid },
	data() {
		return {
			tasks: []
		}
	},
	computed: {
		progress() {
			const total = this.tasks.length
			const done = this.tasks.filter(task => task.completed).length

			return Math.round((done / total) * 100) || 0
		}
	},
	watch: {
		tasks: {
			deep: true,
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	methods: {
		deleteTask(index) {
			this.tasks.splice(index, 1)
		}
	},
	created() {
		const json = localStorage.getItem('tasks')
		this.tasks = JSON.parse(json) || []
	}
}
</script>

<style>
body {
	font-family: 'Lato', sans-serif;
	background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
	color: #fff;
}

#app {
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

#app h1 {
	margin-bottom: 5px;
	font-weight: 300;
	font-size: 3rem;
}
</style>
