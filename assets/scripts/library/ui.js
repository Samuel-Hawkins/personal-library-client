'use strict'

const showBooksSuccess = function (response) {
  $('#allMyBooks').html('')
  if (response.books.length === 0) {
    $('#allMyBooks').append(`<p>You don't seem to have any books, why dont you add some</p>`)
  }
  for (let i = 0; i < response.books.length; i++) {
    $('#allMyBooks').append(
      `<h4>Book ${i + 1}</h4>
      <p>Title: ${response.books[i].title} </p>
      <p> Author: ${response.books[i].author}</p>
      <form id='${response.books[i]._id}' class="book-update">
        <fieldset>
          <legend>Update Book!</legend>

          <label for="Title">Title</label>
          <input name="title" type="text" value="${response.books[i].title}">

          <label for="Author">Author</label>
          <input name="author" type="text" value="${response.books[i].author}">

          <input type="submit" value="Update Book">
        </fieldset>
      </form>
      <button class='delete-button ${response.books[i]._id}' data-value-index='${response.books[i]._id}'>Delete Book</button>
      <button class='update-button ${response.books[i]._id}' data-value-index='${response.books[i]._id}'>Update Book</button>`
    )
  }
  $('.book-update').hide()
}

const createNewBookSuccess = function () {
  $('#book-create').trigger('reset')
}

const deleteBookSuccess = function () {
}

const updateShow = function () {
  const updateForm = $(event.target).attr('data-value-index')
  $('#' + updateForm).show()
  $('.' + updateForm).hide()
}
const showSignInForm = function () {
  $('#signInButton').hide()
  // $('#signUpButton').hide()
  $('#sign-in-form').show()
}
const showSignUpForm = function () {
  $('#sign-up-form').show()
  $('#signUpButton').hide()
  // $('#signInButton').hide()
}

const showPassChangeForm = function () {
  $('#pass-change-form').show()
}

module.exports = {
  showBooksSuccess: showBooksSuccess,
  createNewBookSuccess: createNewBookSuccess,
  deleteBookSuccess: deleteBookSuccess,
  updateShow: updateShow,
  showSignInForm: showSignInForm,
  showSignUpForm: showSignUpForm,
  showPassChangeForm: showPassChangeForm
}
