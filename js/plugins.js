/// <reference path="../typings/globals/jquery/index.d.ts" />

// Event listener for Calculate button to convert to Celcius and place into #labelOutput
$("#btnCalc").on('click', () => {
    const $faran = $('#fInput').val();
    const celcius = ($faran - 32) * (5 / 9);

    //format output as 2-4 decimal places
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 4,
    });

    const $labelOutput = $('#labelOutput');
    $labelOutput.text(formatter.format(celcius));
});


