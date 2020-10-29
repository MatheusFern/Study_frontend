<template>
  <q-page class="Layout-Resources" padding>
    <q-layout>
      <div>
        <q-avatar>
          <img src="~assets/Novak.jpg" />
        </q-avatar>
        <q-btn to=/Profile class="perfilBTN" flat rounded color="white"
        label="Novak" />
      </div>
      <!-- content -->
      <div class="Text-Tutores">Recursos</div>

      <q-card class="my-card-Resources">
        <q-card-section>
          <div class="Resources-Text-T">
            Recursos disponiveis exclusivamente para voce
          </div>

          <q-card-section>
            <div class="Resources-Text-Sub">Videos</div>
            <div class="RecursoV">
              <q-video src="https://www.youtube.com/watch?v=awKazl7_trg" />
              <div class="Group-Text-R">
                <div>Playlist de historia Exclusiva</div>
                <div>Professor Roberto Gusmão.</div>
              </div>
            </div>
            <div class="RecursoV">
              <q-video src="https://www.youtube.com/watch?v=awKazl7_trg" />
              <div class="Group-Text-R">
                <div>Playlist de matematica Exclusiva</div>
                <div>Professora Amanda Correia.</div>
              </div>
            </div>
            <div class="RecursoV">
              <q-video src="https://www.youtube.com/watch?v=awKazl7_trg" />
              <div class="Group-Text-R">
                <div>Playlist de Biologia Exclusiva</div>
                <div>Professor Julio Cesar.</div>
              </div>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div class="Resources-Text-Sub">Materiais</div>
            <div class="Group-Text-R">
                <div>Livros </div>
                <div>Exercicios.</div>
              </div>
            

          </q-card-section>
        </q-card-section>
      </q-card>
    </q-layout>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
