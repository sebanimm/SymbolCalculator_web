function onlyOneInput (input) {

    const checkboxes = document.getElementsByName("symbol-check");

    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    })

    input.checked = true;
}

function numberMaxLength(object) {
    if (object.value.length > object.maxLength) {
        object.value = object.value.slice(0, object.maxLength);
    }
}

function uncheckSymbol (btn) {

    const checkboxes = document.getElementsByName("symbol-check");

    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    })

    btn.checked = false;
}


// 소멸의 여로 심볼 업그레이드 비용
function firstArcSymNeedMeso () {
    const symLv = document.getElementById("level-input").value;
    const userMeso10K = parseInt(document.getElementById("meso-input-10K").value);
    const userMeso100M = parseInt(document.getElementById("meso-input-100M").value);  

    let defaultMeso = 3110000;
    let needMeso = 0;
    let needMeso100M = 0;
    let needMeso10K = 0;
    const maxLvMeso = 811490000;
    
    for (let i = 1; i < symLv; i++) {
        defaultMeso += 3960000;
        needMeso += defaultMeso;
    }
    
    needMeso = maxLvMeso - needMeso;
    needMeso100M = Math.floor(needMeso / 100000000);
    needMeso10K =  Math.floor((needMeso / 10000) - (needMeso100M * 10000));
    
    if (needMeso10K < 0) {
        needMeso10K += 10000;
        needMeso100M -= 1;
    } 

    const needMesoTotal = needMeso100M * 10000 + needMeso10K;
    let resultMeso100M = needMeso100M - userMeso100M;
    let resultMeso10K = needMeso10K - userMeso10K;

    if (resultMeso10K < 0) {
        resultMeso10K += 10000;
        resultMeso100M -= 1;
    }

    const userMesoTotal = userMeso100M * 10000 + userMeso10K;
    const resultMesoTotal = resultMeso100M * 10000 + resultMeso10K;
    const overMesoTotal = needMesoTotal - userMesoTotal;
    let overMeso100M = Math.ceil(overMesoTotal / 10000);
  
    const overMeso10K = overMeso100M * 10000 - overMesoTotal;
    if (overMeso100M < 0) {
        overMeso100M = -overMeso100M;
    }

    document.querySelector("#result > p:first-child").id = "result-meso";

    if (resultMesoTotal > 0) {
        if (resultMeso100M > 0)
        {
            document.getElementById("result-meso").innerHTML = `더 필요한 메소는 ${resultMeso100M}억 ${resultMeso10K}만 메소담!`;
        }
        else {
            document.getElementById("result-meso").innerHTML = `더 필요한 메소는 ${resultMeso10K}만 메소담!`;
        }
    } 
    else if (resultMesoTotal === 0) {
        document.getElementById("result-meso").innerHTML = `메소는 딱 남아 떨어진담!`;
    }
    else {
        document.getElementById("result-meso").innerHTML = `메소는 충분히 많담! ${overMeso100M}억 ${overMeso10K}만 메소나 남는담!`;
    }
}

// 츄츄 아일랜드 심볼 업그레이드 비용
function secondArcSymNeedMeso () {
    let defaultMeso = 6220000;
    let needMeso = 0;
    let needMeso100M = 0;
    let needMeso10K = 0;
    const maxLvMeso = 995980000;
    
    for (let i = 1; i < symLv; i++) {
        defaultMeso += 4620000;
        needMeso += defaultMeso;
    }
    
    needMeso = maxLvMeso - needMeso;
    needMeso100M = Math.floor(needMeso / 100000000);
    needMeso10K =  Math.floor((needMeso / 10000) - (needMeso100M * 10000));
    
    if (needMeso10K < 0) {
        needMeso10K += 10000;
        needMeso100M -= 1;
    }
    
    document.getElementById("box-result").innerHTML = `더 필요한 메소는 ${needMeso100M}억 ${needMeso10K}만 메소담!`;
}

// 레헬른 심볼 업그레이드 비용
function thirdArcSymNeedMeso () { 
    let defaultMeso = 9330000;
    let needMeso = 0;
    let needMeso100M = 0;
    let needMeso10K = 0;
    const maxLvMeso = 1180470000;
    
    for (let i = 1; i < symLv; i++) {
        defaultMeso += 5280000;
        needMeso += defaultMeso;
    }
    
    needMeso = maxLvMeso - needMeso;
    needMeso100M = Math.floor(needMeso / 100000000);
    needMeso10K =  Math.floor((needMeso / 10000) - (needMeso100M * 10000));
    
    if (needMeso10K < 0) {
        needMeso10K += 10000;
        needMeso100M -= 1;
    }
    
    document.getElementById("result").innerHTML = `더 필요한 메소는 ${needMeso100M}억 ${needMeso10K}만 메소담!`;
}

