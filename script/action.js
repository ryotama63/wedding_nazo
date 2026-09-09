const accordions = document.querySelectorAll(".accordion");

accordions.forEach(button => {
    button.addEventListener("click", () => {

        const panel = button.nextElementSibling;
        const icon = button.querySelector(".icon");

        if (panel.style.maxHeight) {
            // 閉じる
            panel.style.maxHeight = null;
            icon.textContent = "▼";
        } else {
            // 開く
            panel.style.maxHeight = panel.scrollHeight + "px";
            icon.textContent = "▲";
        }
    });
});
