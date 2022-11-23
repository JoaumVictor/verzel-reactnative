clonar o projeto

na pasta raiz rodar o ( docker-compose up -d ) pra subir o banco de dados e o backend no docker

depois precisa entrar no terminal do container do backend do docker usando ( docker exec -it backend sh )

pra ativar o migrate e o seed do banco é só rodar dentro do container do backend ( npm run db:migrate )
