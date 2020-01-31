document.addEventListener("DOMContentLoaded",function(){
    var taskList = document.getElementById("taskList");
    var addTaskButton = document.getElementById("addTaskButton");
    addTaskButton.addEventListener("click", clickMe);
    var removeFinishedTasksButton = document.getElementById("removeFinishedTasksButton");
    removeFinishedTasksButton.addEventListener("click", removeAll);
    var li,h1,button,buttonDelete,taskInput,taskts = [];
    var counter = document.getElementById("counter");
    var counterLi = 0;
    counter.innerHTML = "Ilość tasków : " +counterLi;
    function clickMe(){
        taskInput = document.getElementById("taskInput");
        if(taskInput.value.length > 5 && taskInput.value.length < 100){
            li = document.createElement("li");
            h1 = document.createElement("h1");
            h1.innerHTML = taskInput.value;
            button = document.createElement("button");
            button.innerHTML = "Complete";
            button.addEventListener("click",clickMeComplete);
            buttonDelete = document.createElement("button");
            buttonDelete.innerHTML = "Delete";
            buttonDelete.addEventListener("click",clickMeDelete);
            li.appendChild(h1);
            li.appendChild(button);
            li.appendChild(buttonDelete);
            taskts.push(li);
            taskList.appendChild(li);
            taskInput.value = "";
            counterLi = counterLi + 1;
            counter.innerHTML = "Ilość tasków : " +counterLi;
        }
    }
    function clickMeComplete(){
        if(this.parentElement.children[0].style.color == "red"){
            this.parentElement.children[0].style.color = "black";
            counterLi = counterLi + 1;
            counter.innerHTML ="Ilość tasków : " + counterLi;
        }
        else{
            this.parentElement.children[0].style.color = "red";
            counterLi = counterLi - 1;
            counter.innerHTML ="Ilość tasków : " + counterLi;
        }
    }
    function clickMeDelete(){
        this.parentElement.remove();
        if(this.parentElement.children[0].style.color == "red"){

        }
        else{
            counterLi = counterLi - 1;
            counter.innerHTML ="Ilość tasków : " + counterLi;
        }
    }
    function removeAll(){
        for(var i=0;i<taskts.length;i++){
            taskts[i].remove();
        }
        counterLi = 0;
        counter.innerHTML ="Ilość tasków : " + counterLi;
    }
});