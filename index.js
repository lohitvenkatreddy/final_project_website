let movies = [
    {
      name: "Guntur Karam",
      des:
        "A man seeks explanations when his mother asks him to sign a document denying he is her son while she campaigns for office, years after she deserts him and marries again.",
      image: "images/slider 1 (2).jpg"
    },
    {
      name:"Dhootha ",
      des:
        "Journalist Sagar's life turns thrilling as he unravels dark secrets behind newspaper clippings predicting tragedies. He becomes a murder suspect, racing against time to clear his name and solve the enigma and faces dangerous twists. Suspense builds in this roller-coaster ride.",
      image: "images/slider 2.jpg"
    },
    {
      name: "Animal",
      des:
        "The son of a wealthy, powerful industrialist returns to India and undergoes a remarkable transformation as he becomes consumed by a quest for vengeance against those threatening his father's life.",
      image: "images/slider 3.jpg"
    },
    {
      name: "OppenHeimer",
      des:
      "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history",
      image: "images/slider 4.jpg"
    }, 
    {
      name: "Interstellar",
      des:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researcher",
      image: "images/slider 5.jpg"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; // to track current slide index.
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    // creating DOM element
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    // setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  //Video Cards
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });
  var x=document.getElementById('login');
  var y=document.getElementById('register');
  var z=document.getElementById('btn');
  function register(){
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
  }
  function login(){
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
    
  }
  function hello(){
    var usr=document.getElementById('usr').value;
    document.getElementById('demologin').innerHTML=usr;
    }
    function fun() {
      var email = document.getElementById("usr").value;
      var password = document.getElementById("pass").value;
      
      var emailIsValid = email.includes("infinite");
  
      
      var passwordIsValid = (password == "123456");
  
      if (emailIsValid && passwordIsValid) {
         
          return true;
      } else {
          
          alert("Invalid email or password. Please try again.");
          return false;
      }
  }
  function change1() {
    document.getElementById("myspace").innerHTML="infinite";
  }
  function change2(){
    document.getElementById("myspace").innerHTML="myspace👤"
  }
    
    

  