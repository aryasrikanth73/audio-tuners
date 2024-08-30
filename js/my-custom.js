$(document).ready(function () {
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
            name: "Ashwin Nanduri",
            rating: "5",
            review: ["I recently brought a Toyota Fortuner, and an audiophile who enjoys good music and good sound quality even better, was really disappointed with the stock audio quality of the Fortuner.",
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
            image: "https://lh3.googleusercontent.com/a/ACg8ocJibRTr_PWQifn9jEPF7F0JtGZDMEN4IpABOR7JOtNmOjGJcQ=w54-h54-p-rp-mo-br100"
        },
        {
            name: "Mohan Gutta",
            rating: "5",
            review: ["I recently got my speakers upgrade by Mr Imtiaz in my Chevrolet Beat, and I couldn't be happier with the results. Imtiaz has an outstanding understanding of all types of music systems, and his expertise truly shines through in his work.",
                "The music output in my car is now incredible, delivering clear and powerful sound. What impressed me the most was the perfect fitment and neat finishings that Imtiaz achieved. Every component was installed flawlessly, showcasing his attention to detail and commitment to excellence.",
                "If you're looking for top-notch service and an exceptional upgrade to your car's music system, I highly recommend Imtiaz. His work is nothing short of outstanding!"
            ],
            image: "https://lh3.googleusercontent.com/a-/ALV-UjXQ_fUSNW7ABolcDamrzxOxwyeWTR4m46LHO2dCcx82Ouk9FeDC=w60-h60-p-rp-mo-ba4-br100"
        },
        {
            name: "fahad shaik",
            rating: "5",
            review: ["since ages i was looking for ICE installer's in hyderabad as i had installed an amp and a mono which caused humming and alternater noice from my speakers which felt very unpleasant while driving.",
                "Hence for finding out the solution for this rare problem i started visiting popular car decors in Hyderabad such as twisters and car sonics (including all shops of minister road and Lb stadium )but was not satisfied by their behaviour and realised that these places are just an hype but nothing.",
                "Then one fine day i contacted Imthiyaz bhai of Audio tuners and explained all the problems i was facing in my car audio, after visiting the store i found out that Imthiyaz bhai is very much knowledgeable person when it comes to to car audio and found out that he is the only ICE specialist from Hyderabad who has won an award in EMMA Competition (European Mobile Media Association) He is very humble and grounded person. Like an elder brother he suggested the upgrades according to my budget and cleared out my problem of humming from the speakers by re wireing my car audio with proper OFC power cable with thimbles and heat shrinks the work on the wireing was very neat and professionally done as it should be in car. The final result of the placement of amp and mono looks like an OEM fitment. (The installers were working on my untill 4:00 am in the morning) hats off for their commitment to the work.",
                "I blindly recommend AUDIO TUNERS if anyone is facing problems related to car audio and for professional ICE installers In Hyderabad.",
                "PS: Please don't waste your money and time like me by visiting other car decors in hyderabad who have ZERO knowledge regarding Car audio and are just hype."
            ],
            image: "https://lh3.googleusercontent.com/a-/ALV-UjVOeGn8SVKAFF30FjPzKiavR5ta_uDlYJyeu8BNlmQoajMtLsxSKg=w60-h60-p-rp-mo-br100",
        },
        {
            name: "Abhinav Krishna",
            rating: "5",
            review: ["The Best Stop for your Car Audio upgradation or sound proofing, Imtiyaz has excellent technical skills, I recently got sound damping done for my skoda kushaq, trust me he is not like the other dealers. He personally worked on my car and gave the craziest output than i expected.",
                "If someone wants to upgrade sound system or looking for sound proofing just contact AUDIOTUNERZ. Before going to other dealers or decors.",
                "All the very best Imtiyaz ,many more awards to load in your store."
            ],
            image: "https://lh3.googleusercontent.com/a/ACg8ocKX8WPBh_emluAloQrBu6z-XWVLskxPTEmScVcvaZML7qqqpB5q=w60-h60-p-rp-mo-br100",
        },
        {
            name: "Saurabh Malhotra",
            rating: "5",
            review: ["I recently visited Audiotunerz for an upgrade to my new Thar’s stock system, and I am thoroughly impressed with the experience. Imtiyaz demonstrated exceptional knowledge and a deep understanding of my requirements. He guided me through the options available, ensuring I found the perfect fit within my budget without compromising on quality - Helix Subwoofer and Acustica Amplifier, added to the current setup.",
                "The installation was neat and seamless, and the product exceeded my expectations in terms of performance. Imtiyaz's passion for music and attention to detail are evident in the quality of his work.",
                "For anyone who values a high-quality audio experience in their vehicle, I highly recommend Audiotunerz. Imtiyaz's expertise in the field of music, achievements (EMMA award winner) and customer-centric approach make it the go-to place for music lovers looking to upgrade their car audio systems.",
                "Keep up the great work Imtiyaz!!"
            ],
            image: "https://lh3.googleusercontent.com/a/ACg8ocLF7e9LPxm1CcwyxO1071gGxsrZKwR2q2vkdRoFnzgfFgNTgQ=w60-h60-p-rp-mo-br100",
        },
        {
            name: "Yash Veera",
            rating: "5",
            review: ["I met Imthiyaz at Audiotunerz to fix the hiss noise. He diagnosed the problem very well, and suggested for reinstallation. The results are,",
                "a) perfect installation that is highly reliable and safe",
                "b) top notch audio tuning and customisation",
                "c) reduced hiss noise",
                "Imthiyaz has got a lot of competencies in audio space and  he's very reliable. He's very thorough on both on theory and practical front and highly open for discussions.",
                "For a car like Thar, the complete installation (Speakers, Amp, Sub-Woff) and tuning must have taken more than 15 hrs (~3 people), and this just proves the amount of perfection they try to bring. So, i highly recommend going to Audiotunerz/Imthiyaz for any audio works."
            ],
            image: "https://lh3.googleusercontent.com/a-/ALV-UjUklUKgoQesQKIAd4F7DL0C3Z111IsWhFmDaHlCVqHBYxum3UcmNw=w60-h60-p-rp-mo-br100",
        },
        {
            name: "Moses Thella",
            rating: "5",
            review: ["I recently had my car's audio system tuned by AudioTunerz, and I couldn't be happier with the results. Mr. Imtiyaz was extremely knowledgeable and took the time to explain the entire tuning process to me. My sound system now delivers crystal-clear audio with perfectly balanced bass, mids, and highs. Mr. Imtiyaz even won an EMMA award in the first Indian EMMA competition, which showcases excellence in mobile media installations.",
                "The service was prompt and professional, and I was even provided with recommendations for future upgrades to further enhance my listening experience. The difference in sound quality is remarkable!",
                "Highly recommend Audio Tunerz to anyone looking to optimize their car's audio system."
            ],
            image: "https://lh3.googleusercontent.com/a-/ALV-UjVVjKCaA6Z1Fpxyb7gGn4sPvt2agtgbAsaVKOk_etyOj7DQyNzacA=w60-h60-p-rp-mo-ba4-br100",
        },
        {
            name: "Abiram Reddy",
            rating: "5",
            review: ["Highly professional and knowledgeable person when it comes to audio setups. Glad I came across his profile. Subwoofer and mono amp setup was done neatly on time."
            ],
            image: "https://lh3.googleusercontent.com/a-/ALV-UjV52xAcX2GwfCbQWyq-e8JZKmFVxCrz1X1L93CaKiJ3sEEzFKAS=w60-h60-p-rp-mo-ba4-br100",
        },
        {
            name: "Istas Cafe",
            rating: "5",
            review: ["I recently upgraded my car's audio system at Audiotunerz in Hyderabad, and the experience was fantastic. Imtiyaz, the owner, personally handles all installations and tuning, showcasing his incredible knowledge and skill. His expertise resulted in a perfectly balanced and immersive sound experience. Exceptional customer service and high-quality products make Audiotunerz the best choice for car audio upgrades. Highly recommended for anyone seeking superior craftsmanship and a remarkable audio transformation!"
            ],
            image: "https://lh3.googleusercontent.com/a-/ALV-UjVK6Vg0_f3z-rsYROHK9R9ntVOH1epmwZy5wnVp9RyXt4J477-w=w60-h60-p-rp-mo-br100",
        },
        {
            name: "Raghu Thakur",
            rating: "5",
            review: ["Excellent knowledge and precision work, he is first time Emma award winner in Telangana Imtiyaz is master in car audio"],
            image: "https://lh3.googleusercontent.com/a-/ALV-UjUR5ioXok0TOQjt9S9XV2cqgpAOVaW5H0BG8NfpCGClcHsEHb-s=w60-h60-p-rp-mo-br100",
        },
        {
            name: "lakshman prasad",
            rating: "5",
            review: [
                "I recently had a subwoofer installed in my car (Honda City 2024 Model) in AUDIOTUNERZ by Imthiyaz and I am very happy with the results.",
                "The installation was highly professional and quality of work is very good. The subwoofer delivers deep, rich bass that enhances my overall listening experience. The system was tuned perfectly to avoid any distortion, even at higher volumes.",
                "I am extremely satisfied with the subwoofer installation service. The enhanced audio quality has significantly improved my in-car .",
                "I highly recommend AUDIOTUNERZ (Imthiyaz) to install/upgrade car’s audio system in Hyderabad. No second thought on this.",
                "Thanks again Imthiyaz for a job well done!"
            ],
            image: "https://lh3.googleusercontent.com/a/ACg8ocITWL9C_JYxW4JSPvd5coOuvcTsgrQylOEuIpRBX-aelfmT0w=w60-h60-p-rp-mo-br100",
        },
        {
            name: "Faizan Ahmed",
            rating: "5",
            review: ["I recently visited Audio Tunerz to upgrade my car audio system, and I couldn't be more satisfied with the service and products provided. Imthiyaz, was knowledgeable, professional, and went above and beyond to ensure I got the best setup for my vehicle. The installation was seamless, and the sound quality is outstanding. I highly recommend Audio Tunerz to anyone looking for top-notch car audio solutions."],
            image: "https://lh3.googleusercontent.com/a-/ALV-UjVe68GYZN_qauBF3m7yD6wztIlXOzyoas2LfriCi7HTqmDh4_JP=w60-h60-p-rp-mo-ba3-br100",
        },
        {
            name: "Sandhiya Sreedhar",
            rating: "5",
            review: ["Recently I had the pleasure of having Audiotunerz service my car audio system recently, and I couldn't be more pleased with the experience! Imthiyaz and the team provided exceptional service and executed the installation flawlessly. The sound quality is now exceptional, and I'm thoroughly satisfied with the outcome. I highly recommend Audiotunerz for anyone looking to upgrade their car audio system!"],
            image: "https://lh3.googleusercontent.com/a-/ALV-UjV8g2YZakot3SkmRxZlRJhWS77VGXgz2YTfCWZ04KIH3mLQrhc=w60-h60-p-rp-mo-br100",
        },
        {
            name: "Mohd Aziz Uddin",
            rating: "5",
            review: ["Excellent audio setup . One stop shop for all car audio needs.",
                "Owner Mr. Imthiyaz is a genius and knows exactly what a customer wants.",
                "I am loving my audio setup.",
                "Five stars to Audio tunerz and team.",
                "Highly recommended to all"],
            image: "https://lh3.googleusercontent.com/a-/ALV-UjX14yT3BvPKZMN6JuughOV8Fo3BIfoCbXlrWcVYkBUCvSGJ-8dg=w60-h60-p-rp-mo-br100",
        },

        {
            name: "Ram Singh",
            rating: "5",
            review: ["Mr. Imtiyaz is pro in his work. His behaviour and attitude is superb. His technical knowledge exceeded my expectation. I recommend him strongly for car decors services specially in Audio."],
            image: "https://lh3.googleusercontent.com/a-/ALV-UjXLbiAzHLwlp6BV_QBHLV9c47mG_aBqmBevnyIQBsaOETydnjqp=w60-h60-p-rp-mo-br100",
        },
        {
            name: "Rajkiran Jonnalagada",
            rating: "5",
            review: ["I had set up my car audio at Minister Road, but they did the installation in a very wrong way, so the sound clarity was poor, and I was able to hear other sounds.Then I contacted Audio Tunnerz; Imtiaz helped correct the mistakes made by the previous installer and rewired everything.Now the audio is perfect.I am very happy to share this review and suggest contacting Audio Tunnerz if you want to set up an audio system"],
            image: "https://lh3.googleusercontent.com/a-/ALV-UjVriP5YYoSSatQTdf6NQgNJHCKbx0ywa3R1sacVNX1OkEoYFoh5YQ=w60-h60-p-rp-mo-br100",
        },
        {
            name: "anil babu",
            rating: "5",
            review: ["highly recommend Audiotunerz for anyone seeking top- notch audio upgrades for their vehicle.The team here is incredibly patient and committed to delivering exceptional customer service.They have top quality audio systems like Alpine, Focal & Helix",
            "For my car Inthiyaz Suggested and fixed Elate E4 9inch display along with alphine audio.",
        "He has a very good knowledge on audio system and better tuning",
        "Their expertise in high-end audio upgrades, coupled with their dedication to perfect tuning, makes them the go-to shop for anyone looking to enhance their driving experience.",
        "Moreover, their long-term service commitment ensures that you'll continue to receive outstanding support for all your audio needs.",
        "Overall, a five-star experience from start to finish",
        "Thanks to Inthiyaz"], 
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWRCLbNfcnHjMNaqptSmQsRUD1RcCQUBSSvhe1x5YG8uJXex4nu=w60-h60-p-rp-mo-br100",
},
    {
        name: "Dastagiri Yatikadi",
        rating: "5",
        review: ["Excellent and professional car audio installation point in hyderabad. I done my car audio this point I never feel like this clarity before. I truely recommend everyone if you need audio please visit AUDIOTUNERZ."],
        image: "https://lh3.googleusercontent.com/a/ACg8ocKl9_H73vBDqVFFq-pmyFH8JXgoh-LxSCvb6u5uR4fiyz-7Ew=w60-h60-p-rp-mo-br100",
    },
    {
        name: "Raadha R",
        rating: "5",
        review: ["The best Car audio installer and tuner in Hyderabad. Been to lot of places but was left disappointed and had wasted lot of money. Do not think twice before coming here. Highly recommend."],
        image: "https://lh3.googleusercontent.com/a/ACg8ocJvAAE3cBTzmVS0iMBDBjAJ5LbKH7raUnoXMBy_4hDwDp3Tzg=w60-h60-p-rp-mo-ba2-br100",
    },
    {
        name: "srikanth chitturi",
        rating: "5",
        review: ["I recently had the pleasure of visiting AUDIOTUNERZ, and I must say it was a fantastic experience from start to finish.The staff at the audio fitting shop were not only knowledgeable but also incredibly friendly and helpful.",
        "From the moment I walked in, I felt welcomed and valued as a customer. The team took the time to understand my preferences and needs, offering expert advice on the best audio solutions for my car. Their attention to detail and commitment to providing a personalized experience truly set them apart.",
        "The installation process was seamless, and the technicians demonstrated a high level of expertise. The end result exceeded my expectations—the sound quality in my car is now exceptional, thanks to the quality products and meticulous installation.",
        "In addition to their technical proficiency, the atmosphere in the shop was inviting, making it a comfortable place to explore various audio options. The variety of products and brands available showcased their commitment to offering a range of choices to suit different tastes and budgets.",
        "Overall, I highly recommend AUDIOTUNERZ to anyone in search of a top-notch audio fitting experience. Their dedication to customer satisfaction, combined with their passion for audio excellence, makes them a standout destination for audio enthusiasts. I'm delighted with the results and grateful for the outstanding service I received."], 
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUr7yYAFrAr6knUUsNOClSAByU2Yh-bf6boFARvc3U7RsrWUMM=w60-h60-p-rp-mo-ba2-br100",
    },
    {
        name: "Purushotam Singh",
        rating: "5",
        review: ["Excellent knowledge and precision work, 100% satisfied with the job done, He explained me about Music systems and costs and based on my requirement and budget he fixed Music System, He has good knowledge on Car Audio systems and has attention to detail !"],  
    image: "https://lh3.googleusercontent.com/a/ACg8ocLK72NR8Ps_LKddHVOblM1W3bwh5zPYupxZG1ezhj2gFfhzyA=w60-h60-p-rp-mo-ba2-br100",
    },
    {
        name: "Pavan Kumar",
        rating: "5",
        review: ["The only emma certified audio installation shop in Hyderabad..no more running to other places for high end and studio like audio installation for your car..the owner is extremely passionate about car audio and will give you the desired results..please listen to his demo installation..that itself is testament to his work..all the very best audiotunerz"],
    image: "https://lh3.googleusercontent.com/a/ACg8ocJg_WeDKIKZherup7s8M340L256Vqoo5q9a3ScPXW6wASIjNw=w60-h60-p-rp-mo-ba3-br100",
    },

    {
        name: "Ameer Hussain",
        rating: "5",
        review: ["Excellent and Professional car audio installation point.We can feel the true audio for ur car.I can’t compare this installation service with others service points.Please visit one time so that you can experience true car audio installation.He is specialist in #car audio #professional car audio #car audio installation #car sound #car sterio #car audio hyderabad #custom car audio hyderabad"], 
    image: "https://lh3.googleusercontent.com/a-/ALV-UjU5NXGRPXZv6DB-Cb_19To-k-qREqc3UEeh7l5q5s32s4HeRWaAZQ=w60-h60-p-rp-mo-br100",
    },
    {
        name: "Sravan Merugu",
        rating: "5",
        review: ["Mr. Imtiyaz is very knowledgeable in the car audio space, and had provided a great service to my car."],
        image: "https://lh3.googleusercontent.com/a/ACg8ocJ5KQCb3IZSQKTE90wqnnYCmmYJCK6jkpVtBJGwfTuGNZISsw=w60-h60-p-rp-mo-br100",
    },
    {
        name: "Syed Kareem",
        rating: "5",
        review: ["I recently had the pleasure of experiencing the expert car audio customization services at Audiotunerz, where Imthiyaz showcased true professionalism in his field.His exceptional skills and knowledge were evident in every aspect of the car stereo customization, surpassing my expectations.The meticulous attention to detail and outstanding workmanship truly set Audiotunerz apart.The upgraded sound system has not only met but exceeded my desires, transforming my driving experience.Imthiyaz's dedication to customer satisfaction and his amiable demeanor make Audiotunerz the go-to choice for those seeking top-tier car audio customization. Highly recommended for anyone who values a professional touch in enhancing their vehicle👏."],  
    image: "https://lh3.googleusercontent.com/a/ACg8ocJg1qvF5q6TXjEtk6_erN3SHtxfOfeZxh_cUvUoO1s69g0KxA=w60-h60-p-rp-mo-br100",
    },
    ];

function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<span class="fa fa-star filled"></span>';
        } else {
            stars += '<span class="fa fa-star empty"></span>';z
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
