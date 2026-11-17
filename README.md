# Tractor, Jeep & Motor Parts Website

A responsive React and Vite website for a family-owned automotive spare parts and hardware business. It includes a searchable, filterable sample catalogue and WhatsApp-first enquiry links.

## Run locally

1. Install Node.js (20 or newer).
2. In this folder, install dependencies: `npm install`
3. Start Vite: `npm run dev` (normally `http://127.0.0.1:5173/`)
4. Create a production build: `npm run build`
5. Preview the production build locally: `npm run preview` (`http://127.0.0.1:4173/`)

## Configure your shop

Edit `src/config.js` to set the business name, phone, WhatsApp number, address, city/PIN, opening hours and map link. Use the WhatsApp country calling code followed by digits only, for example `91...`. Contact actions point to the contact section while a WhatsApp number is missing; fill in the configuration to activate direct WhatsApp links.

The vehicle categories and sample product catalogue are in the same file. Replace sample imagery and descriptions with your real inventory as it becomes available. No prices or stock availability are implied.

## Project structure

- `src/App.jsx` – page sections, responsive navigation, product filtering and enquiry interactions
- `src/config.js` – editable shop details
- `src/data/products.js` – vehicle categories and sample products
- `src/styles.css` – palette, layout, responsive styles and focus states
- `index.html` – page title, description and font setup

The frontend is kept separate from the data configuration so an API or a Node.js/Express/MongoDB backend can be added later.

## Local verification note

The production bundle was built and served successfully at `http://127.0.0.1:4173/`. In the restricted agent environment, Vite's development dependency scanner cannot traverse the workspace's parent directories and fails while resolving React and Lucide files; the development server may work normally when run on the local machine. Use the production preview command above to inspect the verified build in this environment.
