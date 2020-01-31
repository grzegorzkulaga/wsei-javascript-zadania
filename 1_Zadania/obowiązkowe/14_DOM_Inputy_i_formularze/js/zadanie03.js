document.addEventListener("DOMContentLoaded", function(){

    var team = document.getElementById("team1");
    var points = document.getElementById("points1");
    var team2 = document.getElementById("team2");
    var points2 = document.getElementById("points2");
    var button = document.querySelector("button");
    var table = document.querySelector("table");

    button.type="button";

    button.addEventListener('click', Check);

    function Check(){    
        if(team.value != team2.value && points.value > 0 && points2.value > 0){
            var row = table.insertRow(3);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = team.value;
            cell2.innerHTML = team2.value;
            cell3.innerHTML = points.value + ' - ' + points2.value;
        }
     }
});