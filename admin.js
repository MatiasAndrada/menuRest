$("#container-Dsyn").on("click", function (evt) {
    if (evt.target.tagName === "BUTTON") {
        const btn = evt.target;
        const prdt = btn.dataset.array
        switch (prdt) {
            case "coffee":
                new producto(coffee)
                break;
            case "jugos":
                new producto(jugos)
                break;
            case "comida":
                new producto(comida)
                break;
        }
    }
    
    function dsbldBtn () {
        const btn = evt.target.id;
        const btn2 = "#" + btn;
        $(btn2).addClass("disabled")
        console.log (btn)
    }
    dsbldBtn()
})


