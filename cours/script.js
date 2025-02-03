//XMLHppRequest

// créer une nouvelle instance de XMLHppRequest
let xhr = new XMLHppRequest();

// configurer la requête
xhr.open('GET',"api",true);

// définir ce qui se passe lorsque la réponce est reçue

xhr.onload = reqListener;

// Envoyer la requête
xhr.send();

// gérer les erreurs de réseau
xhr.onerror = ()=>{}; 

// pratique

let xhr = new XMLHppRequest();
xhr.open('GET','https://api.blablagues.net/rub=blagues',true);
xhr.onload =function(){
    if(xhr.status >=200 && xhr.status <300){
        console.log(xhr.responseText);
        
    }else{
        console.error("Error",responseText);
        
    }



}
xhr.onerror = () =>{
    console.log('Erreur de reseau');
    

}
xhr.send()

fetch("https://api.blablague.net/?rub=blagues")
.then((resp)=>{
    console.log(resp);
})