<template>
  <div class="new-task">
    <input @keyup.enter="text && createTask()" class="form-element" type="text" placeholder="Nova tarefa?" v-model="text">
    <button @click="createTask" class="form-element" :disabled="!text">+</button>
  </div>
</template>

<script>
export default {
	data() {
		return {
			text: ''
		}
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
		createTask() {
			const isDuplicateTask = this.$props.tasks.some(
				task => task.text === this.text
			)

			if (!isDuplicateTask) {
				this.$props.tasks.push({ text: this.text, completed: false })
				this.text = ''
			}
		}
	}
}
</script>

<style>
.new-task {
	margin: 35px;
}

.form-element {
	padding: 5px;
	border: 1px solid white;
	background: #fff2;
	font-size: 2rem;
	outline: none;
}

input.form-element {
	color: white;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
}

button.form-element {
	padding: 5px 10px;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	background-color: #2196f3;
	color: white;
	cursor: pointer;
}

button.form-element:disabled {
	background-color: #ccc;
}
</style>
