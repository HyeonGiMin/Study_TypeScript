import {readFileSync,readFile} from 'fs'

console.log('read package.json using synchrounous api...')
const buffer: Buffer = readFileSync('../package.json')
console.log(buffer.toString())

readFile('../package.json', (error: Error, buffer: Buffer) => {
    console.log('read package.json using asynchrounous api...')
    console.log(buffer.toString())
})

const readFilePromise = (filename: string): Promise <string> =>
    new Promise<string>((resolve, reject) => {
        readFile(filename, (error: Error, buffer: Buffer) => {
            if (error) {
                reject(error)
            } else {
                resolve(buffer.toString())
            }
        })
    }); // Promise 객체를 만들 때는 세미콜론이 반드시 있어야 합니다

(async () => {
    const content = await readFilePromise('../package.json')
    console.log('read package.json using Promise and aync/await...')
    console.log(content)
})()