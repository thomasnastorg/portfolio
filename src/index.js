const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')
const privateMessage = require('./private-message')
const MessageRSS = require('./sendRSS')
let Parser = require('rss-parser');

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "tnastorg.ovh",
  user: "master",
  password: "totonas2000",
  database: "FreshRSS"
});


con.connect(function(err) {
  if (err) throw err;
  
  con.query("SELECT * FROM `botdiscod` WHERE `idobjet` =?",[1621090263207318], function (err, result, fields) {
   
    console.log(result.length);
  });
});

let parser = new Parser();

// id serveur test 842416090822082640     
//test 1621090263207318





async function techGeneraliste() {

  let feedHighHech = await parser.parseURL("http://veille.itproject.ovh/p/i/?a=rss&get=c_5&rid=60a0e1fd5a7d8&user=thomas&token=rEb78s&hours=168"); //High-tech (FR)
  //console.log(feedHighHech.title);
 

  feedHighHech.items.forEach(item => {
    //console.log(item.guid);
    con.query({
      sql: "SELECT * FROM `botdiscod` WHERE `idobjet` =?",
      timeout: 2000, // 40s
    },
    [item.guid],
    function (error, results, fields) {
      //console.log(results.length)
      if (results.length == 0) {
        client.channels.cache.get('843408547827417128').send("**" + item.title + "**" + "\n```" + item.contentSnippet + "```"+"\n" + item.link)
        var post  = {id: null, idobjet: item.guid};
        var query = con.query('INSERT INTO botdiscod SET ? ',post, function (error, results, fields) {
          if (error) throw error;
          // Neat!
        });
        console.log(query.sql);
    }
  });
        
      });
   
}



async function itFR() {

  let feedHighHech = await parser.parseURL("http://veille.itproject.ovh/p/i/?a=rss&get=c_7&rid=60a0e267bc82c&user=thomas&token=rEb78s&hours=168"); //High-tech (FR)
  //console.log(feedHighHech.title);
 

  feedHighHech.items.forEach(item => {
    //console.log(item.guid);
    con.query({
      sql: "SELECT * FROM `botdiscod` WHERE `idobjet` =?",
      timeout: 2000, // 40s
    },
    [item.guid],
    function (error, results, fields) {
      //console.log(results.length)
      if (results.length == 0) {
        client.channels.cache.get('843415468534530059').send("**" + item.title + "**" + "\n```" + item.contentSnippet + "```"+"\n" + item.link)
        var post  = {id: null, idobjet: item.guid};
        var query = con.query('INSERT INTO botdiscod SET ? ',post, function (error, results, fields) {
          if (error) throw error;
          // Neat!
        });
        console.log(query.sql);
    }
  });
        
      });
   
}

async function securiteFR() {

  let feedHighHech = await parser.parseURL("http://veille.itproject.ovh/p/i/?a=rss&get=c_2&rid=60a0d9a4b899a&user=thomas&token=rEb78s&hours=168"); //High-tech (FR)
  //console.log(feedHighHech.title);
 

  feedHighHech.items.forEach(item => {
    //console.log(item.guid);
    con.query({
      sql: "SELECT * FROM `botdiscod` WHERE `idobjet` =?",
      timeout: 2000, // 40s
    },
    [item.guid],
    function (error, results, fields) {
      //console.log(results.length)
      if (results.length == 0) {
        client.channels.cache.get('841418484306542692').send("**" + item.title + "**" + "\n```" + item.contentSnippet + "```"+"\n" + item.link)
        var post  = {id: null, idobjet: item.guid};
        var query = con.query('INSERT INTO botdiscod SET ? ',post, function (error, results, fields) {
          if (error) throw error;
          // Neat!
        });
        console.log(query.sql);
    }
  });
        
      });
   
}

async function securiteEN() {

  let feedHighHech = await parser.parseURL("http://veille.itproject.ovh/p/i/?a=rss&get=c_6&rid=60a0e29210a6d&user=thomas&token=rEb78s&hours=168"); 
  //console.log(feedHighHech.title);
 

  feedHighHech.items.forEach(item => {
    //console.log(item.guid);
    con.query({
      sql: "SELECT * FROM `botdiscod` WHERE `idobjet` =?",
      timeout: 2000, // 40s
    },
    [item.guid],
    function (error, results, fields) {
      //console.log(results.length)
      if (results.length == 0) {
        client.channels.cache.get('841418922782621746').send("**" + item.title + "**" + "\n```" + item.contentSnippet + "```"+"\n" + item.link)
        var post  = {id: null, idobjet: item.guid};
        var query = con.query('INSERT INTO botdiscod SET ? ',post, function (error, results, fields) {
          if (error) throw error;
          // Neat!
        });
        console.log(query.sql);
           }
        });  
      });
}

setInterval(techGeneraliste,720000)
setInterval(itFR,7500000)
setInterval(securiteFR,7800000)
setInterval(securiteEN,8100000)
/*
client.on('ready', () => {
    console.log(`the client is ready`);
    MessageRSS(client,'842416090822082640', 'test',['🔥'] )
  })*/

//privateMessage(client, 'ping', 'Pong!!!')

  
command(client,['ping'], (message) =>{
  //toto()
})


command(client,['toto'], (message) =>{
  client.channels.cache.get('841418922782621746').send("coucou");
})

  client.login(config.token)




