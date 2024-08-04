FROM node:latest

# Install production dependencies.
WORKDIR /app

COPY bin/ ./

RUN npm install

RUN npm audit fix

# Run the web service on container startup.
CMD ["node", "./main.mjs"]