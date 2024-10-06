const loadCategory=()=>{
    const url='https://openapi.programming-hero.com/api/phero-tube/categories';
    fetch(url)
    .then(res=>res.json())
    .then(data=>showCategories(data.categories))
}

const showCategories=(categories)=>{
const categoryContainer= document.getElementById('category');
categories.forEach(ct=>{
   const button= document.createElement('button');
   button.classList='btn bg-teal-200 border-none mx-4 py-0 text-base '
   button.innerText=ct.category;
   categoryContainer.appendChild(button)


})
}

loadCategory()