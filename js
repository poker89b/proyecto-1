<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La casa Hoteles</title>
    <!-- Bootstrap-css -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <!-- Google-font -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap" rel="stylesheet">
    <!-- Font-awesome-css -->
    <link rel="stylesheet" href="css/all.css">
    <!-- Style-css -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Jquery-js-->   
    <script defer src="js/jquery-3.5.1.js"></script>
    <!-- Main-js -->
    <script defer src="js/room.js"></script>
    <script defer src="js/reserva.js"></script>
    <script defer src="js/main.js"></script>
    <script defer src="js/dom.js"></script>
</head>
<body class="bg-image">
    <nav class="navbar navbar-expand-lg bg-color sticky-top">
        <a class="navbar-brand" href="#">
          <img src="images/logo1.png" class="logo d-inline-block align-top" alt="logo" loading="lazy"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-center mr-auto ml-auto">
            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a id="l1" class="nav-link" href="#room">Rooms</a></li>
            <li class="nav-item"><a id="l2"class="nav-link" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Book</a></li>
            <li class="nav-item"><a id="l3" class="nav-link" href="#contact">Contact</a></li>               
          </ul>
          <form class="form-inline">
            <button type="button" class="btn btn-outline-success" >Login</button>
          </form>
        </div>
    </nav>
    <!-- Home Hero Section Begin -->
    <section class="main-home">
      <div class="container">
          <div class="row align-items-center">
              <div class="col-12">
                  <div class="text-center">
                      <h6 class="welcome">Welcome To</h6>
                      <h1 id="rosemary" class="titulo">Rosemary Dream</h1>
                  </div>
              </div>
          </div>
      </div>
    </section>  
    <!-- Home Hero Section End -->

    <!-- Search Form Section Begin -->
    <section class="search-form">
        <div class="container bg-form col-xl-12 col-sm-12"> 
            <form class="row d-flex justify-content-center align-content-center">         
                <div class=" col-xl-4 col-sm-6">                                
                    <label for="check-in">Check-in</label>
                    <input class="form-control form-control-sm" type="date" name="check-in" id="check-in">   
                </div>                        
                <div class=" col-xl-4 col-sm-6">                                
                    <label for="check-out">Check-out</label>
                    <input class="form-control form-control-sm" type="date" name="check-out" id="check-out"> 
                </div>
                 <div class="form-row form-group flex-column align-items-center align-self-center col-xl-2 col-sm-6">                                
                    <label for="guests">Guests</label>
                    <select name="guests" id="pasajeros" class="form-control-sm" required></select>
                </div>
                <div class="align-self-center col-xl-1 col-sm-6">
                    <a href="#"><button onclick="pasajeroDatos()" id="book" type="button" class="btn btn-success btn-sm">Search</button></a>
                </div>
            </form>
        </div>
    </section>
    <!-- Search Form Section End -->

    <!-- Home About Section Begin -->
    <section>
      <div class="container" id="about">
          <div class="row align-items-center">
              <div class="col-12 col-lg-6">
                  <div class="section-about">
                      <h6>About Us</h6>
                      <h2 id="welcome">Welcome to <br>Rosemary Dream</h2>
                  </div>
                  <div class="mb-100">
                      <h5 id="about-text" class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellat mollitia nemo sunt suscipit minima iusto eius vitae, saepe, voluptates maiores in unde inventore? Eum excepturi labore nulla quis fugiat?</h5>
                  </div>
              </div>

              <div class="col-12 col-lg-6">
                  <div class="about-us-thumbnail mb-100">
                      <div class="row no-gutters">
                          <div class="col-6">
                              <div class="single-thumb mb-3">
                                  <img id="imag" src="images/about/760962914.jpg" alt="">
                              </div>
                              <div class="single-thumb">
                                  <img src="images/about/761523229.jpg" alt="">
                              </div>
                          </div>
                          <div class="col-6">
                              <div class="single-thumb">
                                  <img src="images/about/761524108.jpg" alt="">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <!-- Home About Section End -->  
  
     <!-- Services Section Begin -->
    <section id="services">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title">
                    <h5>OUR SERVICES</h5>
                </div>
            </div>
        </div>       
        <div class="container">
            <div id="services-items" class="row">
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div>
                        <img class="services-svg" src="images/services/service-1.svg" alt="">
                        <h4>Free Wi-Fi</h4>
                        <p class="services-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cum deserunt repudiandae totam ratione enim corrupti laudantium animi odio. Quis nulla sit non ut molestiae sequi natus vero dolores praesentium?</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div>                    
                        <img class="services-svg" src="images/services/service-2.svg" alt="">
                        <h4>Premium Pool</h4>
                        <p class="services-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellendus vitae nobis mollitia recusandae eius illum rem, nostrum amet incidunt, praesentium saepe reiciendis velit dolorum modi minima quasi et tenetur.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div>
                        <img class="services-svg" src="images/services/service-3.svg" alt="">
                        <h4>Coffee Maker</h4>
                        <p class="services-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa error illo, tempore unde dolores iste perferendis veritatis blanditiis dolore soluta nobis deleniti officiis tempora eligendi aperiam minus commodi nesciunt nihil!</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div>
                        <img class="services-svg" src="images/services/service-4.svg" alt="">
                        <h4>Bar Wine</h4>
                        <p class="services-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam modi, laudantium ea, maiores facilis cumque reprehenderit, fuga nostrum possimus eligendi blanditiis facere quia necessitatibus provident? Praesentium repudiandae quis nesciunt nostrum?</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div>
                        <img class="services-svg" src="images/services/service-5.svg" alt="">
                        <h4>TV HD</h4>
                        <p class="services-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dolores quos earum reiciendis, at tempora perspiciatis, totam molestiae sequi, harum alias error ea inventore eveniet veritatis ad sit. Ratione, eveniet.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div>
                        <img class="services-svg" src="images/services/service-6.svg" alt="">
                        <h4>Restaurant</h4>
                        <p class="services-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nesciunt! Maiores illum minus consequuntur, unde nihil optio provident incidunt accusamus corporis? Quaerat cumque perspiciatis in sint officia eum accusantium dolor?</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Services Section End -->

    <!-- Room Section Begin -->
    <section id="room">
      <div class="container">
          <div class="row">
              <div class="col-lg-12">
                  <div class="section-title">
                      <h5>OUR ROOM</h5>
                      <h2>Explore Our Hotel</h2>
                  </div>
              </div>
          </div>
      </div>
      <div class="container-fluid">
          <div id="room-items" class="row">
              <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                  <div class="room-item">
                    <img  src="images/index/standard.jpg" alt="">  
                    <div class="room-title">
                          <h4>Standard Room</h4>
                          <h2>$1000<span>/night</span></h2>
                      </div>
                      <a href="#">Booking Now</a>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                  <div class="room-item">
                    <img  src="images/index/superior.jpg" alt="">
                      <div class="room-title">
                          <h4>Superior Room</h4>
                          <h2>$1500<span>/night</span></h2>
                      </div>
                      <a href="#">Booking Now</a>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                  <div class="room-item">
                    <img  src="images/index/especial.jpg" alt="">
                      <div class="room-title">
                          <h4>Especial Room</h4>
                          <h2>$2000<span>/night</span></h2>
                      </div>
                      <a href="#">Booking Now</a>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                  <div class="room-item">
                    <img  src="images/index/suit.jpg" alt="">
                      <div class="room-title">
                          <h4>Suit Room</h4>
                          <h2>$2500<span>/night</span></h2>
                      </div>
                      <a href="#">Booking Now</a>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <!-- Home Room Section End -->

    <!-- Testimonial Section Begin -->
    <section id="testimonial" class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title">
                    <h5>Testimonial</h5>
                    <h2>Our Guests Love Us</h2>
                </div>
            </div>
        </div>
        <div id="testimonial-item">
            <div class="card-group" id="testimonial-guests">               
            </div>
        </div>
    </section>
    <!-- Testimonial Section End -->

    <!-- Contact Section Begin -->
    <section id="contact" class="contact-bg">
      <div class="container-fluid">
          <div class="row d-flex justify-content-center">
              <div class="col-lg-8 text-center">
                <div class="section-title-contact m-5 py-5">
                  <h5>CONTACT US NOW!</h5>
                  <h2>Contact us now to get the latest deals and for the next booking</h2>
                  <button class="btn btn-success btn-sm">Contact</button>
                </div>
              </div>
          </div>
      </div>
      <!-- Footer Section Begin -->
      <footer class="footer bg-color">
        <div class="row">
          <div class="col-12 d-flex flex-column  align-items-center">
            <a href="#"><img src="images/logo1.png" class="logo-footer" alt="logo"></a>
            <p class="text-footer">© 2020 All rights reserved</p>
          </div>
        </div>
      </footer>
    </section>
    <!-- Footer Section End -->

   <!-- Popper-js-->
   <script src="js/popper.min.js"></script> 
   <!-- Bootstrap-js-->
   <script src="js/bootstrap.js"></script>

let permiso

if (usuario.edad >= 18) {
  permiso = true
} else {
  permiso = false
}

if (permiso) {
  alert("Puede comprar cerveza")
} else {
  alert("No puede comprar")
}



 fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => resp.json() )
    .then( (data) => {
        console.log( data[0].title )
        console.log( data[0].body )
    })

}



fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Coderhouse',
            body: 'Post de prueba',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))


    const lista = document.querySelector('#listado')

fetch('/data.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>${producto.precio}</p>
                <p>Código: ${producto.id}</p>
                <hr/>
            `
   
            lista.append(li)
        })
    })


const pedirPosts = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resp.json()
   
    data.forEach((post) => {
        const li = document.createElement('li')
        li.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.body}</p>
        `
        lista.append(li)
    })
}
 
pedirPosts()






<script src="js/index.js"></script>
