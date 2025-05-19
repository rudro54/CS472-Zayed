type Movie = {id: string, title: string}

class Exercise3 {
    private movies: Map<string, Movie[]>;
     //key is the genre: string, value is array of movies
    // example: { thriller: [{ id: '1', title: 'The American'}, { id: '2', title: 'Arcadian'}] }
    
    constructor() {
        this.movies = new Map();
    }

    add_genre(genre: string) {
    // add genre if genre does not exist
    // return true if the genre is added successfully, false otherwise
        if (this.movies.has(genre)) return false
        this.movies.set(genre, [])
        return true;
    }

    add_movie_in_genre(genre: string, new_movie:Movie): boolean {
    // add movie if movie id does not exist
    // return true if the movie is added successfully, false otherwise
        this.add_genre(genre)
        let movieList: Movie[] = this.movies.get(genre) ?? []
        if (movieList.some(m => m === new_movie)) return false
        movieList.push(new_movie)
        return true;
    }

    update_movie_title_by_genre_and_movie_id(genre: string, movie_id: string, new_title: string): boolean {
    // update a movie swithin a certain genre
    // return true if the movie's title is updated successfully, false otherwise
        let movieList: Movie[] = this.movies.get(genre) ?? []
        let movie = movieList.find(m => m.id === movie_id)
        if (!movie) return false
        movie.title = new_title
        return true;
    }
    delete_movie_by_genre_and_movie_id(genre: string, movie_id: string): boolean {
    // delete movie
    // return true if the movie is delete successfully, false otherwise
        let movieList: Movie[] = this.movies.get(genre) ?? []
        let movie_index = movieList.findIndex(m => m.id === movie_id)
        if (movie_index === -1) return false
        movieList.splice(movie_index, 1)
        return true;
    }
    get_movie_title_by_id(genre: string, movie_id: string): string {
    // return the movie title
        let movieList: Movie[] = this.movies.get(genre) ?? []
        let movie = movieList.find(m => m.id === movie_id)
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
