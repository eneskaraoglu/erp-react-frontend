import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../api/api';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    show: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasDigit: false,
    hasSpecialChar: false,
    isStrong: false
  });
  const { login } = useAuth();

  const checkPasswordComplexity = (password) => {
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasDigit = false;
    let hasSpecialChar = false;

    for (let i = 0; i < password.length; i++) {
      const c = password.charAt(i);

      if (c >= 'A' && c <= 'Z') {
        hasUpperCase = true;
      } else if (c >= 'a' && c <= 'z') {
        hasLowerCase = true;
      } else if (c >= '0' && c <= '9') {
        hasDigit = true;
      } else if (!((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9'))) {
        hasSpecialChar = true;
      }
    }

    return {
      hasUpperCase,
      hasLowerCase,
      hasDigit,
      hasSpecialChar,
      isStrong: hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar
    };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError('');

    if (name === 'password') {
      if (value.length > 0) {
        const strength = checkPasswordComplexity(value);
        setPasswordStrength({
          show: true,
          ...strength
        });
      } else {
        setPasswordStrength({
          show: false,
          hasUpperCase: false,
          hasLowerCase: false,
          hasDigit: false,
          hasSpecialChar: false,
          isStrong: false
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const requestData = JSON.stringify({
        username: formData.username,
        password: formData.password
      });

      const response = await api.post('/login', requestData, {
        headers: {
          'Content-Type': 'text/plain'
        }
      });

      const { token, username, message } = response.data;

      localStorage.setItem('token', token);
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }

      const user = {
        username: username,
        name: username
      };

      login(user);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-logo">
          <img src="/img/port_login_logo.png" alt="BilişimERP Port Logo" />
        </div>

        <p className="text-center mb-4">
          BilişimERP kullanıcı bilgileriniz ile giriş yapabilirsiniz.
        </p>

        {error && (
          <div className="alert alert-danger">
            <h5><i className="icon fas fa-exclamation-triangle mr-2"></i> Hata!</h5>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Kullanıcı Adı</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Kullanıcı adı veya e-posta giriniz"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Şifre</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Şifre giriniz"
              required
            />

            {passwordStrength.show && (
              <div className={`password-strength ${passwordStrength.isStrong ? 'strong' : ''}`}>
                <h6>
                  {passwordStrength.isStrong ? 'Güçlü Şifre!' : 'Şifre Güvenlik Kontrolü'}
                </h6>
                <div className="strength-item">
                  <span className={`strength-icon ${passwordStrength.hasUpperCase ? 'valid' : 'invalid'}`}>
                    {passwordStrength.hasUpperCase ? '✓' : '×'}
                  </span>
                  <span className="strength-text">En az bir büyük harf (A-Z)</span>
                </div>
                <div className="strength-item">
                  <span className={`strength-icon ${passwordStrength.hasLowerCase ? 'valid' : 'invalid'}`}>
                    {passwordStrength.hasLowerCase ? '✓' : '×'}
                  </span>
                  <span className="strength-text">En az bir küçük harf (a-z)</span>
                </div>
                <div className="strength-item">
                  <span className={`strength-icon ${passwordStrength.hasDigit ? 'valid' : 'invalid'}`}>
                    {passwordStrength.hasDigit ? '✓' : '×'}
                  </span>
                  <span className="strength-text">En az bir rakam (0-9)</span>
                </div>
                <div className="strength-item">
                  <span className={`strength-icon ${passwordStrength.hasSpecialChar ? 'valid' : 'invalid'}`}>
                    {passwordStrength.hasSpecialChar ? '✓' : '×'}
                  </span>
                  <span className="strength-text">En az bir özel karakter (!@#$%...)</span>
                </div>
              </div>
            )}
          </div>

          <div className="d-flex justify-content-between mb-4">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="remember">
                Beni Hatırla
              </label>
            </div>
            <a href="#" className="link-blue">Şifremi Unuttum</a>
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Giriş yapılıyor...' : 'Giriş'}
            </button>
          </div>
        </form>

        <div className="footer-text">© 2025 BilişimERP</div>
      </div>
    </div>
  );
};

export default Login;
