import axios from 'axios'

export default axios.create({
  baseURL: 'https://pweb-backend.erictv2022.repl.co/api/v1',
  headers: {
    'Content-type': 'application/json'
  }
})