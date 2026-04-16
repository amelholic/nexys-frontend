FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:24-alpine

WORKDIR /app

# Production deps only (smaller image). @sveltejs/kit must be in package.json
# "dependencies" — adapter-node reads default-error.html from the kit package at runtime.
COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/build ./build

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "build"]
