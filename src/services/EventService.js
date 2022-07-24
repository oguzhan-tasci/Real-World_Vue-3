import axios from 'axios'

//  There's a problem with our code.
//  As things currently stand we're importing Axios, into the EventList component.
//  But in the next lesson we're gona add another component, called 'EventDisplay'.
//  And that component will also need to make an API call using Axios.
//  Importing Axios into each of the components hat need to make an API call that becomes a bit problematic.
//  Because each component has created a new instance of Axios. In order to clear things up,

const apiClient = axios.create({ // Single Axios instance for our app
    baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3', // Base URL for all calls to use
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json' // For authentication & configuration
    }
})

export default {
    getEvents() {
        return apiClient.get('/events')
    }
}