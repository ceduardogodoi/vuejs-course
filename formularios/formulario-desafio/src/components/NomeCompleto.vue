<template>
  <output>{{ name }} {{ surname }}</output>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true
		},
		surname: {
			type: String,
			required: true
		}
	}
}
</script>
