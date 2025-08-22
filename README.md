# Marina Dashboard - Kilifi County Mangrove Analysis

A comprehensive satellite imagery analysis system for monitoring mangrove health and distribution in Kilifi County, Kenya using Google Earth Engine and machine learning.

## Project Structure

```
marina/
 └── greenrootsproject/
      ├── frontend/              # Next.js/React dashboard
      │   ├── src/app/           # App router pages
      │   ├── public/            # Static assets & processed data
      │   └── package.json       # Frontend dependencies
      ├── scripts/               # Data processing & ML training
      │   ├── download_data.ipynb    # Earth Engine data extraction
      │   ├── train_model.ipynb      # RandomForest model training
      │   └── launch_app.py          # Python launcher
      ├── src/                   # Additional Python utilities
      │   └── earth_engine.txt       # GEE JavaScript code for Kilifi
      ├── static/                # Project assets
      └── frontend_data/         # Processed datasets (generated)
```

## Completed Components

### Data Extraction Pipeline
- **download_data.ipynb** - Pulls Landsat satellite imagery and Global Mangrove Watch data from Google Earth Engine
- **Output**: Processed datasets saved to frontend_data/ directory
- **Coverage**: Kilifi County coastline (3°20'S to 3°50'S, 39°50'E to 40°10'E)

### Machine Learning Model
- **train_model.ipynb** - RandomForest classifier for mangrove health prediction
- **Features**: NDVI, temporal analysis, change detection
- **Output**: Trained model + evaluation metrics

### Frontend Dashboard
- *frontend/* - Next.js application with interactive visualizations
- *Features*: 
  - Embedded Google Earth Engine maps
  - Real-time NDVI analysis
  - Mangrove change detection (1996-2024)
  - Responsive design with Tailwind CSS

## Quick Start

### Prerequisites
- Python 3.8+
- Node.js 18+
- Google Earth Engine account
- Jupyter Notebook

### Setup Python Environment
```bash
cd greenrootsproject
pip install -r requirements.txt
pip install earthengine-api folium streamlit plotly jupyter
```

### Authenticate Google Earth Engine
```bash
python -c "import ee; ee.Authenticate()"
python -c "import ee; ee.Initialize(project='your-gee-project')"
```

### Run Data Processing
```bash
# Start Jupyter and run the notebooks
jupyter notebook scripts/download_data.ipynb
jupyter notebook scripts/train_model.ipynb
```

### Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

## Data Pipeline Flow

1. **Earth Engine Extraction** → download_data.ipynb
   - Landsat 8/9 imagery (2020-2024)
   - Global Mangrove Watch datasets
   - NDVI calculations
   - Outputs to frontend_data/

2. **Model Training** → train_model.ipynb
   - RandomForest classification
   - Temporal trend analysis
   - Model evaluation & metrics

3. **Frontend Integration** → Next.js Dashboard
   - Real-time data visualization
   - Interactive maps
   - Performance metrics

## Next Steps

### Step 1: Copy Processed Data to Frontend
Your notebooks created data inside frontend_data/. For the frontend to serve this data, copy it to the Next.js public folder:

```bash
# Copy processed datasets
cp -r frontend_data/* frontend/public/data/

# Verify data structure
ls frontend/public/data/
```

Expected data files:
- kilifi_ndvi_2020_2024.json - NDVI time series
- mangrove_extent_1996.geojson - Historical mangrove boundaries
- mangrove_extent_2020.geojson - Current mangrove boundaries
- change_analysis.json - Temporal change statistics

### Step 2: Update Frontend Data Loading
Modify frontend/src/app/page.tsx to load your processed data:

```typescript
// Add data loading hooks
const [ndviData, setNdviData] = useState(null);
const [mangroveData, setMangroveData] = useState(null);

useEffect(() => {
  // Load processed NDVI data
  fetch('/data/kilifi_ndvi_2020_2024.json')
    .then(res => res.json())
    .then(data => setNdviData(data));
}, []);
```

### Step 3: Add Interactive Charts
Install charting libraries:
```bash
cd frontend
npm install recharts leaflet react-leaflet
```

### Step 4: Deploy Earth Engine App
1. Open Google Earth Engine Code Editor
2. Copy the JavaScript code from src/earth_engine.txt
3. Publish as an Earth Engine App
4. Update the iframe URL in your frontend

## Study Area: Kilifi County

**Geographic Focus:**
- **Coordinates**: 3°20'S to 3°50'S, 39°50'E to 40°10'E
- **Key Locations**: Kilifi Creek, Mida Creek, Mtwapa Creek, Watamu
- **Ecosystem**: Coastal mangrove forests and tidal flats

**Analysis Period:**
- Historical baseline: 1996-2007
- Recent analysis: 2020-2024
- Change detection: Multi-temporal comparison

## Key Features

### Satellite Data Analysis
- **Source**: Landsat 8/9, Global Mangrove Watch
- **Indices**: NDVI, NDWI, vegetation health metrics
- **Temporal Resolution**: Annual change analysis
- **Spatial Resolution**: 30m pixel resolution

### Machine Learning
- **Algorithm**: RandomForest Classifier
- **Features**: Spectral indices, temporal patterns
- **Validation**: Cross-validation with ground truth data
- **Output**: Mangrove health predictions & change probabilities

### Interactive Dashboard
- **Maps**: Real-time satellite imagery overlay
- **Charts**: Time series analysis, trend visualization
- **Metrics**: Area calculations, change statistics
- **Export**: Data download capabilities

## Technologies Used

**Backend/Data Processing:**
- Python, Jupyter Notebooks
- Google Earth Engine API
- scikit-learn, pandas, numpy
- matplotlib, folium

**Frontend:**
- Next.js 15 with TypeScript
- Tailwind CSS for styling
- Recharts for data visualization
- Leaflet for mapping

**Deployment:**
- Vercel for frontend hosting
- Google Earth Engine Apps for map embedding
- GitHub for version control

## Configuration Files

### Essential Files
- requirements.txt - Python dependencies
- package.json - Node.js dependencies  
- next.config.js - Next.js configuration
- tsconfig.json - TypeScript configuration
- .eslintrc.json - Code linting rules

## Contributing

1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Earth Engine for satellite data access
- Global Mangrove Watch for baseline datasets
- Kilifi County government for regional context
- Open source community for tools and libraries

## Contact

**Project Maintainer**: Wesley Kuria
- GitHub: [@WesleyKuria](https://github.com/WesleyKuria)
- Project Link: [https://github.com/WesleyKuria/greenrootsproject](https://github.com/WesleyKuria/greenrootsproject)
