export interface Resource {
  info: Info
  tacticalPlanning: Plan[]
}

export interface Info {
  centerMaterialId: number
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
