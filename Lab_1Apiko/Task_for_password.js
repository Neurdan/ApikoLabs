//Const in the program
const n = "0123456789";
const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const lAn = l+n;
const s = "!№;%:?*()_+="
const lAs = l+s;
const nAs = n + s;
const lAnAs = l+n+s;

//console.log(lAnAs);

//Functions
function chooseTypeForPassword(length,isNumber,isChar,isSymbol){
	if(isNumber && !isChar && !isSymbol) createPasswordWithParametres(length,n);
	else if(isChar && !isNumber && !isSymbol) createPasswordWithParametres(length,l);
	else if(isSymbol && !isNumber && !isChar) createPasswordWithParametres(length,s);
	else if(isNumber && isChar && !isSymbol)createPasswordWithParametres(length,lAn);
	else if(isNumber && isSymbol && !isChar)createPasswordWithParametres(length,nAs);
	else if(isSymbol && isChar && !isNumber)createPasswordWithParametres(length,lAs);
	else createPasswordWithParametres(length,lAnAs);
}

function createPasswordWithParametres(length,type_password)
{
	let password = "";
	for (let i = 0; i < length; i++) password += type_password.charAt(Math.floor(Math.random() * type_password.length));
	console.log(password);
}

//Create password
let length = 25;
chooseTypeForPassword(length,true,true,true);
