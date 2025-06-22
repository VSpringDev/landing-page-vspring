FROM node:20-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

RUN pnpm install

COPY . .

ENV NEXT_DISABLE_ESLINT=true
RUN pnpm build

FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/src ./src

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]
