/**
 * ==========================================================================
 * MULTILINGUAL TRANSLATION DICTIONARY STORAGE
 * ==========================================================================
 * Central dictionary containing strings for localized assets.
 * Allows horizontal localization tracking across semantic components.
 */
const translations = {
    en: {
        nav_logo: "DevName",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",

        hero_welcome: "Welcome to my space",
        hero_title: "Building digital experiences with modern code",
        hero_desc: "Frontend specialist focused on craft, clean architecture, and intuitive human interfaces.",
        hero_cta_primary: "View Work",
        hero_cta_secondary: "Get In Touch",

        about_title: "About Me",
        about_p1: "Hello! I am a passionate web developer dedicated to building responsive, high-performance web applications. I bridge the gap between creative design concepts and solid engineering principles.",
        about_p2: "With an eye for detail, semantic standards, and optimal system structures, I transform design mockups into living user interfaces that scale beautifully across mobile, tablet, and desktop frames.",

        skills_title: "Technical Skills",
        skill_desc_1: "Semantic structures, flexbox layouts, grid mechanics, CSS custom properties, and fluid typography systems.",
        skill_desc_2: "Modern ES6+ syntax, asynchronous programming models, safe DOM manipulation, and modular runtime structures.",
        skill_desc_3: "Building clean, component-driven, state-managed applications using React, Next.js, and modern ecosystems.",
        skill_desc_4: "Git version workflows, Webpack/Vite bundlers, performance profiling, and continuous deployment optimizations.",

        projects_title: "Selected Projects",
        proj1_title: "E-Commerce Platform",
        proj1_desc: "A fully functional shop application featuring dynamic cart engines, fluid category filtering, and micro-animations.",
        proj2_title: "Analytics Dashboard",
        proj2_desc: "Real-time tracking application illustrating interactive data visualization grids, widgets, and dynamic theme handling.",
        proj3_title: "Task Management App",
        proj3_desc: "Minimalist workspace tracking solution with persistent offline states, smooth drag drops, and modular lists.",

        contact_title: "Contact Me",
        form_name: "Name",
        form_email: "Email",
        form_msg: "Message",
        form_btn: "Send Message",
        footer_rights: "All rights reserved."
    },
    fi: {
        nav_logo: "Kehittäjä",
        nav_about: "Minusta",
        nav_skills: "Osaaminen",
        nav_projects: "Projektit",
        nav_contact: "Yhteystiedot",

        hero_welcome: "Tervetuloa sivustolleni",
        hero_title: "Rakennan digitaalisia elämyksiä modernilla koodilla",
        hero_desc: "Frontend-asiantuntija, joka keskittyy laatuun, puhtaaseen arkkitehtuuriin ja intuitiivisiin käyttöliittymiin.",
        hero_cta_primary: "Katso työt",
        hero_cta_secondary: "Ota yhteyttä",

        about_title: "Tietoa minusta",
        about_p1: "Hei! Olen intohimoinen verkkokehittäjä, joka on omistautunut responsiivisten ja suorituskykyisten verkkosovellusten luomiseen. Yhdistän luovat suunnittelukonseptit ja vankat insinööriperiaatteet.",
        about_p2: "Yksityiskohtien silmälläpidolla, semanttisilla standardeilla ja optimaalisilla järjestelmärakenteilla muutan suunnittelumallit toimiviksi käyttöliittymiksi, jotka skaalautuvat kauniisti mobiili-, tabletti- ja työpöytäympäristöissä.",

        skills_title: "Tekninen osaaminen",
        skill_desc_1: "Semanttiset rakenteet, flexbox-asettelut, grid-mekaniikka, CSS-muuttujat ja joustavat typografiajärjestelmät.",
        skill_desc_2: "Moderni ES6+-syntaksi, asynkroninen ohjelmointi, turvallinen DOM-manipulaatio ja modulaariset suoritusrakenteet.",
        skill_desc_3: "Puhtaiden, komponenttipohjaisten ja tilanhallittujen sovellusten rakentaminen Reactilla, Next.js:llä ja moderneilla ekosysteemeillä.",
        skill_desc_4: "Git-versionhallinta, Webpack/Vite-pakkaajat, suorituskyvyn profilointi ja jatkuvan käyttöönoton optimoinnit.",

        projects_title: "Valitut projektit",
        proj1_title: "Verkkokauppa-alusta",
        proj1_desc: "Täysin toimiva kauppasovellus, jossa on dynaaminen ostoskori, sujuva tuotesuodatus ja mikroanimaatioita.",
        proj2_title: "Analytiikan kojelauta",
        proj2_desc: "Reaaliaikainen seurantasovellus, jossa on interaktiivisia datavisualisointikaavioita, työkaluja ja dynaaminen teeman hallinta.",
        proj3_title: "Tehtävienhallintasovellus",
        proj3_desc: "Minimalistinen työtilan seurantaratkaisu, jossa on pysyvä offline-tila, sujuva vedä ja pudota -toiminto sekä modulaariset listat.",

        contact_title: "Ota yhteyttä",
        form_name: "Nimi",
        form_email: "Sähköposti",
        form_msg: "Viesti",
        form_btn: "Lähetä viesti",
        footer_rights: "Kaikki oikeudet pidätetään."
    },
    ru: {
        nav_logo: "Разработчик",
        nav_about: "О себе",
        nav_skills: "Навыки",
        nav_projects: "Проекты",
        nav_contact: "Контакты",

        hero_welcome: "Добро пожаловать",
        hero_title: "Создаю цифровые интерфейсы на современном коде",
        hero_desc: "Frontend-специалист, сфокусированный на чистой архитектуре, качестве исполнения и интуитивных интерфейсах.",
        hero_cta_primary: "Смотреть работы",
        hero_cta_secondary: "Связаться",

        about_title: "Обо мне",
        about_p1: "Привет! Я увлеченный веб-разработчик, посвятивший себя созданию адаптивных и высокопроизводительных веб-приложений. Я объединяю креативные концепции дизайна с надежными инженерными принципами.",
        about_p2: "Внимательно относясь к деталям, семантическим стандартам и оптимальной структуре кода, я превращаю дизайн-макеты в живые пользовательские интерфейсы, которые идеально масштабируются на мобильных, планшетных и десктопных экранах.",

        skills_title: "Технические навыки",
        skill_desc_1: "Семантическая структура, раскладки Flexbox и Grid, кастомные переменные CSS и адаптивная типографика.",
        skill_desc_2: "Современный синтаксис ES6+, асинхронное программирование, безопасное манипулирование DOM и модульная структура.",
        skill_desc_3: "Разработка чистых компонентных приложений со стабильным управлением состоянием на React, Next.js и актуальных экосистемах.",
        skill_desc_4: "Работа с ветками Git, сборщики Webpack/Vite, профилирование производительности и оптимизация непрерывного деплоя.",

        projects_title: "Избранные проекты",
        proj1_title: "Платформа электронной коммерции",
        proj1_desc: "Полнофункциональное приложение магазина с динамической корзиной, плавной фильтрацией категорий и микроанимациями.",
        proj2_title: "Аналитическая панель",
        proj2_desc: "Приложение для отслеживания данных в реальном времени с интерактивными графиками визуализации, виджетами и динамической сменой тем.",
        proj3_title: "Менеджер задач",
        proj3_desc: "Минималистичное решение для отслеживания рабочих процессов с постоянным автономным режимом, плавным перетаскиванием и модульными списками.",

        contact_title: "Связаться со мной",
        form_name: "Имя",
        form_email: "Email",
        form_msg: "Сообщение",
        form_btn: "Отправить сообщение",
        footer_rights: "Все права защищены."
    }
};
