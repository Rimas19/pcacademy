const textbox = document.getElementById('textarea');
class TextArea {

    // constructor(maxrows, minrows) {
    //     this.maxrows = maxrows;
    //     this.minrows = minrows;
    // }

    resize() {
        textarea.addEventListener("input", function () {
            let maxrows = 5;
            let minrows = 2;
            let overflowOn = 'auto'
            let overflowOff = 'hidden'
            let textbox = document.getElementById('textarea')
            let enteredtext = textbox.value;
            let cols = textbox.cols;
            let arraytxt = enteredtext.split('\n');
            let rows = arraytxt.length;
            textbox.style.overflow = overflowOff
            for (let i = 0; i < arraytxt.length; i++)
                rows += parseInt(arraytxt[i].length / cols);
            if (rows < minrows) {
                rows = minrows
            }
            if (rows > maxrows) textbox.rows = maxrows, textbox.style.overflow = overflowOn;
            else textbox.rows = rows;
        });
    }
}

let expandTextarea = new TextArea(5, 2);
textbox.addEventListener('input', expandTextarea.resize);

