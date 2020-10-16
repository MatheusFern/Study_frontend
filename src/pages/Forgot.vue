<template>
  <q-page>
    <!-- content -->
    <q-layout class="layout2">
      <div class="col1">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card flat bordered class="my-card">
            <div class="flex-break q-py-md"></div>
            <q-card-section>
              <div class="text-h2">Esqueceu sua senha?</div>
              <div class="subTexts">
                <div class="text-h5">Não se preucupe.</div>
                <div class="text-h5">
                  Informe seu e-mail que faremos o resto
                </div>
              </div>
            </q-card-section>
            <div class="flex-break q-py-md"></div>
            <q-card-section class="q-pt-none">
              <q-input
                
                outlined
                v-model="text"
                label="E-mail"
              />
            </q-card-section>
            <q-card-section>
              
              <q-btn to=/
                color="light-blue-5"
                class="full-width"
                label="Enviar"
              />
              
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="col2">
        <div class="Marca">
          <div class="text">
            <p class="text-h1">Study</p>
            <p class="text-h4">Estudos online</p>
          </div>
        </div>
      </div>
    </q-layout>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
