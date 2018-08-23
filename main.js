console.log('JS Loaded!');

// submit question
// give yes no or maybe answer

function main() {


    let questionEnter = document.querySelector('input');
    //console.log(questionEnter);
    let randoNum = Math.floor(Math.random() * 3);
    console.log(randoNum);


    function answerMe() {
        let ansArr = ["yessir", "no way!", "maybe..."];
        console.log(ansArr[randoNum]);
        

    }


    questionEnter.addEventListener('keyup', function(e) {
        if (e.which === 13) {
            answerMe();
        }
    });
    




    



}

main();