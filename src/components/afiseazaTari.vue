<script>
export default {
    data() {
        return {
            afiseazaTara:null,
            afiseazaCapitala:null,
            saveImageFlag:null
        };
    },
    methods: {

        async tari(){
            var getTari=document.getElementById("tara").value;
            await fetch(`https://restcountries.com/v3.1/name/${getTari}`)
            .then(response=>response.json())
            .then(result=>{console.log(result);
                this.afiseazaTara=result[0].name.common;
                this.afiseazaCapitala=result[0].capital[0];
                document.getElementById("stema").src=result[0].coatOfArms.png;
            });
        },

        async maps(){
            await fetch(`https://goo.gl/maps/8M1K27TDj7StTRTq8`)
            .then(response=>response.blob())
            .then(result=>{console.log(result);
                document.getElementById("maps").innerText=result;
            });
        }


        }
    }
</script>

<template>
  <header>
   
  </header>

  <main>
    <h1>salut</h1>
    <button @click="tari">cauta</button>
    <input type="text" id="tara" placeholder="cauta dupa tara">
    <p v-if="this.afiseazaCapitala">{{this.afiseazaCapitala}}</p>
    <p v-if="this.afiseazaTara">{{this.afiseazaTara}}</p>
    <img src="" alt="ceva" id="stema">
    <div id="maps" :is="maps">

    </div>
    <p>salutareeee</p>
  </main>
</template>