const chapters = {
    intro: {
        titre: 'Intro',
        description: '\nVous êtes un des soldats d\'un escadron de soldat ramené à la vie. \nEn plein milieu d\'une guerre contre l\'ennemi. \nLe soldat immortel a été capturé par l\'ennemi. \n \nVous avez ordre de le retrouver avec votre escadron : \nNick, Bombe, Alive et vous.',
        image: './assets/images/homme_militaire_de_dos-modifer.jpg',
        bouton: [
            { titre: 'Commencer', destination: 'choixDepart' }
        ]
    },

    choixDepart: {
        titre: 'Le debut de la fin',
        description: '\nVous devez décider si vous accepter la mission ou choisir une autre option?',
        image: './assets/images/commandant_militaire_homme-modifier.jpg',
        bouton: [
            { titre: 'Fuir', destination: 'fuirChoixDepart' },
            { titre: 'Accepter', destination: 'accepterChoixDepart' },
            { titre: 'Refuser', destination: 'refuserChoixDepart' }
        ]
    },

    fuirChoixDepart: {
        titre: 'Tuer',
        description: '\nVous êtes tuer par l\'ennemi. Pour avoir pris une décision aussi stupide.',
        image: './assets/images/homme_militaire_tire-modifer.jpg',
        bouton: [
            { titre: 'Recommencer', destination: 'intro' }
        ]
    },

    refuserChoixDepart: {
        titre: 'Exécuté',
        description: '\nVous avez été exécuté pour avoir désobéi un ordre direct. C\'était une certitude.',
        image: './assets/images/homme_militaire_tire-modifer.jpg',
        bouton: [
            { titre: 'Recommencer', destination: 'intro' }
        ]
    },

    accepterChoixDepart: {
        titre: 'Début vers la mission',
        description: '\nVous avez été envoyé sur le champ de bataille sous la protection d\'autres soldats. L\'objectif se trouve à cinq kilomètres plus loin.',
        image: './assets/images/groupe_militaire_arme-modifier.jpg',
        bouton: [
            { titre: 'Continuer', destination: 'choixNiveauUn' }
        ]
    },

    choixNiveauUn: {
        titre: 'Le champ de bataille',
        description: '\nPlusieurs options s\'offre a vous pour traverser ce champ de bataille des plus dévastateurs, vous devez choisir un moyen de passer et vite.',
        image: './assets/images/homme_militaire_glise-desert-modifer.jpg',
        bouton: [
            { titre: 'Foncer', destination: 'foncerChoixNiveauUn' },
            { titre: 'Utiliser un véhicule', destination: 'vehiculeChoixNiveauUn' },
            { titre: 'Trancher', destination: 'trancherChoixNiveauUn' }
        ]
    },

    foncerChoixNiveauUn: {
        titre: 'Foncer',
        description: '\nVous êtes tuer par l\'ennemi, conseille d\'ami ne pas foncer tout droit dans un champ de bataille.',
        image: './assets/images/homme_militaire_tire-modifer.jpg',
        bouton: [
            { titre: 'Recommencer', destination: 'intro' }
        ]
    },

    trancherChoixNiveauUn: {
        titre: 'Passer par les trancher',
        description: '\nVous perdez Bombe ayant reçu une balle perdue dans les tranches. Mais le reste de l\'escadron survie. Vous continuez sur votre lancer.',
        image: './assets/images/millitaire_homme_debout_redard-vers-camera-modifier.jpg',
        bouton: [
            { titre: 'Continuer', destination: 'finNiveauUn' }
        ]
    },

    vehiculeChoixNiveauUn: {
        titre: 'Utiliser un véhicule comme bouclier.',
        description: '\nLe véhicule est une bonne défense. Tous les membres de l\'escadron survivent. Mais le véhicule ne fonctionne plus.',
        image: './assets/images/vehicule_militaire-modifier.jpg',
        bouton: [
            { titre: 'Continuer', destination: 'finNiveauUn' }
        ]
    },

    finNiveauUn: {
        titre: 'Status sur la situation.',
        description: '\nVous êtes à 3 km de l\'objectif.',
        image: './assets/images/homme_militaire_de_dos-modifer.jpg',
        bouton: [
            { titre: 'Continuer', destination: 'choixNiveauTroix' }
        ]
    },

    choixNiveauTroix: {
        titre: 'Catastrophe',
        description: '\nVous devez traverser vers un point plus près de l\'objectif. Mais les choses devienne difficile rapidement et vous devez sacrifier un de vos coéquipiers pour traverser les tirs ennemis. Lequel choisirez-vous?',
        image: './assets/images/homme_militaire_marche_foret.jpg',
        bouton: [
            { titre: 'Bombe', destination: 'bombeChoixNiveauTroix' },
            { titre: 'Nick', destination: 'nickChoixNiveauTroix' },
            { titre: 'Alive', destination: 'aliveChoixNiveauTroix' }
        ]
    },

    bombeChoixNiveauTroix: {
        titre: 'Sacrifier Bombe',
        description: '\nBombe qui comprend vos ordres à travers les tirs ennemis et courre sur le champ de bataille et puis... \n Bombe pose le pied sur une mine et dit \"merde\". Il meurt.',
        image: './assets/images/militaire_vissage_cacher_regard-de_cote-modifer.jpg',
        bouton: [
            { titre: 'Recommencer', destination: 'intro' }
        ]
    },

    nickChoixNiveauTroix: {
        titre: 'Sacrifier Nick',
        description: '\nVous proposer à vos coéquipiers en criant : On pourrait sacrifier Nick!!! \nMais la réaction est très négative de la part de votre équipe vous êtes tué pour vouloir tuer le farceur Nick.',
        image: './assets/images/deux_militaire-modifier.jpg',
        bouton: [
            { titre: 'Recommencer', destination: 'intro' }
        ]
    },

    aliveChoixNiveauTroix: {
        titre: 'Sacrifier Alive',
        description: '\nVous proposer à vos coéquipiers en criant : On pourrait sacrifier Alive!!! \nMais la réaction est très positive de la part de votre équipe vous aide à convaincre Alive de se sacrifier il le fait sentant le support de tous c\'est confrère soldat. La vérité c\'est qu\'il ne l\'aimais pas beaucoup.\n \n Vous vous rendez à l\'objectif avec la perte du soldat Alive qui n\'est pas une très grande perte.',
        image: './assets/images/homme_militaire_glise-desert-modifer.jpg',
        bouton: [
            { titre: 'Continuer', destination: 'choixNiveauQuatre' }
        ]
    },

    choixNiveauQuatre: {
        titre: 'Un choix difficile...',
        description: '\nVous devez trouver une façon de détruire l\'ennemi protégeant l\'objectif pour sécuriser la zone. \nVos coéquipiers et vous devez trouver une solution, mais laquelle?',
        image: './assets/images/batiment_detruit-modifier.jpg',
        bouton: [
            { titre: 'Bombe', destination: 'bombeChoixNiveauQuatreFin' },
            { titre: 'Vous', destination: 'vousChoixNiveauQuatre' },
            { titre: 'Nick', destination: 'nickChoixNiveauQuatre' }
        ]
    },

    vousChoixNiveauQuatre: {
        titre: 'Uh sacrifice pour le escadron',
        description: '\nVous voyez tout la difficulté de la situation dans laquelle votre escadron se trouve. Il manque de munition et le moral est bas.\nVous foncer vers l\'ennemi pour déstabiliser l\'ennemi et rallumer la flame de vos confrères. \n\n\nMais malheureusement vous mourrez d\'un tir à la tête en un instant.',
        image: './assets/images/homme_masque_ordre-modifier.jpg',
        bouton: [
            { titre: 'Recommencer', destination: 'intro' }
        ]
    },

    nickChoixNiveauQuatre: {
        titre: 'Uh échec pour la gloire',
        description: '\nNick crie qui va les sauver : Je vais tout vous sauver!!! \nNick enlève la goupille d\'une grenade, mais une blessure à son bras fait en sorte qu\'il l\'échappe, ce qui tue tout votre escadron. \nIl ne vous à pas sauvé du tout.',
        image: './assets/images/explosion_carre-modifier.jpg',
        bouton: [
            { titre: 'Recommencer', destination: 'intro' }
        ]
    },

    bombeChoixNiveauQuatreFin: {
        titre: 'Un sacrifice glorieux',
        description: '\nBombe dit avec un ton certain : Je vais vous sauver les gars. \nBombe fait le kamikaze et élimine l\'ennemi ce qui crée la zone sécurisée. \n\nL\'objectif est sauvé. Vous avez maintenant une chance de gagner la guerre avec l\'aide de l\'immortel. \n\n ...FIN',
        image: './assets/images/hommex2_miltaire_fumee-modifer.jpg',
        bouton: [
            { titre: 'Succès - Recommencer', destination: 'intro' }
        ]
    },

    choixNonDisponible: {
        titre: 'Indisponible - Bombe est Mort',
        description: '\nCe choix n\'est pas disponible.',
        image: './assets/images/homme_masque_ordre-modifier.jpg',
        bouton: [
            { titre: 'Revenir dernier chapitre', destination: 'intro' }
        ]
    },
    
}

