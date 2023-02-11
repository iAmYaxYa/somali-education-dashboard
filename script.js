let userImg = document.querySelector(".user-img")
let userName = document.querySelector("#userName")
let profile = document.querySelector(".profile");
let menu = document.querySelector("#menu");
let main = document.querySelector(".main");
let sidebar = document.querySelector(".sidebar");
let searchIcon = document.querySelector(".search-icon");
let input = document.querySelector(".input");
let noticeIcon = document.querySelector(".notice-icon");
let messageIcon = document.querySelector(".message-icon");
let messages = document.querySelector(".messages");
let notice = document.querySelector(".notice");


searchIcon.addEventListener("click",()=>{
    input.classList.toggle("active");
})

userImg.addEventListener("click",()=>{
    profile.classList.add("show")

    document.addEventListener("click",(e)=>{
        if(e.target.tagName != "IMG" && e.target != !userImg && e.target.tagName != "H6"){
            profile.classList.remove("show")
        }
    })
})
userName.addEventListener("click",()=>{
    profile.classList.add("show")
    document.addEventListener("click",(e)=>{
        if(e.target.tagName != "H6" && e.target != !userName && e.target.tagName != "IMG"){
            profile.classList.remove("show")
        }
    })
})

noticeIcon.addEventListener("click",()=>{
    notice.classList.add("show")
    document.addEventListener("click",(e)=>{
        if(e.target.tagName != "I" && e.target != !noticeIcon){
            notice.classList.remove("show")
        }
    })
})

messageIcon.addEventListener("click",()=>{
    messages.classList.add("show")
    document.addEventListener("click",(e)=>{
        if(e.target.tagName != "I" && e.target != !messageIcon){
            messages.classList.remove("show")
        }
    })
})

menu.addEventListener("click",()=>{
    sidebar.classList.toggle("active");
    main.classList.toggle("active");
})