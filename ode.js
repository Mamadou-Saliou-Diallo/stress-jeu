// Initialisation du jeu
let secretNumber = Math.floor(Math.random() * 91) + 10; // Nombre aléatoire entre 10 et 100
let attemptsLeft = 10; // Nombre d'essais autorisés
const resultDiv = document.getElementById("result"); // Élément pour afficher les résultats

// Fonction pour gérer la soumission de la tentative
document.getElementById("submit").addEventListener("click", function() {
    const userGuess = parseInt(document.getElementById("guess").value); // Récupération de la valeur saisie

    // Vérification si la saisie est valide
    if (isNaN(userGuess) || userGuess < 10 || userGuess > 100) {
        resultDiv.innerHTML = "Veuillez entrer un nombre valide entre 10 et 100.";
        return;
    }

    // Décrementer le nombre d'essais restants
    attemptsLeft--;

    // Vérifier si l'utilisateur a deviné le nombre
    if (userGuess === secretNumber) {
        resultDiv.innerHTML = `Félicitations ! Vous avez deviné le nombre ${secretNumber} en ${10 - attemptsLeft} essais.`;
        resetGame();
    } else if (attemptsLeft === 0) {
        resultDiv.innerHTML = `Désolé, vous avez épuisé vos essais. Le nombre était ${secretNumber}.`;
        resetGame();
    } else {
        // Indiquer si le nombre est plus petit ou plus grand
        if (userGuess < secretNumber) {
            resultDiv.innerHTML =  `Le nombre est plus grand. Il vous reste ${attemptsLeft} essais.`;
        } else {
            resultDiv.innerHTML = `Le nombre est plus petit. Il vous reste ${attemptsLeft} essais.`;
        }
    }
});

// Fonction pour réinitialiser le jeu
function resetGame() {
    secretNumber = Math.floor(Math.random() * 91) + 10; // Nouveau nombre aléatoire
    attemptsLeft = 10; // Réinitialiser les essais
    document.getElementById("guess").value = ''; // Réinitialiser la zone de saisie
}
