const url = " https://www.thenewsapi.com/v1/news/top?api_token="
// "http://worldtimeapi.org/api/timezone/America/Los_Angeles"

async function getData(){
   const response = await fetch(url)
   const data = await response.json();
   console.log(data); 
}

getData()