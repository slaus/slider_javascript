// SLIDER
try {
    const wrapper = document.querySelector('.slider__wrapper'),
        list = wrapper.querySelector('.slider__list'),
        images = wrapper.querySelectorAll('.slider__item'),
        liTags = document.querySelectorAll('.slider__indicator li'),
        autoTimer = wrapper.getAttribute('data-interval'),
        prev = document.querySelector('[data-slide="prev"]'),
        next = document.querySelector('[data-slide="next"]');

    let i = 0,
        browserWidth = document.body.clientWidth,
        qty;

    const qtyItems = () => {
        // if (browserWidth < 767) {
        //     qty = 1;
        // } else if (browserWidth < 992) {
        //     qty = 2;
        // } else {
        //     qty = 3;
        // }
        return qty = 1;
    };

    const setAdaptiveSlider = (index = i) => {
        qtyItems();
        liTags[0].classList.add('active');

        let itemWidth = wrapper.offsetWidth / qty,
            total = images.length * itemWidth;
        list.style.width = total + 'px';

        images.forEach(item => {
            item.style.width = itemWidth + 'px';
        });

        next.addEventListener('click', (e) => {
            e.preventDefault();
            index = index + 1;
            if (index > images.length - qty) {
                index = 0;
            }
            removeActive(liTags);
            liTags[index].classList.add('active');
            list.style.transform = `translateX(-${index * itemWidth}px)`;
        });

        prev.addEventListener('click', (e) => {
            e.preventDefault();
            index = index - 1;
            if (index < 0) {
                index = images.length - qty;
            }
            removeActive(liTags);
            liTags[index].classList.add('active');
            list.style.transform = `translateX(-${index * itemWidth}px)`
        });

        //console.log(images.length);

        activateAnimation = () => {
            paused = setInterval(function () {
                index = index + 1;
                if (index > images.length - qty) {
                    index = 0;
                }
                removeActive(liTags);
                liTags[index].classList.add('active');
                list.style.transform = `translateX(-${index * itemWidth}px)`;
            }, autoTimer);
        }

        activateAnimation();

        removeActive = (tag) => {
            tag.forEach(item => {
                item.classList.remove('active');
            });
        }
    };

    setAdaptiveSlider();

    window.addEventListener('resize', () => {
        setAdaptiveSlider();
    });
} catch (e) { }