// 아르카나 ~ 에스페라 심볼 업그레이드 비용
function otherArcSymsNeedMeso () {
    const symLv = document.getElementById("level-input").value;
    
    let defaultMeso = 11196000;
    let needMeso = 0;
    let needMeso100M = 0;
    let needMeso10K = 0;
    const maxLvMeso = 1341324000;
    
    for (let i = 1; i < symLv; i++) {
        defaultMeso += 5940000;
        needMeso += defaultMeso;
    }
    
    needMeso = maxLvMeso - needMeso;
    needMeso100M = Math.floor(needMeso / 100000000);
    needMeso10K =  Math.floor((needMeso / 10000) - (needMeso100M * 10000));

    if (needMeso10K < 0) {
        needMeso10K += 10000;
        needMeso100M -= 1;
    }

    document.getElementById("result").innerHTML = `더 필요한 메소는 ${needMeso100M}억 ${needMeso10K}만 메소담!`;
}

// 세르니움 심볼 업그레이드 비용
function firstAutSymNeedMeso () {
    const symLv = document.getElementById("level-input").value;
    
    let defaultMeso = 96900000;
    let needMeso = 0;
    let needMeso100M = 0;
    let needMeso10K = 0;
    const maxLvMeso = 5836500000;
    
    for (let i = 1; i < symLv; i++) {
        defaultMeso += 88500000;
        needMeso += defaultMeso;
    }
    
    needMeso = maxLvMeso - needMeso;
    needMeso100M = Math.floor(needMeso / 100000000);
    needMeso10K =  Math.floor((needMeso / 10000) - (needMeso100M * 10000));

    if (needMeso10K < 0) {
        needMeso10K += 10000;
        needMeso100M -= 1;
    }

    document.getElementById("result").innerHTML = `더 필요한 메소는 ${needMeso100M}억 ${needMeso10K}만 메소담!`;
}

// 호텔 아르크스 심볼 업그레이드 비용
function secondAutSymNeedMeso () {
    const symLv = document.getElementById("level-input").value;
    
    let defaultMeso = 106600000;
    let needMeso = 0;
    let needMeso100M = 0;
    let needMeso10K = 0;
    const maxLvMeso = 6417500000;
    uj45
    for (let i = 1; i < symLv; i++) {
        defaultMeso += 97300000;
        needMeso += defaultMeso;
    }
    
    needMeso = maxLvMeso - needMeso;
    needMeso100M = Math.floor(needMeso / 100000000);
    needMeso10K =  Math.floor((needMeso / 10000) - (needMeso100M * 10000));

    if (needMeso10K < 0) {
        needMeso10K += 10000;
        needMeso100M -= 1;
    }

    document.getElementById("result").innerHTML = `더 필요한 메소는 ${needMeso100M}억 ${needMeso10K}만 메소담!`;
}

// 아케인 심볼 업그레이드 필요 갯수
function arcSymNeedNumber() {
    const symLv = document.getElementById("level-input").value;
    const userSymNumber = document.getElementById("number-input").value;

    let needSymNumber = 0;
    const maxSymNumber = 2679;

    for (let i = 1; i < symLv; i++) {
        needSymNumber = needSymNumber + (i ** 2 + 11);
    }

    const overSymNumber = userSymNumber - (maxSymNumber - needSymNumber);

    needSymNumber = (maxSymNumber - needSymNumber) - userSymNumber;

    document.querySelector("#result > p:last-child").id = "result-number";

    if (needSymNumber > 0) {
        document.getElementById("result-number").innerText = `더 필요한 심볼의 갯수는 ${needSymNumber}개담!`;
    }
    else if (needSymNumber === 0) {
        document.getElementById("result-number").innerText = `심볼은 더 필요하지 않담!`;
    }
    else {
        document.getElementById("result-number").innerText = `심볼이 ${overSymNumber}개나 남는담! 값을 너무 많이 넣은 것 같담..`;
    }
}

// 어센틱 심볼 업그레이드 필요 갯수
function autSymNeedNumber () {
    const symLv = document.getElementById("level-input").value;
    const userSymNumber = document.getElementById("number-input").value;

    let needSymNumber = 0;
    const maxSymNumber = 4565;

    for (let i = 1; i < symLv; i++) {
        needSymNumber = needSymNumber + (9 * (i ** 2) + 20 * i);
    }

    const overSymNumber = userSymNumber - (maxSymNumber - needSymNumber);

    needSymNumber = (maxSymNumber - needSymNumber) - userSymNumber;

    document.querySelector("#result > p:last-child").id = "result-number";

    if (needSymNumber > 0) {
        document.getElementById("result-number").innerText = `더 필요한 심볼의 갯수는 ${needSymNumber}개담!`;
    }
    else if (needSymNumber === 0) {
        document.getElementById("result-number").innerText = `심볼은 최대치담!`;
    }
    else {
        document.getElementById("result-number").innerText = `심볼이 ${overSymNumber}개나 남는담! 값을 너무 많이 넣은 것 같담..`;
    }
}

