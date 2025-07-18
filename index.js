const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
    counterEl.innerText = "0"; 
    incrementCounter();

    function incrementCounter() {
        let currentNum = +counterEl.innerText; 
        const dataCeil = parseFloat(counterEl.getAttribute("data-ceil")); 
        const increment = dataCeil / 15;
        currentNum = Math.floor(currentNum+increment); 
        if(currentNum < dataCeil){
            counterEl.innerText = currentNum.toFixed(2); 
            setTimeout(incrementCounter, 50);
        }
        else{
            counterEl.innerText = dataCeil;
        }
    }
});
