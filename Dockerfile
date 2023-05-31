FROM alpine:latest

RUN apk update

RUN apk add npm

RUN apk --no-cache add ca-certificates

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT [ "node", "app.js" ]

EXPOSE 3000