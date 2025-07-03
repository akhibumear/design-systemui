const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Starting manual deployment...');

try {
  // Build Storybook
  console.log('📦 Building Storybook...');
  execSync('npm run build-storybook', { stdio: 'inherit' });
  
  // Deploy to gh-pages branch
  console.log('🚀 Deploying to GitHub Pages...');
  
  // Install gh-pages if not installed
  try {
    require('gh-pages');
  } catch (e) {
    console.log('📦 Installing gh-pages...');
    execSync('npm install -D gh-pages', { stdio: 'inherit' });
  }
  
  // Deploy
  const ghpages = require('gh-pages');
  
  ghpages.publish('storybook-static', {
    branch: 'gh-pages',
    message: 'Deploy Storybook [ci skip]'
  }, (err) => {
    if (err) {
      console.error('❌ Deployment failed:', err);
      process.exit(1);
    } else {
      console.log('✅ Deployment successful!');
      console.log('🌐 Your Storybook is live at: https://akhibumear.github.io/design-systemui/');
    }
  });
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 