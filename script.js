// // change karne ke poore process main
// // selection
// var home = document.querySelector("#home")

// //  css change
// home.style.color = "red";

// // html change
// home.innerHTML = "<i>hey kaise ho</i>"
// // text change
// home.textContent = "<i>hey kaise ho</i>"
// // adding listener
// home.addEventListener('mouseenter', function(){
//     home.style.color = "red";
// })
// home.addEventListener('mouseleave', function(){
//     home.style.color = "black";
// })






// var arr = [
//     { name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
// ]
// function showTheCards() {
//     var clutter = "";
//     arr.forEach(function (obj) {
//         clutter += `<div class="box">
//         <img class="cursor-pointer" src="${obj.image}" alt="image">
//         <div class="caption">${obj.name}</div>
//     </div>`;
//     });
//     document.querySelector(".container")
//         .innerHTML = clutter
// }
// function handleSearchFunctionLity() {

//     var input = document.querySelector("#searchinput");
//     console.log(input);

//     input
//     .addEventListener("focus", function () {
//         document.querySelector(".overlay").style.display = "block";
//     })

//     input
//     .addEventListener("blur", function () {
//         document.querySelector(".overlay").style.display = "none";
//     })

//     input
//     .addEventListener("input", function () {
//         const filterArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value))
//         var clutter = ""
//         filterArray.forEach(function (obj) {
//             clutter += `<div class="res flex px-8 py-3">
//             <i class="ri-search-line font-semibold mr-5"></i>
//             <h3 class="font-semibold">${obj.name}</h3>
//         </div>`
//         })
//         document.querySelector(".searchdata").style.display = "block"
//         document.querySelector(".searchdata").innerHTML = clutter

        
//     })
//     input
//     .addEventListener("blur", function () {
//         document.querySelector(".searchdata").style.display = "none";

//         document.querySelector("#searchinput").value = ""
        
//     })
    
// } 
//     showTheCards();
//     handleSearchFunctionLity();
    




var arr = [
         { name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        
]
// console.log(arr);

for (let i = 0; i < arr.length; i++) {
        var clutter = ""; 
        // console.log(arr[i].image);
        clutter +=  `<div class="box">
                <img class="cursor-pointer" src="${arr[i].image}" alt="image">
                <div class="caption">${arr[i].name}</div>
            </div>`
            document.querySelector(".container").innerHTML += clutter
            // console.log(document.querySelector(".container").innerHTML);

}



function  handleSearchFunctionLity() {
    var search = document.querySelector("#searchinput")
    console.log(search);
        search.addEventListener("focus", function () {
            document.querySelector(".overlay").style.display  = "block"
        })    
        search.addEventListener("blur", function () {
            document.querySelector(".overlay").style.display  = "none"
        })    



        search
            .addEventListener("input", function () {
                const filterArray = arr.filter(obj => obj.name.toLowerCase().startsWith(search.value))
                var clutter = "";
                filterArray.forEach(function (obj) {
                    clutter += `<div class="res flex px-8 py-3">
                    <i class="ri-search-line font-semibold mr-5"></i>
                    <h3 class="font-semibold">${obj.name}</h3>
                </div>`
                })
                document.querySelector(".searchdata").style.display = "block"
                document.querySelector(".searchdata").innerHTML = clutter
        
                
            })
            search
            .addEventListener("blur", function () {
                document.querySelector(".searchdata").style.display = "none";
        
                // document.querySelector("#searchinput").value = ""
                
            })
            
        }

       



handleSearchFunctionLity();