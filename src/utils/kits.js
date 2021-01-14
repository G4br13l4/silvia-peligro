//Essentials
import familiaCactus from "../assets/imgs/kit-cactus.png";
import tazitaGato from "../assets/imgs/kit-taza-gatito.png";
import pajarito from "../assets/imgs/kit-pajarito.png";
import loteria from "../assets/imgs/kit-loteria.png";
import ustedAqui from "../assets/imgs/kit-usted-aqui.png";
import calaverita from "../assets/imgs/kit-calaverita.png";
import marias from "../assets/imgs/kit-marias.png";
import milagrito from "../assets/imgs/kit-milagrito.png";
import florero from "../assets/imgs/kit-florero.png";

//Christmas
import casitaDulce from "../assets/imgs/kit-casita-dulce.png";
import pajaritoNav from "../assets/imgs/kit-pajarito-nav.png";
import pinoNevado from "../assets/imgs/kit-pino-nevado.png";
import chocolateNav from "../assets/imgs/kit-chocolate-nav.png";

//Halloween
import araña from "../assets/imgs/kit-araña.png";
import bouquet from "../assets/imgs/kit-bouquet.png";

//Domestika 
import domestika from "../assets/imgs/kit-domestika.jpg";

//Bordado Basico
import bordadoBasico from "../assets/imgs/kit-bordado-basico.png";

//Con clase
import calaveritaAzu from "../assets/imgs/kit-calaverita-azu.png";
import maria from "../assets/imgs/maria.png";

export const KITS = {
    essentials: {
        items: [
            { id: 'familiaCactus', name:'Familia Cactus', cover: familiaCactus, price: 190, isAvailable: true }, 
            { id: 'tazitaGato', name: 'Taza Gatito', cover: tazitaGato, price: 180, isAvailable: true },   
            { id: 'pajarito', name: 'Pajarito', cover: pajarito, price: 150, isAvailable: true },
            { id: 'loteria', name: 'Lotería Nopal', cover: loteria, price: 200, isAvailable: true },
            { id: 'ustedAqui', name: 'Usted está aquí', cover: ustedAqui, price: 180, isAvailable: true },
            { id: 'calaverita', name: 'Calaverita Viva la Vida', cover: calaverita, price: 200, isAvailable: true },
            { id: 'marias', name: 'Muñequitas María', cover: marias, price: 200, isAvailable: false },
            { id: 'milagrito', name: 'Milagrito floreciendo', cover: milagrito, price: 180, isAvailable: true },
            { id: 'florero', name: 'Florero Corazón', cover: florero, price: 200, isAvailable: true },
        ]
    },
    christmas: {
        items: [   
            { id: 'casitaDulce', name:'Casita de dulce', cover: casitaDulce, price: 190, isAvailable: true },
            { id: 'pajaritoNav', name:'Pajarito navideño', cover: pajaritoNav, price: 190, isAvailable: true },
            { id: 'pinoNevado', name:'Pino nevado', cover: pinoNevado, price: 190, isAvailable: true },
            { id: 'chocolateNav', name:'Chocolate navideño', cover: chocolateNav, price: 190, isAvailable: true },
        ]
    },
    halloween: {
        items: [
            { id: 'araña', name:'Araña bordadora', cover: araña, price: 190, isAvailable: true },
            { id: 'bouquet', name:'Bouquet Carnívoro', cover: bouquet, price: 190, isAvailable: true },
        ]
    },
    domestika: {
        items: [
            { id: 'domestika', name:'Bordado Miniatura', cover: domestika, price: 190, isAvailable: true },
        ]
    },
    basic: {
        items: [
            { id: 'bordadoBasico', name:'Bordado Basico', cover: bordadoBasico, price: 190, isAvailable: true },
        ]
    },
    'has-class': {
        items: [
            { id: 'calaveritaAzu', name:'Calaverita de azúcar', cover: calaveritaAzu, price: 190, isAvailable: true },
            { id: 'maria', name:'Muñequita María', cover: maria, price: 190, isAvailable: true },
        ]
    }
}

export const ALL_KITS = Object.keys(KITS).reduce((acc, type) => {
    return [...acc, {
        ...KITS[type].items[0],
        type
    }];
}, []);