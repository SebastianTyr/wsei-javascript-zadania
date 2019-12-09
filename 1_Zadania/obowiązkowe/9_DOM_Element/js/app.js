document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    function getDatasInfo(elements){
        const retArray = []
        retArray.forEach(element => {
            retArray.push(elements) += element
        });

        return retArray
    }
    console.log(getDatasInfo(links))
});
