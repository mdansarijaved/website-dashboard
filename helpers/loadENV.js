window.API_BASE_URL = 'https://api.realdevsquad.com';

if (window.location.hostname !== 'dashboard.realdevsquad.com') {
  window.API_BASE_URL = 'http://localhost:3000';
}
