$("#container").on("click", function (evt) {
    if (evt.target.tagName === "BUTTON") {
        $("#prdt").empty()
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
    function dsbldBtn() {
        if (evt.target.tagName === "BUTTON") {
            $(".dropdown-item").removeClass("disabled");
            const btnid = "#" + evt.target.id;
            $(btnid).addClass("disabled")
        }
    }
    dsbldBtn()
})