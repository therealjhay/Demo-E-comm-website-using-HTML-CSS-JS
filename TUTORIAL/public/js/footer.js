const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="" />
        <div class="footer-ul-container">
          <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
          </ul>
          <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
          </ul>
        </div>
      </div>
      <p class="footer-title">about company</p>
      <p class="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quaerat
        exercitationem, necessitatibus rerum aliquam inventore asperiores quos?
        Consequuntur omnis laboriosam commodi cupiditate, blanditiis vel, sunt
        magni ipsum harum impedit dolorem fugiat accusantium, accusamus
        assumenda ab temporibus quas. Libero, quis nihil. Ipsam sapiente nisi
        nemo facere necessitatibus, quaerat dicta ducimus ratione hic
        perspiciatis magni impedit illum non ex amet commodi. Eum esse debitis
        eaque. Non itaque eaque maiores quisquam, repellat exercitationem. Esse,
        optio molestiae fugiat facilis impedit, sint possimus necessitatibus
        incidunt, maxime dolorem delectus non perferendis molestias. Sit earum
        harum ab fugit cum provident nesciunt, adipisci unde dicta ratione vel.
        Minus!
      </p>
      <p class="info">
        support emails - help@clothing.com, customersupport@clothings.com
      </p>
      <p class="info">telephone - +234 700 000 01, +234 700 000 02</p>
      <div class="footer-social-container">
        <div>
          <a href="#" class="social-link">terms & services</a>
          <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
          <a href="#" class="social-link">instagram</a>
          <a href="#" class="social-link">facebook</a>
          <a href="#" class="social-link">twitter</a>
        </div>
      </div>
      <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();