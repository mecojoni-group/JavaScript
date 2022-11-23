  // script javascript esterno
  let n1 = prompt( "Insert first number" );
  let n2 = prompt( "Insert second number" );
  
 
  function getMinNumber( a, b ) {
	if ( a < b ) {
		alert( "the smallest number is " + a );
	}
	else if ( a == b ) {
		alert( "the numbers entered are the same" );
	}
	else {
		alert( "the smallest number is " + b );
	}
  }
  
  
 getMinNumber( n1, n2 );
  
  
  
  /*commento
  
  AND ( & )
  OR ( | )
  XOR ( ^ )
  NOT ( ~ )
  LEFT SHIFT ( << )
  RIGHT SHIFT ( >> )
  ZERO-FILL RIGHT SHIFT ( >>> )
  
  
  // three operations in one line - for cicle
  for (a = 1, b = 3, c = a * b; a < 10; a++) {
  	...
  }
  
  multilinea*/ 