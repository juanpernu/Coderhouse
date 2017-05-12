'use strict'

var IMDB = (function() {
	
	//privado
	var movies = [];

	function existMovie(id, movies) {
		
		for (var i = 0; i < movies.length; i++) {	
			if (movies[i].id === id) {
				return true;
			};
		};

		return false;

	}

	//publico - public API
	return {
		addMovie: function (id, title) {

			var exist = existMovie(id, movies);

			if (!exist) {
				console.log('Pelicula creada exitosamente!');

				var movie = {
					id:id,
					titulo:title
				}

				movies.push(movie)

			} else {
				console.log('Oops! La pelicula ya existe');
			}
		},

		getMovies: function () {
			console.log(movies);
		},

		//ELIMINAR PELICULA POR ID
		deleteMovie: function (id) {
			for(var i = 0; i < movies.length; i++) {
			    var movieObj = movies[i];

			    if(movieObj.id === id) {
			        movies.splice(i, 1);
			        console.log('La pelicula fue eliminada con exito! :D')
			    }
			}
		}
	}
	localStorage.setItem('moviesInStorage', movies);

})();