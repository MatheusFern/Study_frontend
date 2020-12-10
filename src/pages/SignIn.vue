<template>
  <q-page>
    <!-- content -->
    <q-layout class="layout2">
      <div class="col1">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card flat bordered class="my-card">
            <div class="flex-break q-py-md"></div>
            <q-card-section>
              <div class="text-h2">Cadastrar</div>
            </q-card-section>
            <div class="flex-break q-py-md"></div>
            <q-card-section class="q-pt-none">
              <q-input class="Inputs-SignIn" outlined v-model="Name" label="Nome" />
              <q-input class="Inputs-SignIn" outlined v-model="SecondName" label="Sobrenome" />
              <q-input class="Inputs-SignIn" outlined v-model="Email" label="E-mail" />
              <q-input class="Inputs-SignIn" outlined v-model="Password" label="Senha" />
            </q-card-section>
            <q-card-section>
              
              
              <q-btn
                to=home
                color="light-blue-5"
                class="full-width"
                label="Cadastrar"
                v-on:click="CreateUser"
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
  data(){
    return{
      Name: '',
      SecondName: '',
      Email: '',
      Password: '',
      profs: [],
    }

  },
  mounted(){
    this.CreateUser();
  },
  methods:{
    CreateUser(){
      this.$axios
      .post("http://localhost:3333/user/register" ,{
        id:1,
        username:this.Name,
        password:this.Password,
        email:this.Email
      })
      .then((res) => {
          this.profs = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>

