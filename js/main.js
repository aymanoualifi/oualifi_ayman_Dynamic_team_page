(() => {

  const shields = document.querySelectorAll('.member'),
  teamInfo = document.querySelector('.textBio');

  let currentHouse = '';

    const teamText = [
      `this is my uncle he is a bit of a bother, he always gives me something to code for him, which is unfair. he's a good Designer to be honest, he made the logo and the promotional images. he did a bit of coding as well. However, he never gives me chocolate. He says it's bad for my teeth. he's such a loser.`,

      `this is me, the handsome guy in the team, also the hardworker, because i do most of the work. i'm almost 3 years old. if you ask my uncle about me, he would say he couldn't do anything without me. I know, I'm awesome. As you can see in my photo, i'm a good fighter as well. He can confirm that to you.`,


    ]

  function animateBanners(){
    let offset = this.dataset.offset; getHouseText(this.classList, this.dataset.offset);

    currentHouse = this.classList[1];
  }

  function getHouseText(house, index) {
    console.log(house[1], index);

    teamInfo.textContent = teamText[index];
  }

  shields.forEach(shield => shield.addEventListener('click', animateBanners));

  animateBanners.call(shields[0]);

  })();
