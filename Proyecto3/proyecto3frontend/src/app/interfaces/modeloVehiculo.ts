export interface ModeloVehiculo {
    idModelo: number,
    idMarca: string,
    nombreModelo: string,
    tipoCombustible: string,
    fechaModelo: Date,
    idMarca_marca: {
        idMarca: string,
        nombreMarca: string,
        paisMarca: string
    }
}
