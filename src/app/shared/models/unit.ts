
// unit model
// some fields are optional
// optional fields are marked based on all units
export interface Unit {
  id: number,
  name: string,
  description: string;
  expansion: string,
  age: string,
  cost: Cost | null,
  build_time?: number,
  reload_time?: number,
  attack_delay?: number,
  movement_rate?: number,
  line_of_sight: number,
  hit_points: number,
  range?: number | string,
  attack?: number,
  armor: string,
  accuracy?: string,
  attack_bonus?: string[]
}

interface Cost {
  Wood?: number,
  Gold?: number,
  Food?: number
}
