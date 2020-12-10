<template>
  <q-page class="layoutProf" padding>
    <q-layout class="All">
      <div>
        <q-avatar>
          <img src="~assets/profileW.svg" />
        </q-avatar>
        <q-btn to=/Profile class="perfilBTN" flat rounded color="white"
        label="Usuario" />
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
        v-bind:key="prof.id"
        class="my-card-Prof"
        flat
        bordered
      >
        <q-item class="item">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/profile.svg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ prof.user.username }}</q-item-label>
            <q-item-label caption>{{ prof.subject }} </q-item-label>
          </q-item-section>
        </q-item>

        <q-card-section>
          <q-card-section class="Text-Prof">
            Pellentesque ullamcorper fringilla massa, quis mollis lorem
            elementum sit amet. Praesent faucibus vulputate condimentum.
            Praesent sit amet est gravida, mattis odio et, cursus nisi. Etiam
            porttitor ligula vel quam bibendum, a scelerisque metus pharetra.

            <div class="Footer-Text-3">Consulte o professor para checar sua disponibilidade </div>
            <div >
             
            </div>
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
                <div class="Footer-Text-2">R${{ prof.cost }},00</div>
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
          <q-card class="Card-Service">
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Email para contato</div>
            </div>
            <div class="Card-Contact">
              {{ prof.user.email }}
            </div>
            <q-btn
              class="BTN"
              color="green-13"
              text-color="white"
              label="Fechar"
              @click="alert = false"
            />
          </q-card>
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
      schedules: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.$axios
        .get("http://localhost:3333/classes")
        .then((res) => {
          this.profs = res.data;
      
          this.schedules = res.data
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
