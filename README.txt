my-client-site/
├── src/
│   ├── components/       # Reusable layout UI blocks
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx    # Wraps pages to keep Nav/Footer consistent
│   ├── pages/            # The 4 distinct page views
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── App.jsx           # Router configuration
│   ├── main.jsx          # Entry point
│   └── index.css         # Tailwind directives
├── tailwind.config.js
└── package.json