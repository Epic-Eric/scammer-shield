window.onload = function(){
    let url;
    let money=0;
    //https://www.dickies.ca/on/demandware.store/Sites-DickiesCA-Site/en_CA/CheckoutServices-PlaceOrder?ajax=true

    document.getElementById("submit").onclick = function(){
        url = document.getElementById("url").value;
        document.getElementById("website").textContent = url
        money += 0.05
        money = Math.round(money * 1e12) / 1e12
        document.getElementById("money").textContent = "You just costed this scammer $"+money+"!"
    }

    let data = {
        'csrf_token': '1Psy8rmSoK-VJGJ-rzSshYH8wyTUzqvwC-yg-g4KZp57YG-FkzoviwYnS4c_0MHtzAcR7InEwJ3jOqphWPPwDw47jgzO4CFgxGIH10AQs0z3zuuLBkvcbnZx3AjI6D6xzrAX-iwfAY3Hx0tz2YxBeoBzmndjwCYZnBshsdesGvIxSvcOuww=',
        'agreeToSubscription': 'false'
    };

    fetch(url, {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("output").textContent = data
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
