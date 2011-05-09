// What is accum at the end?
var accum = 1.0;
for(var i=0; i<10; i++) {
  switch(i) {
  case "7":
    accum += 42;
  case 3:
    accum *= 2;
    break;
  case true:
    do {
      accum += 999
    } while(accum < 2000);
  case 4:
    accum += 63;
  default:
    accum += 1;
  }
}
