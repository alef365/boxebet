const express = require('express')
const server = express()

server.use(express.static("public"))

const nunjucks = require('nunjucks')
nunjucks.configure('views', {
    express: server,
    noCache: true
})

console.log("serverfuncionando")

const lutas = {
    "lutas": [
                {
                    "id": 1,
                    "categoria_peso": "Meio-Pesado",
                    "lutador1": {
                        "nome": "Harold Santos",
                        "imagem": "1a_-_Harold_Santos_de_Araujo-removebg-preview.webp"
                    },
                    "lutador2": {
                        "nome": "Ulysses Felippe",
                        "imagem": "1b_-Ulysses_Felippe_Bacetti_Silva-removebg-preview.webp"
                    }
                },
                {
                    "id": 2,
                    "categoria_peso": "Meio-Pesado",
                    "lutador1": {
                        "nome": "Nicoly Gomes",
                        "imagem": "2a_-_Nicoly_Gomes_da_Silva-removebg-preview.webp"
                    },
                    "lutador2": {
                        "nome": "Elhem Taynara",
                        "imagem": "2b_-_Elhem_Taynara_Conceição_da_Silva-removebg-preview.webp"
                    }
                },
                {
                    "id": 3,
                    "categoria_peso": "Meio-Pesado",
                    "lutador1": {
                        "nome": "Saimon Machado",
                        "imagem": "3a - Saimon Machado Salvador.webp"
                    },
                    "lutador2": {
                        "nome": "Marcos Vinicius",
                        "imagem": "3b_-_Marcos_Vinicius_Rodrigues_de_Barros-removebg-preview.webp"
                    }
                },
                {
                    "id": 4,
                    "categoria_peso": "Meio-Pesado",
                    "lutador1": {
                        "nome": "Isabella de Carvalho",
                        "imagem": "4a - Isabella de Carvalho Batista Gomes.webp"
                    },
                    "lutador2": {
                        "nome": "Luana Barbosa",
                        "imagem": "4b_-_Luana_Barbosa_Dias-removebg-preview.webp"
                    }
                },
                {
                    "id": 5,
                    "categoria_peso": "Meio-Pesado",
                    "lutador1": {
                        "nome": "Luana Diniz",
                        "imagem": "5a_-_Luana_Diniz-removebg-preview.webp"
                    },
                    "lutador2": {
                        "nome": "Ana Karla Vaz",
                        "imagem": "5b_-_Ana_Karla_Vaz_de_Moraes-removebg-preview.webp"
                    }
                },
                {
                    "id": 6,
                    "categoria_peso": "Meio-Pesado",
                    "lutador1": {
                        "nome": "David Lourenço",
                        "imagem": "6a_-_David_Lourenço-removebg-preview.webp"
                    },
                    "lutador2": {
                        "nome": "Klisman Simão",
                        "imagem": "6b_-_Klisman_Simao.webp"
                    }
                },
                {
                    "id": 7,
                    "categoria_peso": "Meio-Pesado",
                    "lutador1": {
                        "nome": "Carlos Rivero",
                        "imagem": "7a_-_Carlos_Rivero-removebg-preview.webp"
                    },
                    "lutador2": {
                        "nome": "Patrick Teixeira",
                        "imagem": "7b_-_Patrick_Teixeira-removebg-preview.webp"
                    }
                },

            ]
}

// const lutas = {
//     "lutas": [
//         {
//             "id": 1,
//             "categoria_peso": "Meio-Pesado",
//             "lutador1": {
//                 "nome": "Anthony Smith",
//                 "imagem": "SMITH_ANTHONY_L_05-13.png"
//             },
//             "lutador2": {
//                 "nome": "Ryan Spann",
//                 "imagem": "SPANN_RYAN_R_03-11.png"
//             }
//         },
//         {
//             "id": 2,
//             "categoria_peso": "Meio-Pesado",
//             "lutador1": {
//                 "nome": "Max Holloway",
//                 "imagem": "HOLLOWAY_MAX_L_04-15.png"
//             },
//             "lutador2": {
//                 "nome": "Chan Sung Jung",
//                 "imagem": "FJUNG_CHAN_SUNG_R_04-09.png"
//             }
//         },
//         {
//             "id": 3,
//             "categoria_peso": "Meio-Pesado",
//             "lutador1": {
//                 "nome": "Liana Qqrcoisa",
//                 "imagem": "71741_profile-galery_fullbodyleft-picture_NA_LIANG_L_04-24.png"
//             },
//             "lutador2": {
//                 "nome": "Moça de Souza",
//                 "imagem": "ALDRICH_JJ_R_03-11.png"
//             }
//         },
//         {
//             "id": 4,
//             "categoria_peso": "Meio-Pesado",
//             "lutador1": {
//                 "nome": "Rinia Nakamura",
//                 "imagem": "NAKAMURA_RINYA_L_02-04.png"
//             },
//             "lutador2": {
//                 "nome": "Fernie Garcia",
//                 "imagem": "FGARCIA_FERNIE_R_05-07.png"
//             }
//         },
//         {
//             "id": 5,
//             "categoria_peso": "Meio-Pesado",
//             "lutador1": {
//                 "nome": "Erin Blanchfield",
//                 "imagem": "BLANCHFIELD_ERIN_L_11-12.png"
//             },
//             "lutador2": {
//                 "nome": "Taila Santos",
//                 "imagem": "FSANTOS_TAILA_R_06-11.png"
//             }
//         },
//         {
//             "id": 6,
//             "categoria_peso": "Meio-Pesado",
//             "lutador1": {
//                 "nome": "Seung Woo Choi",
//                 "imagem": "FCHOI_SEUNGWOO_L_06-11.png"
//             },
//             "lutador2": {
//                 "nome": "Jarno Errens",
//                 "imagem": "ERRENS_JARNO_R_09-03.png"
//             }
//         },
//         {
//             "id": 7,
//             "categoria_peso": "Meio-Pesado",
//             "lutador1": {
//                 "nome": "Mano da SIlva",
//                 "imagem": "NJOKUANI_CHIDI_L_03-25.png"
//             },
//             "lutador2": {
//                 "nome": "Fulano Nakamura",
//                 "imagem": "OLEKSIEJCZUK_MICHAL_R.png"
//             }
//         },
        
//     ]
// }

server.get("/", function(req, res){
    return res.render("index.html", lutas)
})

server.listen(3003)