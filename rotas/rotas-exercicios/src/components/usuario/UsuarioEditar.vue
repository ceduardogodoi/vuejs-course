<template>
  <div class="usuario-editar">
    <h3>Usuário editar</h3>
    <!-- <p><strong>Código: </strong>{{ id }}</p> -->
    <p><strong>Código: </strong>{{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
	props: ['id']
}
</script>

<style>
</style>
