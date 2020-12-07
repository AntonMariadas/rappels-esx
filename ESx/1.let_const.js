/* var et let ? */

// "use strict"  => nous empêche d'utiliser des variables globales (déclaré sans mot clé var ou let)

// La portée de VAR est la fonction
// La portée de LET est le bloc


(function test() {
    if (true)
    {
        nom // => portée globale
        var job = "dev";  // => accessible dans toute la fonction
        let prenom = "Fabio";  // => inaccessible en dehors du bloc
    }

    console.log(job);
    console.log(prenom);
})();

/* 
La portéé de CONST est comme pour let le bloc
Je ne peux pas modifier son contenu
*/

const pi = 3.14159;
const animaux = ["chien", "chat"];
animaux.pop(); // ["chien"]
animaux.push(); // ["chien", "cheval"]

//!\\ Attention, les types complexes rien n'empeche de modoifier le contenu tant que la reference est identique

/*
Quand utiliser LET ou CONST ?
J'utilise TOUJOURS const. Si j'ai absolument besoin de modifier la variable, alors seulement j'utilise let.
*/




