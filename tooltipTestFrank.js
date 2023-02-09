const form = document.querySelector("form");
const elements = form.elements;

const options = {
    title: "Default message",
    placement: "bottom"
};

for (const element of elements) {
    const type = element.type;
    if (type != "submit") {
        element.addEventListener("invalid", (event) => {
            event.preventDefault();
            element.classList.add("is-invalid");
            console.log(`${element.name} is invalid! Let's display a Tooltip...`);
            // const tooltipable = document.querySelector("h1");
            const tooltip = bootstrap.Tooltip.getOrCreateInstance(element, options);
            // if error type is something special then message is specific
            const validity = element.validity; // ValidityState (=> MDN)
            let message = null;
            console.log(document.getElementById("date").validity);
            if (validity.valueMissing) { // required is not set
                message = "Champs obligatoire, merci de bien vouloir le renseigner";
            } else if (validity.rangeUnderflow) {
                message = "Positif";
            } else      
            {
                message = "La date doit être aujourd'hui ou plus tard";
            }
            tooltip.setContent({ '.tooltip-inner': message });
        });
        
        element.addEventListener("change", (event) => {
            // const validity = element.validity; // ValidityState (=> MDN)
            const valid = element.checkValidity(); // MDN !!!!
            if (valid) { // input is valid
                console.log(`${element.name} is valid! Let's hide/disable/destroy the Tooltip...`);
                // remove is-invalid class, add is-valid class
                // tooltip in "invalid" scope is not accessible
                // retrieve current tooltip attached to element
                const tooltip = bootstrap.Tooltip.getOrCreateInstance(element);
                tooltip.dispose();

            } else { // Input not valid
                console.log(`${element.name} is invalid! Let's display the Tooltip...`);
                // Same logic as "invalid" event
                const tooltip = bootstrap.Tooltip.getOrCreateInstance(element, options);
                // if error type is something special then message is specific
                const validity = element.validity; // ValidityState (=> MDN)
                let message = null;
                console.log(document.getElementById("date").validity);
                if (validity.valueMissing) { // required is not set
                    message = "Champs obligatoire, merci de bien vouloir le renseigner";
                } else if ((element.type == "number") &&(validity.rangeUnderflow)) {
                    message = "Positif";
                } else if ((element.type == "date") && (validity.rangeUnderflow))    {
                    message = "La date doit être aujourd'hui ou plus tard";
                }
                tooltip.setContent({ '.tooltip-inner': message });
                tooltip.enable();
            }
        }); 
    }
}