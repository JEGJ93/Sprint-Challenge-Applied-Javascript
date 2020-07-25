// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function allTabs(topic) {
    const aTab = document.createElement('div');
    
    aTab.classList.add('tab')

    aTab.textContent = topic;

    return aTab;
};

const newTab = document.querySelector('.topics')

axios.get("https:lambda-times-backend.herokuapp.com/topics")
.then(response => {
    console.log('api response', response);
    newTab.appendChild(allTabs(response.data.topics));
})
.catch(err => {
    console.log('error', err)
})