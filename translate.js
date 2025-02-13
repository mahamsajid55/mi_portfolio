document.addEventListener("DOMContentLoaded", function () {
    const languageSwitcher = document.getElementById("language-switcher");
    const elementsToTranslate = document.querySelectorAll("[data-translate]");

    // Cargar idioma guardado en localStorage o usar inglés por defecto
    let currentLanguage = localStorage.getItem("selectedLanguage") || "en";
    languageSwitcher.value = currentLanguage;
    updateLanguage(currentLanguage);

    // Evento para cambiar el idioma
    languageSwitcher.addEventListener("change", function () {
        const selectedLanguage = languageSwitcher.value;
        localStorage.setItem("selectedLanguage", selectedLanguage);
        updateLanguage(selectedLanguage);
    });

    function updateLanguage(lang) {
        fetch("./language.json") // Asegurar que la ruta sea correcta
            .then(response => response.json())
            .then(translations => {
                console.log("Traducciones cargadas:", translations); // Depuración
                if (!translations[lang]) {
                    lang = "en"; // Fallback a inglés si el idioma no existe
                }
                elementsToTranslate.forEach(element => {
                    const key = element.getAttribute("data-translate");
                    if (translations[lang] && translations[lang][key]) {
                        if (element.tagName === "INPUT" || element.tagName === "BUTTON") {
                            element.value = translations[lang][key]; // Para inputs y botones
                        } else {
                            element.textContent = translations[lang][key]; // Para otros elementos
                        }
                    }
                });
            })
            .catch(error => console.error("Error al cargar traducciones:", error));
    }
});
