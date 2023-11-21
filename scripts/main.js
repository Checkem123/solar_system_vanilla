const select = document.querySelector("select");
const button = document.querySelector("button");
const input = document.querySelector("input");
const error_msg = document.querySelector(".error-msg");
const planet = document.querySelector(".planet");
const img = document.querySelector(".planet-image");
const weight = document.querySelector(".weight");
let select_value;
let input_value;
const hasInputValue = () => {
    if (input.value === "") {
        error_msg.textContent = "Input required";
        return false;
    }

    if (!Number(input.value)) {
        error_msg.textContent = "Only numbers allowed";
        return false;
    }

    error_msg.textContent = "";
    return input.value;
};
button.addEventListener("click", hasInputValue);

const hasSelectValue = () => {
    if (hasInputValue() && select.value === "none") {
        error_msg.textContent = "Please select a planet";
        return false;
    }

    return select.value;
};

button.addEventListener("click", hasSelectValue);
const display = () => {
    input_value = hasInputValue();
    select_value = hasSelectValue();

    if (input_value && select_value) {
        error_msg.textContent = "";
        img.src = `./images/${select_value}.png`;
        planet.textContent =
            select_value[0].toUpperCase() + select_value.slice(1);

        let gravity;
        switch (true) {
            case select_value === "mercury":
                gravity = 3.7;
                break;
            case select_value === "venus":
                gravity = 8.87;
                break;
            case select_value === "earth":
                gravity = 3.7;
                break;
            case select_value === "moon":
                gravity = 1.625;
                break;
            case select_value === "mars":
                gravity = 3.71;
                break;
            case select_value === "jupiter":
                gravity = 24.79;
                break;
            case select_value === "saturn":
                gravity = 10.44;
                break;
            case select_value === "uranus":
                gravity = 8.69;
                break;
            case select_value === "neptune":
                gravity = 11.15;
                break;
            case select_value === "pluto":
                gravity = 0.62;
                break;
        }
        weight.textContent = (input_value * gravity).toFixed(2);
    }
};

button.addEventListener("click", display);
