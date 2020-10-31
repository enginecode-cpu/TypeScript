/**
 * 비구조화 할당
 */

interface ICompany {
  cName: string;
  age: number;
}

const apple: ICompany = { cName: "Apple Computer", age: 43 };
const ms: ICompany = { cName: "Microsoft", age: 44 };

const { cName, age } = apple;
console.log(cName, age);

/**
 * rest, spread
 */

let address: any = {
  country: "Korea",
  city: "Seoul",
  address1: "Gangnam-gu",
  address2: "Sinsa-dong 123-456",
  address3: "789 street, 2 Floor ABC building",
};
const { country, city, ...detail } = address;
console.log(detail);

let part1 = { name: "신짱구" };
let part2 = { age: 5 };
let part3 = { city: "떡잎마을" };
let merged = { ...part1, ...part2, ...part3 };
console.log(merged);
