

    'use strict';
    let allTeg = [];
    let inputGet = document.getElementById('inputGet');
    let displayTag = document.getElementById('displayTag');

    inputGet.children[1].addEventListener('click', function () {
        let inputOne = inputGet.children[0];
        let valueInput = inputOne.value;

        if (allTeg.includes(valueInput) || !valueInput.length) {
            return;
        }
        allTeg.push(valueInput);
        inputOne.value = '';
        inputOne.focus();
        allTeg.sort();
        addTeg(allTeg, displayTag);
    });

    function addTeg(arr, elem) {
        let insertHtml = '';
        for (let i = 0; i < arr.length; ++i){
            insertHtml += '<span>'+ arr[i] +' <a onclick="deleteClick(this)">&#10060;</a></span>';
        }
        elem.innerHTML = insertHtml;
    }



    function deleteClick(item) {

        let findDiv = item.parentElement;
        findDiv.remove();
        let  onlyText = findDiv.innerText.slice(0, -2);

        allTeg.forEach((elem, index) => {
            if (elem === onlyText) return allTeg.splice(index, 1);
        });
    }
    /*-------------------------------------------------------------------------------------------------*/
    let inputSearch = document.getElementById('inputSearch');
    let save = document.getElementById('save');

    inputSearch.children[0].addEventListener('keyup', function (e) {
        let result = allTeg.filter(elem => elem.includes(e.target.value));
        addTeg(result, displayTag);

        if (e.keyCode === 13) {
            addTeg(result, save);
            e.target.value = '';
        }
    })


