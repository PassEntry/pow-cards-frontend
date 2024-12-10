const ENV = (() => {
  if (window.location.hostname.includes('staging')) {
    return 'staging';
  }
  return process.env.NODE_ENV || 'development';
})();

const CONFIG = {
  development: {
    apiUrl: 'http://localhost:3001'
  },
  staging: {
    apiUrl: 'https://staging-api.pow.cards'
  },
  production: {
    apiUrl: 'https://api.pow.cards'
  }
};

export const getConfig = () => CONFIG[ENV as keyof typeof CONFIG]; 