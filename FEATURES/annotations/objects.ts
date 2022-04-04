const profile = {
  name: 'iqbal',
  age: 25,
  coords: {
    lattitude: 0,
    longitude: 10
  },
  setAge(age: number): void {
    this.age = age;
  }
}

const {age, name}: {age: number; name: string} = profile;

const { coords: {lattitude, longitude} }: { coords: {lattitude: number, longitude: number}} = profile;
