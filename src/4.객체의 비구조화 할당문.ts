/**
 * 비구조화 할당
 */

interface ICompany {
    cName: string
    age: number   
}

const apple: ICompany = { cName: 'Apple Computer', age: 43 };
const ms: ICompany = { cName: 'Microsoft', age: 44 };

const { cName, age } = apple;
console.log(cName, age);