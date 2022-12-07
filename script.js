let Myname = 'Azamat';
let Myage = 17;
document.querySelector(".умножение").onclick = alerted;
 function alerted(){
   let a = document.querySelector('.input').value;
   let b = document.querySelector('.input2').value;
   var v = Number(a)/ Number(b)
   var d = Number(a)* Number(b)
   var e = Number(a)- Number(b)
   var q = Number(a)+ Number(b)
   console.log(d)
   document.querySelector('h1').innerHTML = d;
 }
 document.querySelector(".минус").onclick = минус;
 function минус(){
   let a = document.querySelector('.input').value;
   let b = document.querySelector('.input2').value;
   var v = Number(a)/ Number(b)
   var d = Number(a)* Number(b)
   var e = Number(a)- Number(b)
   var q = Number(a)+ Number(b)
   console.log(e)
   document.querySelector('h1').innerHTML = e;
 }
 document.querySelector(".плюс").onclick = плюс;
 function плюс(){
   let a = document.querySelector('.input').value;
   let b = document.querySelector('.input2').value;
   var v = Number(a)/ Number(b)
   var d = Number(a)* Number(b)
   var e = Number(a)- Number(b)
   var q = Number(a)+ Number(b)
   console.log(q)
   document.querySelector('h1').innerHTML = q;
 }
 document.querySelector(".разделить").onclick = разделить;
 function разделить(){
   let a = document.querySelector('.input').value;
   let b = document.querySelector('.input2').value;
   var v = Number(a)/ Number(b)
   var d = Number(a)* Number(b)
   var e = Number(a)- Number(b)
   var q = Number(a)+ Number(b)
   console.log(v)
   document.querySelector('h1').innerHTML = v;
 }