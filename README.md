# 🚀 NASA APOD React App

A beautiful React application that displays NASA's Astronomy Picture of the Day (APOD) using the official NASA API. Features a modern UI with image viewing, detailed descriptions, and local caching for optimal performance.

## ✨ Features

- 🌌 Daily astronomy pictures from NASA's APOD API
- 📱 Responsive design for all devices
- 💾 Smart local storage caching (reduces API calls)
- 🎨 Interactive sidebar with detailed information
- ⚡ Fast loading with Vite
- 🔄 Automatic daily updates

## 🛠️ Tech Stack

- **React 18.3** - UI library
- **Vite 5.3** - Build tool and dev server
- **NASA APOD API** - Data source
- **LocalStorage** - Client-side caching
- **ESLint** - Code quality

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- NASA API key (free from [NASA API Portal](https://api.nasa.gov/))

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/vivekj0911/react-nasa-app.git
cd react-nasa-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
VITE_NASA_API_KEY=your_nasa_api_key_here
```

Get your free API key from [NASA API Portal](https://api.nasa.gov/).

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
react-nasa-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.jsx      # Bottom navigation with info button
│   │   ├── Main.jsx        # Main image display component
│   │   └── SideBar.jsx     # Detailed information panel
│   ├── App.jsx             # Main app component with API logic
│   ├── index.css           # Global styles
│   └── main.jsx            # App entry point
├── .env                    # Environment variables (not in git)
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔑 Key Features Explained

### Local Storage Caching
The app caches the daily APOD data in localStorage to minimize API calls. Cache is automatically cleared and refreshed daily.

### Component Architecture
- **App.jsx** - Manages state, API calls, and data flow
- **Main.jsx** - Displays the astronomy picture/video
- **SideBar.jsx** - Shows detailed description and metadata
- **Footer.jsx** - Navigation and controls

## 🌐 API Reference

This app uses NASA's APOD API:
```
https://api.nasa.gov/planetary/apod?api_key={API_KEY}
```

Response includes:
- `title` - Image title
- `explanation` - Detailed description
- `url` - Image URL
- `date` - Publication date
- `media_type` - Type (image/video)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [NASA APOD API](https://api.nasa.gov/) for providing amazing astronomy content
- [Vite](https://vitejs.dev/) for the blazing fast build tool
- [React](https://react.dev/) for the UI framework


