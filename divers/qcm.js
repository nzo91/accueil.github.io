function valider() {


        // Collecter les réponses


        const answers = document.querySelectorAll('.answer');
        var results = new Array();

        for (let i = 0; i <= 9; i++) {
                if (answers[i].checked) {
                        newResults = results.push(1);
                } else {
                        newResults = results.push(2);
                }
        }

        console.log(results);


        // Nombre de bonnes et mauvaises réponses


        let correct = 0;
        let incorrect = 0;

        results.forEach(e => {
                if (e === 1)
                        correct += 1;
                else if (e === 2)
                        incorrect += 1;
        })

        // Afficher le résultat
    const json = {
        "0": "Quel est l'année de la date de fin de la Seconde Guerre Mondiale ?",
        "1": "(8+9x9)/2 ?",
        "2": "Quel est le contraire du mot descendre ?",
        "3": "Quel a été le premier Homme a marché sur la Lune ?",
        "4": "Quel est la capitale du Luxembourg ?",
        "5": "Qui est l'Homme le plus riche du monde ?",
        "6": "Cochez deux marques italienne",
        "7": "Quel est la définition du mot empathie ?",
        "8": "Combien de couleur contient le drapeau de l'Australie ?",
        "9": "Un mille-patte possède 1000 pattes",
    };
    document.write(`<link rel="stylesheet" type="text/css" href="index.css">`);
        document.write(`Correction<br><br>`);
        for (let i = 0; i <= results.length - 1; i++) {
                document.write(` ${json[i]} <li>La réponse est ${results[i] == 1 ? 'correct' : 'incorrect'}</li>` + "<br>");
        }
        document.write(`${correct} bonnes réponses <br>${incorrect} mauvaises réponses <br>Score final : ${correct}/${answers.length} soit ${correct/10*100}% de bonnes réponses`);
   }