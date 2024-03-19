// create button with js 

let btnObj=[
    {name:"one",bg:"red"},
    {name:"two",bg:"blue"},
    {name:"three",bg:"black"},
    {name:"four",bg:"green"},
    {name:"five",bg:"yellow"},
];

let div= document.getElementById("one");
// div.style.color="red";
for(let i=0;i<btnObj.length;i++){
    let btn=document.createElement("button");
    btn.innerText=btnObj[i].name;
    btn.style.backgroundColor=btnObj[i].bg;
    btn.style.color="white";
    btn.style.fontSize="50px";
    btn.style.height="100px";
    btn.style.width="100%";

    div.append(btn);
    console.log(btn);
}


let imgObj=[
    {
        img : "https://www.rnwmultimedia.edu.in/new_panel/uploads/city_image-1689422869872-961501515.png",
        title: "Rnw",
        location: "Surat"
    },
    {
        img : "https://www.rnwmultimedia.edu.in/new_panel/uploads/city_image-1689571253161-647992325.png",
        title: "Rnw2",
        location: "AHM"
    },
    {
        img : "https://www.rnwmultimedia.edu.in/new_panel/uploads/city_image-1689422909981-84113364.png",
        title: "Rnw3",
        location: "Rajkot"
    },
    {
        img : "https://www.rnwmultimedia.edu.in/new_panel/uploads/city_image-1689422920706-236410409.png",
        title: "Rnw4",
        location: "Amreli"
    },
    {
        img : "https://www.rnwmultimedia.edu.in/new_panel/uploads/city_image-1689422920706-236410409.png",
        title: "Rnw4",
        location: "Amreli"
    },
    {
        img : "https://www.rnwmultimedia.edu.in/new_panel/uploads/city_image-1689422920706-236410409.png",
        title: "Rnw4",
        location: "Amreli"
    },
    {
        img : "https://www.rnwmultimedia.edu.in/new_panel/uploads/city_image-1689422920706-236410409.png",
        title: "Rnw4",
        location: "Amreli"
    },
    {
        img : "https://www.rnwmultimedia.edu.in/new_panel/uploads/city_image-1689422920706-236410409.png",
        title: "Rnw4",
        location: "Amreli"
    },
];

let img=document.getElementById("two");
img.style.display="flex"; 

for(let i=0;i<imgObj.length;i++){
    
    let image=document.createElement("img");
    image.src=imgObj[i].img;
    
    let h2=document.createElement("h2");
    h2.innerText=imgObj[i].title;

    let p=document.createElement("p");
    p.innerText=imgObj[i].location;

    let div=document.createElement("div");
    two.append(div);
    div.append(image,h2,p);

    console.log(image);
    console.log(h2);
    console.log(p);


}