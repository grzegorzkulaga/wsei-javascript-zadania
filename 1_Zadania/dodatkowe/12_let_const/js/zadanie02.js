let character = "księżniczka";
let timeOfDay = "dzień";
const lover = 'Shrek';

{
    let timeOfDay = "noc";
    let character = "ogrzyca";
    console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
    // TODO: Pod timeOfDay kryje sie "noc", a pod character kruje sie "ogrzyca"... dlatego tak jest, bo zmienna przyjmuje nową wartość blokowa, z {}
}
    console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
 // TODO: Pod timeOfDay kryje sie "dzień", a pod character kruje sie "księżniczka"... dlatego, ze zmienne nie zmieniły wartosci, bo nie pobrały wartosci z bloku {}