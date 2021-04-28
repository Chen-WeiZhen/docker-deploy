# docker-deploy
more config detail in `db.js` and `docker-compose.yml`

run ` docker-compose up` to build docker,and show more detail from terminal

The proble:
  Can't use container name `db` to connect mysql in `db.js`
  but use `docker inspect db` to get 
  ```js
    "Gateway": "192.168.224.1", //using this is working to connect mysql 
    "IPAddress": "192.168.224.2",// container_name refer to this. No work
  ```