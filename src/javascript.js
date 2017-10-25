
new Vue({
    el:'#app',
    data:{
        message:"",
        breadCrumb:[],
        curTarg:"",
        targObj:["Mathematics","English Language Arts"],
        regExLastStd:/\w*\.\w*\.\w*/,
        regExHead:/(heading)/,
        regExDesc:/(description)/,
        stdText:"",
        listItems:["Mathematics","English Language Arts"]
    },
    methods:{
        getStandard: function(event){
            if(event){
                //get the text of the list item clicked.
                this.curTarg = event.currentTarget.innerText;
                //check to see if item is x.xx.x   H.3A.
                if(this.regExLastStd.exec(this.curTarg)!==null){
                    //returns standard object
                    this.targObj = this.targObjGenerator();
                    //Standard (stdText) populates html template
                    this.stdText = this.targObj[this.curTarg];
                }else{
                    this.breadCrumb.push(this.curTarg);
                }

            }
            this.targObj = this.targObjGenerator();
            this.listItems = [];
            for(standard in this.targObj){
                if(standard === "description"){
                    console.log(this.targObj[standard]);
                    this.listItems.push({"description":this.targObj[standard]});
                }else if(this.regExHead.exec(standard)){ //if "headingxx"
                    this.listItems.push({"heading":this.targObj[standard]});
                }else{
                    this.listItems.push(standard);
                }
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
            this.stdText = "";
        }
    }
});
