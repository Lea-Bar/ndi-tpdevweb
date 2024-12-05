// fichier : src/data/ocean.js
export const oceans = [
    {
      id: 0,
      nom: "Océan Pacifique",
      temperature: "25°C",
      superficie: "168,72 millions km²",
      lien: "https://example.com/ocean-pacifique",
      tauxDePollution: "91", // Exemple de taux de pollution
    },
    {
      id: 1,
      nom: "Océan Atlantique",
      temperature: "14°C",
      superficie: "106,46 millions km²",
      lien: "https://example.com/ocean-atlantique",
      tauxDePollution: "25", // Exemple de taux de pollution
    },
    {
      id: 2,
      nom: "Océan Indien",
      temperature: "22°C",
      superficie: "70,56 millions km²",
      lien: "https://example.com/ocean-indien",
      tauxDePollution: "80", // Exemple de taux de pollution
    },
    {
      id: 3,
      nom: "Océan Austral",
      temperature: "-2°C",
      superficie: "21,96 millions km²",
      lien: "https://example.com/ocean-austral",
      tauxDePollution: "10", // Exemple de taux de pollution
    },
    {
      id: 4,
      nom: "Océan Arctique",
      temperature: "-1.5°C",
      superficie: "15,56 millions km²",
      lien: "https://example.com/ocean-arctique",
      tauxDePollution: "15", // Exemple de taux de pollution
    },
  ];
  
  /**
   * Fonction pour modifier une statistique d'un océan.
   * @param {number} idStat - Index de l'océan dans le tableau.
   * @param {string} key - Clé de la statistique à modifier (e.g., "temperature", "superficie").
   * @param {string} value - Nouvelle valeur pour la statistique.
   */
  export const changeStat = (idStat, key, value) => {
    if (idStat >= 0 && idStat < oceans.length) {
      if (key in oceans[idStat]) {
        oceans[idStat][key] = value;
        console.log(`Statistique "${key}" de l'océan ${oceans[idStat].nom} mise à jour à : ${value}`);
      } else {
        console.error(`La clé "${key}" n'existe pas dans l'objet de l'océan.`);
      }
    } else {
      console.error("L'index fourni est hors des limites du tableau.");
    }
  };
  