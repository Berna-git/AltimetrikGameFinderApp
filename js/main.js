/* === Switch template ==== */
const thumbnailsGrid =  document.getElementById('thumbnailsOn');
const thumbnailsOneColumn = document.getElementById('thumbnailsOff');
const mainContainer = document.querySelectorAll('#main-container');
const mainItems = document.querySelectorAll('#item-grid');
const divSmallIcon = document.querySelectorAll('#smallcard-icon');
const divBigIcon = document.querySelectorAll('#bigcard-icon');
const descriptionCard = document.querySelectorAll('#card-description');
const divCardDisplay = document.querySelectorAll('#bigcard-display');
console.log(mainItems);
// functions of read nodes
// TODO: Hacer pregunta si se puede pasar un methodo como parametro
function readNodesAdd(element,nameClass){
    element.forEach(item => item.classList.add(nameClass));
}
function readNodesRemove(element,nameClass){
element.forEach(item => item.classList.remove(nameClass));
}

thumbnailsOneColumn.style.opacity = '50%';

// small card
thumbnailsGrid.addEventListener('click', ()=> {
thumbnailsGrid.style.opacity = '100%'
thumbnailsOneColumn.style.opacity = '50%'

readNodesRemove(mainItems,'main-cards__big');
readNodesAdd(mainItems,'main-cards__small');

divBigIcon.forEach(Items => Items.style.display = 'none')
divSmallIcon.forEach(Items => Items.style.display = 'flex')

readNodesRemove(mainContainer,'main-container_column');
readNodesAdd(mainContainer,'main-container__grid');

descriptionCard.forEach(item => item.style.display = "none");
descriptionCard.forEach(Items => Items.style.display = 'none');

readNodesAdd(divCardDisplay,'section-smallCard__display')
readNodesRemove(divCardDisplay,'section-bigCard__display');
});
// big cards 
thumbnailsOneColumn.addEventListener('click',()=> {
thumbnailsGrid.style.opacity = '50%';
thumbnailsOneColumn.style.opacity = '100%';

readNodesRemove(mainItems,'main-cards__small');
readNodesAdd(mainItems,'main-cards__big');

divBigIcon.forEach(Items => Items.style.display = 'flex')
divSmallIcon.forEach(Items => Items.style.display = 'none')

readNodesRemove(mainContainer,'main-container__grid');
readNodesAdd(mainContainer,'main-container_column');

descriptionCard.forEach(item => item.style.display = 'flex');
readNodesRemove(divCardDisplay,'section-smallCard__display')
readNodesAdd(divCardDisplay,'section-bigCard__display');
});

