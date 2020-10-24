<template>
  <q-page padding class="layoutProf">
    <q-layout>
    <!-- content -->
    

      <q-card class="my-card-Prof" flat bordered>
        <div class="Dados">Seus Dados</div>
        <q-separator />

        <q-item class="item">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/Novak.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Alterar imagem de perfil</q-item-label>
          </q-item-section>
        </q-item>

        <div class="Campo-What">
          <div class="Dados-What">Whatsapp</div>
          <q-input filled v-model="ph" placeholder="(    ) _ ____ - ____" />
        </div>
        <div class="Dados-What">
          Bibliografia
          <q-input v-model="text" filled type="textarea" />
        </div>
        <div class="Dados">Sobre a aula</div>
        <q-separator />
        <div >
          <div class="campo1">
          <div class="Dados-Materia">Materia</div>
          <q-input
            filled
            v-model="text"
            
            style="max-width: 300px"
          />
          </div>
          <div>
          <div class="Dados-Materia">Custo da sua hora aula</div>
          <q-input
            filled
            v-model="text"
            
            style="max-width: 300px"
          />
          </div>
        </div>

        <div class="Dados">Horários disponíveis</div>
        <q-separator />
        <div>
          <div class="Dados-Materia">Dia disponivel</div>
          <q-select filled v-model="model" :options="Dia" label="Escolha um dia" style="max-width: 200px" />
          <div class="Dados-Materia">Inicio</div>
          <q-input
            filled
            v-model="text"
            
            style="max-width: 300px"
          />
          </div>
          <div>
          <div class="Dados-Materia">Fim</div>
          <q-input
            filled
            v-model="text"
            
            style="max-width: 300px"
          />
          </div>
        <q-card-section class="Footer-Prof">
          <div>
          <div class="Footer-Text-1">Importante!</div>
          <div class="Footer-Text-2">Preencha todos os dados corretamente.</div>
          </div>
          <q-btn color="green-13" text-color="white" label="Atualizar Cadastro" />
        </q-card-section>
      </q-card>
    </q-layout>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data(){
    return {
      model: null,
      Dia: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
      
    }
  }
}
</script>
