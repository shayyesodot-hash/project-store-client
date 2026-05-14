FROM node:20-alpine

WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

RUN npm install

# Copy the rest of the source code
COPY . .

EXPOSE 5173

# Run Vite dev server and expose it on all network interfaces
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
