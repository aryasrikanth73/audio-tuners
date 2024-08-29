$(document).ready(function() {
    const reviews = [
        {
            name: "John Doe",
            rating: 5,
            review: "Excellent service! Highly recommended. The team was very professional and attentive to all our needs.",
            image: "https://lh3.googleusercontent.com/a-/ALV-UjV3ABrIbaT-Mf2-YtN1e0lbIreUhVtqWUyS9fssRGOjPYslZOg=w60-h60-p-rp-mo-br100"
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


// Social media icon
