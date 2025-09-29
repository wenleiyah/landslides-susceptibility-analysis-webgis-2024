# GIS - Landslide Susceptibility Analysis 2023-2024

This repository contains the **Landslide Susceptibility Analysis** lab project developed for the GIS course a.a. 2023/2024.  
The focus of the project is twofold: the **analytical workflow** for producing landslide susceptibility maps and the **deployment of an interactive WebGIS**.  

The workflow included:
- collection and harmonization of input datasets (DUSAF, DTM, NDVI, distance-to-roads/rivers/faults, landslide inventory);  
- preprocessing (reprojection, clipping, resampling, rasterization) to a common CRS (EPSG:32632), 5 m resolution, and study-area extent;  
- derivation of terrain and environmental factors (slope, aspect, plan and profile curvature) and definition of No-Landslide Zones (NLZ);  
- preparation of balanced training/testing datasets (70/30 and 80/20 splits, 1k and 4k samples) through random selection and point sampling;  
- susceptibility modeling using Random Forest (dzetsaka) with probability map generation;  
- exposure assessment integrating reclassified susceptibility with WorldPop population and Alpine Pastures data;  
- deployment of an interactive WebGIS (OSM/Stadia basemaps, WMS services, popup queries).  


**Note:** The original map layers served via the university GeoServer have been removed after the course ended.  
The WebGIS interface is still accessible online, but layers will not render unless new data sources are configured locally.

> **Live demo (GitHub Pages):**  
> [https://wenleiyah.github.io/landslides-susceptibility-analysis-webgis-2024/](https://wenleiyah.github.io/landslides-susceptibility-analysis-webgis-2024/)

---

##  Repository Structure

| Path              | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| `index.html`      | Main entry point of the application                                         |
| `pages/`          | Additional project pages (e.g., `workflow.html`, `result.html`, `webgis.html`) |
| `assets/`         | Static resources (images, CSS, JS, datasets, etc.)                         |
| `docs/`           | Build output folder (used by GitHub Pages deployment)                      |
| `vite.config.js`  | Vite configuration (base path, build output, rollup options)               |
| `package.json`    | Project metadata, dependencies, and npm scripts                            |

---

## Installation & Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/wenleiyah/landslides-susceptibility-analysis-webgis-2024.git
   cd landslides-susceptibility-analysis-webgis-2024
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **local development server**
    ```bash
   npm start
   ```
---
## Installation & Local Development

1. **Build the project**
   ```bash
   npm run build
   ```
   This generates the production-ready files inside the `docs/` folder.

2. **Preview the production build locally**
   ```bash
   npm run preview
   ```
   Opens a local server (default `http://localhost:5173/`) to check the final build.

3. **Deploy to GitHub Pages**
   - Ensure that `vite.config.js` contains the correct base path:
     ```js
     base: '/landslides-susceptibility-analysis-webgis-2024/'
     ```
   - In the repository settings, configure **Pages** to serve from the `/docs` folder.

---

## Tech Stack

- **[Vite](https://vitejs.dev/)** – Frontend build tool
- **HTML / CSS / JavaScript** – Core web technologies
- **OpenLayers** (or Leaflet, depending on your implementation) – Web mapping library
- **GeoServer, QGIS, GIS datasets** – For data preprocessing and map publishing
- Additional npm packages: `glob`, `vite-plugin-html`

---

## License & Contribution

This project is released under [MIT License](LICENSE).  
Contributions, issues, and feature requests are welcome.

---

## Group Members
- [Wenlei Yang](https://github.com/wenleiyah)  
- [Xinmeng Wang](https://github.com/eas510)  

Politecnico di Milano
