<template>
  <div style="background-color:antiquewhite">
    <div id="container"><div id="animation">Connect_with_me</div></div>

  <v-form ref="form"
    v-model="valid">

    <v-container>
    <span class="grey--text" style="font-size:1.5rem">Let's Talk</span>

      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
        
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
           
            
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
          
            label="E-mail"
            required
          ></v-text-field>
          
        </v-col>
      </v-row>
      <v-row>
             <v-col
          cols="12"
        >
          <v-text-field
            v-model="message"
            label="Topic"
            outlined
            clearable
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
   
    </v-container>
    
  </v-form>



  <div style="width: 100%;">
    <v-card
  flat
  tile
  class="grey darken-10 white--text text-center"
>
<v-card-text class="white--text" style="font-size: 1.5rem; font-family:cursive">
  FOLLOW ME@
</v-card-text>
  <v-card-text>
    <v-btn
      v-for="icon in icons"
      :key="icon"
      class="mx-12 my-4 white--text"
      icon
      :href="icon.link"
    >
      <v-icon size="72px">
        {{ icon.icon }}
      </v-icon>
    </v-btn>
  </v-card-text>
</v-card>
  </div>

</div>
</template>


<script>
  export default {
    data: () => ({
      icons: [
        {icon:'mdi-github',link:"https://github.com/Kapil218"},
        
       { icon:'mdi-linkedin',link:"https://www.linkedin.com/in/kapil-singh-rathore-42443a22a/"},
        {icon:'mdi-instagram',link:"https://www.instagram.com/kapil.singhrathore/"}
      ],
      valid: false,
      firstname: '',
      lastname: '',
    //   
      email: '',
    //   
      message:''
    }),
    methods: {
      submit () {
        console.log(this.firstname,   this.lastname,this.email,  this.message);
       this.$refs.form.reset()
      },
    
    },
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