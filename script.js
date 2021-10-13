var form = document.getElementById('form')
form.addEventListener('submit', function (e) {
    // auto submission of the form
    e.preventDefault()

    var Id = document.getElementById('Id').value
    var type = document.getElementById('type').value
    
    var user_id = document.getElementById('user_id').value
    var tamweel_customer_id = document.getElementById('tamweel_customer_id').value
    console.log(Id)
    console.log(type)
    console.log(user_id)
    console.log(tamweel_customer_id)
    // fetch post request
    fetch("https://dashboard.tamweel-mortgage.com/api/v1/en/tamweel-users/update-user-ref", {
        method: 'POST',
        body: JSON.stringify({
            data: {
                id: null,
                type: "user",
                attributes: {
                    user_id: user_id,
                    tamweel_customer_id: tamweel_customer_id
                }
            }

        })
        ,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            display(data, user_id, tamweel_customer_id);
        })

})

function display(status, id, T_C_id) {
    console.log(status);
    const screen = document.getElementById("screen");
    const div = document.createElement("div");
    div.innerText = `customerID:${id}, tamweel_customer_id:${T_C_id}, message:${status.meta.message}`;
    screen.appendChild(div);

}