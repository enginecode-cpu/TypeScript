# 기본 설정
## 프로젝트 생성하기

```bash
npm init --y
```
<br>

## package.json
Node js가 관리하는 패키지 관리 파일로서 프로젝트 정보와 관련 패키지가 기록된다.
이 파일을 이용해서 프로젝트를 개발하고 실행하는 데 필요한 패키지를 관리할 수 있다.

<br>

## 프로젝트 생성자 관점에서 패키지 설치하기

### 두 가지 옵션만을 기억하자

<br>

```bash
--save(-S)
```
프로젝트를 실행할 때 필요한 패키지로 설치한다. 
패키지 정보가 `package.json` 파일의 `dependencies` 항목에 등록된다.

<br>

```bash
--save-dev(-D)
```
프로젝트를 개발할 때만 필요한 패키지로 설치한다. 
패키지 정보가 `package.json` 파일의 `devDependencies` 항목에 등록한다.

<br>

다른 개발자의 컴퓨터에도 설치할 수 있게 하기 위함이다.

<br>

## 타입 라이브러리에 대해서
자바스크립트와 완전히 다른 언어인 TypeScript는 JavaScript로 개발된 `chance`, `ramda` 라이브러리들을 
추가로 `@types/chance`, `@types/ramda` 같은 타입 라이브러리들을 제공해야한다. `@types/`가 앞에 붙는 타입 라이브러리들은 항상 `index.d.ts`라는 이름의 파일을 가지고 있다. 타입 스크립트 컴파일러는 이 파일의 내용을
바탕으로 `chance`, `ramda`와 같은 라이브러리가 제공하는 함수들을 올바르게 사용했는지 검증한다.

<br>

TypeScript는 또한 웹 브라우저나 Node js가 기본적으로 제공하는 타입들의 존재도 알지 못한다.
예를 들어서, `Promise`와 같은 타입을 사용하려면 `@types/node` 패키지를 설치해야한다.

<br>

```bash
npm i -D @types/node
```
<br>

## tsconfig.json 파일 만들기
TypeScript 프로젝트는 컴파일러 설정 파일인 `tsconfig.json` 파일이 있어야 한다.

<br>

```bash
tsc --init
```

<br>

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "outDir": "dist",
    "baseUrl": ".",
    "sourceMap": true,
    "downlevelIteration": true,
    "noImplicitAny": false,
    "paths": { "*": ["node_modules/*"] }
  },
  "include": ["src/**/*"]
}
```

<br>

`compilerOptions` : tsc 명령 형식에서 옵션을 나타낸다.<br>

`include` : 대상 파일 목록을 나타낸다.<br>

`module` : 동작 대상 플랫폼이 웹 브라우저인지 Node js인지를 구분해 그에 맞는 모듈 방식으로
컴파일 하려는 목적으로 설정한다. 플랫폼에 따라서 다음과 같이 값을 설정할 수 있다.

<br>

```
웹 브라우저에서 동작: amd
Node js에서 동작 : commonjs
```

<br>

`moduleResolution` : `module` 카 값이 `commonjs`이면 항상 `node`로 설정한다.
`module`이 `amd`이면 `classic`으로 설정<br>

`target` : 트랜스파일할 JavaScript 버전을 설정한다.<br>

`baseUrl`과 `outDir` : 트랜스 파일된 ES6 JavaScript 파일을 저장하는 디렉터리를 설정한다.
tsc는 `tsconfig.json` 파일이 있는 디렉터리에서 실행된다.<br>

<br>

## src 디렉터리와 소스 파일 만들기
`tsconfig.json` 파일에서 `include` 항목이 있다. 
`["src/**/*"]`이라는 값이 있는데, `./src` 디렉터리에 프로젝트의 모든 TypeScript 소스 파일이 있다는 뜻이다.
`./src` 폴더 안에 여러 폴더를 생성해서 TypeScript 소스 파일을 넣어도 된다.

<br>

## package.json 수정
`package.json` 파일을 열고 `scripts` 항목에 `dev`와 `build` 명령을 추가한다.
이것은 TypeScript 코드를 JavaScript 코드로 변환하여 실행해야하기 때문이다.
<br>
```json
"scripts": {
    "dev": "ts-node src",
    "build": "tsc && node dist",
}
```

<br>

`dev` 명령은 개발 중에 `src` 디렉터리에 있는 `index.ts` 파일을 실행하는 용도로 사용한다.
`build` 명령은 개발이 완료된 후 프로그램을 배포하기 위해 `.dist` 디렉터리에 있는 ES6 자바스크립트 파일을
만들 때, 사용한다.
