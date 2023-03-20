const list = [
    {
        title: "How many team members can I invite?",
        description: " You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
    },
    {
        title: "What is the maximum file upload size?",
        description: "No more than 2GB. All files in your account must fit your allotted storage space."
    },
    {
        title: "How do I reset my password?",
        description: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
    },
    {
        title: "Can I cancel my subscription?",
        description: " Yes! Send us a message and we’ll process your request no questions asked."
    },
    {
        title: "Do you provide additional support?",
        description: "Chat and email support is available 24/7. Phone lines are open during normal business hours."
    },
]

const div = document.getElementById("texts");

for (var i = 0; i< list.length; i++) {

    const obj = document.createElement("div");
    const boxH2 = document.createElement("div");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const boxP = document.createElement("div");
    const p = document.createElement("p");


    div.appendChild(obj);
    obj.appendChild(boxH2);
    boxH2.appendChild(h2);
    boxH2.appendChild(img);
    obj.appendChild(boxP);
    boxP.appendChild(p);

    img.src = "../images/icon-arrow-down.svg";

    h2.textContent = list[i].title;
    p.textContent = list[i].description;

    obj.className= "item";
    boxH2.className= "title";
    boxP.className= "description";


    obj.onclick = function (){
        const items = document.getElementsByClassName("item");
        
        for(let i = 0; i < items.length; i++) {
            if(obj != items[i] && items[i].classList.contains("show")){
                items[i].classList.remove("show"); // Esconder
            }
        }

        if(!obj.classList.contains("show")){
            obj.classList.add("show")
        } else{
            obj.classList.remove("show");
        }
    }

       
}
