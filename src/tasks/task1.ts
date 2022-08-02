const initTask1 = () => {
  type Animal = {
    species: string,
    numOfLegs: number,
    layEggs: boolean,
    skin: 'feathers' | 'scales' | 'fur' | 'shell',
  };

  type Flat = {
    city: string,
    price: number,
    hasBalcony: boolean,
    heating: 'air' | 'water' | 'steam' | 'electricity',
    typesOfRooms: string[]
  };

  interface Flower {
    species: string;
    averageAge: number;
    isLarge: boolean;
    climate: 'dry' | 'cold' | 'wet' | 'hot' | 'any';
  }

  interface Student {
    name: string;
    age: number;
    scholarship: boolean;
    degree: 'Associate' | 'Bachelor' | 'Master' | 'Doctoral';
    grades: number[];
  }
};

export default initTask1;
