export const retrieveData = async () => {
  try {
    const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movie')
    if (!response.ok) { 
      throw new Error("Oops! Something went wrong")
    }
    const data = await response.json()
    console.log('API Data:', data)
    return(data)
  
  } catch (error) {
    if (error.message === 'Failed to fetch') {
      throw new Error('Network error: Please check your internet connection')
    }
    console.error(error)
    throw error 
  }
}

export const singleMovieId = async (id) => {
  try {
    const response = await fetch( `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    if (!response.ok) {
      throw new Error("Oops! Something went wrong")
    }
    const data = await response.json()
    console.log('Single Movie Data:', data)
    return(data)

  } catch (error) {
    if (error.message === 'Failed to fetch') {
      throw new Error('Network error: Please check your internet connection')
    }
    console.error(error)
    throw error
  }
}
