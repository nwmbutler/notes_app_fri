
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
        var ele = document.getElementById('app')
        ele.innerHTML = `<div>hi, this is a note, exite!</div>`;
    }


    exports.NoteController = NoteController;
})(this);


