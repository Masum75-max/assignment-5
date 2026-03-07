
const cards = document.getElementById("cards")
const counter= document.getElementById("issue-counter")
const openbtn=document.getElementById("open-btn")
const closedBtn=document.getElementById("closed-btn")
const allBtn=document.getElementById("all-btn")

const btnSet=[openbtn,closedBtn];




// for login page
const login =document.getElementById("login-btn")

login.addEventListener("click",()=>{
      
    const username=document.getElementById("username").value;
const password=document.getElementById("password").value

    if((username.trim().toLowerCase()==="admin")  && (password.trim().toLowerCase()==="admin1234")){
        window.location.assign("main.html")
    }
    else{
        alert("Wrong Login Credentials")
    }
    
})






// all cards loader function

const allCardLoader= async()=>{
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");

    const data= await res.json();

    displayCards(data.data)
}
allCardLoader();





// display card fnction


function displayCards(arrayOfIssueObj){
   

    counter.innerText=arrayOfIssueObj.length
  cards.innerHTML="";
    for(const obj of arrayOfIssueObj){

        console.log(obj)
        
        const div=document.createElement("div");
        div.classList=`max-w-xl bg-gray-100 rounded-xl shadow-md overflow-hidden border-t-4 ${obj.status === "open"?"border-green-600":"border-purple-900"}`

        div.innerHTML=`
         <div class="p-6">

    <!-- Status + Priority -->
    <div class="flex justify-between items-center mb-4">
      <img src="${
  obj.status === "open"
    ? "./assets/Open-Status.png"
    : "./assets/Closed- Status .png"
}" class="w-12 h-12">

      <span class="bg-red-200 text-red-500 px-6 py-2 rounded-full font-semibold">
        ${obj.priority}
      </span>
    </div>

    <!-- Title -->
    <h2 class="text-2xl font-bold text-gray-800 mb-3">
      ${obj.title}
    </h2>

    <!-- Description -->
    <p class="text-gray-500 mb-5">
     ${obj.description}
    </p>

    <!-- Tags -->
    <div class="flex gap-3">

      <!-- Bug -->
    
     ${
        obj.labels[0]==="bug"?`<span class="flex items-center gap-2 border border-red-300 text-red-500 px-4 py-2 rounded-full font-semibold">
         <i class="fa-solid fa-bug"></i>
         ${obj.labels[0]}
       </span>`:`<span class="flex items-center gap-2 border border-green-300 text-green-500 px-4 py-2 rounded-full font-semibold">
         <i class="fa-solid fa-star"></i>
         ${obj.labels[0]}
       </span>`
     }
      <!-- Help wanted -->
      <span class="flex items-center gap-2 border border-yellow-400 text-yellow-600 px-4 py-2 rounded-full font-semibold">
        <i class="fa-regular fa-life-ring"></i>
         ${obj.labels[1]??"Help Wanted"}
      </span>

    </div>
  </div>

  
  <div class="border-t border-gray-300 px-6 py-4 text-gray-500">
    <p> ${obj.author}</p>
    <p>${obj.createdAt}</p>
  </div>
        
       `

       cards.append(div)

    }
}




// open-btn handler

openbtn.addEventListener("click",async()=>{

    for(const btn of btnSet){
        if(btn==openbtn){
            btn.classList.add("bg-blue-700","text-white")
        }
        else{
            btn.classList.remove("bg-blue-700","text-white")
        }
    }

    allBtn.classList.add("bg-white","text-black")

    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");

    const data= await res.json();

    const Data=data.data;

    const arrayOfOpenData= Data.filter(obj=>obj.status==="open")
    displayCards(arrayOfOpenData)
})




//closed-btn handler

closedBtn.addEventListener("click",async()=>{
     for(const btn of btnSet){
        if(btn==closedBtn){
            btn.classList.add("bg-blue-700","text-white")
        }
        else{
            btn.classList.remove("bg-blue-700","text-white")
        }
    }
    allBtn.classList.add("bg-white","text-black")
     const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");

    const data= await res.json();

    const Data=data.data;

    const arrayOfOpenData= Data.filter(obj=>obj.status==="closed")
    displayCards(arrayOfOpenData)
})

allBtn.addEventListener("click",async()=>{
     for(const btn of btnSet){
        
            btn.classList.remove("bg-blue-700","text-white")
        
    }

    allBtn.classList.remove("bg-white","text-black")

   allCardLoader();

})


