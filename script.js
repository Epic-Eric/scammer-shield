var url;
var money=0;
var transaction_id = 34567867564

var data = {
    'csrf_token': '1Psy8rmSoK-VJGJ-rzSshYH8wyTUzqvwC-yg-g4KZp57YG-FkzoviwYnS4c_0MHtzAcR7InEwJ3jOqphWPPwDw47jgzO4CFgxGIH10AQs0z3zuuLBkvcbnZx3AjI6D6xzrAX-iwfAY3Hx0tz2YxBeoBzmndjwCYZnBshsdesGvIxSvcOuww=',
    'agreeToSubscription': 'false'
};

function printResult(){
    url = document.getElementById("url").value;
    document.getElementById("website").textContent = url

    money += 0.05
    money = Math.round(money * 1e12) / 1e12
    document.getElementById("money").textContent = "You just costed this website $"+money+"!"

    transaction_id++
    document.getElementById("output").textContent = "Transaction Declined: The cc payment type [Creditcard] and/or currency [USD] is not accepted REFID: "+ transaction_id

    document.getElementById("data").textContent = "csrf_token" + data['csrf_token']
}

window.onload = function(){

    //https://www.dickies.ca/on/demandware.store/Sites-DickiesCA-Site/en_CA/CheckoutServices-PlaceOrder?ajax=true

    document.getElementById("submit").onclick = function(){
        setTimeout(printResult, 2000)
        document.getElementById("website").textContent = "processing, please wait..."
    }

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
