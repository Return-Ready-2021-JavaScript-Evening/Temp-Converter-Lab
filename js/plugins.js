/// <reference path="../typings/globals/jquery/index.d.ts" />


// Event listener for Calculate button to convert to Celcius and place into #labelOutput
$("#btnCalc").on('click', () => {

    const $temp = $('#labelTemp').text();
    let outputNumber = 0;

    // Is conversion F or C
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

// Format output as 2-4 decimal places
function formatNumber(num) {
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 4,
    });

    return formatter.format(num);
}

// Event listener for Celcius Radio click to change input/ output labels between F/C
$("#CelciusRadio").on('click', () => {
    const $labelTemp = $('#labelTemp');
    $labelTemp.text('Celcius');
    const $labelInput = $('#labelInput');
    $labelInput.text('Faranheight');

    clearLabelOutput();
});

// Event listener for Faranheight Radio click to change input/ output labels between F/C
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

