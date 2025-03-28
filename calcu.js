let input= document.querySelector('input');
let buttons=document.querySelectorAll('button');
let string=" ";
let array=Array.from(buttons);// convert buttons into array//
    array.forEach(button=>{               //create lopp for each button  //
    button.addEventListener('click',(event)=>{      //creates a event for every button//
    	if(event.target.innerHTML=='=')
    	{
    		string=eval(string);
    		input.value=string;
    	}
    	else if(event.target.innerHTML=='AC')
    	{
             string='';
             input.value=string;
    	}
    	else if(event.target.innerHTML=='DEL')
    	{
           string=string.substring(0,string.length-1);
           input.value=string;
    	}
    	else{
    	string=string + event.target.innerHTML;
    	input.value=string;
         }
    })
 });             
 	