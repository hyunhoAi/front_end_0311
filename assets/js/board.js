document.addEventListListener("DOMContentLoaded",()=>{
    getData();
})

//Spring Boot 서버에 요청하는 함수
const getData = async()=> {
    
    // 로컬 테스트용
    const API_URL = "http://localhost:8081/";

    // 배포용
    // const API_URL = "";
    let res = await fetch(API_URL);
    let data = await res.text();

    alert(data);

}