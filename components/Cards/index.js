// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const articleCards = (object) => {
    const theCards = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    theCards.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');


    headLine.textContent = object.headline;
    img.src = object.authorPhoto;
    authorName.textContent = `By ${object.authorName}`;


    theCards.append(headLine, author);
    author.append(imgContainer, authorName);
    imgContainer.append(img);

    return theCards;
}

const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    for(let key in response.data.articles) {
        for(let i = 0; i < response.data.articles[key].length; i++) {
            cardContainer.appendChild(articleCards(response.data.articles[key][i]))
        }
    }
  console.log('API RESPONSE HTTP', response);
})
.catch(err => {
    console.log('PROMISE ERROR', err);
})