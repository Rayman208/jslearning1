//=========first sample==============//
// var i=0;
// while(i<5)
// {
//     document.body.innerHTML+=i+"<br>";
//     i++;
// }

//=========second sample==============//
// var start = parseInt(prompt("Введите начало отрезка"));
// var finish = parseInt(prompt("Введите конец отрезка"));
// var step = parseInt(prompt("Введите шаг"));
// var sum=0;
//
// var i=start;
// while (i<=finish)
// {
//     document.body.innerHTML+=i+"<br>";
//     sum+=i;
//
//     i+=step;
// }
// document.body.innerHTML+="sum = "+sum+"<br>";
//
// document.body.innerHTML+="==========<br>";
// i=finish;
// while (i>=start)
// {
//     document.body.innerHTML+=i+"<br>";
//     i-=step;
// }

//=========third sample==============//
// var start = parseInt(prompt("Введите начало отрезка"));
// var finish = parseInt(prompt("Введите конец отрезка"));
// var step = parseInt(prompt("Введите шаг"));
//
// for (var i=start;i<=finish;i+=step)
// {
//     document.body.innerHTML+=i+"<br>";
// }


//=========fourth sample==============//
// do {
//     var first = parseInt(prompt("Введите first"));
//     var second = parseInt(prompt("Введите second"));
// }
// while(Math.abs(first-second)!=1000);
// document.body.innerHTML+=first+"<br>"+second;


//=========fifth sample==============//
// var start = parseInt(prompt("Введите начало отрезка"));
// var finish = parseInt(prompt("Введите конец отрезка"));
// var sum=0;
//
// for (var i=start;i<=finish;i++)
// {
//     if(i%2!=0){sum+=i;}
// }
// document.body.innerHTML+=sum;

//=========sixth sample==============//
// var start = parseInt(prompt("Введите начало отрезка"));
// var finish = parseInt(prompt("Введите конец отрезка"));
//
// for (var i=start;i<=finish;i++)
// {
//     if(i%10==3 || i%10==4 || i%10==7)
//     {
//         document.body.innerHTML += i + " ";
//     }
// }

//=========sixth sample==============//
// while (true)
// {
//     var x = parseInt(prompt("Введите x (-1 для остановки)"));
//     if(x!=-1)
//     {
//         document.body.innerHTML += x + " ";
//     }
//     else {break;}
// }

//=========seventh sample==============//
// var max;
// var maxIndex;
// var index=0;
// do
// {
//     var x = parseInt(prompt("Введите x (-1 для остановки)"));
//     if(x!=-1)
//     {
//         document.body.innerHTML += x + " ";
//
//         if(index==0){max=x; maxIndex=index;}
//         else
//         {
//             if(x>max){max=x; maxIndex=index;}
//         }
//         index++;
//     }
// }
// while (x!=-1);
// document.body.innerHTML += "<br><br>";
//
// document.body.innerHTML += "Max = "+max+"<br>";
// document.body.innerHTML += "MaxIndex = "+maxIndex+"<br>";

//=========eighth sample==============//
// var count = parseInt(prompt("Введите кол-во людей"));
//
// var max;
// var maxIndex;
// for (var i=0;i<count;i++)
// {
//     var x = parseInt(prompt("Введите рост  "+(i+1)+" ученика"));
//     document.body.innerHTML += x + " ";
//     if(i==0){max=x; maxIndex=i;}
//     else
//     {
//         if(x>max){max=x; maxIndex=i;}
//     }
// }
// document.body.innerHTML += "<br><br>";
//
// document.body.innerHTML += "Max = "+max+"<br>";
// document.body.innerHTML += "MaxIndex = "+maxIndex+"<br>";


//=========nineth sample==============//
// var mydiv = document.getElementById("mydiv");
// var divDX=10;
// var i=0;
// var timer;
// function Move()
// {
//     var leftPos = mydiv.style.left;
//     var indexPX= leftPos.indexOf("px");
//     var numberPx = parseInt(leftPos.substring(0,indexPX));
//     numberPx+=divDX;
//     mydiv.style.left = numberPx+"px";
//     i++;
//     if(i==10){clearInterval(timer);i=0;}
// }
//
// function MoveDiv()
// {
//     timer= setInterval(Move,20);
// }

//=========case sample==============//
// var firstNum = parseInt(prompt("Введите firstNum"));
// var action = prompt("Введите действие(+-*/)");
// var secondNum = parseInt(prompt("Введите secondNum"));
//
// switch (action)
// {
//     case "+":
//         alert("Sum = "+(firstNum+secondNum));
//         break;
//     case "-":
//         alert("Sub = "+(firstNum-secondNum));
//         break;
//     case "*":
//         alert("Mul = "+(firstNum*secondNum));
//         break;
//     case "/":
//         if(secondNum==0)
//         {
//             alert("error 0 divider");
//         }
//         else
//         {
//             alert("Result = " + (firstNum / secondNum));
//         }
//         break;
//     default:
//         alert("Unknown action");
//         break;
// }

//=========tenth sample==============//
// for(var i=0;i<10;i++)
// {
//     if(i==4 || i==7){ continue;}
//     document.body.innerHTML += i+" ";
// }