
$(document).ready(function() {
    const reviews = [
        {
            name: "John Doe",
            rating: 5,
            review: "Excellent service! Highly recommended. The team was very professional and attentive to all our needs.",
            image: "https://randomuser.me/api/portraits/men/1.jpg"  // Placeholder image
        },
        {
            name: "Jane Smith",
            rating: 3,
            review: "Very good experience overall. The product quality was top-notch, but the delivery was slightly delayed.",
            image: "https://randomuser.me/api/portraits/women/1.jpg"  // Placeholder image
        },
        {
            name: "Alice Johnson",
            rating: 3,
            review: "Average experience. The service was decent, but there were a few issues that need to be addressed.",
            image: "https://randomuser.me/api/portraits/women/2.jpg"  // Placeholder image
        },
        {
            name: "Bob Brown",
            rating: 2,
            review: "Not satisfied with the service. There were several problems that were not handled well, and communication was poor.",
            image: "https://randomuser.me/api/portraits/men/2.jpg"  // Placeholder image
        },
        {
            name: "Carol White",
            rating: 1,
            review: "Very poor experience. The product was defective and customer service was unresponsive. I will not be returning.",
            image: "https://randomuser.me/api/portraits/women/3.jpg"  // Placeholder image
        }
    ];

    function generateStars(rating) {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += i < rating ? '★' : '☆';
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
                        <h5 class="card-title">${review.name}</h5>
                        <p class="rating">${generateStars(review.rating)}</p>
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
