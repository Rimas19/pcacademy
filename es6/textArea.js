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
            let cols = TextBox.cols;
            let Arraytxt = EnteredText.split('\n');
            let rows = Arraytxt.length;
            TextBox.style.overflow = OverflowOff
            for (let i = 0; i < Arraytxt.length; i++)
                rows += parseInt(Arraytxt[i].length / cols);
            if (rows < Minrows) {
                rows = Minrows
            }
            if (rows > Maxrows) TextBox.rows = Maxrows, TextBox.style.overflow = OverflowOn;
            else TextBox.rows = rows;
        });
    }
}

let ExpandTextarea = new TextArea(5, 2);
TextBox.addEventListener('input', ExpandTextarea.Resize);

