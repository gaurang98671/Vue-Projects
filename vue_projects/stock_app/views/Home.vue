<template>
    
    <div>
      <SearchBar @fetch-stocks="populate"/>
      <div :key="stock.symbol" v-for="stock in stocks">
        <br>
        <StockCard :stockData='stock' />
      </div>
    </div>
</template>

<script>
import SearchBar from '../src/components/SearchBar.vue'
import StockCard from '../src/components/StockCard.vue'
export default {
  components: { SearchBar, StockCard },
    name: "Home",
    data(){
      return {
        stocks: []
      }
    },
    methods:{
      populate(e){
        this.stocks = e
        console.log("emit",e)
        
      }
    }
}
</script>

<style scoped>

</style>