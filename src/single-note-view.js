
(function (exports) {
  function SingleNoteView(noteModel) {
    this.noteModel = noteModel; 
}

SingleNoteView.prototype.returnView = function () {  
  return `<div>${this.noteModel.text}</div>`
}

exports.SingleNoteView = SingleNoteView;

})(this);
