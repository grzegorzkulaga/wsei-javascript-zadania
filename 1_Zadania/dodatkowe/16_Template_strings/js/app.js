document.addEventListener('DOMContentLoaded', function () {
    /* const array = [2, 15, 268, 288, [358, 2, 14, 256], 586];
     // var sorted= array.sort((a,b)=>a-b);
     // // console.log(sorted);
     // // var newVar = array.flat();
     // // console.log(newVar);
     // newVar.sort((a,b)=>a-b);
     var flat = array.flat();
     flat.sort((a, b) => a - b);
     console.log(flat);
     var newFlat = flat.map((element) => element * 2);
     console.log(newFlat);
     var newVar = newFlat.reduce((a, b) => a * b);
     console.log(newVar);*/
 
    // Zadanie 0
    function whoAreYou(x){
        return "My name is " + x.name + " " + x.lastName + "\n"+"I am "+(2019-x.yearOfBirth)+" years old." + "\n" + "My proffesion is " + x.proffesion;
    }
    const person = {
        name: "Vlad",
        lastName: "Drăculea",
        yearOfBirth: 1431,
        proffesion: "Lord of Wallachia"
    };
    console.log(whoAreYou(person));
 
    //Zadanie 1
    var a = 2;
    var b = 4;
    console.log("Suma dwóch liczb " +a+ " i " +b+ " to: " +(a+b));
 
    //Zadanie 2
    var name = "Grzegorz";
    console.log("Moje imię i nazwisko to: " +name+ " Kułaga");
    
    //Zadanie3
    function whoAre(x){
        return "\"Myślę, że jest wiele piękna" + "\n" + " w posiadaniu problemów." + "\n" + " To jeden ze sposobów w jaki się uczymy\""+"\n Herbie Hancock";
    }
    console.log(whoAre());
 
    //Zdanie 4
    const button = {
        value: "Send message",
        idName: "sendMsg",
        width: "100px",
        padding: "20px",
    }
     
    console.log("To jest button.\n" + "Jego szerokość to " + (parseInt(button.width) + parseInt(button.padding) + parseInt(button.padding)) + " px." + "\n" + "Napis, który na nim widnieje to \"" + button.value + "\"");
})