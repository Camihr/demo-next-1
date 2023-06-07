export interface Resource {
  info: Info
  tacticalPlanning: Plan[]
}

export interface Info {
  leadTime: number
  frecuency: number
  reference: string
  materialDescription: string
  centerCode: string
}

export interface Plan {
  forecastedDate: Date
  adu: number
}

export interface PlanDate {
  forecastedDate: Date
}

type MiObjeto = {
  nombre: string
} & Record<string, any>

const miObjeto: MiObjeto = {
  nombre: 'John Doe',
}

const datosArray = [
  { clave: 'fecha1', valor: '2023-06-01' },
  { clave: 'fecha2', valor: '2023-06-02' },
  // Puedes agregar más elementos al array según sea necesario
]

datosArray.forEach((dato) => {
  miObjeto[dato.clave] = dato.valor
})
