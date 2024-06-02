document.addEventListener('DOMContentLoaded', function() {
    // Check if local storage is available
    if (typeof(Storage) !== "undefined") {
        // Retrieve checkbox state from local storage and update checkboxes accordingly
        for (let i = 1; i <= 5; i++) {
            let checkbox = document.getElementById(`paath-${i}`);
            let checkboxState = localStorage.getItem(`paath-${i}`);
            if (checkboxState === "true") {
                checkbox.checked = true;
            }
        }
        for (let i = 1; i <= 3; i++) {
            let checkbox = document.getElementById(`kavita-${i}`);
            let checkboxState = localStorage.getItem(`kavita-${i}`);
            if (checkboxState === "true") {
                checkbox.checked = true;
            }
        }
        for (let i = 1; i <= 8; i++) {
            let checkbox = document.getElementById(`vyakaran-${i}`);
            let checkboxState = localStorage.getItem(`vyakaran-${i}`);
            if (checkboxState === "true") {
                checkbox.checked = true;
            }
        }
        for (let i = 1; i <= 2; i++) {
            let checkbox = document.getElementById(`sthulvachan-${i}`);
            let checkboxState = localStorage.getItem(`sthulvachan-${i}`);
            if (checkboxState === "true") {
                checkbox.checked = true;
            }
        }
        for (let i = 1; i <= 5; i++) {
            let checkbox = document.getElementById(`lekhankoushalya-${i}`);
            let checkboxState = localStorage.getItem(`lekhankoushalya-${i}`);
            if (checkboxState === "true") {
                checkbox.checked = true;
            }
        }

        // Add event listeners to checkboxes to store their state in local storage
        document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
            checkbox.addEventListener('change', function() {
                localStorage.setItem(this.id, this.checked);
            });
        });
    } else {
        console.log("Local storage is not available. Unable to store checkbox state.");
    }
});
