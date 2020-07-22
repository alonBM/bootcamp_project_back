import { Controller, Get } from '@nestjs/common';


/**
 * Especificamos el endpoint al que atacamos,
 * En este caso, desde el front hemos hecho llamada 
 * a http://localhost:3000/users, por lo que especificamos
 * a este controller que se encarge de ese endpoint 
 */ 
@Controller('/users')
export class UserController {

    /**
     * Cuando se hace una peticion GET a /users, se devuelve 
     * la funcion getAllUsers. Dara error, ya que el front espera
     * un array y devolvemos un solo objeto.
     */
    @Get()
    getAllUsers() {        
        return {
            "id": "4",
            "userType": "Patient",
            "name": "string",
            "firstSurname": "Xavi",
            "secondSurname": "string",
            "gender": "Gender",
            "birthDate": "Date",
            "nif": "string",
            "address": "Address",
            "medicalBoardNumber": "string",
            "professionalType": "ProfessionalType",
            "nhc": "string",
            "insuranceList": null
        }
    }
}
