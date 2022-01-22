FROM node:lts-alpine 
 
 WORKDIR /server
 COPY package.json /server
 RUN npm install --production
 COPY . /server
 EXPOSE 5000
 CMD ["node", "server.js"]

