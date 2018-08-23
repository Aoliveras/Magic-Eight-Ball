console.log('JS Loaded!');

// submit question
// give yes no or maybe answer

function main() {


    let questionEnter = document.querySelector('input');
    //console.log(questionEnter);
    let randoNum = Math.floor(Math.random() * 3);
    //console.log(randoNum);
    let ansBubble = document.querySelector('.answer');
    //console.log(ansBubble);

    function answerMe() {
        let ansArr = ["yessir", "no way!", "maybe..."];
        ansBubble.innerText = ansArr[randoNum];
        setTimeout(,5000);
    };


    questionEnter.addEventListener('keypress', function(e) {
        console.log("something");
        if (e.keyCode === 13) {
            e.preventDefault();
            answerMe();
        };
    });
    




    



}

main();