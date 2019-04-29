let calButton = document.getElementById("btn_cal");
let cleanButton = document.getElementById("btn_clean")
let resDiv = document.getElementById("res");

$(document).ready(function(){
    $(this).scrollTop(0);
});

calButton.addEventListener("click", function() {

    resDiv.hidden = false;
    calculate();
    
});

cleanButton.addEventListener("click", function() {
    window.location.reload();
});

function calculate() {



    let valNec = parseInt(document.getElementById("necesidad").value);
    let valTend = parseInt(document.getElementById("tendencia").value);
    let valProy = parseInt(document.getElementById("proyecto").value);
    let valIn = parseInt(document.getElementById("innovacion").value);
    let necFinal = 0;
    let tendFinal = 0;
    let proyFinal = 0;
    let inFinal = 0;

    if(valNec == 1)
    {
        necFinal = 13.2;
    }
    if(valNec == 2)
    {
        necFinal = 26.4;
    }
    if(valNec == 3)
    {
        necFinal = 40;
    }

    if(valTend == 1)
    {
        tendFinal = 2;
    }
    if(valTend == 2)
    {
        tendFinal = 4;
    }
    if(valTend == 3)
    {
        tendFinal = 6;
    }
    if(valTend == 4)
    {
        tendFinal = 8;
    }
    if(valTend == 5)
    {
        tendFinal = 10;
    }

    if(valProy == 1)
    {
        proyFinal = 7.5;
    }
    if(valProy == 2)
    {
        proyFinal = 15;
    }
    if(valProy == 3)
    {
        proyFinal = 22.4;
    }
    if(valProy == 4)
    {
        proyFinal = 30;
    }

    if(valIn == 1)
    {
        inFinal = 5;
    }
    if(valIn == 2)
    {
        inFinal = 10;
    }
    if(valIn == 3)
    {
        inFinal = 15;
    }
    if(valIn == 4)
    {
        inFinal = 20;
    }

    let finalSum = necFinal + tendFinal + proyFinal + inFinal;
    console.log(finalSum);

    let new_html = "";

    if(finalSum <= 70)
    {
        new_html += 
        `
        <h2 class="resban">El resultado para la idea es</h2>
        <h2 class="numA">${finalSum}</h2>
        <h3 class="expA">Esto significa que la idea</h3>
        <h3 class="exp">sí necesita validarse por UX</h3>
        `
    }
    if(finalSum > 70 && finalSum < 85)
    {
        new_html += 
        `
        <h2 class="resban">El resultado para la idea es</h2>
        <h2 class="numB">${finalSum}</h2>
        <h3 class="expA">Esto significa que la idea necesita</h3>
        <h3 class="exp">notificarse a UX para exploración</h3>
        `
    }
    if(finalSum > 85)
    {
        new_html += 
        `
        <h2 class="resban">El resultado para la idea es</h2>
        <h2 class="numC">${finalSum}</h2>
        <h3 class="expA">Esto significa que la idea</h3>
        <h3 class="exp">exenta la validación ☺</h3>
        `
    }

    $("#res").html(new_html);
    //window.scrollTo(0,document.body.scrollHeight);
}