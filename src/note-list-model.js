(function (exports) {
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.addNote = function (note) {
    id = this.notes.length
    this.notes.push(new Note(note, id));
  };

  NoteList.prototype.returnNote = function () {
    return this.notes;
  };
  exports.NoteList = NoteList;
})(this);
