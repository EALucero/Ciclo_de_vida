import React, { Component } from 'react';
import MovieList from './MovieList';

class Movie extends Component {
	constructor(props) {
		super(props)
		this.state = {
			moviesList: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3001/api/movies')
			.then(res => res.json())
			.then(movies => { this.setState({ moviesList: movies.data }) })
			.catch(error => console.log(error))
	}

	render() {
		console.log(this.state.moviesList)
		return (
			<React.Fragment>
				{/*<!-- PRODUCTS LIST -->*/}
				<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>

				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</thead>
								<tfoot>
									{
										this.state.moviesList.map((movie, index) => {
											return <MovieList  movie={movie.title} key={index} />
										})
									}
								</tfoot>
								{/* <tbody>
											<tr>
												<td>01</td>
												<td>Reto al destino</td>
												<td>20</td>
												<td>15</td>
												<td>120</td>
											</tr>
											<tr>
												<td>02</td>
												<td>La caida del halcon negro</td>
												<td>10</td>
												<td>18</td>
												<td>240</td>
											</tr>
										</tbody> */}
							</table>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Movie;