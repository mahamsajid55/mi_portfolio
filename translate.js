document.addEventListener("DOMContentLoaded", function () {
    const languageSwitcher = document.getElementById("language-switcher"); // Language dropdown
    const elementsToTranslate = document.querySelectorAll("[data-translate]"); // Elements with translations

    // Load saved language from localStorage
    let currentLanguage = localStorage.getItem("selectedLanguage") || "en";
    languageSwitcher.value = currentLanguage;
    updateLanguage(currentLanguage);

    // Change language on selection
    languageSwitcher.addEventListener("change", function () {
        const selectedLanguage = languageSwitcher.value;
        localStorage.setItem("selectedLanguage", selectedLanguage);
        updateLanguage(selectedLanguage);
    });

    function updateLanguage(lang) {
        fetch("language.json") // Use "language.json" (your file name)
            .then(response => response.json())
            .then(translations => {
                elementsToTranslate.forEach(element => {
                    const key = element.getAttribute("data-translate");
                    if (translations[lang] && translations[lang][key]) {
                        element.innerHTML = translations[lang][key];
                    }
                });
            })
            .catch(error => console.error("Error loading translations:", error));
    }
});

