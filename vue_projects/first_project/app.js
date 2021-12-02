var app = new Vue({
    el: "#app", 
    data(){
        return {
            firstName: "garurang",
            lastName: "pawar",
            message: "working",
            image: "https://randomuser.me/api/portraits/men/75.jpg",
            email: "pawargaurang1212@gmail.com",
            gender: "male"
        }
    },

    methods: {
        async getUser(){
            const res = await fetch("https://randomuser.me/api/")
            var { results } = await res.json()
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.image = results[0].picture.large

        }
    },

    beforeMount() {
        this.getUser()
    }
    
})