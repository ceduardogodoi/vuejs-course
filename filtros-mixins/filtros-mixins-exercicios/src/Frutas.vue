<template>
  <div>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">
        {{ fruta }}
      </li>
      <input type="text" v-model="fruta" @keydown.enter="add">
    </ul>
  </div>
</template>

<script>
import frutasMixin from './frutasMixin'

export default {
	mixins: [frutasMixin]
}
</script>

<style>
</style>
