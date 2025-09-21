import { Delays } from "./lib/enum.js";

function delayedHello(name: string, delay: number = Delays.Medium): Promise<string> {
  return new Promise((resolve: (value?: string) => void) =>
    setTimeout(() => resolve(`Hello, ${name}`), delay),
  );
}

export async function greeter(name: string): Promise<string> {
  return await delayedHello(name, Delays.Long);
}

console.log('Starting greeter...');
greeter('Bilal').then((message) => console.log(message));

console.log('Greeter initiated.');
