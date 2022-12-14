<template>

        <div class="blue-grey darken-1  " >  
          <div id="container"><div id="animation">Hello_Everyone</div></div>
         
            
           <v-container class="blue-grey darken-1  "  >
             <v-row class="ma-0 "  no-gutters  >
               <v-col col="12" xs="12" sm="8" md="8" >
                  <v-card style="height: 420px;" class="pa-3 grey" >
                        

                      <div class="container " >
                        <h1>
                        KAPIL SINGH RATHORE 
                        </h1>
                        <h2>Front-end Web-developer.</h2>
                          <p class="bio" style="font-family: monospace; font-size:1.4rem">creating websites's UI using web languages HTML, CSS, and JavaScript </p>
                          <p class="bio white--text text--darken-4" style="font-family: cursive; ">Organized and
                              dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals. I am looking foward for my first work experience.
                          </p>
                      </div>



                  </v-card>
               </v-col>
               <v-col col="12"  sm="4" md="4" >
                  <v-card >
                        <v-img
                           src="../assets/kapil1.jpeg"
                            height="420px"
                        ></v-img>
                  </v-card>
               </v-col>
               
             </v-row>  
           </v-container>
         </div>
    
</template>
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