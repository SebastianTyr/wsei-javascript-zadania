document.addEventListener("DOMContentLoaded", function () {
    //Zadanie 0
    var element = document.querySelector('.title')
    function getDataAnimation (element){
        var animation = document.getElementsByName('bounce')
        console.log(animation)
        return animation
    }
    getDataAnimation(element)

    //Zadanie 1
    function getElements(){
        var home_el = document.getElementById('home')
        var home_el1 = document.querySelector('#home')
        var li_el = document.querySelector('li data-direction')
        var block_el = document.querySelector('.block')
        console.log(home_el)
        console.log(home_el1)
        console.log(li_el)
        console.log(block_el)
    }
    getElements()

    //Zadanie 2
    function getTags(){
        var li_tag = document.getElementsByTagName('nav')
        var paragraphs = document.querySelectorAll('div p')
        var article_divs = document.querySelectorAll('article div')
        console.log(li_tag)
        console.log(paragraphs)
        console.log(article_divs)
    }
    getTags()

    //Zadanie 3
    function countTags(){
        var counter = 0
        var article_tags = document.querySelector('article .first') //TODO
        for(let i = 0; i < article_tags.length; i++)
        {
            counter++
        }
        console.log(counter)
    }
    countTags()
});