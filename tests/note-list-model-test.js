function constructsWithAnEmptyArray() {
  let noteList = new NoteList();
  expect.isTrue(Array.isArray(noteList.notes));
}
constructsWithAnEmptyArray();

function canStoreNotesInNoteArray() {
  let noteList = new NoteList();
  noteList.addNote("note");
  expect.isTrue(noteList.notes[0] instanceof Note);
}
canStoreNotesInNoteArray();

function canReturnStoredNotesInNoteArray() {
  let noteList = new NoteList();
  noteList.addNote("note");
  noteList.addNote("anotherNote");
  expect.isTrue(noteList.returnNote().length === 2);
}
canReturnStoredNotesInNoteArray();

function StoresInstancesOfNoteWhenAddingNewNote() {
  let noteList = new NoteList();
  noteList.addNote("note");
  noteList.addNote("anotherNote");
  expect.isTrue(noteList.returnNote()[0].text === "note");
  expect.isTrue(noteList.returnNote()[1].text === "anotherNote");
}
StoresInstancesOfNoteWhenAddingNewNote();

function prependsWithAnIndexID() {
  let noteList = new NoteList();
  noteList.addNote("note");
  noteList.addNote("anotherNote");
  expect.isTrue(noteList.returnNote()[0].id === 0);
  expect.isTrue(noteList.returnNote()[1].id === 1);
}
prependsWithAnIndexID();