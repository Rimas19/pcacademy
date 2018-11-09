let textbox = document.getElementById('textarea')
class TextArea {
    resizeTextarea() {
        textarea.addEventListener("input", function () {
            let maxrows = 5
            let minrows = 2
            let overflOn = 'auto'
            let overfOff = 'hidden'
            let txt = textbox.value
            let rows
            let textarea = document.getElementById('textarea')
            textarea.style.overflow = overfOff
            let arraytxt = txt.split('\n')
            if (arraytxt <= minrows) {
                rows = minrows
            } else {
                rows = arraytxt.length
            }
            if (rows > maxrows) {
                textarea.style.overflow = overflOn
                textbox.rows = maxrows
            } else {
                textbox.rows = rows
            }
        });
    }
}

const test = new TextArea();
textbox.addEventListener('keyup', test.resizeTextarea);



