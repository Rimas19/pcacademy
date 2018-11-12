const TextBox = document.getElementById('textarea');
class TextArea {

    // constructor(maxrows, minrows) {
    //     this.maxrows = maxrows;
    //     this.minrows = minrows;
    // }
    Resize() {
        textarea.addEventListener("input", function () {
            let Maxrows = 5;
            let Minrows = 2;
            let OverflowOn = 'auto'
            let OverflowOff = 'hidden'
            let TextBox = document.getElementById('textarea')
            let EnteredText = TextBox.value;
            let Cols = TextBox.cols;
            let Arraytxt = EnteredText.split('\n');
            let Rows = Arraytxt.length;
            TextBox.style.overflow = OverflowOff
            for (let i = 0; i < Arraytxt.length; i++)
                Rows += parseInt(Arraytxt[i].length / Cols);
            if (Rows < Minrows) {
                Rows = Minrows
            }
            if (Rows > Maxrows) TextBox.rows = Maxrows, TextBox.style.overflow = OverflowOn;
            else TextBox.rows = Rows;
        });
    }
}

let ExpandTextarea = new TextArea(5, 2);
TextBox.addEventListener('input', ExpandTextarea.Resize);

