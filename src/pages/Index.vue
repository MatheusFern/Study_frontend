
<template>
  <q-page class="layout">
    <q-layout class="row">
      
      <div class="col1">
        <div class="Marca">
          <div class="text">
            <p class="text-h1">Study</p>
            <p class="text-h4">Estudos online</p>
          </div>
        </div>
      </div>

      <div class="col2">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card flat bordered class="my-card">
              <div class="flex-break q-py-md"></div>
              <q-card-section>
                <div class="text-h2">Fazer login</div>
              </q-card-section>
              <div class="flex-break q-py-md"></div>
              <q-card-section class="q-pt-none">
                <q-input outlined v-model="text" label="E-mail" />
                <q-input outlined v-model="text" label="Senha" />
              </q-card-section>

                 <q-checkbox class="check" v-model="teal" label="Lembrar-me" color="green-6" />
              
              <q-card-section >
                
                <q-btn  to=home color="green-6" class="full-width" label="entrar" />
                
              </q-card-section>
              
              <div class="account">
              <div class="row">
                
                <q-btn  to=/signin flat style="color: #39E57E" label="Cadastre-se" />
                
                
                <q-btn to=/Forgot flat style="color: black" label="Esqueceu a senha?" />
               
              </div>
                <div class="row">
                <q-btn flat style="color: black" label="Primeira vez?" />
                </div>
              </div>
            
          </q-card>
        </div>
      </div>

    </q-layout>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      teal: true,
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
.row + .row
  margin-top: 1rem
</style>