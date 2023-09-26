const chapters = {
    intro: {
        titre: 'Intro',
        description: 'test : ',
        image: './assets/images/image_histoire/image_transformer/homme_militaire_de_dos-modifier.jpg',
        boutonUn: ['Test']
    }
}

function goToChapter(chapter) {
    console.log(`${chapters[chapter].titre} \n ${chapters[chapter].description} \n ${chapters[chapter].boutonUn}`);
}

goToChapter('intro');