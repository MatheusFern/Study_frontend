<template>
  <q-page padding class="layoutProf">
    <q-layout>
      <!-- content -->
      <div class="Text-Tutores-ADD">Voce quer dar aulas?</div>
      <div class="Text-Tutores-ADD-Sub">
        Tudo que precisar fazer é preencher o formulário de inscrição
      </div>

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
            <q-item-label>Adicionar imagem de perfil</q-item-label>
          </q-item-section>
        </q-item>

        <div class="Campo-What">
          <div class="Dados-What">Whatsapp</div>
          <q-input filled v-model="number" placeholder="(    ) _ ____ - ____" />
        </div>
        <div class="Dados-What">
          Bibliografia
          <q-input v-model="resume" filled type="textarea" />
        </div>
        <div class="Dados">Sobre a aula</div>
        <q-separator />
        <div>
          <div class="campo1">
            <div class="Dados-Materia">Materia</div>
            <q-input filled v-model="materia" style="max-width: 300px" />
          </div>
          <div>
            <div class="Dados-Materia">Custo da sua hora aula</div>
            <q-input filled v-model="price" style="max-width: 300px" />
          </div>
        </div>

        <div class="Dados">Horários disponíveis</div>
        <q-separator />
        <div>
          <div class="Dados-Materia">Dia disponivel</div>
          <q-input
            filled
            v-model="day"
            :options="day"
            label="Escolha um dia"
            style="max-width: 200px"
          />
          <div class="Dados-Materia">Inicio</div>
          <q-input filled v-model="horaInicial" style="max-width: 300px" />
        </div>
        <div>
          <div class="Dados-Materia">Fim</div>
          <q-input filled v-model="horaFinal" style="max-width: 300px" />
        </div>
        <q-card-section class="Footer-Prof">
          <div>
            <div class="Footer-Text-1">Importante!</div>
            <div class="Footer-Text-2">
              Preencha todos os dados corretamente.
            </div>
          </div>
          <q-btn
            v-on:click="setProf"
            color="green-13"
            text-color="white"
            label="Salvar Cadastro"
          />
        </q-card-section>
      </q-card>
    </q-layout>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      number: "",
      resume: "",
      materia: "",
      price: "",
      horaInicial: "",
      horaFinal: "",
      day: "",
    };
  },
  mounted() {
    this.setProf();
  },
  methods: {
    setProf() {
      this.$axios
        .post("http://localhost:3333/classes", {
          userId: 1,
          subject: this.materia,
          cost: this.price,

          whatsapp: this.number,
          bio: this.resume,
          schedule: [
            {
              week_day: this.day,
              to: this.horaInicial,
              from: this.horaFinal,
            },
          ],
        })
        .then((res) => {
          this.profs = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
