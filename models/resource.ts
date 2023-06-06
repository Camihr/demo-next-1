export interface Resource {
  info: Info
  //tacticalPlanning: TacticalPlanning
}

export interface Info {
  centerMaterialId: number
  leadTime: number
  frecuency: number
  reference: string
  materialDescription: string
  centerCode: string
}

// export interface TacticalPlanning []{
//   forecastedDate: Date
//   adu: number
// }
