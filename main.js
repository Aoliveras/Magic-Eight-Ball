console.log('JS Loaded!');

// submit question
// give yes no or maybe answer

function main() {


    
    //console.log(questionEnter);
    let questionEnter = document.querySelector('input');
    //console.log(randoNum);
    let ansBubble = document.querySelector('.answer');
    //console.log(ansBubble);
    let eightReset = document.querySelector('.container').addEventListener('click', resetBubble);

    function answerMe() {
        let randoNum = Math.floor(Math.random() * 3);
        let ansArr = ["yessir", "no way!", "maybe..."];
        ansBubble.innerText = ansArr[randoNum];
        console.log(randoNum);
    };

    function resetBubble() {
        ansBubble.innerText = "";
        questionEnter.value = "";
    }


    questionEnter.addEventListener('keypress', function(e) {
        console.log("something");
        if (e.keyCode === 13) {
            e.preventDefault();
            answerMe();
        };
    });
    




    



}

main();