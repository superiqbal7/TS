import faker from '@faker-js/faker';

export class User {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };

  constructor(){
    this.name = faker.name.firstName();
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude())
    };
  }
}
