const textBox = document.getElementById('textarea');
class TextArea {
    constructor(maxrows, minrows) {
        this.maxRows = maxrows;
        this.minRows = minrows;
        this.resizeTextarea();
    }
    resizeTextarea() {
        textarea.addEventListener("input", () => {
            const overflowOn = 'auto';
            const overflowOff = 'hidden';
            const textBox = document.getElementById('textarea')
            let enteredText = textBox.value;
            let cols = textBox.cols;
            const arrayText = enteredText.split('\n');
            let rows = arrayText.length;
            textBox.style.overflow = overflowOff;
            for (let i = 0; i < arrayText.length; i++) {
                rows += parseInt(arrayText[i].length / cols);
            }
            if (rows < this.minRows || enteredText === '') {
                rows = this.minRows
            }
            if (rows > this.maxRows) {
                textBox.rows = this.maxRows;
                textBox.style.overflow = overflowOn;
            }
            else {
                textBox.rows = rows;
            }
        });
    }
}

let expandTextarea = new TextArea(5, 2);
textBox.addEventListener('input', expandTextarea.resizeTextarea());