const cadreJeu = document.querySelector('#jeu');
const imgLogo = document.querySelector('#logo');
const title = document.querySelector('#titre');
const chapterDescription = document.querySelector('p');
const imageChapter = document.querySelector('.image');
const containButton = document.querySelector('.boutons');
let isBombeDead = false;
//@todo: ajouter commentaire pour la twist 
function goToChapter(chapter) {
    if (chapters[chapter] !== undefined) {
        title.textContent = (chapters[chapter].titre);
        chapterDescription.textContent = (chapters[chapter].description);
        imageChapter.src = (chapters[chapter].image);

        console.log(`${chapters[chapter].titre} \n ${chapters[chapter].description}`);
        
        while (containButton.firstChild) {
            containButton.removeChild(containButton.firstChild);
        }

        //si chapter est égale a l'objet trancherChoixNiveauUn
        //isBombeDead devien true car il meurt dans l'histoire en passant par les tranchées, mais n'a pas fait échouer la mission
        if ([chapter] == 'trancherChoixNiveauUn') {
            isBombeDead = true;
        }

        //si chapter est égale a l'objet choixNiveauTroix, qui contient un if (isBombeDead == true)
        //change la destination du premier bouton (c'est l'option de Bombe) dans le tableau dans l'objet(choixNiveauTroix) pour 'choixNonDisponible'
        //change le titre du premier bouton dans le tableau dans l'objet(choixNonDisponible) pour 'Revenir dernier chapitre'
        //change la destination du premier bouton dans le tableau dans l'objet(choixNonDisponible) pour 'choixNiveauTroix'
        if ([chapter] == 'choixNiveauTroix') {
            if (isBombeDead == true) {
                chapters.choixNiveauTroix.bouton[0].destination = 'choixNonDisponible';
                chapters.choixNonDisponible.bouton[0].titre = 'Revenir dernier chapitre';
                chapters.choixNonDisponible.bouton[0].destination = 'choixNiveauTroix';
            }
        }

        //si chapter est égale a l'objet choixNiveauQuatre, qui contient un if (isBombeDead == true)
        //if (isBombeDead == true) :
        //change la destination du premier bouton (c'est l'option de Bombe) dans le tableau dans l'objet(choixNiveauQuatre) pour 'choixNonDisponible'
        //change le titre du premier bouton dans le tableau de l'objet(choixNonDisponible) pour 'Recommancer'
        //change la destination du premier bouton dans le tableau dans l'objet(choixNonDisponible) pour 'intro'
        //change isBombeDead a false pour reset la variable vu que le bouton dans l'objet(choixNonDisponible) retourne au début
        //else :
        //change la destination du premier bouton (c'est l'option de Bombe) dans le tableau dans l'objet(choixNiveauQuatre) pour 'bombeChoixNiveauQuatreFin' (c'est l'option original qui dirige vers la (bonne) fin
        if ([chapter] == 'choixNiveauQuatre') {
            if (isBombeDead == true) {
                chapters.choixNiveauQuatre.bouton[0].destination = 'choixNonDisponible';
                chapters.choixNonDisponible.bouton[0].titre = 'Recommancer';
                chapters.choixNonDisponible.bouton[0].destination = 'intro';
                isBombeDead = false;
            }
            else {
                chapters.choixNiveauQuatre.bouton[0].destination = 'bombeChoixNiveauQuatreFin';
            }
        }

        for (let i = 0; i < chapters[chapter].bouton.length; i++) {
            const boutonNouveau = document.createElement('button');
            boutonNouveau.textContent = chapters[chapter].bouton[i].titre;
            boutonNouveau.addEventListener('click', () => {
                goToChapter(chapters[chapter].bouton[i].destination);
            });

            containButton.appendChild(boutonNouveau);
    
            console.log(`${chapters[chapter].bouton[i].titre} \nClé : ${chapters[chapter].bouton[i].destination}`);
        }
    }
    else {
        console.log('Mauvaise clé.');
    }

}

goToChapter('intro');