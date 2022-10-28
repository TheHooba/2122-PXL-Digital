function handleload()
{
    let textInputs = document.querySelectorAll("input[type=text]");
    let button1 = document.getElementById('buttonVerzenden' );
    let button2 = document.getElementById('buttonWissen');

    for (let textInput of textInputs){
        textInput.addEventListener('focus', handleTextInputFocus);
        textInput.addEventListener('blur', handleTextInputBlur);
    }

    button1.addEventListener('click', verzendenButton);
    button2.addEventListener('click', wissenButton);


}

function handleTextInputFocus(event)
{
    let element = event.target;
    element.style.backgroundColor = 'white';
    element.style.color = 'red';
    element.value = '';
}

function handleTextInputBlur(event)
{
    let element = event.target;
    element.style.backgroundColor = 'grey';
    element.style.color = 'black';

}

function verzendenButton(event)
{
    let element = event.target;
    window.alert("bedankt om het formulier te verzenden");
    let textinputs = document.querySelectorAll("input[type=text]");

    for (let input of textinputs){
        input.value = "";
    }
}

function wissenButton(event)
{
    let element = event.target;
    window.alert("alle gegevens werden gewist");
    let textinputs = document.querySelectorAll("input[type=text]");

    for (let input of textinputs){
        input.value = "";
    }

}

window.addEventListener('load', handleload);