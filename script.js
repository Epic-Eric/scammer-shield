window.onload = function(){
    let url;

    document.getElementById("submit").onclick = function(){
        url = document.getElementById("url").value;
        document.getElementById("website").textContent = url
    }
}