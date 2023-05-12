import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.medalert.app',
  appName: 'medalert-web',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
