
//SUMA
function suma(){
    var val1 = parseFloat(document.getElementById("v1").value);
    var val2 = parseFloat(document.getElementById("v2").value);
    var h3 = document.getElementById("res"); 

    if(isNaN(val1) || isNaN(val2))
    {
        if(isNaN(val1)){
            h3.innerHTML = "Valores no validos en la caja 1";
            document.getElementById("v1").focus();
            return;
        }else{
            h3.innerHTML = "Valores no validos en la caja 2";
            document.getElementById("v2").focus();
            return;
        }
    }
    var res = val1 + val2;
    h3.innerHTML = res;
}
//RESTA
function resta(){
    val1= parseFloat(document.getElementById("v1").value)
    val2= parseFloat(document.getElementById("v2").value)
    var h3 = document.getElementById("res"); 

    if(isNaN(val1) || isNaN(val2))
    {
        if(isNaN(val1)){
            h3.innerHTML="Valores no validos en la caja 1"
            document.getElementById("v1").focus()
            return
        }else{
            h3.innerHTML="Valores no validos en la caja 2"
            document.getElementById("v2").focus()
            return
        }
    }
    res=val1-val2
    h3.innerHTML=res
}
//MULTIPLICACION
function multiplicacion(){
    val1= parseFloat(document.getElementById("v1").value)
    val2= parseFloat(document.getElementById("v2").value)
    var h3 = document.getElementById("res"); 
    if(isNaN(val1) || isNaN(val2))
    {
        if(isNaN(val1)){
            h3.innerHTML="Valores no validos en la caja 1"
            document.getElementById("v1").focus()
            return
        }else{
            h3.innerHTML="Valores no validos en la caja 2"
            document.getElementById("v2").focus()
            return
        }
    }
    res=val1*val2
    h3.innerHTML=res
}
//DIVISION
function division(){
    val1= parseFloat(document.getElementById("v1").value)
    val2= parseFloat(document.getElementById("v2").value)
    var h3 = document.getElementById("res"); 
    if(isNaN(val1) || isNaN(val2))
    {
        if(isNaN(val1)){
            h3.innerHTML="Valores no validos en la caja 1"
            document.getElementById("v1").focus()
            return
        }else{
            h3.innerHTML="Valores no validos en la caja 2"
            document.getElementById("v2").focus()
            return
        }
    }
    res=val1/val2
    h3.innerHTML=res
}