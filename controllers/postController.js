// IMPORTO L'ARRAY CON I POSTS
const postsArray = require("../data/posts.js");

// OTTENGO TUTTI I POST, CREO FUNZIONE INDEX
function index(req, res) {
  let filteredPosts = postsArray;
  if (req.query.tag) {
    filteredPosts = postsArray.filter((element) =>
      element.tags.includes(req.query.tag)
    );
  }
  res.json(filteredPosts);
}

//OTTENGO UN POST CERCANDO IL SUO ID, CREO FUNZIONE SHOW
function show(req, res) {
  const currentPostId = req.params.id;
  const currentPost = postsArray.find(
    (element) => element.id === parseInt(currentPostId)
  );
  // CONTROLLO SE L'ID ESISTE
  if (!currentPost) {
    return res.status(404).json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  // Se il post esiste, restituisco il post
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
  // CONTRO SE L'ID ESISTE
  if (!deletePost) {
    return res.status(404).json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }
  // STAMPO LA LISTA SENZA IL CONTENUTO RIMOSSO
  console.log("Nuova lista:", postsArray);
  res.send(deletePost);
}

// CREO UN POSTO POST, CREO FUNZIONE STORE
function store(req, res) {
  res.send("Aggiungo un post");
  console.log(req.body);
}
// ESPORTO LE FUNZIONI
module.exports = { index, show, destroy, store };
