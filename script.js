const chapters = {
    intro: {
        titre: 'Intro',
        description: 'test : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: './assets/images/image_histoire/image_transformer/homme_militaire_de_dos-modifier.jpg',
        boutonUn: []
    }
}

function goToChapter(chapter) {
    if (chapters.chapter  !== null) {
        let chapitre = chapters.chapter;
        console.log(`${chapitre.titre} \n ${chapitre.description} \n ${chapitre.boutonUn}`);
    }
    else {
        console.log('Mauvaise clée de chapitre')
    }
}