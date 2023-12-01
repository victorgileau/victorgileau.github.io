//je passe de niveau un à troix
const chapters = {
    //ajout *NEW*
    choixPersonnage: {
        titre: 'Choix de personnage',
        description: 'none',
        audio: './assets/sons/gta_restart.mp3',
        bouton: [
            { titre: 'Choix fait', destination: 'intro'}
        ],
    },
    //fin ajout *NEW*

    intro: {
        titre: 'Intro',
        description: '\nVous êtes un des soldats d\'un escadron de soldat ramené à la vie. \nEn plein milieu d\'une guerre contre l\'ennemi. \nLe soldat immortel a été capturé par l\'ennemi. \n \nVous avez ordre de le retrouver avec votre escadron : \nNick, Bombe, Alive et vous.',
        image: './assets/images/homme_militaire_de_dos-modifer.jpg',
        audio: './assets/sons/transition.mp3',
        bouton: [
            { titre: 'Commencer', destination: 'choixDepart' }
        ],
    },

    choixDepart: {
        titre: 'Le debut de la fin',
        description: '\nVous devez décider si vous accepter la mission ou choisir une autre option?',
        image: './assets/images/commandant_militaire_homme-modifier.jpg',
        video: './assets/videos/WW2_Eastern_Front_Battle_Footage-480p.mp4',
        audio: './assets/sons/transition.mp3',
        audioAmbiant: './assets/sons/military-battle-ww2.mp3',
        bouton: [
            { titre: 'Fuir', destination: 'fuirChoixDepart' },
            { titre: 'Accepter', destination: 'accepterChoixDepart' },
            { titre: 'Refuser', destination: 'refuserChoixDepart' }
        ],
    },

    fuirChoixDepart: {
        titre: 'Tuer',
        description: '\nVous êtes tuer par l\'ennemi. Pour avoir pris une décision aussi stupide.',
        image: './assets/images/homme_militaire_tire-modifer.jpg',
        audio: './assets/sons/rifle-shot-m1-garand.mp3',
        bouton: [
            { titre: 'Recommencer', destination: 'intro' }
        ],
    },

    refuserChoixDepart: {
        titre: 'Exécuté',
        description: '\nVous avez été exécuté pour avoir désobéi un ordre direct. C\'était une certitude.',
        image: './assets/images/commandant_militaire_homme-modifier.jpg',
        audio: './assets/sons/walther-p38-firing-sound-effect.mp3',
        bouton: [
            { titre: 'Recommencer', destination: 'intro' }
        ],
    },

    accepterChoixDepart: {
        titre: 'Début vers la mission',
        description: '\nVous avez été envoyé sur le champ de bataille sous la protection d\'autres soldats. L\'objectif se trouve à cinq kilomètres plus loin.',
        image: './assets/images/groupe_militaire_arme-modifier.jpg',
        audio: './assets/sons/transition.mp3',
        bouton: [
            { titre: 'Continuer', destination: 'choixNiveauUn' }
        ],
    },

    choixNiveauUn: {
        titre: 'Le champ de bataille',
        description: '\nPlusieurs options s\'offre a vous pour traverser ce champ de bataille des plus dévastateurs, vous devez choisir un moyen de passer et vite.',
        image: './assets/images/homme_militaire_glise-desert-modifer.jpg',
        video: './assets/videos/WW2_Eastern_Front_Battle_Footage-480p.mp4',
        audio: './assets/sons/transition.mp3',
        audioAmbiant: './assets/sons/sound-effect-ww2-uk-air-raid-siren.mp3',
        bouton: [
            { titre: 'Foncer', destination: 'foncerChoixNiveauUn' },
            { titre: 'Utiliser un véhicule', destination: 'vehiculeChoixNiveauUn' },
            { titre: 'Trancher', destination: 'trancherChoixNiveauUn' }
        ],
    },

    foncerChoixNiveauUn: {
        titre: 'Foncer',
        description: '\nVous êtes tuer par l\'ennemi, conseille d\'ami ne pas foncer tout droit dans un champ de bataille.',
        image: './assets/images/homme_militaire_tire-modifer.jpg',
        audio: './assets/sons/rifle-shot-m1-garand.mp3',
        bouton: [
            { titre: 'Recommencer', destination: 'intro' }
        ],
    },

    trancherChoixNiveauUn: {
        titre: 'Passer par les trancher',
        description: '\nVous perdez Bombe ayant reçu une balle perdue dans les tranches. Mais le reste de l\'escadron survie. Vous continuez sur votre lancer.',
        image: './assets/images/millitaire_homme_debout_redard-vers-camera-modifier.jpg',
        audio: './assets/sons/rifle-shot-m1-garand.mp3',
        bouton: [
            { titre: 'Continuer', destination: 'finNiveauUn' }
        ],
    },

    vehiculeChoixNiveauUn: {
        titre: 'Utiliser un véhicule comme bouclier.',
        description: '\nLe véhicule est une bonne défense. Tous les membres de l\'escadron survivent. Mais le véhicule ne fonctionne plus.',
        image: './assets/images/vehicule_militaire-modifier.jpg',
        audio: './assets/sons/transition.mp3',
        audioAmbiant: './assets/sons/car-engine-starting.mp3',
        bouton: [
            { titre: 'Continuer', destination: 'finNiveauUn' }
        ],
    },

    finNiveauUn: {
        titre: 'Status sur la situation.',
        description: '\nVous êtes à 3 km de l\'objectif.',
        image: './assets/images/homme_militaire_de_dos-modifer.jpg',
        audio: './assets/sons/transition.mp3',
        bouton: [
            { titre: 'Continuer', destination: 'choixNiveauTroix' }
        ],
    },

    choixNiveauTroix: {
        titre: 'Catastrophe',
        description: '\nVous devez traverser vers un point plus près de l\'objectif. Mais les choses devienne difficile rapidement et vous devez sacrifier un de vos coéquipiers pour traverser les tirs ennemis. Lequel choisirez-vous?',
        image: './assets/images/homme_militaire_marche_foret.jpg',
        audio: './assets/sons/transition.mp3',
        bouton: [
            { titre: 'Bombe', destination: 'bombeChoixNiveauTroix' },
            { titre: 'Nick', destination: 'nickChoixNiveauTroix' },
            { titre: 'Alive', destination: 'aliveChoixNiveauTroix' }
        ],
    },

    bombeChoixNiveauTroix: {
        titre: 'Sacrifier Bombe',
        description: '\nBombe qui comprend vos ordres à travers les tirs ennemis et courre sur le champ de bataille et puis... \n Bombe pose le pied sur une mine et dit \"merde\". Il meurt.',
        image: './assets/images/militaire_vissage_cacher_regard-de_cote-modifer.jpg',
        audio: './assets/sons/small-explosion.mp3',
        bouton: [
            { titre: 'Recommencer', destination: 'intro' }
        ],
    },

    nickChoixNiveauTroix: {
        titre: 'Sacrifier Nick',
        description: '\nVous proposer à vos coéquipiers en criant : On pourrait sacrifier Nick!!! \nMais la réaction est très négative de la part de votre équipe vous êtes tué pour vouloir tuer le farceur Nick.',
        image: './assets/images/deux_militaire-modifier.jpg',
        audio: './assets/sons/walther-p38-firing-sound-effect.mp3',
        bouton: [
            { titre: 'Recommencer', destination: 'intro' }
        ],
    },

    aliveChoixNiveauTroix: {
        titre: 'Sacrifier Alive',
        description: '\nVous proposer à vos coéquipiers en criant : On pourrait sacrifier Alive!!! \nMais la réaction est très positive de la part de votre équipe vous aide à convaincre Alive de se sacrifier il le fait sentant le support de tous c\'est confrère soldat. La vérité c\'est qu\'il ne l\'aimais pas beaucoup.\n \n Vous vous rendez à l\'objectif avec la perte du soldat Alive qui n\'est pas une très grande perte.',
        image: './assets/images/homme_militaire_glise-desert-modifer.jpg',
        audio: './assets/sons/transition.mp3',
        bouton: [
            { titre: 'Continuer', destination: 'choixNiveauQuatre' }
        ],
    },

    choixNiveauQuatre: {
        titre: 'Un choix difficile...',
        description: '\nVous devez trouver une façon de détruire l\'ennemi protégeant l\'objectif pour sécuriser la zone. \nVos coéquipiers et vous devez trouver une solution, mais laquelle?',
        image: './assets/images/batiment_detruit-modifier.jpg',
        audio: './assets/sons/transition.mp3',
        bouton: [
            { titre: 'Bombe', destination: 'bombeChoixNiveauQuatreFin' },
            { titre: 'Vous', destination: 'vousChoixNiveauQuatre' },
            { titre: 'Nick', destination: 'nickChoixNiveauQuatre' }
        ],
    },

    vousChoixNiveauQuatre: {
        titre: 'Uh sacrifice pour le escadron',
        description: '\nVous voyez tout la difficulté de la situation dans laquelle votre escadron se trouve. Il manque de munition et le moral est bas.\nVous foncer vers l\'ennemi pour déstabiliser l\'ennemi et rallumer la flame de vos confrères. \n\n\nMais malheureusement vous mourrez d\'un tir à la tête en un instant.',
        image: './assets/images/homme_masque_ordre-modifier.jpg',
        audio: './assets/sons/rifle-shot-m1-garand.mp3',
        bouton: [
            { titre: 'Recommencer', destination: 'intro' }
        ],
    },

    nickChoixNiveauQuatre: {
        titre: 'Uh échec pour la gloire',
        description: '\nNick crie qui va les sauver : Je vais tout vous sauver!!! \nNick enlève la goupille d\'une grenade, mais une blessure à son bras fait en sorte qu\'il l\'échappe, ce qui tue tout votre escadron. \nIl ne vous à pas sauvé du tout.',
        image: './assets/images/explosion_carre-modifier.jpg',
        audio: './assets/sons/explosion.mp3',
        video: './assets/videos/Big_Explosion.mp4',
        bouton: [
            { titre: 'Recommencer', destination: 'intro' }
        ],
    },

    bombeChoixNiveauQuatreFin: {
        titre: 'Un sacrifice glorieux',
        description: '\nBombe dit avec un ton certain : Je vais vous sauver les gars. \nBombe fait le kamikaze et élimine l\'ennemi ce qui crée la zone sécurisée. \n\nL\'objectif est sauvé. Vous avez maintenant une chance de gagner la guerre avec l\'aide de l\'immortel. \n\n ...FIN',
        image: './assets/images/hommex2_miltaire_fumee-modifer.jpg',
        audio: './assets/sons/succes.mp3',
        bouton: [
            { titre: 'Succès - Recommencer', destination: 'choixPersonnage' }
        ],
    },

    choixNonDisponible: {
        titre: 'Indisponible - Bombe est Mort',
        description: '\nCe choix n\'est pas disponible.',
        image: './assets/images/homme_masque_ordre-modifier.jpg',
        audio: './assets/sons/gta_restart.mp3',
        bouton: [
            { titre: 'Revenir dernier chapitre', destination: 'intro' }
        ],
    },
    
}

