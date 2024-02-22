import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'goggle-sign',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId: "669984692773-cp19iqdrkeq3vb2f7k7mej18u6u6hae9.apps.googleusercontent.com",
      forceCodeForRefreshToken: true
    }
  }

};

export default config;
