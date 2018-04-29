define('wiring', ["./amd"], function(amd){
    document.getElementById('myButton').addEventListener('click', amd.updateSum);
    return;
});

wiring();