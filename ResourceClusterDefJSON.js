// Javascript to JSON - Resource Microsoft Cluster
var lines = value.split('\n');
// variabili
var resourceCluster = [];
var output = {};
var item = {};
var primogiro = true;
var OwnerNode = {};
var j = 0;

// ciclo per leggere tutte le righe di input
for (var i = 0; i < lines.length; i++) {
	// verifico se la linea corrisponde alla stringa ricercata
	if ( lines[i].match(/(OwnerNode) +: (.*)/) !== null ){	
		OwnerNode[j] = lines[i].match(/^(OwnerNode) +: (.*)/);
		j++
	} 
	
}
// resourceCluster[0] = OwnerNode;

resourceCluster[resourceCluster.length] = OwnerNode;
return JSON.stringify(OwnerNode);
//return output;	