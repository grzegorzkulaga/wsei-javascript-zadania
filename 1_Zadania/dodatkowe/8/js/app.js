var Tree = function (typeCheck){
    this.type = typeCheck;
}
Tree.prototype.bloom  = function(){
    console.log("I am blooming ");
    return "I am blooming ";
}


var TreeCheck = new Tree("sosna");
console.log(TreeCheck.type);
TreeCheck.bloom();