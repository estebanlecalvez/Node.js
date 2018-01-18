/**
* Cours en console
* Création d'un tableau de notes
*
**/

//Première partie
const notes = [5,12,20,20,20,0,0,0,25]

const infoNotes = (notes) => {
   notes.forEach((n, i) => {
       console.log(`La note ${i} est de ${n}`);
   });
}

// Convertion des notes/20 ==> notes/100
// Utilisation du Map avec Norme ECMAScript 6
const convertirSur100 = (notes) => notes.map((n) => n * 5 );
let notesSur100 = convertirSur100(notes);

infoNotes(notesSur100);

//Deuxieme partie
let eleves = [{nom: "Adrien", note: 20},{nom: "Raoul", note: "15"}]
const convertirElevesSur100 = (eleves) => eleves.map((e) => e.note * 5);
let notesElevesSur100 = convertirElevesSur100(eleves);

infoNotes(notesSur100);

//Troisième partie
//Calcul de la moyenne
const calculMoyenne = (notes) => notes.reduce((a, c) => a + c) / notes.length;
console.log(notes);
console.log(calculMoyenne(notes));