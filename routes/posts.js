// IMPORTO EXPRESS
const express = require("express");
// CREO IL ROUTER
const router = express.Router();
//IMPORTO ARRAY CON POSTS
const postsArray = require("../data/posts.js");
//ESPORTO IL ROUTER
module.exports = router;

// CRUD

// INDEX -> visualizzo tutti i posts
router.get("/", (req, res) => {
  res.json(postsArray);
});

// SHOW -> visualizzo un solo post
router.get("/:id", (req, res) => {
  const currentPostId = req.params.id;
  const currentPost = postsArray.find(
    (element) => element.id === parseInt(currentPostId)
  );
  res.json(currentPost);
});

// DESTROY -> cancello un post
router.delete("/:id", (req, res) => {
  const deletePostId = req.params.id;
  const deletePost = postsArray.find(
    (element) => element.id === parseInt(deletePostId)
  );
  // RIMUOVO IL POST CON SPLICE
  postsArray.splice(postsArray.indexOf(deletePost), 1);
  // STAMPO LA LISTA SENZA IL CONTENUTO RIMOSSO
  console.log("Nuova lista:", postsArray);
  res.send(deletePost);
});
