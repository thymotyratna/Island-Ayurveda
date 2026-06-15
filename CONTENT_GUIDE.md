
# Island Nivasa — Content Guide & Local Setup

## Project Overview
Island Nivasa is a single-page React application built with TypeScript and Vite. It uses native ES Modules via `esm.sh` for React dependencies, so the core site requires no local `node_modules` to run in a browser. However, for local development with JetBrains Rider (and to support TypeScript / JSX compilation), a lightweight Vite setup is included.

## Running Locally in JetBrains Rider

### Prerequisites
- **Node.js** v18 or later (LTS recommended)
- **JetBrains Rider** (or WebStorm / IntelliJ IDEA Ultimate)

### Step-by-Step
1. **Open the Project**
   - In Rider, choose **File → Open** and select the root folder containing `package.json` and `index.html`.

2. **Install Dependencies**
   - Open the built-in Terminal (**View → Tool Windows → Terminal**) and run:
     ```bash
     npm install
     ```
   - This installs Vite and the React plugin required for the dev server and JSX transformation.

3. **Start the Development Server**
   - Run:
     ```bash
     npm run dev
     ```
   - Rider will usually detect the running Vite server and display a clickable link in the Terminal (e.g., `http://localhost:5173`).
   - You can also open the URL manually in any browser.

4. **Edit & Preview**
   - Because Vite provides Hot Module Replacement (HMR), any changes you make to `.tsx` or `.css` files will appear instantly in the browser.

### Building for Production
To create an optimized static build in the `dist/` folder:
```bash
npm run build
```
You can preview the production build locally with:
```bash
npm run preview
```

## Project Structure
```
├── index.html              # Entry point (contains importmap for React)
├── package.json            # Dev dependencies (Vite, TypeScript)
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── tsconfig.node.json      # TypeScript configuration for Vite config
└── src/
    ├── index.tsx           # React root render
    ├── App.tsx             # Main layout & sections
    ├── App.css             # Global styles & CSS variables
    ├── utils/              # Persistence helpers
    ├── hooks/              # Custom React hooks
    ├── components/         # Navigation, Footer, AnimatedSection
    └── features/           # Page sections (Hero, About, Doshas, etc.)
```

## Important Notes

### Contact Form (Enquiries)
The enquiry form in `src/features/contact/ContactSection.tsx` submits directly to **enquiry@islandnivasa.com** via [FormSubmit.co](https://formsubmit.co). No backend server is required. The submission happens asynchronously, so the visitor sees a confirmation message without leaving the page.

If you ever need to change the destination email, update this line in `ContactSection.tsx`:
```ts
const response = await fetch('https://formsubmit.co/ajax/enquiry@islandnivasa.com', ...
```

### Images & Assets
The site currently uses CSS gradients, SVG illustrations, and typography instead of raster images to remain lightweight. If you wish to add photos of the Negombo property, place them in a new `public/images/` folder and reference them with absolute paths (e.g., `/images/beach.jpg`).

### Customization Checklist
- [ ] Replace the placeholder phone number (`+94 71 123 4567`) in `Footer.tsx` and `ContactSection.tsx`.
- [ ] Add Google Analytics or similar scripts to `index.html` if required.
- [ ] Update the FormSubmit options (e.g., add `_captcha` or `_template` fields to the fetch body) if desired.
