var express = require('express');
var http = require("http").createServer(app);
var io = reqire('socket.io')(http);
var crypto = require('crypto')
const Database = require("@replit/database")

const db = new Database()

function newAccount(username, password){
  var salt = crypto.randomBytes(16).toString('hex');
  var hash = 
}
