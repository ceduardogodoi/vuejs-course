<template>
  <div class="new-task">
    <input class="form-element" type="text" placeholder="Nova tarefa?">
    <button class="form-element">+</button>
  </div>
</template>

<script>
export default {}
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
}

input.form-element {
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
}

button.form-element {
	padding: 5px 10px;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	background-color: #2196f3;
	color: white;
}
</style>
