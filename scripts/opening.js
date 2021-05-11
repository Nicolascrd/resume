var app = new Vue({
    el: '#opening',
    data() { 
        return {
            name: 'Nicolas Couraud',
            cities: ["barcelone", "toulouse", "lille", "nancy", "paris", "sainte", "saigon"],
            num: 0 // starts with cities [num]
        }
    },
    beforeDestroy(){
        // prevent memory leak
        clearInterval(this.interval);
    },
    loader(){
        // load all pictures first
        // to do
    },
    created(){
        // every 10 seconds
        this.interval = setInterval(() => {
            this.next();
        }, 8000)
    },
    computed:{
        citiesLength: function(){
            return this.cities.length;
        },
        city: function(){
            return this.cities[this.num];
        }
    },
    methods:{
        next(){
            // display next background image
            if (this.num == 6){
                this.num = 0;
            } else {
                this.num ++;
            }
        },
        previous(){
            // display previous background image
            if (this.num == 0){
                this.num = 6;
            } else {
                this.num --;
            }
        },
        clickManagement: function(event){
            if(event.clientX < window.innerWidth / 2){
                //left part of the page
                this.previous();
            } else if(event.clientX > window.innerWidth / 2){
                // right part of the page
                this.next();
            }
        }
    }
})

