let people = [
    {
        person: "Kim Yoo Suk",
        profession: "tyczkarz"
    },
    {
        person: "Sue Yoo",
        profession: "prawnik"
    },
    {
        person: "Dr. Alden Cockburn",
        profession: "urolog"
    },
    {
        person: "Rusty Kuntz",
        profession: "trener"
    }
];

function setFunnyName () {
   for(let i =0;i<arguments.length;i++){
    people.push(arguments[i]);
   }
   console.log(people);
}
setFunnyName("abcdefg",1,"");