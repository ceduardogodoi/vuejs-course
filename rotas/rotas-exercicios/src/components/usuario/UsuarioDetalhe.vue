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
        },
        hash: '#rodape'
      }"
    >
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
	props: ['id'],
	beforeRouteEnter(to, from, next) {
		// console.log(this.id)
		console.log('dentro do componente -> usuário detalhe')

		const autenticado = true
		autenticado ? next() : next(false)

		// next(vm => {
		// 	console.log(vm.id)
		// })
	}
}
</script>

<style>
</style>
