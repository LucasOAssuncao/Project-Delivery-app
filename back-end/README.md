Rotas da API

POST localhost:3001/login

- necessário enviar um objeto como o exemplo:

        {
        "email": "userdd1@user.com",
        "password": "123123"
        }

  Retorno da API:

        {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJkZDFAdXNlci5jb20iLCJpZCI6NCwibmFtZSI6IkZlcm5hbmRhIGRzZmRmZGZkIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjcwNTI2NDQ0LCJleHAiOjE2NzEzOTA0NDR9.HaRofwh74V8NA5gHH1MNS_hbxzjHMTsvJKd9xz7PkYo",
        "role": "customer"
        }

POST localhost:3001/register
Para registo de novos usuários.

- necessário enviar um objeto como o exemplo:

        {
        "name": "Fernanda dsfdfdfd",
        "email": "userdd1@user.com",
        "password": "123123"
        }

GET localhost:3001/products
Para buscar todos os produtos.

Retorno da API:

        [
        {
            "id": 1,
            "name": "Skol 269ml",
            "price": "2.99",
            "urlImage": "http://localhost:3001/images/skol_269ml.jpg"
        },
        {
            "id": 2,
            "name": "Brahma 600ml",
            "price": "3.49",
            "urlImage": "http://localhost:3001/images/brahma_600ml.jpg"
        },
        ]

GET localhost:3001/sellers
Para buscar todos os vendedores.

Retorno da API:

        [
        {
            "id": 2,
            "name": "Fulana Pereira",
            "email": "fulana@deliveryapp.com",
            "password": "3c28d2b0881bf46457a853e0b07531c6",
            "role": "seller"
        }
        ]

POST localhost:3001/order
Para buscar todos os pedidos.

- necessário enviar um objeto como o exemplo no body:
  Esta rota utiliza Token!!!

        {
        "sellerId": 2,
        "totalPrice": 10.00,
        "address": { "st": "rua", "nb": "numero" },
        "products": [
            {
            "productId": 1,
            "quantity": 2
            }
        ]
        }

GET localhost:3001/order/details
Para buscar os detalhes de um pedido por id.

- necessário enviar um objeto como o exemplo no body:
  Esta rota utiliza Token!!!

        { "saleId": 1 }

  Retorno da API:

    [
        {
        "id": 1,
        "userId": 2,
        "sellerId": 3,
        "totalPrice": "100.50",
        "deliveryAddress": "Rua Zé das Flores",
        "deliveryNumber": "90",
        "saleDate": "2022-12-01T19:58:00.000Z",
        "status": "Entregue"
        },
    ]

GET localhost:3001/order/:id
Para buscar um pedido.

- Retorno da API:
        {
        "id": 1,
        "userId": 2,
        "sellerId": 3,
        "totalPrice": "100.50",
        "deliveryAddress": "Rua Zé das Flores",
        "deliveryNumber": "90",
        "saleDate": "2022-12-01T19:58:00.000Z",
        "status": "Entregue"
        }

GET localhost:3001/order/
Para buscar todos os pedidos.

- Retorno da API:
    [
        {
        "id": 1,
        "userId": 2,
        "sellerId": 3,
        "totalPrice": "100.50",
        "deliveryAddress": "Rua Zé das Flores",
        "deliveryNumber": "90",
        "saleDate": "2022-12-01T19:58:00.000Z",
        "status": "Entregue"
        },
        {
        "id": 2,
        "userId": 2,
        "sellerId": 3,
        "totalPrice": "120.50",
        "deliveryAddress": "Rua Zé das Flores",
        "deliveryNumber": "90",
        "saleDate": "2022-12-01T19:58:00.000Z",
        "status": "Em Trânsito"
        },
    ]

PATCH /order/:id


- necessário enviar um objeto contendo o status (Preparando, Pendente, Em trânsito ou Entregue) como o exemplo:
    Esta rota usa token!!!

        { "status": "Pendente" }

    Retorno da API:
        {
        "id": 1,
        "userId": 2,
        "sellerId": 3,
        "totalPrice": "100.50",
        "deliveryAddress": "Rua Zé das Flores",
        "deliveryNumber": "90",
        "saleDate": "2022-12-01T19:58:00.000Z",
        "status": "Pendente"
        }
