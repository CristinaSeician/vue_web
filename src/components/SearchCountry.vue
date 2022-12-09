<script>
export default {
    data() {
        return {
            showCountry:null,
            showCapital:null,
            showContinent:null,
            showLanguage:null,
            showBorders:null, 
            //showBorders:[],
            showCurrency:null,
            showCar:null,
            showPopulation:null,
        };
    },
    methods: {
        async tari(){
            var getTari=document.getElementById("tara").value;
            await fetch(`https://restcountries.com/v3.1/name/${getTari}`)
            .then(response=>response.json())
            .then(result=>{console.log(result);
              this.showCountry=result[0].name.common;
                this.showCapital=result[0].capital[0];
                this.showContinent=result[0].continents[0];
                this.showLanguage=result[0].languages;
                this.showBorders=result[0].borders;
                this.showPopulation=result[0].population;
                this.showCurrency=result[0].currencies;
                this.showCar=result[0].car.signs[0];
                document.getElementById("flags").src=result[0].flags.png;
                document.getElementById("coatOfArms").src=result[0].coatOfArms.png;
            });
        },
        }
    }
</script>

<template>
  <v-app>
    <header >

    </header>

    <v-main>
      <div class="earth-blue"> <p id="search-country">Search for a country</p> 
      </div>
      <input type="text" id="tara" placeholder="Enter the name of the country">
      <v-btn @click="tari" append-icon="mdi-magnify" color="rgb(227, 227, 227)" id="btn-search"> Search</v-btn> 

      <div class="result-countries">
        <p>Country: {{this.showCountry}}</p>
        <p>Capital: {{this.showCapital}}</p>
        <p>Continent: {{this.showContinent}}</p>
        <p>Language: {{this.showLanguage}}</p>
        <p>Borders: {{this.showBorders}}</p>
        <p >Population: {{this.showPopulation}}</p>
        <p>Currency: {{this.showCurrency}}</p>
        <p>Car: {{this.showCar}}</p><br>
        <p >Flag:&nbsp;<img src="" alt="" id="flags"></p> <br>
        <p>Coat of Arms:&nbsp;<img src="" alt="" id="coatOfArms"></p>
      </div>


    
      

      <div>&nbsp;</div>
      <div>&nbsp;</div>
    </v-main>
  </v-app>
</template>