
function noteControllerInstance() {
   let controller = new NoteController();
   expect.isTrue(controller instanceof NoteController)
}

noteControllerInstance();

function checkInnerHTMLPropertyValue() {
   let notelist = new NoteList();
       notelist.addNote("Favourite food: pesto");
   let view = new NoteController(notelist);
   view.getHTML();
   let string = `<ul><li><div><a id="link0" href="#notes/0">Favourite food: pest</a></div></li></ul>`

   expect.isTrue(document.getElementById('app').innerHTML === string, "display list 1")
}
checkInnerHTMLPropertyValue();

function checkLinksExist() {
  let notelist = new NoteList();
      notelist.addNote("Favourite food: pesto");
  let view = new NoteController(notelist);
  view.getHTML();
  startListen(view);
  document.getElementById('link0').click()

  expect.isTrue(window.location.hash.split('#')[1] === "notes/0", "link test 1")
}
setTimeout(() => {
  checkLinksExist()
}, 200);

function checkLinksExist2() {
  let notelist = new NoteList();
      notelist.addNote("Favourite food: pesto");
      notelist.addNote("hi, this is a note, exite!")
  let view = new NoteController(notelist);
  view.getHTML();
  startListen(view);
  document.getElementById('link1').click()

  expect.isTrue(window.location.hash.split('#')[1] === "notes/1", "link test 2")
}
setTimeout(() => {
  checkLinksExist2()
}, 200);

function loadingSingleNotePage() {
   let notelist = new NoteList();
      notelist.addNote("Favourite food: pesto");
      notelist.addNote("hi, this is a note, exite!")
  let view = new NoteController(notelist);
  view.getHTML();
  startListen(view);
  document.getElementById('link1').click()
  setTimeout(() => {
  expect.isTrue(document.getElementById("app").innerHTML === `<div>hi, this is a note, exite!</div>`, "single note page")
}, 200);
}
  setTimeout(() => {
loadingSingleNotePage();
}, 200);

function loadingSingleNotePage2() {
   let notelist = new NoteList();
      notelist.addNote("Favourite food: pesto");
      notelist.addNote("hi, this is a note, exite!")
  let view = new NoteController(notelist);
  view.getHTML();
  startListen(view);
  document.getElementById('link0').click()
  setTimeout(() => {
  expect.isTrue(document.getElementById("app").innerHTML === `<div>Favourite food: pesto</div>`, "single note page 2")
}, 200);
}
  setTimeout(() => {
loadingSingleNotePage2();
}, 200);
