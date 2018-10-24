var Stack = (function(){
    function Stack() {
      this.dataStore = [];
      this.top = 0;
    }
    Stack.prototype.push = function(item) {
        this.dataStore[this.top++] = item;
    }
    Stack.prototype.pop = function() {
        if(this.top == 0){
            console.log("This stack is empty.")
        } else{
            this.top--
        }
    }
    Stack.prototype.display = function() {
        for(var i = 0; i < this.top; i++){
            console.log(this.dataStore[i])
        }
    }
    return Stack;
  })();
  module.exports = Stack;