# build (SSG : prerender → fichiers statiques)
FROM node:22-alpine AS build
WORKDIR /app/vitrine
COPY vitrine/package*.json ./
RUN npm ci
COPY vitrine/ ./
RUN npm run build

# runtime : nginx sert les fichiers prérendus
FROM nginx:alpine AS runtime
COPY --from=build /app/vitrine/dist/vitrine/browser /usr/share/nginx/html
COPY vitrine/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
