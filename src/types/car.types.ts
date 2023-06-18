export interface ICar {
  id?: number;
  cost: number;
  title: string;
  picture: string;
}

export interface ICars {
  cars: ICar[];
}

