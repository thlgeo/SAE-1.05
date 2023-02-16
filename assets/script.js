function choixConducteur()
{
    var div = document.getElementById("conducteur");
    var choix = document.getElementById("choix");
    if(div.style.display === "none")
    {
        div.style.display = "block";
        choix.style.display = "none";
    }
    else
    {
        div.style.display = "none";
        choix.style.display = "block";
    }
}

function choixPassager()
{
    var div = document.getElementById("passager");
    var choix = document.getElementById("choix");
    if(div.style.display === "none")
    {
        div.style.display = "block";
        choix.style.display = "none";
    }
    else
    {
        div.style.display = "none";
        choix.style.display = "block";
    }
}

function choixMettreÀdisposition()
{
    var div = document.getElementById("mettreÀdisposition");
    var choix = document.getElementById("choix");
    if(div.style.display === "none")
    {
        div.style.display = "block";
        choix.style.display = "none";
    }
    else
    {
        div.style.display = "none";
        choix.style.display = "block";
    }
}

function dateExp(event)
{
    var Date = document.getElementById("expiration");
    var value = Date.value;
    if(isNumber(event))
    {
        if(value.length == 2)
        {
            value += "/";
        }
    }
    else
    {
        event.preventDefault();
    }
    Date.value = value;
}

function numCarte(event)
{
    var num = document.getElementById("CB");
    var value = num.value;
    var len = value.length;
    if(isNumber(event))
    {
        if(len == 5)
        {
            value += " ";
        }
        else if(len%5 == 0 && len != 20)
        {
            value += " ";
        }
    }
    else
    {
        event.preventDefault();
    } 
    num.value = value;
}

function isNumber(nb)
{
    return nb.charCode >= 48 && nb.charCode <= 57;
}

function CVC(event)
{
    var cvc = document.getElementById("cvc");
    var value = cvc.value;
    var len = value.length;
    if(isNumber(event))
    {
        if(len >= 3)
        {
            event.preventDefault();
        }
        cvc.value = value;
    }
    else
    {
        event.preventDefault();
    }
    
}