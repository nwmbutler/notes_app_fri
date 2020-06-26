
function constructingWithTheGivenStringAndId() {
  let string = "My favorite language is JavaScript.";
  let note = new Note(string); 
  expect.isTrue(note.text === string);
}
constructingWithTheGivenStringAndId();

function hasMethodToReturnText() {
  //this is it part of the describe/it
  let string = "Chris's idea!!";
  let note = new Note(string);
  expect.isTrue(note.returnText() === string);
}
hasMethodToReturnText();
