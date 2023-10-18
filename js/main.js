(() => {
    console.log("fired");

    let _projects =document.querySelector ("#_button");

    gsap.registerpligin(scrolltoplugin);

    const navlinks = document.querySelectorAll("#b-container");

    function scrollLink(e){
        e.preventdefault();
        let selectedlink = e.currentTarget.hash;
        gsap.to(window, {duration:1, scrollTo:{y:`${selectedlink}`, offsety: 100}});
    }
    
    navlinks.forEach((navlinks)=>{
        navlinks.addEventListener("click", scrollLink);
    });
})();