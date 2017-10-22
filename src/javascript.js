
new Vue({
    el:'#app',
    data:{
        message:"",
        breadCrumb:[],
        curTarg:"",
        targObj:{},
        regEx:/\w*\.\w*\.\w*/,
        stdDesc:""
    },
    computed:{
        listItems:["Mathematics","English Language Arts"]
    }
    methods:{
        getStandard: function(event){
            if(event){
                //get the text of the list item clicked.
                this.curTarg = event.currentTarget.innerText;
                //check to see if item is x.xx.x   H.3A.
                if(this.regEx.exec(this.curTarg)!==null){
                    //returns standard object
                    this.targObj = this.targObjGenerator();
                    //Standard (stdDesc) populates html template
                    this.stdDesc = this.targObj[this.curTarg];
                }else{
                    this.breadCrumb.push(this.curTarg);
                }

            }
            this.targObj = this.targObjGenerator();
            this.listItems = [];
            for(standard in this.targObj){
                this.listItems.push(standard);
            }
            console.log(this.curTarg);
            console.log(this.breadCrumb);
        },
        targObjGenerator: function(){
            var vm = this;
            var tempObj = standards; //standards is an obj in standards.html
            if(vm.breadCrumb.length>0){
                for(var i=0; i<vm.breadCrumb.length; i++){
                    tempObj = tempObj[vm.breadCrumb[i]];
                }
                return tempObj;
            }else{
                return tempObj = standards[this.curTarg];
            }
        },
        goBack: function(){
            if(this.breadCrumb.length>1){
                this.breadCrumb.pop();
                this.getStandard();
            }else{
                this.breadCrumb.pop();
                this.listItems = ["Mathematics","English Language Arts"];
            }
            this.stdDesc = "";
        }
    }
});
