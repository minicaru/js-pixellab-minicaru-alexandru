var person = {
  firstName: 'Alexandru',
  lastName: 'Minicaru',
  email:'minicaru.alexandru@yahoo.com',
  birthYear: '1987',
  zipCode: '077160',
  pets: [ {
     name: 'Amalia',
     species: 'labrador',
     age: '3'
  },
  {
     name: 'Alfonso',
     species: 'yorkshire',
     age: '5'
  },{
     name: 'Azorel',
     species: 'bichon',
     age: "2"
  },
  ]
}

console.warn('Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale”. Nu uita de proprietatea length a arrayului pets.');
console.log('Numele meu este ' + person.firstName + ' ' + person.lastName + ' si am ' + person.pets.length + ' animale.');

console.warn('Afiseaza propozitia: “Am acelasi email din copilarie: xxx”.');
console.log('Am acelasi email din copilarie: ' + person.email);

console.log(2020 - person.pets[1].age);
