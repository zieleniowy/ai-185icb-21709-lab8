let o = {
    val: 0,
    checked: new Date()*1,
    result: 0
};

setInterval(()=>{
    const d = new Date()*1;
    o.val += Math.floor((d - o.checked)/1000);
    o.checked = d;
}, 1000);

const calc = ()=>{
    ++o.result;
    setTimeout(calc, 0);
}
calc();







onmessage = function(oEvent) {
    switch(oEvent.data){
        case 'copy':
            postMessage(JSON.stringify({ command: 'copy', payload: o }));
            break;
        default: 
            return;
    }
};