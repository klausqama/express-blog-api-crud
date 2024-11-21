const posts = require('../posts')
let lastIndex = posts.at(-1).id;
// Rotte posts
//index
function index(req, res) {
    res.json(posts);
}

//show
function show(req,res) {
    const id = req.params.id

    const post = posts.find(p => id == p.id)

    res.json(post)
}

//store
function store(req, res){
    const {title, slug, tags} = req.body;
    lastIndex++;

const post = {
    id: lastIndex,
    title,
    slug,
    tags,
 };

posts.push(post);
res.json(post);
}

//update
function update(req, res){
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    const { title, slug, tags } = req.body;
    post.title = title;
    post.slug = slug;
    post.tags = tags;

    res.json(post);
};

//modify
function modify((req, res) =>
     const id = req.params.id,
     );
    
//destroy
function destroy(req, res) {
    const id = req.params.id
    res.send(`Eliminazione del post  + ${id}`);
}

module.exports = {
    index,
    show,
    destroy,
    store,
    update,
    modify,
}