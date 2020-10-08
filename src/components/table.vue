<template>
  <div class="container fluid">
    <v-card>
      <h1 class="text-center">Data-Table</h1>
  
    <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            No.
          </th>
          <th class="text-left">
            Name
          </th>
           <th class="text-left">
            E-mail
          </th>
           <th class="text-left">
            Phone Number
          </th>
           <th class="text-left">
            Date
          </th>
           <th class="text-left">
            Images
          </th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="(newu,index) in $store.getters.newu" :key="index">
                <td>{{index+1}}</td>
                <td>{{newu.name}}</td>
                <td>{{newu.email}}</td>
                <td>{{newu.phone}}</td>
                <td>{{newu.date}}</td>
                <td>{{newu.img}}</td>
               
              </tr>
      </tbody>
    </template>
  </v-simple-table>
  <v-row>
    <v-col class="text-center">
    <v-btn color="success" class="" @click="page">
                Register
              </v-btn>
              </v-col>
              </v-row>
     </v-card>
  </div>
</template>
<script>
export default {
 methods: {
page(){
      this.$store.state.page = 1;
    }
 }
}
</script>