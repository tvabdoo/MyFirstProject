function myFunction() {
  var x = document.getElementById("textBox").value;
  var wordCounter = 0;
  var sentenceCounter = 0;
  var averageWords = 0;
  var spaceCounter = 0;

  for(var i=0; i<=x.length; i++){
    if(x[i]===' '){
      spaceCounter++;
      wordCounter++;
      }
    if(x[i] =='.'|| x[i] =='?' || x[i] == '?'){
      sentenceCounter++;
      }
}
  document.getElementById("row1").innerHTML='There are'+wordCounter+'words in the text.'
  document.getElementById("row2").innerHTML='There are'+sentenceCounter+'sentences in the text'
  document.getElementById("row3").innerHTML='There are'+spaceCounter+'spaces in the text'
  document.getElementById("row4").innerHTML='There are'+averageWords+'average words in the text'
}
