
 import { Testimonial } from "../models/testimoniales.js";

  const guardarTestimonial= async (req,res)=>{

    //validar.. 
    const {nombre,correo,mensaje} = req.body; 

    const errores=[]; 

    if (nombre.trim()==='') {
        errores.push({mensaje:'El nombre esta vacio'});
    }
    if (correo.trim()==='') {
        errores.push({mensaje:'El correo esta vacio'});
    }
    if (mensaje.trim()==='') {
        errores.push({mensaje:'El mensaje esta vacio'});
    }

    if (errores.length>0) {

        // consultar los testimoniales existentes
        const testimoniales= await Testimonial.findAll();

        // mostrar errores a testimoniales

        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales

        });
    } else {

        //almacenarlo en la base de datos

        try {
            await Testimonial.create({
                   nombre,
                   correo,
                   mensaje 

            });

            res.redirect('/testimoniales');

        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonial
}