'use strict'

const config = require('./../config')
const store = require('./../store')

const getBooks = function (req, res) {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}

const createNewBook = function (book) {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'POST',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: book
  })
}

const updateBook = function (data, id) {
  return $.ajax({
    url: config.apiUrl + '/books/' + `${id}`,
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: data
  })
}

const deleteBookCall = function (bookId) {
  return $.ajax({
    url: config.apiUrl + '/books/' + `${bookId}`,
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}

module.exports = {
  getBooks: getBooks,
  createNewBook: createNewBook,
  deleteBookCall: deleteBookCall,
  updateBook: updateBook
}
