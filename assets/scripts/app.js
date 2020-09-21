'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const authUi = require('./auth/ui')
const libraryEvents = require('./library/events')
const libraryUi = require('./library/ui')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#pass-change-form').on('submit', authEvents.onPassChange)
  $('#signOut').on('click', authEvents.onSignOut)
  $('#sign-in-button').on('click', authUi.onSignInButton)
  $('#sign-up-button').on('click', authUi.onSignUpButton)
  $('#change').on('click', authUi.changePassForm)
  $('#getBooks').on('click', libraryEvents.getBooks)
  $('#book-create').on('submit', libraryEvents.createNewBook)
  $('#allMyBooks').on('click', '.delete-button', libraryEvents.deleteBook)
  $('#allMyBooks').on('click', '.update-button', libraryUi.updateShow)
  $('#allMyBooks').on('submit', '.book-update', libraryEvents.updateBook)
  $('#pass-change-form').hide()
  $('#owner').hide()
  $('#getBooks').hide()
  $('#book-create').hide()
  $('#signOut').hide()
})
