# Docker

- `docker ps`

- `docker images`

- `docker run <image-name>`

- create Dockerfile

- `docker build -t <image-name> .` or `docker build -t <image-name> -f <Dockerfile-path>.`

- `docker run -d -p <port-out>:<port-in> <image-name>`
- `docker stop <image-id>`

- `-d` is backgroud run and logs with `docker logs <NAMES>`

- clear all process in ps `docker rm -f $(docker ps -a -q)`

- clear all images `docker rmi -f $(docker images -aq)`

# Docker Compose

- `docker-compose up -d --build`

- DBURL: `postgres://myuser:mypassword@localhost:5432/mydb`
