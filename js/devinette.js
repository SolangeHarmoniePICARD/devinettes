/*------ Activité : jeu de devinette ------*/

console.log("Bienvenue dans ce jeu de devinette !"); // Cette ligne génère aléatoirement un nombre entre 1 et 100
console.log("Trouvez le nombre exact, compris entre 1 et 100. Vous avez 6 coups pour deviner."); 

// Déclaration des constantes
const solution = Math.floor(Math.random() * 100) + 1;
const nbrCoupsLimite = 5; //Le nombre limite de coups est de six, le décompte commence à 0 donc s'arrête à 5.

for(var nbrCoupsJoues=0 ; nbrCoupsJoues<=nbrCoupsLimite ; nbrCoupsJoues++){ //La boucle continue tant que le nombre de coups joués est inférieur au nombre limite de coups ; le joueur commence à 0 coups, le programme incrémente de 1 à chaque tour de boucle jusqu'à ce que le joueur trouve la bonne réponse ou dépasse le nombre de coups autorisés. 
let reponseJoueur= Number(prompt("Entrez un nombre :")); //Cette variable récupère la réponse du joueur à chaque tour de boucle.
  if (solution==reponseJoueur){
  console.log("Bien joué. Vous avez gagné ! La réponse était " + solution +".");
    break
  } //Si la réponse du joueur correspond à la solution de l'équation, le programme s'arrête.
  
  else if (nbrCoupsJoues==nbrCoupsLimite){
    console.log("Désolé mais vous avez dépassé le nombre de coups autorisés, vous avez perdu ! La réponse était " + solution +"...");
    break
  } //Si le nombre de coups joués est égal au nombre limite de coups autorisés, le programme s'arrête.
    
  else if (reponseJoueur<solution){
  console.log("Le nombre que vous avez proposé est trop petit.");
    if (reponseJoueur<1){
      console.log("Votre nombre est inférieur à 1. Choisissez un nombre compris entre 1 et 100.");
    } // Si la réponse du joueur est inférieur à l'intervalle dans lequel l'équation calcule la solution, le programme indique au joueur son erreur.
  } //Si la réponse du joueur est inférieur à la solution, le programme le lui indique, le nombre de coups joués s'incrémente.

  else if (reponseJoueur>solution){
    console.log("Le nombre que vous avez proposé est trop grand.");
    if (reponseJoueur>100){
      console.log("Votre nombre est supérieur à 100. Choisissez un nombre compris entre 1 et 100."); // Si la réponse du joueur est supérieur à l'intervalle dans lequel l'équation calcule la solution, le programme indique au joueur son erreur.
    } //Si la réponse du joueur est supérieur à la solution, le programme le lui indique, le nombre de coups joués s'incrémente.
  }
  else {
  console.log("Votre saisie est invalide.");
      } //Si la réponse du joueur ne correspond à aucun des cas précédents, par exemple si c'est un string au lieu d'être un number, le programme le lui indique et le nombre de coups joués s'incrémente.
}