fuser -k 3000/tcp

cd CI-CD-Test
git pull origin main
npm install
npm run build
npm run start -- -H 0.0.0.0