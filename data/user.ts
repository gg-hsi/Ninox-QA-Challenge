import { fakerDE as faker } from '@faker-js/faker';
import { CustomerData } from 'types';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email({
  firstName: firstName.toLowerCase(),
  lastName: `${lastName.toLowerCase()}${faker.number.int({ max: 20 })}`,
  provider: 'ninox.sat',
});

export const customerData: CustomerData = {
  firstName: firstName,
  lastName: lastName,
  email: email,
  telephone: faker.phone.number({ style: 'national' }),
  password: faker.helpers.fromRegExp(/.{4}[0-9][a-z][A-Z][!@#$%*()_+^&]/),
  companyName: faker.company.name(),
  countryName: 'Germany',
  numberOfEmployees: '1 - 9',
};
