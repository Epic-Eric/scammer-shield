window.onload = function(){
    let url;

    // let data = {

    // }

    document.getElementById("submit").onclick = function(){
        url = document.getElementById("url").value;
        document.getElementById("website").textContent = url
    }

    // fetch(url, {
    //     method: "POST",

    // })
}