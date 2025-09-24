# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install ALL dependencies (including dev for build)
COPY package*.json ./
RUN npm ci

# Copy server package files and install backend dependencies  
COPY server/package*.json ./server/
RUN cd server && npm install --omit=dev

# Copy source code
COPY . .

# Build frontend
RUN npm run build

# Clean up dev dependencies after build
RUN npm ci --omit=dev

# Expose port
EXPOSE 3000

# Set environment
ENV NODE_ENV=production

# Start the server
CMD ["npm", "start"]