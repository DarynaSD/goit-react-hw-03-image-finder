import { Component } from 'react'

class Searchbar extends Component {
	state = { value: '' }

	handleChange = ({ target: { value } }) => {
		this.setState({ value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.submit(this.state.value)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor='findImages'>
						Search photos
					</label>
					<input
						name='title'
						type='text'
						onChange={this.handleChange}
						className='form-control'
						id='findImages'
						value={this.state.value}
					/>
				</div>
				<button type='submit'>
					Search
				</button>
			</form>
		)
	}
}

export default Searchbar