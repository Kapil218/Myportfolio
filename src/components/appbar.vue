<template>
  <nav >
 <div class="hidden-md-and-up">
  <v-navigation-drawer
      v-model="drawer"
      absolute
      class="z-index='4' black "
      height="100%"
    >
      <v-list-item class="my-4">
        <v-list-item-avatar size="75">
          <v-img src="../assets/kapil.jpeg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="white--text">Kapil singh rathore</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider style=" background-color:white"></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
         link
          
        >
         

     <v-btn width="100%" class="grey lighten-4 my-3" text router :to='item.path'>
     <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
     </v-list-item-icon>
     <v-list-item-content >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
     </v-list-item-content>
     </v-btn>  
     

        </v-list-item>
      </v-list>
    </v-navigation-drawer>
 </div> 

    <v-app-bar class="black" dark flat>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title><span class="grey--text">MY </span><span>Portfolio</span></v-toolbar-title>

      <v-spacer></v-spacer>
<div class="hidden-sm-and-down white--text" v-for="item in items1" :key="item.text">
    


   <v-btn text  class="white--text" router :to="item.route">
      {{item.text}}
      </v-btn>

       
 </div>  

 
    </v-app-bar>
   
  </nav>
</template>


<script>
  export default {
    data () {
      return {
        drawer: false,
        
             items1: [
                {
          
          text: 'Home',
          route: '/'
        },
        {
          
          text: 'About',
          route:'/about',
        },
        {
        
          text: 'Projects',
          route:'/project',
        },
        {
        
          text: 'Connect',
          route:'/connect',
        },
        
      ],
     items: [
          { title: 'Home', icon: 'mdi-view-dashboard',path:'/' },
          { title: 'About', icon: 'mdi-image-check',path:'/about' },
          { title: 'Project', icon: 'mdi-folder-download',path:'/project' },
          { title: 'Connect', icon: 'mdi-forum',path:'/connect' },
        ],
      }
    },
  }
</script>

