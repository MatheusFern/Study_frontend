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
              <img src="~assets/profile.svg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Alterar imagem de perfil</q-item-label>
          </q-item-section>
        </q-item>

        <div class="Campo-What">
          <div class="Dados-What">Whatsapp</div>
          <q-input filled v-model="number" placeholder="( 81 ) 9-9888-4622 " />
        </div>
        <div class="Dados-What">
          Bibliografia
          <q-input v-model="resume" filled type="textarea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut sem mollis sem tempor maximus. Donec interdum nunc vitae mauris cursus sollicitudin. Ut dolor justo, placerat et lorem et" />
        </div>
        <div class="Dados">Sobre a aula</div>
        <q-separator />
        <div >
          <div class="campo1">
          <div class="Dados-Materia">Materia</div>
          <q-input
            filled
            v-model="materia"
            placeholder="Sociologia"
            style="max-width: 300px"
          />
          </div>
          <div>
          <div class="Dados-Materia">Custo da sua hora aula</div>
          <q-input
            filled
            v-model="price"
            placeholder="R$50,00"
            style="max-width: 300px"
          />
          </div>
        </div>

        <div class="Dados">Horários disponíveis</div>
        <q-separator />
        <div>
          <div class="Dados-Materia">Dia disponivel</div>
          <q-select filled v-model="model" :options="day" label="Escolha um dia" style="max-width: 200px" />
          <div class="Dados-Materia">Inicio</div>
          <q-input
            filled
            v-model="horaInicial"
            placeholder="14:00h"
            style="max-width: 300px"
          />
          </div>
          <div>
          <div class="Dados-Materia">Fim</div>
          <q-input
            filled
            v-model="horaFinal"
            placeholder="15:00h"
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
      number: "",
      resume: "",
      materia: "",
      price: "",
      horaInicial: "",
      horaFinal: "",
      day: "",
      Dia: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
      
    }
  }
}
</script>
