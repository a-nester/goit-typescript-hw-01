type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

type Top = Pick<AllType, 'name' | 'color'>;
type Bottom = Pick<AllType, 'position' | 'weight'>;

function compare<T extends Top, U extends Bottom> (top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}
const newComp = compare({name:'Alex', color:'green'}, {position: 1, weight: 90})
console.log(newComp);