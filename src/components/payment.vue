<template>
  <v-container>
      
    <v-card class="mx-auto" max-width="700">
      <v-img
        class="white--text align-end"
        hight="300px"
        src="https://s3.ap-southeast-1.amazonaws.com/www.accrevo.com/blogs/8d15acd0b27626b1fb133df91987a71262b2820d.jpg"
      >
      </v-img>
      <br />
      <br />
  <v-form v-model="valid" ref="clear" v-on:submit.prevent="submit()">
        <v-row class="mb-6" justify="center">
          <v-col lg="6">
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="10"
              label="Name"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mb-6" justify="center">
          <v-col lg="6">
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mb-6" justify="center">
          <v-col lg="6">
            <v-text-field
              v-model="phone"
              :error-messages="PhonenumberErrors"
              :counter="10"
              label="Phone number"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mb-6" justify="center">
          <v-col lg="7">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Payment date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                ref="picker"
                v-model="date"
                :max="new Date().toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="save"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row class="mb-6" justify="center">
          <v-col lg="6">
            <v-file-input
              v-model="img"
              label="File input"
              filled
              prepend-icon="mdi-camera"
            ></v-file-input>
            <v-checkbox
              v-model="checkbox"
              :error-messages="checkboxErrors"
              label="Do you agree?"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            ></v-checkbox>
            <v-btn class="mr-4" @click="submit"> submit </v-btn>
            <v-btn @click="table"> data-Table </v-btn>
          </v-col>
        </v-row>
     </v-form>
    </v-card>

  </v-container>
</template>
<script>
export default {
  name: "payment",
  data: () => ({
    name:"",
    email:"",
    phone:"",
    date:"",
    img:"",
    checkbox: false,
    valid: true,
    show1: false,
  }),
  methods:{
    submit(){
  if (this.name) {
        let payload = { name: this.name, phone: this.phone, email:this.email
        , date:this.date, img:this.img};
        this.$store.dispatch("submit", payload);
        
      }
    },
    table(){
     this.$store.state.page = 2;
    }
  }
};
</script>