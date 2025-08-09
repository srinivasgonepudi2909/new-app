# ---------- Build stage ----------
    FROM node:20-alpine AS build
    WORKDIR /app
    
    # Cache deps
    COPY package*.json ./
    RUN npm install
    
    # Copy source
    COPY . .
    
    # Build production bundle
    RUN npm run build
    
    # ---------- Serve stage ----------
    FROM nginx:alpine
    # SPA routing
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    # Built assets
    COPY --from=build /app/dist /usr/share/nginx/html
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    