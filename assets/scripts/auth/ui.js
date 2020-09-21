'use strict'

const store = require('./../store')

const onSignInButton = function () {
  $('#sign-in-form').show()
  $('#sign-up-form').hide()
}

const onSignUpButton = function () {
  $('#sign-up-form').show()
  $('#sign-in-form').hide()
}

const changePassForm = function () {
  $('#pass-change-form').show()
}

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
}

const onSignUpFailure = function () {
  $('#message').text('Sign up Failed, Try again')
}

const onSignInSuccess = function (response) {
  store.user = response.user

  $('#user-name').text('Welcome ' + response.user.email)
  $('#sign-in-form').trigger('reset')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#signOut').show()
  $('#pass-change-form').show()
  $('#getBooks').show()
  $('#book-create').show()
  $('#signOut').show()
}

const onSignInFailure = function () {
  $('#message').show()
  $('#message').text('Sign in Failed, Try again')
}

const onPassChangeSuccess = function (response) {
  $('#message').show()
  $('#message').text('Successful Password Reset')
  $('#pass-change-form').trigger('reset')
  // $('#pass-change-form').hide()
}

const onPassChangeFailure = function () {
  $('#message').show()
  $('#message').text('Password Reset Failed, Try again')
}

const onSignOutSuccess = function (response) {
  $('#message').text('Successfully Signed Out')
  $('#change').hide()
  $('#signOut').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#pass-change-form').hide()
  $('#getBooks').hide()
  $('#book-create').hide()
  $('#allMyBooks').html('')
}

const onSignOutFailure = function () {
  $('#message').show()
  $('#message').text('Sign Out Failed, Try again')
}

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure,
  onPassChangeSuccess: onPassChangeSuccess,
  onPassChangeFailure: onPassChangeFailure,
  onSignOutSuccess: onSignOutSuccess,
  onSignOutFailure: onSignOutFailure,
  onSignInButton: onSignInButton,
  onSignUpButton: onSignUpButton,
  changePassForm: changePassForm
}
