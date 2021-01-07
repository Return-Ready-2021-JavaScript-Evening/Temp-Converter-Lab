/// <reference path="../typings/globals/jquery/index.d.ts" />


// Event listener for Calculate button to convert to Celcius and place into #labelOutput
$("#btnCalc").on('click', () => {

    // Is conversion f or c
    const $temp = $('#labelTemp').text();
    let outputNumber = 0;

    if ($temp.toLowerCase() == 'celcius') {
        const $faran = $('#fInput').val();
        outputNumber = ($faran - 32) * (5 / 9);
    }
    else {
        const $celcius = $('#fInput').val();
        outputNumber = ($celcius * (5 / 9)) + 32;
    }
    
    const formattedNumber = formatNumber(outputNumber);

    const $labelOutput = $('#labelOutput');
    $labelOutput.text(formattedNumber);

});

//format output as 2-4 decimal places
function formatNumber(num) {
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 4,
    });

    return formatter.format(num);
}

$("#CelciusRadio").on('click', () => {
    const $labelTemp = $('#labelTemp');
    $labelTemp.text('Celcius');
    const $labelInput = $('#labelInput');
    $labelInput.text('Faranheight');

    clearLabelOutput();
});

$("#FaranheightRadio").on('click', () => {
    const $labelTemp = $('#labelTemp');
    $labelTemp.text('Faranheight');
    const $labelInput = $('#labelInput');
    $labelInput.text('Celcius');

    clearLabelOutput();
});

// Clear output when user toggles between temp type
function clearLabelOutput() {
    const $labelOutput = $('#labelOutput');
    $labelOutput.html('&nbsp');
}

