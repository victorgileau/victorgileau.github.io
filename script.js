const chapters = {
    intro: {
        titre: 'Intro',
        description: 'Vous êtes un des soldats d\'un escadron de soldat ramenés à la vie. En plein milieu d\'une guerre contre l\'ennemi. Le soldat immortel a été capturé par l\'ennemi. Vous avez ordre de le retrouver avec votre escadron : Nick, Bombe, Alive et vous.',
        image: './assets/images/image_histoire/image_transformer/homme_militaire_de_dos-modifier.jpg',
        boutonUn: []
    },

    ChoixDepart: {
        titre: 'Le debut de la fin',
        description: 'Vous devez decider si vous l\'acceper ou choisicer une autre option?',
        image: './assets/images/image_histoire/image_transformer/commandant_militaire_homme-modifier.jpg',
        boutonUn: []
    },

    fuirChoixDepart: {
        titre: 'Tuer',
        description: 'Vous êtes tuer par l\'ennemi. Pour avoir fais une desision aussi stupide.',
        image: './assets/images/image_histoire/image_transformer/homme_militaire_tire-modifier.jpg',
        boutonUn: []
    },

    RefuserChoixDepart: {
        titre: 'Exécuté',
        description: ' Vous avez été exécuté pour avoir désobéi un ordre direct. C\'était une certitude.',
        image: './assets/images/image_histoire/image_transformer/homme_militaire_tire-modifier.jpg',
        boutonUn: []
    },

    AccepterChoixDepart: {
        titre: 'Début vers la mission',
        description: 'Vous avez été envoyé sur le champ de bataille sous la protection d\'autres soldats. L\'objectif se trouve à cinq kilomètres plus loin.',
        image: './assets/images/image_histoire/image_transformer/groupe_militaire_arme-modifier.jpg',
        boutonUn: []
    },

    ChoixNiveauUn: {
        titre: 'Le champ de bataille',
        description: 'Plusieurs options s\'offre a vous pour traverser ce champ de bataille des plus devastateur, vous devez choisire un moyen de passer et vite.',
        image: './assets/images/image_histoire/image_transformer/homme_militaire_glise-desert-modifier.jpg',
        boutonUn: []
    },

    foncerChoixNiveauUn: {
        titre: 'Foncer',
        description: 'Vous êtes tuer par l\'ennemi, conseille d\'ami ne pas foncer tout droit dans un champ de bataille.',
        image: './assets/images/image_histoire/image_transformer/homme_militaire_tire-modifier.jpg',
        boutonUn: []
    },

    trancherChoixNiveauUn: {
        titre: 'Passer par les trancher',
        description: 'Vous perdez Bombe ayant reçu une balle perdue dans les tranches. Mais le reste de l\'escadron survie. Vous continuer sur votre lancer.',
        image: './assets/images/image_histoire/image_transformer/homme_militaire_debout_redard-vers-camera-modifier.jpg',
        boutonUn: []
    },

    
}

function goToChapter(chapter) {
    console.log(`${chapters[chapter].titre} \n ${chapters[chapter].description} \n ${chapters[chapter].boutonUn}`);
}

goToChapter('intro');