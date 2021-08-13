let x = 0;
function myfunction() {
  x++;
  postMessage(x);
  setTimeout("myfunction()", 500);
}

myfunction();
