const chapters = {
    intro: {
        titre: 'Intro',
        description: '\nVous êtes un des soldats d\'un escadron de soldat ramenés à la vie. \nEn plein milieu d\'une guerre contre l\'ennemi. \nLe soldat immortel a été capturé par l\'ennemi. \n \nVous avez ordre de le retrouver avec votre escadron : \nNick, Bombe, Alive et vous.',
        image: './assets/images/image_histoire/image_transformer/homme_militaire_de_dos-modifier.jpg',
        bouton: [
            { titre: 'Commancer', 'destination': 'choixDepart' }
        ]
    },

    choixDepart: {
        titre: 'Le debut de la fin',
        description: '\nVous devez decider si vous accepter la mission ou choisicer une autre option?',
        image: './assets/images/image_histoire/image_transformer/commandant_militaire_homme-modifier.jpg',
        bouton: [
            { titre: 'Fuir', 'destination': 'fuirChoixDepart' },
            { titre: 'Accepter', 'destination': 'refuserChoixDepart' },
            { titre: 'Refuser', 'destination': 'accepterChoixDepart' }
        ]
    },

    fuirChoixDepart: {
        titre: 'Tuer',
        description: '\nVous êtes tuer par l\'ennemi. Pour avoir fais une desision aussi stupide.',
        image: './assets/images/image_histoire/image_transformer/homme_militaire_tire-modifier.jpg',
        bouton: [
            { titre: 'Recommancer', 'destination': 'intro' }
        ]
    },

    refuserChoixDepart: {
        titre: 'Exécuté',
        description: '\nVous avez été exécuté pour avoir désobéi un ordre direct. C\'était une certitude.',
        image: './assets/images/image_histoire/image_transformer/homme_militaire_tire-modifier.jpg',
        bouton: [
            { titre: 'Recommancer', 'destination': 'intro' }
        ]
    },

    accepterChoixDepart: {
        titre: 'Début vers la mission',
        description: '\nVous avez été envoyé sur le champ de bataille sous la protection d\'autres soldats. L\'objectif se trouve à cinq kilomètres plus loin.',
        image: './assets/images/image_histoire/image_transformer/groupe_militaire_arme-modifier.jpg',
        bouton: [
            { titre: 'Continuer', 'destination': 'choixNiveauUn' }
        ]
    },

    choixNiveauUn: {
        titre: 'Le champ de bataille',
        description: '\nPlusieurs options s\'offre a vous pour traverser ce champ de bataille des plus devastateur, vous devez choisire un moyen de passer et vite.',
        image: './assets/images/image_histoire/image_transformer/homme_militaire_glise-desert-modifier.jpg',
        bouton: [
            { titre: 'Foncer', 'destination': 'foncerChoixNiveauUn' },
            { titre: 'Utiliser un véhicule', 'destination': 'vehiculeChoixNiveauUn' },
            { titre: 'Trancher', 'destination': 'trancherChoixNiveauUn' }
        ]
    },

    foncerChoixNiveauUn: {
        titre: 'Foncer',
        description: '\nVous êtes tuer par l\'ennemi, conseille d\'ami ne pas foncer tout droit dans un champ de bataille.',
        image: './assets/images/image_histoire/image_transformer/homme_militaire_tire-modifier.jpg',
        bouton: [
            { titre: 'Recommancer', 'destination': 'intro' }
        ]
    },

    trancherChoixNiveauUn: {
        titre: 'Passer par les trancher',
        description: '\nVous perdez Bombe ayant reçu une balle perdue dans les tranches. Mais le reste de l\'escadron survie. Vous continuer sur votre lancer.',
        image: './assets/images/image_histoire/image_transformer/homme_militaire_debout_redard-vers-camera-modifier.jpg',
        bouton: [
            { titre: 'Continuer', 'destination': 'finNiveauUn' }
        ]
    },

    vehiculeChoixNiveauUn: {
        titre: 'Utiliser un véhicule comme bouclier.',
        description: '\nLe véhicule est une bonne défense. Tous les membres de l\'escadron survivent. Mais le véhicule ne fonctionne plus.',
        image: './assets/images/image_histoire/image_transformer/homme_militaire_debout_redard-vers-camera-modifier.jpg',
        bouton: [
            { titre: 'Continuer', 'destination': 'finNiveauUn' }
        ]
    },

    finNiveauUn: {
        titre: 'Status sur la situation.',
        description: '\nVous êtes à 3 km de l\'objectif.',
        image: './assets/images/image_histoire/image_transformer/homme_militaire_de_dos-modifer.jpg',
        bouton: [
            { titre: 'Continuer', 'destination': 'choixNiveauTroix' }
        ]
    },

    choixNiveauTroix: {
        titre: 'Catastrophe',
        description: '\nVous devez traverser vers un point plus près de l\'objectif. Mais les choses devienne difficile rapidement et vous devez sacrifier un de vos coéquipiers pour traverser les tires ennemi. Lequel choisirez-vous?',
        image: './assets/images/image_histoire/image_transformer/homme_militaire_marche_foret .jpg',
        bouton: [
            { titre: 'Bombe', 'destination': 'bombeChoixNiveauTroix' },
            { titre: 'Nick', 'destination': 'nickChoixNiveauTroix' },
            { titre: 'Alive', 'destination': 'aliveChoixNiveauTroix' }
        ]
    },

    bombeChoixNiveauTroix: {
        titre: 'Sacrifier Bombe',
        description: '\nBombe entand vos ordre a travers les tire ennemi et courre sur le champ de bataille et puis... \n Bombe posse le pied sur une mine et dit \"merde\". Il meurt.',
        image: './assets/images/image_histoire/image_transformer/militaire_vissage_cacher_regard-de_cote-modifier.jpg',
        bouton: [
            { titre: 'Recommancer', 'destination': 'intro' }
        ]
    },

    nickChoixNiveauTroix: {
        titre: 'Sacrifier Nick',
        description: '\nVous proposer a vos coéquiper en crian : On pourrait sacrifier Nick!!! \nMais la reaction est très négative de la part de votre équipe vous êtes tuer pour vouloir tuer le farceur Nick.',
        image: './assets/images/image_histoire/image_transformer/deux_militaire-modifer.jpg',
        bouton: [
            { titre: 'Recommancer', 'destination': 'intro' }
        ]
    },

    aliveChoixNiveauTroix: {
        titre: 'Sacrifier Alive',
        description: '\nVous proposer a vos coéquiper en crian : On pourrait sacrifier Alive!!! \nMais la reaction est très positive de la part de votre équipe vous aide a convaicre Alive de se sacrifer il le fait santant le support de tous c\'est confrère soldat. La vériter c\'est qu\'il ne l\'aimais pas beaucoup.\n \n Vous vous rendez à l\'objectif avec la perte du soldat Alive qui n\'est pas une très grande perte.',
        image: './assets/images/image_histoire/image_transformer/homme_militaire_glise-desert-modifier.jpg',
        bouton: [
            { titre: 'Continuer', 'destination': 'choixNiveauQuatre' }
        ]
    },

    choixNiveauQuatre: {
        titre: 'Un choix difficile...',
        description: '\nVous devez trouver une façon de détruire l\'ennemi protégeant l\'objectif pour sécuriser la zone. \nVos coéquipiers et vous doivents trouvers une solutions, mais la quel?',
        image: './assets/images/image_histoire/image_transformer/batiment_detruit-modifier.jpg',
        bouton: [
            { titre: 'Bombe', 'destination': 'bombeChoixNiveauQuatreFin' },
            { titre: 'Vous', 'destination': 'vousChoixNiveauQuatre' },
            { titre: 'Nick', 'destination': 'nickChoixNiveauQuatre' }
        ]
    },

    vousChoixNiveauQuatre: {
        titre: 'Uh sacrifice pour le escadron',
        description: '\nVous voyez tout la difficulter de la situation dans la quelle votre escadron ce trouve. Il menque de munition et le moral est bas.\nVous foncer vers l\'ennemi pour destabliser l\'ennemi et réalumer la flame de vos confrères. \n\n\nMais maleureusement vou mourrez d\'un tire a la tête en un instant.',
        image: './assets/images/image_histoire/image_transformer/homme_masque_ordre-modifier.jpg',
        bouton: [
            { titre: 'Recommancer', 'destination': 'intro' }
        ]
    },

    nickChoixNiveauQuatre: {
        titre: 'Uh échec pour la gloire',
        description: '\nNick crie qui va les sauver : Je vais tout vous sauver!!! \nNick enlève la goupille d\'une grenade, mais une blessure à son bras fait en sorte qu\'il l\'échappe, ce qui tue tout votre escadron. \nIl ne vous a pas sauver du tout.',
        image: './assets/images/image_histoire/image_transformer/explosion_carre-modifier.jpg',
        bouton: [
            { titre: 'Recommancer', 'destination': 'intro' }
        ]
    },

    bombeChoixNiveauQuatreFin: {
        titre: 'Uh sacrifice glorieux',
        description: '\nBombe dit avec un ton certait : Je vais vous auver les gars. \nBombe fait le kamikaze et élimine l\'ennemi ce qui crée la zone sécurisée. \n\nL\'objectif est sauvé. Vous avez maintenant une chance de gagner la guerre avec l\'aide de l\'immortel. \n\n FIN',
        image: './assets/images/image_histoire/image_transformer/hommex2_militaire_fummee-modifer.jpg',
        bouton: [
            { titre: 'Succès - Recommancer', 'destination': 'intro' }
        ]
    },
    
}

function goToChapter(chapter) {
    console.log(`${chapters[chapter].titre} \n ${chapters[chapter].description}`);
    for (let i in chapters[chapter].bouton) {
        console.log(`${chapters[chapter].bouton[i].titre} \nClé : ${chapters[chapter].bouton[i].destination}`);
    }
}

goToChapter('intro');