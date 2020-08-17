
$(document).ready(function(){

    $(".leftside  .tabs--item").each(function(i,item){
       console.log(item);
       console.log(item.getAttribute("data-target"));
       item.addEventListener('click',handleClikOnTab)
})
})


function handleClikOnTab(e){
    e.preventDefault()
    e.stopPropagation()
    $("aside .content-tab").css("display","none")
    $("aside .tabs--item").each(function(_,item){
        item.classList.remove("is-active")
    })
    e.target.parentNode.classList.add("is-active")
    document.getElementById(e.target.parentNode.getAttribute("data-target")).style.display="block"


}