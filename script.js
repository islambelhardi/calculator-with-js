
/*to get what we enter as a text*/
function gethis(){
    return document.getElementById("input").innerText;
}
/* to print in input section */
function printhis(num){
   document.getElementById("input").innerText=num;
}

function getres(){
    return document.getElementById("results").innerText;
}

function printres(num){
    if(num==""){
   document.getElementById("results").innerText=num;
}
    else{
        document.getElementById("results").innerText=getformatednum(num);
    }
}

function getformatednum(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reversenum(num){
    return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName('operator');

for (var i=0;i< operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
			printhis("");
			printres("");
		}
		else if(this.id=="backspace"){
			var output=reversenum(getres()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printres(output);
			}
		}
		else{
			var output=getres();
			var history=gethis();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reversenum(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printres(result);
					printhis("");
				}
				else{
					history=history+this.id;
					printhis(history);
					printres("");
				}
			}
		}
		
	});
}  
  
var number = document.getElementsByClassName('number');

for (var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
            var output = reversenum(getres());
            if(output!=NaN){
                output=output+this.id;
                printres(output);
            }
    }
    );

}