function handleload()
{
    let fotos = document.querySelectorAll('img');

    for(let foto of fotos){
        foto.addEventListener('dblclick',doubleclickfunction);
        foto.addEventListener('click', clickfunction);
    }


}

function doubleclickfunction(event)
{
    let element = event.target;
    console.log(element.style.width);
    let width = '200px';
    element.style.width = width;
    let tekst = document.getElementById("bijschrift").textContent;
    let aanvulling = document.createTextNode(element.alt);
    tekst.appendChild(aanvulling);

}

function clickfunction(event)
{
    let element = event.target;
    let width = '100px';
    element.style.width = width;
}

window.addEventListener('load', handleload);