//ajout new
const animationPixel = {
    perso1: {
        nom: 'Jonny',
        frame: 3,
        source: './assets/animation_pixel/Perso1_01_idle/character_1_sckull_idle-spritsheet.png'
    },
    perso2: {
        nom: 'Edgar',
        frame: 4,
        source: './assets/animation_pixel/Perso2_01_idle/charachter_2_idle_spritsheet.png'
    },
    perso3: {
        nom: 'Marcel',
        frame: 4,
        source: './assets/animation_pixel/Perso3_01_idle/charachter_3_idle_spriteSheet.png'
    },
}
//ajout new fin

const cadreJeu = document.querySelector('#jeu');
const imgLogo = document.querySelector('#logo');
const title = document.querySelector('#titre');
const chapterDescription = document.querySelector('.description');
const imageChapter = document.querySelector('.image');
const videoChapter = document.querySelector('.video');
const containButton = document.querySelector('.boutons');
const btnReset = document.querySelector('#reset');
const muteSound = document.querySelector('#muteSound');
let isBombeDead = false;
let isSonMute = false;

//changmement style div avec animation Pixel
function personaliserDivPersoPixel(animationPixelSource, animationPixelFrame, conteneur, num) {
    const child = conteneur.children;
    child[num].style.backgroundImage = animationPixelSource;
    child[num].style.animationTimingFunction = animationPixelFrame;
}


