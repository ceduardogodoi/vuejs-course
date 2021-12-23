<template>
  <div class="usuario-editar">
    <h3>Usuário editar</h3>
    <!-- <p><strong>Código: </strong>{{ id }}</p> -->
    <p><strong>Código: </strong>{{ $route.params.id }}</p>
    <p><strong>Completo: {{ $route.query.completo ? 'Sim' : 'Não' }}</strong></p>
    <p><strong>Língua: </strong> {{ $route.query.lingua }}</p>
    <hr/>
    <button primario>Confirmar</button>
    <div id="rodape">
      <h3>Curso Vue</h3>
    </div>
  </div>
</template>

<script>
export default {
	props: ['id']
}
</script>

<style>
#rodape {
	margin-top: 2000px;
}
</style>
