
(function (exports) {
    function NoteListView(notelist) {
        this.frame = notelist;
    }

    NoteListView.prototype.returnHTML = function () {
        var array = this.frame.returnNote()
        var element = array.map(function(note) {
            return `<a id="link${note.id}" href="#notes/${note.id}">${note.text.substring(0, 20)}</a>`

        });

        return "<ul><li><div>" + element.join("</div></li><li><div>") + "</div></li></ul>"
    }
    exports.NoteListView = NoteListView;
})(this);
