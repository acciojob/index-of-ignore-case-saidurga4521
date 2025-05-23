function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let n=s2.length
	for(let i=0;i<s1.length-n+1;i++){
		if(s1.slice(i,i+n).toLowerCase()===s2.toLowerCase()){
			return i;
		}
	}
	return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));




