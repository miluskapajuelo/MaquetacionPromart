function obtenerDatos(){
    let url = 'https://reqres.in/api/users?page=1'

    const api = new XMLHttpRequest();
    api.open('GET', url, true);

    api.onreadystatechange = function(){
        if(this.status == 200 && this.readyState ==4){
            let datos = JSON.parse(this.responseText)
            console.log(datos.data)
            let dataUsers = datos.data
            dataUsers.forEach((elemen)=>{   
            const figureHtml = `<img id="imgPerson" src="${elemen.avatar}" class="img-responsive">
            <figcaption id="figcaptionPerson">${elemen.first_name} ${elemen.last_name}</figcaption>`
            
            const figureElement = document.createElement('figure')
            const imageData = document.querySelector('.imageData')
            figureElement.innerHTML = figureHtml
            imageData.appendChild(figureElement)
            })
        }
    }
    api.send();
}
obtenerDatos()




const burger = document.querySelector('.burger');
const list = document.querySelector('.site-nav ul');

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    list.classList.toggle('open');
  });
