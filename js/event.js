function makered() {
    document.body.style.backgroundColor = 'red';
}

const blueButton = document.getElementById('blue_button');

        blueButton.onclick = makeBlue;

        function makeBlue() {
            document.body.style.backgroundColor = 'blue';
        }

        const greenButton = document.getElementById('green_button');
        greenButton.onclick = function makeGreen() {
            document.body.style.backgroundColor = 'green';
        };