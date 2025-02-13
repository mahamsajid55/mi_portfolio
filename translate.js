const translations = {
    en: {
        greeting: "Hi, I'm Maham Sajid!",
        intro: "I am a front-end developer committed to delivering high-quality, responsive websites and applications. With expertise in modern web technologies, I ensure that each project is not only visually appealing but also optimized for performance and usability. My focus is on creating solutions that align with business objectives while providing an intuitive and seamless user experience.",
        contact: "Contact Me",
        bio: "Personal Bio",
        skills: "Skills",
        projects: "Projects"
    },
    es: {
        greeting: "¡Hola, soy Maham Sajid!",
        intro: "Soy un desarrollador front-end comprometido con la entrega de sitios web y aplicaciones de alta calidad y responsivos. Con experiencia en tecnologías web modernas, me aseguro de que cada proyecto no solo sea visualmente atractivo, sino también optimizado para el rendimiento y la usabilidad. Mi enfoque está en crear soluciones que se alineen con los objetivos comerciales y brinden una experiencia de usuario intuitiva y fluida.",
        contact: "Contáctame",
        bio: "Biografía Personal",
        skills: "Habilidades",
        projects: "Proyectos"
    },

     en: {
        greeting: "Hi, I'm Maham Sajid!",
        intro: "I am a front-end developer committed to delivering high-quality, responsive websites and applications. With expertise in modern web technologies, I ensure that each project is not only visually appealing but also optimized for performance and usability. My focus is on creating solutions that align with business objectives while providing an intuitive and seamless user experience.",
        contact: "Contact Me",
        bio: "Personal Bio",
        skills: "Skills",
        projects: "Projects",
        
        aboutTitle: "Myself",
        aboutIntro: "I am a passionate Front-End Developer with a deep interest in creating user-friendly and responsive websites. My journey into tech started when I realized how empowering it is to bring creative ideas to life on the web. Through continuous learning and practical experience, I have honed my skills in HTML, CSS, JavaScript, and modern front-end frameworks like React. My goal is to build seamless, visually appealing user interfaces that provide the best possible experience for end users.",
        funFactsTitle: "Fun Facts",
        fact1: "I enjoy photography and love capturing nature and city landscapes.",
        fact2: "When I'm not coding, you can find me exploring new cafes or reading about emerging web technologies.",
        fact3: "I am a passionate traveler and have visited over [X] countries, gaining inspiration from different cultures.",
        fact4: "In my free time, I like to experiment with graphic design and digital art.",
        languagesTitle: "Languages I Speak",
        lang1: "🇺🇸 English - Fluent",
        lang2: "🇪🇸 Spanish - Intermediate",
        lang3: "🇵🇰 Urdu - Mother Language",
        backHome: "← Back to Home"
    },
};

// Function to update the text based on the selected language
function updateLanguage(lang) {
    document.querySelector("h1").textContent = translations[lang].greeting;
    document.querySelector(".intro-text p").textContent = translations[lang].intro;
    document.querySelector(".cta-button").textContent = translations[lang].contact;
    document.querySelector("#about-me h4").textContent = translations[lang].bio;
    document.querySelector("#skills h4").textContent = translations[lang].skills;
    document.querySelector("#projects h4").textContent = translations[lang].projects;
    
    // Store language preference in localStorage
    localStorage.setItem("selectedLanguage", lang);
}

// Load the selected language from localStorage (if available)
document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    document.getElementById("language-selector").value = savedLang;
    updateLanguage(savedLang);
});

// Change language when selecting a new option
document.getElementById("language-selector").addEventListener("change", function () {
    updateLanguage(this.value);
});
