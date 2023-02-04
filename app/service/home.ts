import { Service } from 'egg';

type HelloWorld = {
  a: string;
  b: string;
  c: number;
}

export default class HomeService extends Service {
  hello() {
    throw new Error('See Call Stack');
  }

  world() {
    throw new Error('See Call Stack');
  }
}