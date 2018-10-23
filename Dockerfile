FROM node:8.12.0-alpine

ENV PORT 8080
EXPOSE 8080

WORKDIR /app

COPY . /app
RUN npm install --production \ 
	&& npm run build \ 
	&& rm -rf ./src

CMD ["node", "dist/app.js"]
