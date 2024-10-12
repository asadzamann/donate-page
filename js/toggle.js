// show donation section after donation button clicked
document.getElementById('donation-button').addEventListener('click', function(){
    showSectionById('donation-section');
    colorChange('donation-button');

});
// show history section after history button clicked
document.getElementById('history-button').addEventListener('click', function(){
    showSectionById('history-section');
    colorChange('history-button');
})