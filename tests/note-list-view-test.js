
function constructsWithAnNoteListModel() {
    let list = new NoteList();
    let view = new NoteListView(list);
    expect.isTrue(view.frame instanceof NoteList);
}
constructsWithAnNoteListModel();

function returnHTMLStringNoNote() {
    let list = new NoteList();
    let view = new NoteListView(list);
    expect.isTrue(view.returnHTML() === "<ul><li><div></div></li></ul>")
}
returnHTMLStringNoNote();

function returnHTMLStringOneNote() {
    let list = new NoteList();
    let view = new NoteListView(list);
    list.addNote("Rae");
    var string = `<ul><li><div><a id="link0" href="#notes/0">Rae</a></div></li></ul>`
    expect.isTrue(view.returnHTML() === string, "one note, list-view")
}
returnHTMLStringOneNote();

function returnHTMLStringSeveralNotes() {
    let list = new NoteList();
    let view = new NoteListView(list);
    list.addNote("Rae");
    list.addNote("Minsi");
    var string1 = `<ul><li><div><a id="link0" href="#notes/0">Rae</a></div></li>`
    var string2 = `<li><div><a id="link1" href="#notes/1">Minsi</a></div></li></ul>`
    var string = string1 + string2
    expect.isTrue(view.returnHTML() === string, "several notes, list-view")
}
returnHTMLStringSeveralNotes();

function returnHTMLStringWithin20Char() {
    let list = new NoteList();
    let view = new NoteListView(list);
    list.addNote("This is an awesome test for some long string");
    var string = `<ul><li><div><a id="link0" href="#notes/0">This is an awesome t</a></div></li></ul>`
    expect.isTrue(view.returnHTML() === string, "returns 20 characters")

}
returnHTMLStringWithin20Char();
