import { readFile, writeFile } from 'fs/promises';

export async function readAndWriteFile(path,data){
    try {
        // untuk write file
        await writeFile(path,data,'utf8');
        // untuk read file
        const read =  await readFile(path,'utf8');
        // penambahan await diperlukan karena proses membaca file perlu waktu, sehingga supaya ketika di console.log read dia bisa terbaca
        // apabila tidak ada await maka akan muncul promise {<pending>} karena proses readfilenya belum selesai
        console.log(read);
        return 
    } catch (error) {
        console.log(error);
    }
}