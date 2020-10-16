<template>
  <q-page class="layoutProf">
    <q-layout class="">
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
          <q-item>
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
              Suspendisse lorem ligula, porta ac luctus eget, semper tempus
              risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi ut feugiat velit. Donec ultrices dui lacus. Integer dapibus
              odio nec faucibus gravida.
            </q-card-section>
          </q-card-section>

          <div class="q-pa-md q-gutter-sm">
            <q-tree
              :nodes="simple"
              node-key="label"
              no-connectors
              :expanded.sync="expanded"
            />
          </div>

          <q-list bordered class="rounded-borders">
            <q-expansion-item
        
        icon="perm_identity"
        label="Contato do Professor"
        caption="whatsapp"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
          </q-list>
        </q-card>
      
    </q-layout>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
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

      expanded: ["Horarios Disponiveis", "Good food (with icon)"],

      simple: [
        {
          label: "Horarios Disponiveis",
          children: [
            {
              label: "Segunda",
              children: [{ label: "12h - 13h" }, { label: "13h - 14h" }],
            },
            {
              label: "Terça",
              children: [{ label: "12h - 13h" }, { label: "13h - 14h" }],
            },
            {
              label: "Quarta",
              children: [{ label: "12h - 13h" }, { label: "13h - 14h" }],
            },
            {
              label: "Quinta",
              children: [{ label: "12h - 13h" }, { label: "13h - 14h" }],
            },
            {
              label: "Sexta",
              children: [{ label: "12h - 13h" }, { label: "13h - 14h" }],
            },
          ],
        },
      ],
    };
  },
};
</script>
