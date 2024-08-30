$(document).ready(function() {
    const reviews = [
        {
            name: "Kalyanraju Chinda",
            rating: 5,
            review: [
                "It is with great satisfaction that I declare, 'My vehicle!!!' This fills me with pride. The acknowledgment must be given to Mr. Imtiaz— Audiotunerz. The exceptional quality of the audio exceeded my expectations. Furthermore, his professional handling of the vehicle during the installation was truly commendable. The photos speak for themselves, no further explanation needed... The music playing in my Crysta left me speechless!!! In short, it is excellent!!"
            ],
                
            image: "https://lh3.googleusercontent.com/a-/ALV-UjV3ABrIbaT-Mf2-YtN1e0lbIreUhVtqWUyS9fssRGOjPYslZOg=w60-h60-p-rp-mo-br100"
        },
        {
            name: "Ashwin Nanduri",
            rating: 5,
            review: [
                "I recently brought a Toyota Fortuner, and an audiophile who enjoys good music and good sound quality even better, was really disappointed with the stock audio quality of the Fortuner.",
                "Was looking for high end audio upgrade, without knowing how and where could I find the right person for.",
                "Visited few outlets in Minister Road, who absolutely have no knowledge of high end audio.",
                "Then happened to meet Imthiaz Audio Tunerz, he had asked me to come for a demo, Till then one offered one, so I had visited his outlet for demo.",
                "I was pleasantly surprised to see his outlet located remotely , but once I heard the audio in the demo vehicle, I thought this is what I wanted, after the demo we had long discussion regarding the upgrade, I was really blown away with the knowledge Imthiaz had on Car Audio.",
                "We agreed upon a set up with Focal Speakers, Audison DSP amp, Sound magus Mono amp and Helix Woofer.",
                "Now comes the best part, the kind of clean and detail to precision  installation and really appreciate his patience for Tuning which took almost 1 ½ days and the audio out Put was too brilliant.",
                "I am really happy with the out Put and Think I got what I really wanted to listen .",
                "I really appreciate Imthiaz for his effort and patience and I Strongly recommend him for any kind of Car Audio Upgrade.",
                "Wishing him all the best !!!"
            ],
                
            image: "https://lh3.googleusercontent.com/a/ACg8ocJibRTr_PWQifn9jEPF7F0JtGZDMEN4IpABOR7JOtNmOjGJcQ=w60-h60-p-rp-mo-br100"
        },
        {
            name: "Jane Smith",
            rating: 4,
            review: "Very good experience overall. The product quality was top-notch, but the delivery was slightly delayed.",
            image: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            name: "Alice Johnson",
            rating: 3,
            review: "Average experience. The service was decent, but there were a few issues that need to be addressed.",
            image: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            name: "Bob Brown",
            rating: 2,
            review: "Not satisfied with the service. There were several problems that were not handled well, and communication was poor.",
            image: "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
            name: "Carol White",
            rating: 1,
            review: "Very poor experience. The product was defective and customer service was unresponsive. I will not be returning.",
            image: "https://randomuser.me/api/portraits/women/3.jpg"
        }
    ];

    function generateStars(rating) {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars += '<span class="fa fa-star filled"></span>';
            } else {
                stars += '<span class="fa fa-star empty"></span>';
            }
        }
        return stars;
    }

    function displayReviews() {
        const $container = $('#reviews-container');
        $container.empty();

        reviews.forEach(review => {
            const reviewCard = `
                <div class="card review-card">
                    <div class="card-header">
                        <img src="${review.image}" alt="${review.name}" class="review-image">
                        <div>
                            <h5 class="card-title">${review.name}</h5>
                            <div class="rating">${generateStars(review.rating)}</div>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="review-text">${review.review}</p>
                    </div>
                </div>
            `;
            $container.append(reviewCard);
        });
    }

    displayReviews();
});
