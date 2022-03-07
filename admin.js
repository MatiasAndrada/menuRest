$(".shopping-cart").hide()

$(".dropdown-menu").on("click", function (evt) {
    if (evt.target.tagName === "BUTTON") {
        $(".shopping-cart").show()
        $("#prdt").empty()
        const btn = evt.target;
        const prdt = btn.dataset.array;
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
        const itemBtn = btn.parentElement.parentElement;
        const btnData = itemBtn.querySelector(".dropdownBtn").dataset.food
        switch (btnData) {
            case "breakfast":
                $("#prdt").removeClass("lunchArea afternoonArea dinnerArea").addClass("breakfastArea");
            break;
            case "lunch":
                $("#prdt").removeClass("breakfastArea  afternoonArea dinnerArea").addClass("lunchArea");
                break;
            case "afternoon":
                $("#prdt").removeClass("breakfastArea lunchArea  dinnerArea").addClass("afternoonArea");
                break;
            case "dinner":
                $("#prdt").removeClass("breakfastArea lunchArea afternoonArea").addClass("dinnerArea");
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

