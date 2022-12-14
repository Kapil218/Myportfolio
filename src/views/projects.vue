<template>
    <div>
      <div id="container"><div id="animation">My_Projects</div></div>
      <v-container class="red lighten-5">
       <v-row no-gutters class="my-3">
         <v-col  cols="12"
        xs="12"
        sm="6"
        md="4"
        class="text-xs-center   "
        
        v-for="pro in projects" :key="pro.title"
         >
        
        <v-card class=" my-3 light-blue lighten-4 ma-4"   >
         
          <v-img
      :src="pro.i"
      height="200px"
    ></v-img>
           
           <v-title class="black--text mt-8 ml-3" style="font-size: 1.5rem; font-family:cursive">
                 {{pro.title}}
           </v-title>
           <v-card-subtitle class="text--caption"  >
            developer Name -  kapil
        
           </v-card-subtitle>
 
           <v-card-text class="black--text text--lighten-5 " style="height: 100px;">
            <div>{{pro.content}}</div>
           </v-card-text>

           <v-card-actions>
            <v-btn  :href="pro.link" color="black " style="width:60%" class="pink white--text mx-auto " text> Source code</v-btn>
           </v-card-actions>
           
        </v-card>

         </v-col>
       </v-row>
      </v-container>
    </div>
</template>




<script>
export default {
  data(){
    return{
      
      projects:[
        {title:'Host4u', i:require('/src/assets/3.jpg'), content:'it is an online cloud storage platform which provides hosting services at very lmarginal cost ',link:"https://github.com/Kapil218/Host4U"},
        {title:'Vibe',i:require('/src/assets/1.jpg'),content:'An music player with basic commands like -play ,pause etc  and gives you an musical vibe.',link:"https://github.com/Kapil218/Music"},
        {title:'Mait-Hostel',i:require('/src/assets/2.jpg'),content:" Mait hostel web with all of the  info of services, food etc  .",link:"https://github.com/Kapil218/Hostel"},
      ],
      
    }
  }
}
</script>


<style>
#container{
  background-color: rgb(56, 52, 52);
  padding-bottom: 10px ;
}
#animation{
 font-family: cursive; 
  font-size:2rem;
  color:rgb(127, 130, 134);
  
    vertical-align: middle;
    text-align:center;
    width: 200px;
    height: 40px;
    padding-left: 5%;
  
    position: relative;
    animation-name: example;
    animation-duration: 10s;
    animation-iteration-count: 1;
}
@keyframes example {
  0%   { left:77%; top:0px;}

 
 
  100% {left:0%; top:0px;}
}
</style>