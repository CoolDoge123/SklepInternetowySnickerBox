document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('calculator-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const gender = form.elements['gender'].value;
        const times = parseFloat(form.elements['times'].value);
        const steps = parseInt(form.elements['steps'].value);
        const heartRate = parseInt(form.elements['heart-rate'].value);

        let pace; 
        let efficiency; 

        pace = times;

        if (gender === 'male') {
            efficiency = steps / 130;
        } else if (gender === 'female') {
            efficiency = steps / 120;
        }

        const score = Math.round((1 / pace) * efficiency * heartRate);

        resultDiv.textContent = `Twój wynik to ${score}. Im wyższy wynik, tym lepsza forma fizyczna.`;
    });
});
