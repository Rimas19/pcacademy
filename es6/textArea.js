const textBox = document.getElementById('textarea');
class TextArea {
    constructor(maxrows, minrows) {
        this.maxRows = maxrows
        this.minRows = minrows
        this.resizeTextarea();
    }
    resizeTextarea() {
        textarea.addEventListener("input", () => {
            let overflowOn = 'auto'
            let overflowOff = 'hidden'
            let textBox = document.getElementById('textarea')
            let enteredText = textBox.value;
            let cols = textBox.cols;
            let arrayText = enteredText.split('\n');
            let rows = arrayText.length;

            textBox.style.overflow = overflowOff
            for (let i = 0; i < arrayText.length; i++)
                rows += parseInt(arrayText[i].length / cols);
            if (rows < this.minRows) {
                rows = this.minRows
            }
            if (rows > this.maxRows) textBox.rows = this.maxRows, textBox.style.overflow = overflowOn;
            else textBox.rows = rows;
        });
    }
}

let ExpandTextarea = new TextArea(5, 2);
textBox.addEventListener('input', ExpandTextarea.resizeTextarea());

