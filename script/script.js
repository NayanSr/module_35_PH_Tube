//!  Convert posted detail in hour minute seconds
const convertTime=seconds=>{
  const days= parseInt(seconds/(3600*24));
  seconds= seconds%(3600*24);
  const hours= parseInt(seconds/3600);
  seconds= seconds%3600;
  const minutes= parseInt(seconds/60);
  seconds= seconds%60;
  return `${days}D ${hours}H ${minutes}M ${seconds}S ago`;
}



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
            <figure class="h-[200px] w-11/12 mx-auto rounded-md relative">
            <img class='h-full w-full object-cover'
            src=${video.thumbnail}
            alt="Shoes" />
            <span class='absolute bottom-2 right-1 px-2 bg-slate-400/50  '>
             ${video.others?.posted_date? `<p>${convertTime(video.others?.posted_date)}</p>`: ''}

            </span>
        </figure>
        <div class="px-0 py-2 flex">
           <div class='w-10 h-10 mr-4'> 
                <img class='w-full h-full rounded-full object-cover' src=${video.authors[0].profile_picture} />
           </div>
           <div>
                <p class='font-bold'>${video.title} </p>
                <div class='flex items-center gap-4' >
                    <p>${video.authors[0].profile_name}</p>
                    ${video.authors[0].verified? `<img class='w-5' src='https://img.icons8.com/?size=60&id=EPLP1GcwAlNr&format=png' />`: ''}
                </div>
                <p>${video.others.views}</p>
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
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}
*/
