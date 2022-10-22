function startTime(){
    today=new Date ();
    fecha= today.getDate();
    mes= today.getMonth();
    año= today.getFullYear();
    dia=checkTime(dd);
    mes=checkTime(mm);
    año=checkTime(aaaa);
    document.getElementById("fecha").innerHTML=dd+":"+mm+":"+aaaa;
    t=setTimeout("startTime()",500);}
    function checkTime(i)
    {if (i<12) {i="0" + i;}return i;}
    window.onload=function(){startTime();}
document.write("Día: "+d.getDate(),"<br>Mes: "+d.getMonth(),"<br>Año:"+d.getFullYear());
