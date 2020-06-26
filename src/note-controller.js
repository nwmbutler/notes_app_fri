
(function (exports) {
  function NoteController(notelist) {
    this.noteListModel = notelist;
    this.view = new NoteListView(this.noteListModel)
  }

  NoteController.prototype.getHTML = function () {
    var ele = document.getElementById('app')
    ele.innerHTML = this.view.returnHTML();
  }

  NoteController.prototype.startListen = function () {
    window.addEventListener("hashchange", changeHTML)
  }

  function changeHTML () {
    var noteID = window.location.hash.split('/')[1]
    console.log(window.location.hash)
    console.log(noteID)
    var ele = document.getElementById('app')
    ele.innerHTML = `<div>hi, this is a note, exite!</div>`;
  }

  exports.NoteController = NoteController;
})(this);

function startListen(controller) {
  window.addEventListener("hashchange", function () {
    var noteID = window.location.hash.split("/")[1]
    var singleNoteView = new SingleNoteView(controller.noteListModel.returnNote()[noteID])
    this.document.getElementById('app').innerHTML = singleNoteView.returnView()
  });
}
