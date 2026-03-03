// – Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру за шаблоном
// ШАБЛОН:
//
//     <ul>
//
//         <li>ITEM OF ARRAY</li>
//
//         <!–
//
//         і тд інші об’єкти масиву
//
//         …
//
//         …
//
//         …
//
//         –>
//
//     </ul>


let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js']

document.write(`<ul>`);
for (let listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`);
}
document.write(`</ul>`);