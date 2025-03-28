// IMPORTO L'ARRAY CON I POSTS
const postsArray = require("../data/posts.js");

// OTTENGO TUTTI I POST, CREO FUNZIONE INDEX
function index(req, res) {
  res.json(postsArray);
}

//OTTENGO UN POST CERCANDO IL SUO ID, CREO FUNZIONE SHOW
function show(req, res) {
  const currentPostId = req.params.id;
  const currentPost = postsArray.find(
    (element) => element.id === parseInt(currentPostId)
  );
  res.json(currentPost);
}

//  ELIMINO UN POST CERCANDO IL SUO ID, CREO FUNZIONE DESTROY
function destroy(req, res) {
  const deletePostId = req.params.id;
  const deletePost = postsArray.find(
    (element) => element.id === parseInt(deletePostId)
  );
  // RIMUOVO IL POST CON SPLICE
  postsArray.splice(postsArray.indexOf(deletePost), 1);
  // STAMPO LA LISTA SENZA IL CONTENUTO RIMOSSO
  console.log("Nuova lista:", postsArray);
  res.send(deletePost);
}

// ESPORTO LE FUNZIONI
module.exports = { index, show, destroy };
