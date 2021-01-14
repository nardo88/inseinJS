const portfolioModal = () => {
    const popupPortfolioSliderSlides = document.querySelectorAll('.popup-portfolio-slider__slide');
    const popupPortfolioText = document.querySelectorAll('.popup-portfolio-text');
    const next = document.getElementById('popup_portfolio_right')
    const prev = document.getElementById('popup_portfolio_left')
    const current = document.getElementById('popup-portfolio-current')
    const total = document.getElementById('popup-portfolio-total')

    let counter = 0;
    total.textContent = popupPortfolioText.length;

    const showSlide = () => {

        for (let i = 0; i < popupPortfolioText.length; i++) {
            popupPortfolioSliderSlides[i].style.display = 'none';
            popupPortfolioText[i].style.display = 'none';
            if (i === counter) {
                popupPortfolioSliderSlides[i].style.display = 'block';
                popupPortfolioText[i].style.display = 'block';
            }
        }

        current.textContent = counter + 1;
    }

    const nextSlide = () => {
        counter++
        if (counter >= popupPortfolioText.length ){
            counter = 0
        }

        showSlide()
    }

    const prevSlide = () => {
        counter--
        if (counter < 0){
            counter = popupPortfolioText.length - 1
        }

        showSlide()
    }

    showSlide();

    next.addEventListener('click', nextSlide)
    prev.addEventListener('click', prevSlide)
}

export default portfolioModal