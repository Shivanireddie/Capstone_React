const Cards = () => {
    return(
    <div mt-10>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.indianexpress.com/2021/03/dbs-bank-1200.jpg" width="100%" height="360px" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://images.hindustantimes.com/img/2021/03/16/1600x900/368214553_0-8_1615880943079_1615880960150.jpg" width="100%" height="360px" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://www.dbs.com/iwov-resources/images/about/our-heritage/banktothefuture.png" class="d-block w-100" width="100%" height="360px" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    );

}
export default Cards;