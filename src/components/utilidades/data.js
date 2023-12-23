const productos = [
    {
        id:"ironman",
        nombre:"iron man ",
        descripcion:"Funko iron man End Game ",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_953051-MLA50289753495_062022-O.webp",
        categoria:"superheroesmarvel",
        stock: 10,
        precio: 1500,

    },
    {

        id:"lupin",
        nombre:"profesor lupin",
        descripcion:"funko profesor lupin",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_930918-MLM41101681230_032020-O.webp",
        categoria:"harrypotter",
        stock: 5,
        precio: 800,
    },
    {

        id:"doom",
        nombre:"funko doom",
        descripcion:"funko doctor doom",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_718812-MLM40532934969_012020-O.webp",
        categoria:"villanosmarvel",
        stock: 50,
        precio: 500,
    },
    {
        
        id:"sirius",
        nombre:"sirius black",
        descripcion:"sirius black harry potter",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_933891-MLU41256299193_032020-O.webp",
        categoria:"harrypotter",
        stock: 10,
        precio: 500,
    },
    {
        
        id:"doctorstrange",
        nombre:"funko doctor strange",
        descripcion:"Doctor strange Multiverse Of Madness",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_875989-MLU52267213147_112022-O.webp",
        categoria:"superheroesmarvel",
        stock: 25,
        precio: 1000,
    },
    {
        
        id:"dumbledore",
        nombre:"funko dumbledore",
        descripcion:"funko dumbledore harry potter",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_860252-MLA31356733040_072019-O.webp",
        categoria:"harrypotter",
        stock: 70,
        precio: 1000,
    },
    {
        
        id:"loki",
        nombre:"funko loki",
        descripcion:"funko president loki",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_709006-MLU53811715138_022023-O.webp",
        categoria:"villanosmarvel",
        stock: 5,
        precio: 600,
    },
    {
        
        id:"snape",
        nombre:"funko snape",
        descripcion:"funko severus snape harry potter",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_844521-MLU41847666806_052020-O.webp",
        categoria:"harrypotter",
        stock: 15,
        precio: 1500,
    },
    {
        
        id:"groot",
        nombre:"funko groot",
        descripcion:"funko groot marvel",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_627138-MLU70423328388_072023-O.webp",
        categoria:"superheroesmarvel",
        stock: 5,
        precio: 800,
    },
    {
        id:"hermione",
        nombre:"funko hermione granger",
        descripcion:"funko hermione harry potter",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_889852-MLC44927707232_022021-O.webp",
        categoria:"harrypotter",
        stock: 8,
        precio: 800,
    },
    {
        
        id:"ron",
        nombre:"funko ron",
        descripcion:"funko ron weasley harry potter",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_847047-MLU53132185786_012023-O.webp",
        categoria:"harrypotter",
        stock: 50,
        precio: 550,
    },
    {
        id:"venom",
        nombre:"funko venom",
        descripcion:"funko venom marvel",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_665915-MLC48504241746_122021-O.webp",
        categoria:"villanosmarvel",
        stock: 90,
        precio: 550,
    },
    {
        id:"magneto",
        nombre:"funko magneto",
        descripcion:"funko magneto marvel",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_740757-MLU69631588438_052023-O.webp",
        categoria:"villanosmarvel",
        stock: 45,
        precio: 550,
    },
    {
        id:"juggernaut",
        nombre:"funko juggernaut",
        descripcion:"funko juggernaut marvel",
        imagen:"https://http2.mlstatic.com/D_Q_NP_860218-MLA27927049973_082018-O.webp",
        categoria:"villanosmarvel",
        stock: 50,
        precio: 550,
    },
    {
        id:"hela",
        nombre:"funko hela",
        descripcion:"funko hela marvel",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_716228-MLA27840845563_072018-O.webp",
        categoria:"villanosmarvel",
        stock: 50,
        precio: 550,
    },
    {
        id:"capitan",
        nombre:"funko capitan america",
        descripcion:"funko capitan america marvel",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_616777-MLA26085836316_092017-O.webp",
        categoria:"superheroesmarvel",
        stock: 10,
        precio: 550,
    },
    {
        id:"wolverine",
        nombre:"funko wolverine",
        descripcion:"funko wolverine marvel",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_978335-MLC43813268028_102020-O.webp",
        categoria:"superheroesmarvel",
        stock: 70,
        precio: 550,
    },
    {
        id:"cyclope",
        nombre:"funko cyclope",
        descripcion:"funko cyclope marvel",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_850731-MLU69655152373_052023-O.webp",
        categoria:"superheroesmarvel",
        stock: 30,
        precio: 550,
    }
];

const obtenerProductos = new Promise ((resolve,reject)  =>{
    //Simulamos un retraso de red
    setTimeout(() => {
    resolve (productos);
    },2000);
});

export default obtenerProductos