let fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
    console.log("Done");
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        console.log('Ready state is ', xhr.readyState)
    }

    xhr.open('GET','test.txt',true);
    xhr.onprogress = function(){
        console.log("On progress.")
    }

    xhr.onload = function(){
        console.log(this.responseText)
    }


    // SENDING REQUEST
    xhr.send();

}
