FROM node:latest 
WORKDIR .
COPY . .
RUN npm install
RUN npm run build --prod
FROM nginx:alpine
COPY --from=0 /dist/practise-1 /usr/share/nginx/html