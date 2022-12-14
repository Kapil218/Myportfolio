<template>
  <v-app class="px-5">
   <Appbar/>
   <v-divider style="height: 0.1px; background-color='grey'"></v-divider>
    <v-main class="black  ">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Appbar from './components/appbar.vue'
export default {
  name: 'App',
components:{Appbar},
  data: () => ({
    //
  }),
};
</script>
