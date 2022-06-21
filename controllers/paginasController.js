import { Viaje } from "../models/viajes.js";
import { Testimonial } from "../models/testimoniales.js";

const paginaInicio = async (req,res)=>{ // req- lo que enviamos : res - lo que express nos responde
    // res.send('hola mundo'); 

    //consultar tres viajes del modelo viaje 

    const promiseDB= []

    promiseDB.push(Viaje.findAll({limit:3}));
    promiseDB.push(Testimonial.findAll({limit:3}));


     try {
       const resultado= await Promise.all(promiseDB); 

      res.render('inicio', 
      {
         pagina: 'Inicio',
         clase: 'home',
         viajes:resultado[0],
         testimoniales:resultado[1]
     });
     } catch (error) {
      console.log(error);
     }

    
 }

 const paginaNosotros= (req,res)=>{ // req- lo que enviamos : res - lo que express nos responde
    // res.send('hola mundo'); 
    
     res.render('nosotros',{
        pagina: 'Nosotros'
     });
 }

 const paginaViajes = async (req,res)=>{ // req- lo que enviamos : res - lo que express nos responde
    // res.send('hola mundo'); 
    
    const viajes = await Viaje.findAll();
   // console.log(viajes);  

    // consultar base de datos 

     res.render('viajes',{
        pagina: 'Proximos viajes',
        viajes,
     });
 }

 const paginaTestimoniales = async (req,res)=>{ // req- lo que enviamos : res - lo que express nos responde
    // res.send('hola mundo'); 
    
    try {
      //consultado base de datos
      const testimoniales= await Testimonial.findAll();
      
      res.render('testimoniales',{
         pagina: 'testimoniales',
         testimoniales
      });
    } catch (error) {
       console.log(error);
    }
    
    
 }

 // muestra un viaje por su slug

 const paginaDetalleViaje= async (req,res)=>{ // req- lo que enviamos : res - lo que express nos responde
   // res.send('hola mundo'); 
   console.log(req.params);
    const {slug}= req.params;
    
    try {
      const viaje=  await Viaje.findOne({where: {slug}}); 
      res.render('viaje',{
         pagina:'Informacion viaje',
         viaje
      })
    } catch (error) {
      console.log(error); 
    }
};
 export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje 

};