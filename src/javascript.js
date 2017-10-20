
new Vue({
    el:'#app',
    data:{
        message:"",
        listItems:["Hello","world"]
    },
    methods:{
        getStandard: function(event){
            this.listItems.push("did it");
            console.log(event.currentTarget.innerText);
        }
    }
});
