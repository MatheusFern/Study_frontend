



<template>
  <q-page class="layoutProf">
    <q-layout class="All">
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
      <q-card class="my-card-Prof" flat bordered>
        <q-item class="item">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/Mel.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Mellanye Klayn</q-item-label>
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

        <div class="q-pa-md q-gutter-sm">
          <q-table
            dense
            title="Horarios disponiveis"
            :data="profs"
            :columns="columns"
            row-key="name"
            class="col"
          />
        </div>

        <q-list class="Price" bordered>
          <q-expansion-item label="Contratar Professor">
            <q-card>
              <q-card-section> Preço/Hora: R$ 200,00 </q-card-section>
              <q-btn
                outline
                rounded
                color="green-13"
                label="Entrar em contato"
                @click="alert = true"
              />
            </q-card>
          </q-expansion-item>
        </q-list>
        <!-- Modal/Dialog de assinaturas -->
        <q-dialog v-model="alert">
          <q-card class="Card-Service">
            <q-card-section>
              <div class="text-h4">
                Assine um dos planos para ter prioridade
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="Services-Options">
                <div class="Plano-1">
                  <div class="textTitle">R$19,90</div>
                  <q-separator />
                  <li>prioridade pelo professor</li>
                </div>
                <div class="Plano-2">
                  <div class="textTitle">R$39,90</div>
                  <q-separator />
                  <li>prioridade pelo professor</li>
                  <li>aulas gravadas</li>
                </div>
                <div class="Plano-3">
                  <div class="textTitle">R$59,90</div>
                  <q-separator />
                  <li>prioridade pelo professor</li>
                  <li>aulas gravadas</li>
                  <li>conteúdo exclusivo do professor</li>
                </div>
                <q-checkbox v-model="val1" />
                <q-checkbox v-model="val2" />
                <q-checkbox v-model="val3" />
              </div>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn label="assinar" color="green-13" v-close-popup />
            </q-card-actions>
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
      val1: false,
      val2: false,
      val3: false,
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

      

      

      columns: [
        {
          name: "id",
          label: "Id Post",
          field: "id",
          align: "left",
        },
        {
          name: "title",
          label: "Title",
          field: "title",
          align: "left",
        },
      ],
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
