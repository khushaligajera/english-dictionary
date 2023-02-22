let inputEl = document.getElementById("input")
let infoel=document.getElementById("info")
let wordinfoEl=document.getElementsByClassName("word_info")
let wordspanEl=document.getElementById("wordspan")
let meaningspanEl=document.getElementById("meaningspan")
let audioEl=document.getElementById("audio")
let wordEl=document.getElementById("word")
let meaningEl=document.getElementById("meaning")
console.log(wordinfoEl);
let infoEl=document.getElementById("info")

let url, word, result
async function fetchapi(word) {
    try {
        infoel.style.display="block"
        infoel.innerText=`serching for ${word}`
        url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    result = await fetch(url).then((res) => 
         res.json()
    )
  
   wordspanEl.innerHTML=result[0].word
   meaningspanEl.innerHTML=result[0].meanings[0].definitions[0].definition
audioEl.src=result[0].phonetics[0].audio
infoel.style.display="none"
wordEl.style.display="block"
        meaningEl.style.display="block"
        audioEl.style.display="block"

    } catch (error) {
        inputEl.innerHTML=""
        infoel.innerText=`can't search for ${word}`
        wordEl.style.display="none"
        meaningEl.style.display="none"
        audioEl.style.display="none"

    }
    

}

input.addEventListener("keyup", (e) => {

    if (e.target.value != "" && e.key === "Enter") {
        word = e.target.value;
        fetchapi(word)
        // infoEl.style.display="none"
        

    }





})