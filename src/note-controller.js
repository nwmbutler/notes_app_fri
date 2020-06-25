
(function (exports) {

    function NoteController(notelist) {
        this.noteListModel = notelist;
        this.view = new NoteListView(this.noteListModel)
    }

    NoteController.prototype.getHTML = function () {
        var ele = document.getElementById('app')
        ele.innerHTML = this.view.returnHTML();
    }


    exports.NoteController = NoteController;
})(this);


