const productos = [
    {
        id:"iron man",
        nombre:"funko iron man",
        descripcion:"funko iron man marvel ",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_953051-MLA50289753495_062022-O.webp",
        stock: 10,
        precio: 500,

    },
    {

        id:"lupin",
        nombre:"funko profesor lupin",
        descripcion:"funko dobby harry potter",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_930918-MLM41101681230_032020-O.webp",
        stock: 5,
        precio: 300,
    },
    {

        id:"doom",
        nombre:"funko doom",
        descripcion:"fuko doom marvel",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_718812-MLM40532934969_012020-O.webp",
        stock: 20,
        precio: 500,
    },
    {
        
        id:"sirius",
        nombre:" funko sirius black",
        descripcion:"sirius black harry potter",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_933891-MLU41256299193_032020-O.webp",
        stock: 20,
        precio: 500,
    },
    {
        
        id:"doctor strange",
        nombre:"funko doctor strange",
        descripcion:"funko doctor strange marvel",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_875989-MLU52267213147_112022-O.webp",
        stock: 30,
        precio: 1000,
    },
    {
        
        id:"doctor strange",
        nombre:"funko doctor strange",
        descripcion:"funko doctor strange marvel",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_875989-MLU52267213147_112022-O.webp",
        stock: 30,
        precio: 1000,
    },
    {
        
        id:"doctor strange",
        nombre:"funko doctor strange",
        descripcion:"funko doctor strange marvel",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_875989-MLU52267213147_112022-O.webp",
        stock: 30,
        precio: 1000,
    },
    {
        
        id:"doctor strange",
        nombre:"funko doctor strange",
        descripcion:"funko doctor strange marvel",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_875989-MLU52267213147_112022-O.webp",
        stock: 30,
        precio: 1000,
    },
    {
        
        id:"doctor strange",
        nombre:"funko doctor strange",
        descripcion:"funko doctor strange marvel",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_875989-MLU52267213147_112022-O.webp",
        stock: 30,
        precio: 1000,
    }
];

const obtenerProductos = new Promise ((resolve,reject)  =>{
    //Simulamos un retraso de red
    setTimeout(() => {
    resolve (productos);
    },2000);
});

export default obtenerProductos