function stopSound(audio) {
    audio.volume = 0;
}


//ajout sons ambiance constant
const audioAmbiantGeneral = document.createElement('audio');
cadreJeu.appendChild(audioAmbiantGeneral);
audioAmbiantGeneral.src = './assets/sons/World_War_2_Battle_Ambience.mp3';
audioAmbiantGeneral.autoplay = true;
audioAmbiantGeneral.loop = true;
audioAmbiantGeneral.volume = 0.4;
audioAmbiantGeneral.currentTime = 300;

function goToChapter(chapterName) {
    const chapter = chapters[chapterName];

    if (chapter !== undefined) {
        title.textContent = (chapter.titre);
        chapterDescription.textContent = (chapter.description);

        //Ajout *NEW*
        //Ajout soldat
        let soldat = localStorage.getItem('soldat');

        if (localStorage.getItem('soldat') != null) {
            let soldatOld = document.querySelector('.soldat');
            if (soldatOld != null) {
                cadreJeu.removeChild(soldatOld);
            }
            const infoSoldat = document.createElement('p');
            infoSoldat.setAttribute('class', 'soldat');
            cadreJeu.appendChild(infoSoldat);
            infoSoldat.innerHTML = `Soldat choisie pour menner la mission:<br><em>${soldat}</em>`;
        }
        //Fin Ajout *NEW*
        
        //ajout de video
        const video = document.createElement('video');

        if (chapter.video != undefined) {
            cadreJeu.appendChild(video);
            video.src = chapter.video;
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            video.currentTime = 4;
            if ([chapterName] == 'choixNiveauUn') {
                video.currentTime = 42;
            }
            video.setAttribute('class', 'video');
            cadreJeu.removeChild(imageChapter);
            if ([chapterName] == 'nickChoixNiveauQuatre') {
                video.style.filter = 'saturate(10%)';
                setTimeout(() => {
                    cadreJeu.removeChild(video);
                    imageChapter.src = (chapter.image);
                    cadreJeu.appendChild(imageChapter);
                }, 3000);
            }
        }
        else {
            let videoGuerre = document.querySelector('.video');
            if (videoGuerre != undefined) {
                cadreJeu.removeChild(videoGuerre);
            }

            //ajout *NEW*
            if (chapter.image != undefined) {
                imageChapter.src = (chapter.image);
                cadreJeu.appendChild(imageChapter);
            }
            //fin ajout *NEW*
        }

        //Ajout *NEW*
        //Ajout Choix personnage
        const optionConteneur = document.createElement('div');
        const option1 = document.createElement('div');
        const option2 = document.createElement('div');
        const option3 = document.createElement('div');

        if ([chapterName] == 'choixPersonnage') {
            let soldatOld = document.querySelector('.soldat');
            if (soldatOld != null) {
                cadreJeu.removeChild(soldatOld);
            }

            let img = document.querySelector('.image');
            if (img != undefined) {
                cadreJeu.removeChild(img);
            }

            let contneur = document.querySelector('.gameChoix');
            if (contneur != undefined) {
                cadreJeu.removeChild(contneur);
            }

            chapterDescription.style.display = 'none';
            optionConteneur.classList.add('gameChoix');
            option1.classList.add('character', 'no1');
            option2.classList.add('character', 'no2');
            option3.classList.add('character', 'no3');
            
            optionConteneur.appendChild(option1);
            optionConteneur.appendChild(option2);
            optionConteneur.appendChild(option3);
            cadreJeu.appendChild(optionConteneur);
            personaliserDivPersoPixel(`url('${animationPixel.perso1.source}')`, `steps(${animationPixel.perso1.frame})`, optionConteneur, 0);
            personaliserDivPersoPixel(`url('${animationPixel.perso2.source}')`, `steps(${animationPixel.perso2.frame})`, optionConteneur, 1);
            personaliserDivPersoPixel(`url('${animationPixel.perso3.source}')`, `steps(${animationPixel.perso3.frame})`, optionConteneur, 2);
            
            const characters = document.querySelectorAll('.character');

            characters.forEach((el) => {
                el.addEventListener('click', choix);
            });

            //Ajout *NEW*
            //Fonction pour le choix de personnage
            function choix() {
                option1.textContent = animationPixel.perso1.nom;
                option2.textContent = animationPixel.perso2.nom;
                option3.textContent = animationPixel.perso3.nom;
                characters.forEach((el) => {
                    el.style.backgroundColor = '#bf0606';
                    el.style.opacity = 0.5;
                    el.style.animationPlayState = 'paused';
                    el.classList.remove('choix');
                });

                this.style.backgroundColor = '#bf0606';
                this.style.animationDuration = '0.8s';
                this.classList.add('choix');
                this.style.animationPlayState = 'running';
                this.style.opacity = 1;
                localStorage.setItem('soldat', this.textContent);
                console.log(localStorage);
                const btn = document.querySelector('button');
                btn.style.display = 'inline';
            }
            //Fin Ajout *NEW*
        }
        else {
            let optionConteneurOld = document.querySelector('.gameChoix');
            if (optionConteneurOld != undefined) {
                cadreJeu.removeChild(optionConteneurOld);
            }
            chapterDescription.style.display = 'inline-block';
        }
        //Fin Ajout *NEW*

        //ajout de son
        const audio = document.createElement('audio');

        if (chapter.audio != undefined && isSonMute == false) {
            let sonAvant = document.querySelector('.audio');
            
            if (sonAvant != undefined) {
                cadreJeu.removeChild(sonAvant);
            }

            cadreJeu.appendChild(audio);
            audio.classList.add('audio');
            audio.src = chapter.audio;
            audio.volume = 0.15;
            if (audio.src === './assets/sons/gta_restart.mp3') {
                audio.volume = 1;
            }
            audio.play();

            setTimeout(() => {
                audio.pause();
            }, 3000);
        }
        else {
            let audio = document.querySelector('.audio');
            if (audio != undefined) {
                audio.pause();
                cadreJeu.removeChild(audio);
            }
        }

        //ajout son ambiant
        const audioAmbiant = document.createElement('audio');

        if (chapter.audioAmbiant != undefined && isSonMute == false) {
            let sonAvant = document.querySelector('.audioAmbiant');
            if (sonAvant != undefined) {
                cadreJeu.removeChild(sonAvant);
            }

            cadreJeu.appendChild(audioAmbiant);
            audioAmbiant.classList.add('audioAmbiant');
            audioAmbiant.src = chapter.audioAmbiant;
            audioAmbiant.volume = 0.3;
            audioAmbiant.loop = true;
            audioAmbiant.play();
            if ([chapterName] == 'vehiculeChoixNiveauUn') {
                audioAmbiant.loop = false;
            }
        }
        else {
            let audio = document.querySelector('.audioAmbiant');
            if (audio != undefined) {
                audio.pause();
                cadreJeu.removeChild(audio);
            }
        }

        //ajout son ambiant constant
        if ([chapterName] == 'choixNiveauUn' || [chapterName] == 'choixDepart') {
            audioAmbiantGeneral.pause();
        } else {
            if (isSonMute == true) {
                audioAmbiantGeneral.volume = 0;
            } else {
                audioAmbiantGeneral.volume = 0.4;
            }
            audioAmbiantGeneral.play();
        }
        

        //écrit information sur le chapitre dans la console
        console.log(`${chapter.titre} \n ${chapter.description}`);

        //isBombeDead devien true car il meurt dans l'histoire en passant par les tranchées, mais n'a pas fait échouer la mission
        if ([chapterName] == 'trancherChoixNiveauUn') {
            isBombeDead = true;
            localStorage.setItem('mortBombe', 'true'); //set le local strogage a true vu que bombe est mort
        }

        //isBombeDead devien false car il ne meurt pas donc doit rester une option possible
        if ([chapterName] == 'vehiculeChoixNiveauUn') {
            isBombeDead = false;
            localStorage.setItem('mortBombe', 'false'); //set le local strogage a true vu que bombe n'est pas mort
        }

        //change la destination du choix de niveau troix si Bombe est mort et les options du chapitre 'choixNonDisponible' sinon ne le change pas 
        if ([chapterName] == 'choixNiveauTroix') {
            if (isBombeDead == true) {
                chapters.choixNiveauTroix.bouton[0].destination = 'choixNonDisponible';
                chapters.choixNonDisponible.bouton[0].titre = 'Revenir dernier chapitre';
                chapters.choixNonDisponible.bouton[0].destination = 'choixNiveauTroix';
            }
            else {
                chapters.choixNiveauTroix.bouton[0].destination = 'bombeChoixNiveauTroix';
            }
        }

        //change la destination du choix de niveau Quatre si Bombe est mort, change aussi les options du chapitre 'choixNonDisponible' sinon ne le change pas.
        if ([chapterName] == 'choixNiveauQuatre') {
            if (isBombeDead == true) {
                chapters.choixNiveauQuatre.bouton[0].destination = 'choixNonDisponible';
                chapters.choixNonDisponible.bouton[0].titre = 'Recommancer';
                chapters.choixNonDisponible.bouton[0].destination = 'intro';
            }
            else {
                chapters.choixNiveauQuatre.bouton[0].destination = 'bombeChoixNiveauQuatreFin';
            }
        }

        //local storage :
        localStorage.setItem('chapter', [chapterName]);
        console.log(localStorage);
        console.log(`Chapitre enregistrer : ${localStorage.chapter}`); //test
        console.log(`Est-ce que Bombe est mort ? ${localStorage.mortBombe}`);

        while (containButton.firstChild) {
            containButton.removeChild(containButton.firstChild);
        }

        for (let i = 0; i < chapter.bouton.length; i++) {
            const boutonNouveau = document.createElement('button');
            boutonNouveau.textContent = chapter.bouton[i].titre;
            boutonNouveau.addEventListener('click', () => {
                goToChapter(chapter.bouton[i].destination);
            });

            containButton.appendChild(boutonNouveau);
    
            //écrit information sur le chapitre dans la console
            console.log(`${chapter.bouton[i].titre} \nClé : écrire goToChapter(${chapter.bouton[i].destination})`);

            //Ajout *NEW*
            if ([chapterName] == 'choixPersonnage') {
                const btn = document.querySelector('button');
                btn.style.display = 'none';
            }
            //Fin Ajout *NEW*
        }
    }

    else {
        console.log('Mauvaise clé.');
    }
}

muteSound.addEventListener('change', () => {
    let audio = document.querySelector('.audio');
    let audioAmbiant = document.querySelector('.audioAmbiant');
    if (isSonMute == false) {
        isSonMute = true;
        audioAmbiantGeneral.volume = 0;
        if (audio != undefined) {
            audio.volume = 0;
        }
        if (audioAmbiant != undefined) {
            audioAmbiant.volume = 0;
        }
    } else {
        isSonMute = false
        audioAmbiantGeneral.volume = 0.4;
        if (audio != undefined) {
            audio.volume = 0.15;
        }
        if (audioAmbiant != undefined) {
            audioAmbiant.volume = 0.3;
        }
    }
});



if (isSonMute === true) {
    
}

if (localStorage.getItem('chapter') != null) {
    let mortBombe = localStorage.getItem('mortBombe');
    console.log(mortBombe);
    if (mortBombe === 'true') {
        isBombeDead = true;
    } else {
        isBombeDead = false;
    }
    goToChapter(localStorage.getItem('chapter'));
} else {
    goToChapter('choixPersonnage');
}

btnReset.addEventListener('click', () => {
    localStorage.clear();
    console.log('Recommancer localStorage: ');
    console.log(localStorage);
    goToChapter('choixPersonnage');
});