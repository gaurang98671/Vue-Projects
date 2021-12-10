<template>
    <div class='main-display'>
      <h1>{{this.$route.params.stockID }}</h1>
      <canvas>
<StockChart :data="chartData" :options="options"/>
      </canvas>
      
    </div>
</template>

<script>


import StockChart from '../src/components/StockChart.vue'
export default {
    name: "StockInfo",
    components: {StockChart},
    data(){
        return {
    chartdata: {
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 20]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }
    }
    
}
</script>

<style scoped>
.main-display{

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: auto;
    width: 50%;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
}

.container{
    height: 100px;
    width: 100px;
}


</style>