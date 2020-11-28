<template>
  <q-page class="layoutProf" padding>
    <q-layout class="All">
      <div>
        <q-avatar>
          <img src="~assets/Novak.jpg" />
        </q-avatar>
        <q-btn to=/Profile class="perfilBTN" flat rounded color="white"
        label="Novak" />
      </div>
      <!-- content -->

      <div class="Text-Tutores">Tutores disponiveis</div>

      <div class="Selections">
        <div class="Selection">
          <div class="Text-TC">Materia</div>
          <q-select
            standout
            bg-color="white"
            v-model="modelM"
            :options="Materia"
            label="Selecione"
          />
        </div>
        <div class="Selection">
          <div class="Text-TC">Dia da Semana</div>
          <q-select
            standout
            bg-color="white"
            v-model="modelD"
            :options="Dia"
            label="Selecione"
          />
        </div>
        <div class="Selection">
          <div class="Text-TC">Horario</div>
          <q-select
            standout
            bg-color="white"
            v-model="modelH"
            :options="Horario"
            label="Selecione"
          />
        </div>
      </div>
      <!-- Card de professores -->
      <q-card
        v-for="prof in profs"
        v-bind:key="prof.movies"
        class="my-card-Prof"
        flat
        bordered
      >
        <q-item class="item">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/Mel.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Mellanye Klayn {{ prof.title }}</q-item-label>
            <q-item-label caption> Matemática </q-item-label>
          </q-item-section>
        </q-item>

        <q-card-section>
          <q-card-section class="Text-Prof">
            Pellentesque ullamcorper fringilla massa, quis mollis lorem
            elementum sit amet. Praesent faucibus vulputate condimentum.
            Praesent sit amet est gravida, mattis odio et, cursus nisi. Etiam
            porttitor ligula vel quam bibendum, a scelerisque metus pharetra.
            <br />
            Suspendisse lorem ligula, porta ac luctus eget, semper tempus risus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
            feugiat velit. Donec ultrices dui lacus. Integer dapibus odio nec
            faucibus gravida.
          </q-card-section>
        </q-card-section>

        <q-card-section>
          <q-card flat bordered class="card-Profs"> </q-card>
        </q-card-section>

        <q-list class="Price" bordered>
          <q-expansion-item label="Contratar Professor">
            <q-card-section class="Footer-Prof">
              <div>
                <div class="Footer-Text-1">Preço hora aula!</div>
                <div class="Footer-Text-2">R$200,00</div>
              </div>
              <q-btn
                color="green-13"
                text-color="white"
                label="Entrar em contato"
                @click="alert = true"
              />
            </q-card-section>
          </q-expansion-item>
        </q-list>
        <!-- Modal/Dialog de assinaturas -->
        <q-dialog v-model="alert">
          <q-card class="Card-Service"> </q-card>
        </q-dialog>
      </q-card>
    </q-layout>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      //checkbox do modal/dialog
      alert: false,

      modelM: null,
      modelD: null,
      modelH: null,
      Materia: [
        "Portugues",
        "Matematica",
        "Fisica",
        "Quimica",
        "Historia",
        "Geografia",
      ],
      Dia: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
      Horario: ["8h - 9h", "9h - 10h", "10h - 11h", "11h - 12h", "12h - 13h"],

      profs: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.$axios
        .get("https://jsonplaceholder.typicode.com/posts")
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
