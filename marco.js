// Javascript to JSON - Resource Microsoft Cluster
value           = `OwnerNode              : iwmisrqvsh02
                   ResourceType           : IP Address
                   State                  : Online
                   Name                   : Cluster IP Address
                   MaintenanceMode        : False
                   PersistentState        : 1
                   OwnerNode              : iwmisrqvsh02
                   ResourceType           : Network Name
                   State                  : Online
                   Name                   : Cluster Name
                   MaintenanceMode        : False
                   PersistentState        : 1
                   OwnerNode              : iwmisrqvsh02
                   ResourceType           : Generic Script
                   State                  : Online
                   Name                   : clusweb7qlikscript10 Script
                   MaintenanceMode        : False
                   PersistentState        : 1`

var lines         = value.split('\n');
// variabili
var item          = {};
var temp_owner   = {};
var j          = 0;
var k         = 0;


// ciclo per invertire riga OwnerNode con Name e viceversa
for (var i = 0; i < lines.length; i++) {
  //elimino spazi vuoti
  lines[i] = lines[i].split(" ").join("");
  
  // Inverto riga OwnerNode con riga Name
  if ( lines[i].match(/(OwnerNode)+:(.*)/) !== null )
  {  
    temp_owner = lines[i];
    k = j;
  }
  else if ( lines[i].match(/(Name)+:(.*)/) !== null )
  {
    lines[k] = lines[i];
    lines[i] = temp_owner;
  }
  j++;

}

var jsonObj = {};
for (var i = 0 ; i < lines.length; i++) {
    jsonObj[lines[i].split(":")[0]] = lines[i].split(":")[1];
}

console.log(jsonObj);