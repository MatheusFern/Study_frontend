<template>
  <q-page class="layout-plans" padding>
    <div class="Text-Plans-T">
      Assine um dos planos para ter a melhor experiencia da plataforma!
    </div>

    <!-- content -->
    <q-card class="Card-Service">
      <q-card-section class="q-pt-none">
        <div class="Plans">
          <!-- Plano1 -->
          <div class="prices">
            <div class="text-Plan-T">Plano Calouro</div>
            <div class="Plans-Container-1">
              <div class="textPrice">R$ 19,90</div>
              <div>
                <q-separator />
                <div class="text-Descriptions">Prioridade pelo professor</div>
              </div>
            </div>
            <q-btn label="assinar" color="green-13" v-close-popup />
          </div>
          <!-- Plano2 -->
          <div class="prices">
            <div class="text-Plan-T">Plano Veterano</div>
            <div class="Plans-Container-2">
              <div class="textPrice">R$39,90</div>
              <div>
                <q-separator />
                <div class="text-Descriptions">Prioridade pelo professor</div>
                <div class="text-Descriptions">Aulas gravadas</div>
              </div>
            </div>
            <q-btn label="assinar" color="green-13" v-close-popup />
          </div>
          <!-- Plano3 -->
          <div class="prices">
            <div class="text-Plan-T">Plano Senior</div>
            <div class="Plans-Container-3">
              <div class="textPrice">R$59,90</div>
              <div>
                <q-separator />
                <div class="text-Descriptions">Prioridade pelo professor</div>
                <div class="text-Descriptions">Aulas gravadas</div>
                <div class="text-Descriptions">
                  Conteúdo exclusivo do professor
                </div>
              </div>
            </div>
            <q-btn label="assinar" color="green-13" v-close-popup />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
