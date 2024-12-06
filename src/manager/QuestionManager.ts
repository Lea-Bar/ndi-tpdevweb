import { Question } from "../models/Question"

export const getAllQuestions = (): Question[] => {
    return [
        new Question("Le ministère de l'Écologie vous propose d'interdire l'usage des chalutiers de fond pour préserver les habitats marins.", true, ["Accepter", "Refuser"], "https://www.wwf.fr"),
        new Question("On vous propose de subventionner la construction de nouvelles plateformes pétrolières en haute mer.", false, ["Accepter", "Refuser"], "https://www.greenpeace.org"),
        new Question("Le gouvernement souhaite instaurer des quotas de pêche stricts pour les espèces en danger.", true, ["Accepter", "Refuser"], "https://www.fao.org"),
        new Question("Une proposition vous invite à augmenter les zones marines protégées à 30% d’ici 2030.", true, ["Accepter", "Refuser"], "https://www.iucn.org"),
        new Question("Un lobby industriel propose d’autoriser les rejets de déchets plastiques contrôlés en mer.", false, ["Accepter", "Refuser"], "https://www.unep.org"),
        new Question("Pour lutter contre les déchets marins, le ministère propose de bannir les sacs plastiques à usage unique.", true, ["Accepter", "Refuser"], "https://www.eea.europa.eu"),
        new Question("On vous propose de financer des fermes aquacoles utilisant des pratiques intensives pour répondre à la demande croissante de poissons.", false, ["Accepter", "Refuser"], "https://www.fishforward.eu"),
        new Question("Le gouvernement propose de réduire l’utilisation des engrais chimiques pour limiter la pollution des océans.", true, ["Accepter", "Refuser"], "https://www.unep.org"),
        new Question("Des industriels demandent l'autorisation de construire un port de fret dans une réserve naturelle marine.", false, ["Accepter", "Refuser"], "https://www.iucn.org"),
        new Question("Le gouvernement propose d’interdire le tourisme dans certaines zones marines fragiles.", true, ["Accepter", "Refuser"], "https://www.iucn.org"),
        new Question("Tout comme les poumons dans le corps humain, les océans produisent plus de 50% de l’oxygène que nous respirons.", true, ["Vrai", "Faux"], "https://oceanservice.noaa.gov"),
        new Question("Les océans, comme le système digestif humain, décomposent les déchets et les absorbent sans conséquences.", false, ["Vrai", "Faux"], "https://www.unep.org"),
        new Question("À l’image de la peau qui régule la température du corps humain, les océans régulent la température globale de la Terre.", true, ["Vrai", "Faux"], "https://www.climate.gov"),
        new Question("Comme le système circulatoire transporte le sang, les courants océaniques transportent la chaleur et les nutriments à travers la planète.", true, ["Vrai", "Faux"], "https://www.noaa.gov"),
        new Question("Les océans, tout comme le foie dans le corps humain, filtrent les toxines pour protéger l’ensemble de l’écosystème.", false, ["Vrai", "Faux"], "https://www.greenpeace.org"),
        new Question("À l’image du système immunitaire humain qui lutte contre les infections, les océans luttent contre les pollutions grâce à leur biodiversité.", false, ["Vrai", "Faux"], "https://www.wwf.fr"),
        new Question("Les océans, comme les reins dans le corps humain, éliminent les déchets chimiques de manière autonome.", false, ["Vrai", "Faux"], "https://www.unesco.org"),
        new Question("À l’image du cœur qui bat en permanence pour maintenir la vie, les marées des océans sont en mouvement constant, influencées par la Lune.", true, ["Vrai", "Faux"], "https://oceanservice.noaa.gov")
    ]
}
