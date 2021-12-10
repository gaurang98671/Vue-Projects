<template>
    <div class="card" @click="stockInfo(stockData['1. symbol'])">
        <h1 class = "symbol">
            {{stockData['1. symbol']}}
        </h1>
        <h3 class="currency">
            {{stockData['8. currency']}}
        </h3>
        <p class="name">
            {{stockData['2. name']}}
            <br>
            {{stockData['3. type']}}
        </p>

        <p class="country">
            {{stockData['4. region']}}
        </p> 
    </div>
</template>

<script>

export default {
    name: "StockCard",
    
    props: {
        stockData: Object
    },
    methods: {
        onClick(){
            console.log("Stock card clicked")
        },

        stockInfo(stockID){
            this.$router.push({name:"StockInfo", params: { stockID: stockID }})
        }
    }
}
</script>


<style scoped>
.card{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding-top: 10px;
    margin: auto;
    width: 500px;
    height: 140px;
    border-radius: 10px;
    text-align: left;
    font-family: arial;
}

.symbol{
    padding-top: 20px;
    font-size: 30px;
    display: inline;
    padding-left: 10px;
    
}

.currency{
    display: inline;
    font-size: 15px;
    padding-left: 10px;
}

.name{
    
    font-size: 15px;
    padding-left: 10px;
}

.country{
    font-size: 15px;
    text-align: end;
    padding-left: 10px;
    padding-right: 10px;
}

</style>


