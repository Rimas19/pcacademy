TextBox = document.getElementById('textarea');
class TextArea {
    constructor(maxrows, minrows) {
        this.Maxrows = maxrows
        this.Minrows = minrows
        this.resizeTextarea();
    }
    resizeTextarea() {
        textarea.addEventListener("input", () => {
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
            if (Rows < this.Minrows) {
                Rows = this.Minrows
            }
            if (Rows > this.Maxrows) TextBox.rows = this.Maxrows, TextBox.style.overflow = OverflowOn;
            else TextBox.rows = Rows;
        });
    }
}

let ExpandTextarea = new TextArea(5, 2);
TextBox.addEventListener('input', ExpandTextarea.resizeTextarea());

