# 🚀 Installation Guide

## Step-by-Step Setup

### 1. Copy Project Files

Copy the entire `erp-react-project-project` folder to your workspace:

```bash
# Copy to your erp-react-project directory
C:\WORKSPACE\erp-react-project\
```

### 2. Install Node.js (if not installed)

Download and install Node.js 16+ from: https://nodejs.org/

Verify installation:
```bash
node --version   # Should show v16.x.x or higher
npm --version    # Should show 8.x.x or higher
```

### 3. Install Dependencies

Open terminal in the project directory:

```bash
cd C:\WORKSPACE\erp-react-project
npm install
```

This will install all required packages (~2 minutes).

### 4. Configure Environment

Create `.env` file:

```bash
# Copy the example file
copy .env.example .env

# Edit .env with your settings
```

Minimal `.env` configuration:
```env
VITE_API_BASE_URL=http://localhost:8080/api
```

### 5. Start Development Server

```bash
npm run dev
```

You should see:
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

### 6. Open in Browser

Navigate to: `http://localhost:3000`

You should see the login page!

## 🎉 Success!

If you see the login page, the installation is complete!

### Test Login (Mock Mode)

For immediate testing without backend:

1. Enter any username and password
2. Click "Sign in"
3. You'll be redirected to the dashboard

### Connect to Real Backend

To use with your Spring Boot backend:

1. Ensure backend is running on `http://localhost:8080`
2. Backend must have CORS configured for `http://localhost:3000`
3. Backend must provide `/api/auth/login` endpoint
4. Test login with real credentials

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is in use, edit `vite.config.js`:

```javascript
server: {
  port: 3001,  // Change to available port
}
```

### Module Not Found Errors

```bash
# Clear everything and reinstall
rm -rf node_modules package-lock.json
npm install
```

### CORS Errors

Backend needs CORS configuration:

```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("*")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
```

### Backend Not Running

Start your Spring Boot application:

```bash
# In your Spring Boot project
cd C:\WORKSPACE\ERP\erpPort
mvn spring-boot:run
```

## 📝 Next Steps

1. ✅ Installation complete
2. ⏳ Configure backend CORS
3. ⏳ Test authentication
4. ⏳ Migrate additional pages
5. ⏳ Deploy to production

## 🎓 Learn More

- React Documentation: https://react.dev
- Vite Documentation: https://vitejs.dev
- React Router: https://reactrouter.com

---

**Need help?** Check README.md for detailed documentation.
