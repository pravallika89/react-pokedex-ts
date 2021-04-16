type Pokemon ={
  id: number;
  num: string;
  name: string;
  img: string;
  type: string[];
  height: string;
  weight: string;
  candy: string;
  candy_count?: number|undefined;
  egg: string;
  spawn_chance: number;
  avg_spawns: number;
  spawn_time: string;
  multipliers?:  null|number[] ;
  weaknesses: string[];
  next_evolution?:{num:string,name:string}[]|undefined;
  prev_evolution?: {num:string,name:string}[]|undefined;
  
}


