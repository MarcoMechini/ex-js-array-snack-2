const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];


// Snack1
const longBooks = books.filter(el => el.pages > 300)
const longBooksTitles = longBooks.map(el => el.title)

console.log('longBooksTitles', longBooksTitles);


// Snack 2
const availableBooks = books.filter(el => el.available)
const discountedBooks = availableBooks.map(el => (parseInt(el.price) * 80 / 100).toFixed(2))
const fullPricedBook = discountedBooks.find(e => e % 1 === 0)

console.log('fullPricedBook', fullPricedBook);


// Snack 3
const authors = books.map(e => e.author)
const areAuthorsAdults = authors.every(e => e.age > 18)
const bool = authors.sort((a, b) => (areAuthorsAdults) ? a.age - b.age : b.age - a.age)
console.log('authors', authors);


// Snack 4
const ages = authors.map(e => e.age)
const agesSum = ages.reduce((acc, el) => acc + el, 0) / ages.length

console.log('agesSum', agesSum);

// Snack 5

const ids = [2, 13, 7, 21, 19]

async function fetchJson(url) {

}

async function getBooks() {
    try {
        const books = await Promise.all(ids.map(async id => {
            const getFetch = await fetch(`https://boolean-spec-frontend.vercel.app/freetestapi/books/${id}`);
            const obj = await getFetch.json();
            return obj
        }))

        console.log('books', books);
        console.log('fine');

    } catch (error) {
        console.error(error);
    }
}

(async () => {
    getBooks()
})()

