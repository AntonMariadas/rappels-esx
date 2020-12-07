const add = (a, b) => a + b;  // une seule instrcution, accolades et return optionels

/* Créer une fonction getUser qui me renvoie un utilisateur:
	{
		firstname: "John",
		lastname: "Doe",
	}
*/

// const getUser = () => {
//     return {firstname: "John", lastname: "Doe"};
// }

const getUser = () => ({ firstname: "John", lastname: "Doe" });

//!\\ ATTENTION, une fonction fléchée garde toujours le contexte de départ
//!\\ une fonction classique peut changer de contexte


