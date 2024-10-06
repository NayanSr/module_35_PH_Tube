//! Load categories and display them in ui
const loadCategory = () => {
  const url = "https://openapi.programming-hero.com/api/phero-tube/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCategories(data.categories));
};

const showCategories = (categories) => {
  const categoryContainer = document.getElementById("category");
  categories.forEach((ct) => {
    const button = document.createElement("button");
    button.classList = "btn bg-teal-200 border-none mx-4 py-0 text-base ";
    button.innerText = ct.category;
    categoryContainer.appendChild(button);
  });
};

//! Loading videos and display them in ui
const loadVideos = () => {
  const url = "https://openapi.programming-hero.com/api/phero-tube/videos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
};
const displayVideos = (videos) => {
    const videoContainer= document.getElementById('video-container');
  
  videos.forEach((video) => {
    const videoCard = document.createElement("div");
  videoCard.classList = "card card-compact bg-orange-50 shadow-xl";
    videoCard.innerHTML = `
            <figure class="h-[200px] rounded-md">
            <img class='h-full object-cover'
            src=${video.thumbnail}
            alt="Shoes" />
        </figure>
        <div class="px-0 py-2 flex">
           <div class='w-10 h-10 mr-4'> 
                <img class='w-full h-full rounded-full object-cover' src=${video.authors[0].profile_picture} />
           </div>
           <div>
                <p class='font-bold'>${video.title} </p>
                <div class='flex items-center gap-4' >
                    <p>${video.authors[0].profile_name}</p>
                    ${!video.authors[0].verified? `<img class='w-5' src='https://img.icons8.com/?size=60&id=EPLP1GcwAlNr&format=png' />`: ''}
                </div>
                <p>${video.others.views}</p>
                <p> </p>
           </div>
            </div>
        </div>
       `;
       videoContainer.appendChild(videoCard)
  });
};

loadCategory();
loadVideos();

/* 
{
    "category_id": "1003",
    "video_id": "aaaj",
    "thumbnail": "https://i.ibb.co/xgWL3vQ/kid-gorgeous.jpg",
    "title": "Kid Gorgeous",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/xsfkwN2/john.jpg",
            "profile_name": "John Mulaney",
            "verified": true
        }
    ],
    "others": {
        "views": "241K",
        "posted_date": ""
    },
    "description": "John Mulaney's 'Kid Gorgeous' has captured the hearts of many with 241K views. As a verified comedian, John delivers a masterclass in stand-up with clever anecdotes, quick wit, and relatable humor. This performance is a laugh-filled adventure through his unique take on life, politics, and pop culture."
}
*/
