const movie1 = {
    title: 'Avengers: Endgame',
    year: 2019,
    imageUrl: 'https://heroichollywood.com/wp-content/uploads/2018/11/Doctor_Strange_Benedict_Cumberbatch_Avengers_Infinity_War_Marvel_Studios.jpg',
}

const movie2 = {
    title: 'The Imitation Game',
    year: 2014,
    imageUrl: 'https://imgix.bustle.com/rehost/2016/9/13/3da7b843-375b-45e3-8c0c-3f35c5c3a8db.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70',
}

movie1["title"]
movie1["year"]

movie1.title
movie1.year

const movies = [
    {
        title: 'Avengers: Endgame',
        year: 2019,
        imageUrl: 'https://heroichollywood.com/wp-content/uploads/2018/11/Doctor_Strange_Benedict_Cumberbatch_Avengers_Infinity_War_Marvel_Studios.jpg',
    },
    {
        title: 'The Imitation Game',
        year: 2014,
        imageUrl: 'https://imgix.bustle.com/rehost/2016/9/13/3da7b843-375b-45e3-8c0c-3f35c5c3a8db.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70',
    },
    {
        title: 'Star Trek Into Darkness',
        year: 2013,
        imageUrl: 'https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2012/12/benedict_cumberbatch_star_trek.jpg',
    },
    {
        title: 'The Hobbit: An Unexpected Journey',
        year: 2012,
        imageUrl: 'https://i.pinimg.com/originals/45/e7/1f/45e71fb53b2463ed93fde984f1168379.jpg',
    },
    {
        title: 'The Fifth Estate',
        year: 2013,
        imageUrl: 'https://cdn.onebauer.media/one/empire-tmdb/films/162903/images/vgtjJhY0vgMWdPEQOoXBVDnSCDl.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg',
    },
    {
        title: 'Painted with Words',
        year: 2010,
        imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p01gpwxk.jpg',
    },
]

console.log(movies[0])
console.log(movies[2].title)
console.log(movies[5].year)

const moviesByDate = movies.sort((a, b) => {
    console.log(a.year);
    console.log(b.year);
    console.log(a.year - b.year)
    return a.year - b.year
});

console.log(moviesByDate)

const listTitleHtml = `<h1>${movies.length} movies starring Benedict Cumberbatch</h1>`
const movieTitlesHtml = movies.map(movie => { return `<li>${movie.title}</li>` }).join("")
const pageHtml = `${listTitleHtml}<ul>${movieTitlesHtml}</ul>`

console.log(pageHtml)