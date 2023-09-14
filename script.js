function firstNonRepeatedChar(str) {
 // Write your code here
	var char;
  
    for(var i = 0; i < str.length; i++){
      if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
        char = str[i];
        break;
      }
    }
  
    return char;
  }
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
