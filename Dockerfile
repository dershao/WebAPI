FROM node:8.12.0-alpine

ENV PORT 8080
EXPOSE 8080

WORKDIR /app

COPY . .
RUN npm install --production \ 
	&& npm run build \ 
	&& rm -rf /src

CMD ["node", "dist/App.js"]
