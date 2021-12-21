<template>
  <div class="usuario-detalhe">
    <h3>Usuário detalhe</h3>
    <p><strong>Código: </strong>{{ id }}</p>
    <!-- :to="`/usuario/${$route.params.id}/editar`" -->
    <router-link
      tag="button"
      primario
      :to="{
        name: 'editarUsuario',
        params: {
          id
        },
        query: {
          completo: false,
          lingua: 'en'
        }
      }"
    >
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
	props: ['id']
}
</script>

<style>
</style>
