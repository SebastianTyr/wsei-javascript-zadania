document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;
    //do zadania 3
    var footer = document.getElementById("mainFooter");

    //Zadanie 0
    /*function getDatasInfo(elements){
        const retArray = []
        retArray.forEach(element => {
            retArray.push(elements) += element
        });

        return retArray
    }
    console.log(getDatasInfo(links))*/ //TODO

    //Zadanie 1
    function printData(){
        console.log(homeElement)
        
        for(let counter = 0; counter < childElements.length; counter++){
            console.log(counter)
        }

        console.log(banner)

        for(let counter = 0; counter < blocks.length; counter++){
            console.log(counter)
        }

        for(let counter = 0; counter < links.length; counter++){
            console.log(counter)
        }
    }
    printData()

    //Zadanie 2
    function changer(){
        console.log(blocks.innerHTML)
        console.log(blocks.outerHTML)
        //Zwraca 'undefined' ponieważ wartości nie są ustawione żadną wartość

        blocks.innerHTML = "Nowa wartość diva o klasie blocks"
        console.log(blocks.innerHTML)
        //Zwraca ustawioną wartość 'Nowa wartość diva o klasie blocks'
    }
    changer()

    //Zadanie 3
    function getID(element){
        console.log(element)
    }
    getID(footer)
});
