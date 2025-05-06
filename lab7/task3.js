class Exercise3 {
    #movies;
     //key is the genre: string, value is array of movies
    // example: { thriller: [{ id: '1', title: 'The American'}, { id: '2', title: 'Arcadian'}] }
    
    constructor() {
        this.#movies = new Map();
    }

    add_genre(genre) {
    // add genre if genre does not exist
    // return true if the genre is added successfully, false otherwise
        if (this.#movies.has(genre)) return false
        this.#movies.set(genre, [])
        return true;
    }

    add_movie_in_genre(genre, new_movie) {
    // add movie if movie id does not exist
    // return true if the movie is added successfully, false otherwise
        this.add_genre(genre)
        if (this.#movies.get(genre).some(m => m === new_movie)) return false
        this.#movies.get(genre).push(new_movie)
        return true;
    }

    update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
    // update a movie within a certain genre
    // return true if the movie's title is updated successfully, false otherwise
        let movie = this.#movies.get(genre).find(m => m.id === movie_id)
        if (!movie) return false
        movie.title = new_title
        return true;
    }
    delete_movie_by_genre_and_movie_id(genre, movie_id) {
    // delete movie
    // return true if the movie is delete successfully, false otherwise
        let movie_index = this.#movies.get(genre).findIndex(m => m.id === movie_id)
        if (movie_index === -1) return false
        this.#movies.get(genre).splice(movie_index, 1)
        return true;
    }
    get_movie_title_by_id(genre, movie_id) {
    // return the movie title
        let movie = this.#movies.get(genre).find(m => m.id === movie_id)
        return movie?.title ?? "";
    }
}

const lib = new Exercise3();

console.log(lib.add_genre('thriller'));         // true
console.log(lib.add_genre('thriller'));         // false

console.log(lib.add_movie_in_genre('thriller', { id: '1', title: 'a' })); // true
console.log(lib.add_movie_in_genre('thriller', { id: '2', title: 'b' }));     // true
console.log(lib.add_movie_in_genre('thriller', { id: '3', title: 'c' }));    // false

console.log(lib.get_movie_title_by_id('thriller', '1')); // "a"

console.log(lib.update_movie_title_by_genre_and_movie_id('thriller', '1', 'New Title')); // true
console.log(lib.get_movie_title_by_id('thriller', '1')); // "New Title"

console.log(lib.delete_movie_by_genre_and_movie_id('thriller', '1')); // true
console.log(lib.get_movie_title_by_id('thriller', '1')); // empty strin

