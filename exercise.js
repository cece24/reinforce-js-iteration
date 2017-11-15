var items = ["purchase domain", "install SSL certificate", "deploy site", "celebrate success"];

var itemCounter = 0;

console.log("Todo:");
for(var i = 0; i < items.length; i++){
  itemCounter++;
  console.log(itemCounter + ": " + items[i]);
}
