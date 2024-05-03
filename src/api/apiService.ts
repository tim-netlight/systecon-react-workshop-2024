export interface CostPoint {
  effectiveness: string
  cost: string
}

export interface CostPointDTO {
  data: CostPoint[]
}

// TODO: Create some nice data source
export const getCostData = async (): Promise<CostPointDTO> => {
  return await fetch('../../data.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      return data
    })
}
