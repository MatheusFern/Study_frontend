<template>
  <q-page class="layout" padding>
    
    <q-layout >
      <div>
        <q-avatar>
            <img src="~assets/Novak.jpg">
          </q-avatar>
      <q-btn to=/Profile class="perfilBTN" flat rounded color="white" label="Novak" />
      </div>
      <!-- content -->
      <div class="row">
        <div class="col">
          <div class="Marca-Home">
            <div class="text">
              <p class="text-h1">Study</p>
              <p class="text-h4">Estudos online</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="Marca-Home">
            <q-img
              src="~assets/ilustracao.png"
              style="max-width: 400px; max-height: 400px"
            />
          </div>
        </div>
      </div>
      <div class="SubBanner" >
        <q-card class="my-card1">
      <q-card-section class="bg-blue-1 text-white">
        <div class="text-h4">Bem vindo.</div>
        <div class="text-h5">Oque você procura?</div>
      </q-card-section>

      <q-separator />
        
      <q-card-actions >
        <q-btn
        to=proflist
      size="22px"
      class="q-px-xl q-py-xs"
      color="light-blue-5"
      label="Estudar"
    />
        <q-btn
        to=ProfessorAdd
      size="22px"
      class="q-px-xl q-py-xs"
      color="green-13"
      label="Ensinar"
    />
      </q-card-actions>
    </q-card>
      </div>
    </q-layout>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
