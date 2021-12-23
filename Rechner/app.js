let Bildchirm =document.querySelector('.Bildchirm');

window.onload = () =>{
    let touches = document.querySelectorAll('button');
    for (touche of touches) {
        touche.addEventListener("click",gerertouches)
    }
}

function gerertouches(){
    let touche = this.innerText;
    //on verifie si le boutton est une touche numerique
    if(parseFloat(touche) >= 0 || touche==="."){
        //on met a jour la valeur de l'affichage et on met sur l'ecran
        Bildchirm.innerText+=touche;

    }else{
  //touche "C" repart au vide
        switch(touche){
            case "C":
            Bildchirm.innerText="";
            break;
            case "(":
            case")":
            case "/":
            case "*":
            case "+":
            case "-":
            Bildchirm.innerText+=touche;
            default:
            Bildchirm.innerText =eval(Bildchirm.innerText);
            break;
        }

 }

}