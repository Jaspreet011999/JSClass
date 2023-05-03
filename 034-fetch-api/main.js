const url = " https://www.thenewsapi.com/v1/news/top?api_token=9605"
// "http://worldtimeapi.org/api/timezone/America/Los_Angeles"

const  request = new Request(url, {
    headers: {
        'Authorization' : 'Bearer '
    }
   }) 
async function getData(){
   try {
    const response = await fetch(request)
    const data = await response.json();
    if(response.status === 200){
        console.log('Success', data); 
    } else{
        console.log('Server Error', data.error.message);
    }
    
   }catch (error){
    console.log('Error', error);
   }
}

getData()