# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install frontend dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy server package files and install backend dependencies  
COPY server/package*.json ./server/
RUN cd server && npm install --omit=dev

# Copy source code
COPY . .

# Build frontend
RUN npm run build

# Expose port
EXPOSE 3000

# Set environment
ENV NODE_ENV=production

# Start the server
CMD ["npm", "start"]