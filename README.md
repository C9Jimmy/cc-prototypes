# Chris Cheng Portfolio

Personal portfolio website for Chris Cheng, a frontend engineer and UI/UX designer.  
This project presents resume content, work experience, selected products, contact links, and a downloadable resume in a lightweight static website.

## Overview

This site is built as a public-facing resume and portfolio for sharing professional background, frontend skills, product experience, and design sensibility.

It includes:

- Responsive personal introduction
- Work experience timeline
- Frontend, design, and collaboration skills
- Product carousel for app and web projects
- Contact section with social links
- Downloadable resume PDF

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts

No build tool is required. The site can run directly from `index.html`.

## Project Structure

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── docs/
│   │   └── chris-cheng-resume.pdf
│   ├── icons/
│   │   └── favicon.svg
│   └── images/
│       ├── 260410_72dpi.jpg
│       └── paper-plane.svg
└── README.md
```

## Local Preview

Open `index.html` directly in a browser:

```text
file:///path/to/cc-prototypes/index.html
```

Or use any static server if you prefer:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

This project is suitable for GitHub Pages because it is a static website.

Recommended GitHub Pages settings:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/root`

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

