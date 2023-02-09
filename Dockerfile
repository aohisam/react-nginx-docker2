# syntax=docker/dockerfile:1

FROM node:19-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html