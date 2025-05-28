# Stage 1: Build the Angular application
FROM node:18-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

RUN echo "Contenido de /usr/src/app/dist/ :" && ls -la /usr/src/app/dist/cundinamarca-emprende

# Stage 2: Serve the application using Nginx
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/cundinamarca-emprende/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 