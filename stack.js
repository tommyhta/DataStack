var Stack = (function(){
    function Stack() {
        this.dataStore = [];
        this.top = 0;
    }
    Stack.prototype.push = function(item) {
        //Newest item will be added at the end of the current stack, top will point at that
        //When push function is called, top is increased by 1 and the index at top will be the input item
        this.dataStore[this.top++] = item;
    }
    Stack.prototype.pop = function() {
        //If stack is empty, top will not be decreased
        if(this.top == 0){
            console.log("This stack is empty.")
        } else{
        //There is no need to delete the object, but by decreasing top, the popped object is no longer part of the data and will be overridden when a new push function is called
            this.top--
        }
    }
    Stack.prototype.display = function() {
        //Simply iterate through the dataStore and print every item.
        for(var i = 0; i < this.top; i++){
            console.log(this.dataStore[i])
        }
    }
    return Stack;
  })();
  module.exports = Stack;