let symType;

document.getElementsByName("symbol-check").addEventListener("click", function() {
    symType = document.getElementsByName("symbol-check").value;
});

function symbolCalculate () {

    const symLv = document.getElementById("level-input").value;
    const userMeso10K = parseInt(document.getElementById("meso-input-10K").value);
    const userMeso100M = parseInt(document.getElementById("meso-input-100M").value);

    let defaultMeso = 0;
    let needMeso = 0;
    let needMeso100M = 0;
    let needMeso10K = 0;
    let lvUpMeso = 0;
    let maxLvMeso = 0;

    function firstArcSymNeedMeso () {
        defaultMeso += 3110000;
        lvUpMeso += 3960000;
        maxLvMeso += 811490000;
    }

    function secondArcSymNeedMeso () {
        defaultMeso += 3110000;
        lvUpMeso += 3960000;
        maxLvMeso += 811490000;
    }

    function thirdArcSymNeedMeso () {
        defaultMeso += 3110000;
        lvUpMeso += 3960000;
        maxLvMeso += 811490000;
    }

    function otherArcSymsNeedMeso () {
        defaultMeso += 3110000;
        lvUpMeso += 3960000;
        maxLvMeso += 811490000;
    }

    function firstAutSymNeedMeso () {
        defaultMeso += 3110000;
        lvUpMeso += 3960000;
        maxLvMeso += 811490000;
    }

    function firstAutSymNeedMeso () {
        defaultMeso += 3110000;
        lvUpMeso += 3960000;
        maxLvMeso += 811490000;
    }


    if (symType === 1) {
        firstArcSymNeedMeso;
    }
    else if (symType === 2) {
        secondArcSymNeedMeso;
    }
    else if (symType === 3) {
        thirdArcSymNeedMeso;
    }
    else if (symType === 4 || symType === 5 || symType === 6) {
        otherArcSymsNeedMeso;
    }
    else if (symType === 7) {
        firstAutSymNeedMeso;
    }
    else {
        secondAutSymNeedMeso;
    }

    if (symType >= 1 && symType <= 6) {
        arcSymNeedNumber;
    }
    else {
        autSymNeedNumber;
    }


    
    for (let i = 1; i < symLv; i++) {
        defaultMeso += lvUpMeso;
        needMeso += defaultMeso;
    }
    
    needMeso = maxLvMeso - needMeso;
    needMeso100M = Math.floor(needMeso / 100000000);
    needMeso10K =  Math.floor((needMeso / 10000) - (needMeso100M * 10000));
    
    if (needMeso10K < 0) {
        needMeso10K += 10000;
        needMeso100M -= 1;
    } 

    const needMesoTotal = needMeso100M * 10000 + needMeso10K;
    let resultMeso100M = needMeso100M - userMeso100M;
    let resultMeso10K = needMeso10K - userMeso10K;

    if (resultMeso10K < 0) {
        resultMeso10K += 10000;
        resultMeso100M -= 1;
    }

    const userMesoTotal = userMeso100M * 10000 + userMeso10K;
    const resultMesoTotal = resultMeso100M * 10000 + resultMeso10K;
    const overMesoTotal = needMesoTotal - userMesoTotal;
    let overMeso100M = Math.ceil(overMesoTotal / 10000);
  
    const overMeso10K = overMeso100M * 10000 - overMesoTotal;
    if (overMeso100M < 0) {
        overMeso100M = -overMeso100M;
    }

    document.querySelector("#result > p:first-child").id = "result-meso";
    
    if (resultMesoTotal > 0) {
        if (resultMeso100M > 0)
        {
            document.getElementById("result-meso").innerHTML = `더 필요한 메소는 ${resultMeso100M}억 ${resultMeso10K}만 메소담!`;
        }
        else {
            document.getElementById("result-meso").innerHTML = `더 필요한 메소는 ${resultMeso10K}만 메소담!`;
        }
    } 
    else if (resultMesoTotal === 0) {
        document.getElementById("result-meso").innerHTML = `메소는 딱 남아 떨어진담!`;
    }
    else {
        document.getElementById("result-meso").innerHTML = `메소는 충분히 많담! ${overMeso100M}억 ${overMeso10K}만 메소나 남는담!`;
    }

    defaultMeso = 0;
    needMeso = 0;
    needMeso100M = 0;
    needMeso10K = 0;
    lvUpMeso = 0;
    maxLvMeso = 0;
}