# ERP React Frontend

A modern React frontend application for ERP system, migrated from Spring Boot Thymeleaf.

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ installed
- npm or yarn
- Spring Boot backend running on `http://localhost:8080`

### Installation

1. **Clone or copy this project to your workspace:**
   ```bash
   cd C:\WORKSPACE\erp-react-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   VITE_API_BASE_URL=http://localhost:8080/api
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
erp-react-project-project/
├── src/
│   ├── api/                   # API services and Axios config
│   │   ├── axios.config.js
│   │   └── authService.js
│   ├── contexts/              # React Context providers
│   │   └── AuthContext.jsx
│   ├── pages/                 # Page components
│   │   ├── Login/
│   │   └── Dashboard/
│   ├── routes/                # Routing configuration
│   │   ├── AppRoutes.jsx
│   │   ├── PrivateRoute.jsx
│   │   └── PublicRoute.jsx
│   ├── App.jsx                # Root component
│   ├── App.css
│   ├── index.jsx              # Entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json               # Dependencies
├── vite.config.js             # Vite configuration
└── .env                       # Environment variables
```

## ✨ Features

- ✅ JWT Authentication
- ✅ Protected Routes
- ✅ Modern Login Page with animations
- ✅ Responsive Dashboard
- ✅ Form Validation
- ✅ Error Handling
- ✅ Loading States
- ✅ Mobile Responsive Design

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code

## 🔐 Authentication Flow

1. User enters credentials on login page
2. Frontend sends POST request to `/api/auth/login`
3. Backend validates and returns JWT token
4. Token stored in localStorage
5. Token automatically added to all API requests
6. Protected routes check authentication status

## 🌐 Backend Requirements

Your Spring Boot backend needs these endpoints:

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user

### CORS Configuration
Add CORS configuration to allow frontend access:

```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
```

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:8080/api
VITE_API_TIMEOUT=30000
VITE_APP_NAME=ERP System
```

## 🎨 Customization

### Colors
Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #1976d2;
  --secondary-color: #dc004e;
  /* Add more custom colors */
}
```

### Logo
Replace the SVG logo in `src/pages/Login/Login.jsx` and `src/pages/Dashboard/Dashboard.jsx`

## 🐛 Troubleshooting

### CORS Errors
- Ensure backend CORS configuration allows `http://localhost:3000`
- Check API URL in `.env` file

### Login Not Working
- Verify backend is running on port 8080
- Check browser console for errors
- Verify API endpoint URLs

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Technology Stack

- **React 18** - UI library
- **React Router 6** - Routing
- **Axios** - HTTP client
- **Vite** - Build tool
- **CSS3** - Styling

## 🔄 Migration from Thymeleaf

This project replaces Thymeleaf templates with React components:

- `login.html` → `src/pages/Login/Login.jsx`
- `dashboard.html` → `src/pages/Dashboard/Dashboard.jsx`

## 📞 Support

For issues or questions:
1. Check this README
2. Review browser console
3. Check backend logs
4. Verify API endpoints

## 📄 License

Private - Internal Use Only

---

**Built with ❤️ for ERP System Migration**
