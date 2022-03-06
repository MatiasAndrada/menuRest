$(".dropdown-menu").on("click", function (evt) {
    if (evt.target.tagName === "BUTTON") {
        $("#prdt").empty()
        const btn = evt.target;
        const prdt = btn.dataset.array;
        const buttonStyle = btn.parentElement.parentElement;
        console.log("🦇 ~ file: admin.js ~ line 7 ~ buttonstyle", buttonstyle)
        const section = buttonStyle.style;
        console.log("🦇 ~ file: admin.js ~ line 9 ~ section", section)
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
            case "beer":
                new producto(beer)
                break;
        }
        switch (section) {
            case "breakfast":
                console.log("piola")
                break;
        }
        dsbldBtn()
    }
    function dsbldBtn() {
        if (evt.target.tagName === "BUTTON") {
            $(".dropdown-item").removeClass("disabled");
            const btnid = "#" + evt.target.id;
            $(btnid).addClass("disabled")
        }
    }
})

