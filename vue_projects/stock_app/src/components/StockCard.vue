<template>
    <div>
        <h1>
            {{stockData['1. symbol']}}
        </h1>
        <h2>
            {{stockData['2. name']}}
        </h2>
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
        }
    }
}
</script>


<style scoped>

</style>


