document.addEventListener('DOMContentLoaded', () => {
    const birthdayBoxesContainer = document.getElementById('birthdayBoxes');

    // Detailed messages for each of her 21 birthdays
    const birthdayMessages = [
        {
            year: 1,
            emoji: '🎈',
            message: "Blessy's 1st Birthday! The world welcomed a tiny, precious soul who would one day touch so many hearts. A beautiful beginning."
        },
        {
            year: 2,
            emoji: '🎂',
            message: "Blessy's 2nd Birthday! Little steps, curious eyes, and a quiet wonder about the world. Growing into your gentle self."
        },
        {
            year: 3,
            emoji: '🎁',
            message: "Blessy's 3rd Birthday! Discovering new joys, perhaps a first toy dog, and planting the seeds of your sweet nature."
        },
        {
            year: 4,
            emoji: '🧸',
            message: "Blessy's 4th Birthday! Neyveli's little star, perhaps already enjoying the simple pleasures of childhood in Tamil Nadu."
        },
        {
            year: 5,
            emoji: '🌟',
            message: "Blessy's 5th Birthday! Starting school, a new chapter. Even then, your quiet strength was beginning to bloom."
        },
        {
            year: 6,
            emoji: '📚',
            message: "Blessy's 6th Birthday! Learning, growing, and perhaps already finding comfort in books or quiet corners. Your unique path unfolding."
        },
        {
            year: 7,
            emoji: '🧩',
            message: "Blessy's 7th Birthday! Maybe your first introduction to carrom or chess, sparking that strategic mind of yours."
        },
        {
            year: 8,
            emoji: '🐶',
            message: "Blessy's 8th Birthday! Your love for dogs might have truly blossomed around this time. A pure, unconditional bond."
        },
        {
            year: 9,
            emoji: '🎮',
            message: "Blessy's 9th Birthday! Perhaps the early days of discovering Roblox and the world of online games, finding your own space."
        },
        {
            year: 10,
            emoji: '💖',
            message: "Blessy's 10th Birthday! A decade of quiet grace. You were becoming the thoughtful and sensitive person you are today."
        },
        {
            year: 11,
            emoji: '🤫',
            message: "Blessy's 11th Birthday! Embracing your introverted nature, finding solace in silence, a beautiful trait that makes you uniquely you."
        },
        {
            year: 12,
            emoji: '💭',
            message: "Blessy's 12th Birthday! A year of introspection, navigating the world with your gentle heart, perhaps already feeling the weight of expectations."
        },
        {
            year: 13,
            emoji: '👯‍♀️',
            message: "Blessy's 13th Birthday! The bonds of friendship strengthening, especially with your school friends like Dhash and Anu Priya."
        },
        {
            year: 14,
            emoji: '💫',
            message: "Blessy's 14th Birthday! A year of quiet dreams and hidden feelings. You've always held so much within, a beautiful mystery."
        },
        {
            year: 15,
            emoji: '🎓',
            message: "Blessy's 15th Birthday! Preparing for new challenges, perhaps already thinking about college and your future as a CSE student."
        },
        {
            year: 16,
            emoji: '🌟',
            message: "Blessy's 16th Birthday! The Omegle chapter. A glimpse into a different kind of connection, teaching you about the complexities of feelings and relationships."
        },
        {
            year: 17,
            emoji: '👭',
            message: "Blessy's 17th Birthday! College life begins! Meeting your amazing gang of 8: Kaviya (your special one!), Arthi, Janani, D Janani, Kalai, Sadhana, Tharunika, and Abinaiya. A true blessing."
        },
        {
            year: 18,
            emoji: '✨',
            message: "Blessy's 18th Birthday! Adulthood. A year of navigating family expectations and finding your own voice, even in silence. Your resilience truly shines."
        },
        {
            year: 19,
            emoji: '🗓️',
            message: "Blessy's 19th Birthday! The year I came into your life, around Jan 23. Dhash played a part, and our conversations began. A new connection blossoming."
        },
        {
            year: 20,
            emoji: '💞',
            message: "Blessy's 20th Birthday! A year of deepening bonds, understanding your unspoken feelings, and appreciating the incredible person you are becoming. Every word with you is precious."
        },
        {
            year: 21,
            emoji: '💖',
            message: "Blessy's 21st Birthday! Today, you turn 21. This website, this effort, is my silent confession, my way of showing you how much you mean to me. May this year be filled with the courage to express your heart, and the realization of how deeply you are loved. Happy Birthday, my Blessy. My Angel. My everything."
        }
    ];

    birthdayMessages.forEach(data => {
        const box = document.createElement('div');
        box.classList.add('birthday-box');
        box.innerHTML = `
            <h3>Blessy's ${data.year}th Birthday ${data.emoji}</h3>
            <p>${data.message}</p>
        `;
        birthdayBoxesContainer.appendChild(box);
    });

    // --- How Well Do I Know You? Quiz Logic ---
    const quizQuestions = [
        {
            question: "Among your college friends, who holds a truly special place in your heart?",
            options: ["Kaviya", "Arthi", "Janani", "Abinaiya"],
            answer: "Kaviya",
            feedbackCorrect: "Absolutely! Kaviya has always been your rock, your first college friend, and someone truly special. I admire that bond.",
            feedbackIncorrect: "Close one! But it's Kaviya, your first college friend and someone truly special. Your bond with her is beautiful."
        },
        {
            question: "Who was the person who first introduced you to me (Kingston)?",
            options: ["Kaviya", "Dhash", "Anu Priya", "Udaya"],
            answer: "Dhash",
            feedbackCorrect: "Spot on! Dhash, your school friend, played a small but significant role in bringing us together. Grateful for that connection!",
            feedbackIncorrect: "Not quite! It was Dhash, your school friend, who unknowingly connected us. Small world, isn't it?"
        },
        {
            question: "Which of these games do we often enjoy playing together?",
            options: ["Valorant", "Chess", "Cricket", "Football"],
            answer: "Chess",
            feedbackCorrect: "Yes! Our strategic battles in Chess are always a blast. I love those moments with you.",
            feedbackIncorrect: "Hmm, not that one! We've had some great times playing Chess. Your strategic mind is impressive!"
        },
        {
            question: "What's the one animal that always brings a smile to your face?",
            options: ["Cats", "Birds", "Dogs", "Fish"],
            answer: "Dogs",
            feedbackCorrect: "Definitely dogs! Your love for them is so pure and heartwarming. It's one of the many things I adore about you.",
            feedbackIncorrect: "Nope! It's dogs! Your gentle heart truly connects with them."
        },
        {
            question: "Despite everything, what's a core trait you possess that makes you incredibly strong?",
            options: ["Always expressing feelings", "Being loud and outgoing", "Finding comfort in silence", "Constantly seeking attention"],
            answer: "Finding comfort in silence",
            feedbackCorrect: "Exactly. Your ability to find comfort and strength in silence, to process things within, is a profound part of who you are. I see and appreciate that quiet resilience.",
            feedbackIncorrect: "Not quite. It's your ability to find comfort and strength in silence that truly makes you strong. I admire that about you."
        },
        {
            question: "When did our conversations first begin?",
            options: ["March 23", "Jan 23", "Feb 14", "April 1"],
            answer: "Jan 23",
            feedbackCorrect: "You remember! Jan 23 marks the beginning of something truly special for me. Every conversation since has been a gift.",
            feedbackIncorrect: "Close! It was around Jan 23. That day holds a special place in my memory."
        }
    ];

    let currentQuestionIndex = 0;
    let answeredCurrentQuestion = false;

    const quizQuestionElement = document.getElementById('quizQuestion');
    const quizOptionsElement = document.getElementById('quizOptions');
    const quizFeedbackElement = document.getElementById('quizFeedback');
    const quizNextBtn = document.getElementById('quizNextBtn');
    const quizRestartBtn = document.getElementById('quizRestartBtn');

    function loadQuestion() {
        answeredCurrentQuestion = false;
        quizFeedbackElement.textContent = ''; // Clear feedback
        quizOptionsElement.innerHTML = ''; // Clear previous options

        if (currentQuestionIndex < quizQuestions.length) {
            const q = quizQuestions[currentQuestionIndex];
            quizQuestionElement.textContent = q.question;
            quizNextBtn.classList.remove('hidden'); // Show next button
            quizRestartBtn.classList.add('hidden'); // Hide restart button

            q.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('quiz-option-button');
                button.addEventListener('click', () => selectOption(button, option, q.answer, q.feedbackCorrect, q.feedbackIncorrect));
                quizOptionsElement.appendChild(button);
            });
        } else {
            // Quiz finished
            quizQuestionElement.textContent = `Quiz Complete! Thank you for playing, Blessy.`;
            quizOptionsElement.innerHTML = '';
            quizFeedbackElement.textContent = `I hope you enjoyed this little journey through our memories and your wonderful self.`;
            quizNextBtn.classList.add('hidden'); // Hide next button
            quizRestartBtn.classList.remove('hidden'); // Show restart button
        }
    }

    function selectOption(selectedButton, selectedOption, correctAnswer, feedbackCorrect, feedbackIncorrect) {
        if (answeredCurrentQuestion) return; // Prevent multiple answers for one question
        answeredCurrentQuestion = true;

        // Disable all option buttons
        Array.from(quizOptionsElement.children).forEach(button => {
            button.classList.add('disabled');
            // Clone and replace to remove all event listeners
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
        });

        if (selectedOption === correctAnswer) {
            selectedButton.classList.add('correct');
            quizFeedbackElement.textContent = feedbackCorrect;
        } else {
            selectedButton.classList.add('incorrect');
            quizFeedbackElement.textContent = feedbackIncorrect;

            // Highlight the correct answer
            Array.from(quizOptionsElement.children).forEach(button => {
                if (button.textContent === correctAnswer) {
                    button.classList.add('correct');
                }
            });
        }
    }

    quizNextBtn.addEventListener('click', () => {
        if (answeredCurrentQuestion || currentQuestionIndex === quizQuestions.length) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            quizFeedbackElement.textContent = 'Please select an answer before proceeding!';
        }
    });

    quizRestartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        loadQuestion();
    });

    // Initial load of the quiz
    loadQuestion();

    // --- Daily Dose of Appreciation Logic ---
    const appreciationMessages = [
        "Your quiet strength inspires me every single day, Blessy.",
        "I cherish our conversations, even the silent ones. They speak volumes.",
        "You have a beautiful way of seeing the world, and I'm grateful to witness it.",
        "Thank you for being you. You're enough, always, and more than you know.",
        "I admire how you navigate life with such grace and resilience.",
        "Just thinking of you brings a genuine smile to my face. You're my ray of sunshine.",
        "Your heart is bigger than you know, Blessy. It's a treasure.",
        "I'm so incredibly grateful to have you in my life. You make it better.",
        "You deserve all the happiness and freedom in the world. Never forget that.",
        "Your dedication to your friends and studies is truly admirable.",
        "I love how you find comfort in your own thoughts. It's a beautiful trait.",
        "You have a unique spark, Blessy, even when you don't show it.",
        "Being your friend is one of the greatest joys in my life.",
        "You teach me so much without even realizing it.",
        "I hope you always find moments of peace and joy, just for yourself."
    ];

    const getAppreciationBtn = document.getElementById('getAppreciationBtn');
    const appreciationMessageDisplay = document.getElementById('appreciationMessage');

    getAppreciationBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * appreciationMessages.length);
        appreciationMessageDisplay.textContent = appreciationMessages[randomIndex];
    });

    // --- Love Quotes Carousel Logic ---
    const loveQuotes = [
        "In your quiet presence, I find a universe of unspoken emotions. My love for you is a silent melody, always playing.",
        "Like a hidden star, your light guides my darkest nights. You are the unspoken wish of my heart, Blessy.",
        "Every moment we've shared, every silent understanding, has woven a tapestry of love that only we can truly see.",
        "My heart recognized yours before my mind could comprehend. You are the beautiful secret I never knew I needed.",
        "To love you is to appreciate the depths of your soul, the quiet strength that shines through every challenge. You are my profound admiration.",
        "You are the gentle whisper of my dreams, the beautiful truth my heart always knew. My love for you is as boundless as the sky.",
        "In your eyes, I see a reflection of a future I long to share. You are the missing piece, the beautiful puzzle of my life.",
        "My love for you isn't about grand gestures, but in the quiet knowing, the deep respect, and the unwavering belief in your beautiful spirit.",
        "You are the poem my heart writes, the song my soul sings. Every thought of you is a blessing, a silent prayer.",
        "Even without words, our connection speaks volumes. My love for you is a language understood only by our hearts."
    ];
    let currentLoveQuoteIndex = 0;
    const loveQuoteDisplay = document.getElementById('loveQuoteDisplay');
    const nextLoveQuoteBtn = document.getElementById('nextLoveQuoteBtn');

    function displayLoveQuote() {
        loveQuoteDisplay.textContent = loveQuotes[currentLoveQuoteIndex];
    }

    nextLoveQuoteBtn.addEventListener('click', () => {
        currentLoveQuoteIndex = (currentLoveQuoteIndex + 1) % loveQuotes.length;
        displayLoveQuote();
    });

    displayLoveQuote(); // Display initial love quote

    // --- Health Quotes Carousel Logic ---
    const healthQuotes = [
        "True health is not just about the body, but the peace of your mind and the joy in your spirit. May you find all three, always.",
        "Take care of your inner self, Blessy. Your emotional well-being is as vital as your physical health. Prioritize your peace.",
        "May your days be filled with moments of calm, strength, and quiet rejuvenation. Your well-being is precious.",
        "Nourish your soul with what brings you genuine happiness, even in the smallest moments. Your inner peace is your greatest wealth.",
        "Remember to breathe, Blessy. In every quiet moment, find strength and release. Your health is your foundation for everything beautiful.",
        "Prioritize your rest, embrace your quiet moments, and allow yourself the grace to simply be. Your well-being is a sacred journey.",
        "May you always find the courage to protect your peace and nurture your spirit. Your health is a testament to your resilience.",
        "Listen to your body, honor your needs, and cherish your quiet moments of self-care. You deserve all the vitality and joy.",
        "Health is the silent strength that allows your beautiful spirit to shine. May you always feel vibrant and at peace.",
        "May your journey be one of holistic well-being, where your mind finds clarity, your body finds strength, and your heart finds profound serenity."
    ];
    let currentHealthQuoteIndex = 0;
    const healthQuoteDisplay = document.getElementById('healthQuoteDisplay');
    const nextHealthQuoteBtn = document.getElementById('nextHealthQuoteBtn');

    function displayHealthQuote() {
        healthQuoteDisplay.textContent = healthQuotes[currentHealthQuoteIndex];
    }

    nextHealthQuoteBtn.addEventListener('click', () => {
        currentHealthQuoteIndex = (currentHealthQuoteIndex + 1) % healthQuotes.length;
        displayHealthQuote();
    });

    displayHealthQuote(); // Display initial health quote

    // --- Memory Match Game Logic ---
    const memoryCards = ['🐶', '💖', '📚', '🎮', '✨', '🤫', '🧩', '🌟']; // 8 pairs
    let gameBoard = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let canFlip = true;

    const memoryGrid = document.getElementById('memoryGrid');
    const memoryInfo = document.getElementById('memoryInfo');
    const memoryRestartBtn = document.getElementById('memoryRestartBtn');

    function initializeMemoryGame() {
        gameBoard = shuffle([...memoryCards, ...memoryCards]); // Create pairs and shuffle
        memoryGrid.innerHTML = '';
        flippedCards = [];
        matchedPairs = 0;
        canFlip = true;
        memoryInfo.textContent = 'Find the matching pairs!';

        gameBoard.forEach((emoji, index) => {
            const card = document.createElement('div');
            card.classList.add('memory-card');
            card.dataset.index = index;
            card.innerHTML = `
                <div class="memory-card-inner">
                    <div class="memory-card-back"></div>
                    <div class="memory-card-front">${emoji}</div>
                </div>
            `;
            card.addEventListener('click', () => flipCard(card, emoji, index));
            memoryGrid.appendChild(card);
        });
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function flipCard(card, emoji, index) {
        if (!canFlip || card.classList.contains('flipped') || card.classList.contains('matched')) {
            return;
        }

        card.classList.add('flipped');
        flippedCards.push({ card, emoji, index });

        if (flippedCards.length === 2) {
            canFlip = false; // Prevent further flips
            const [card1, card2] = flippedCards;

            if (card1.emoji === card2.emoji && card1.index !== card2.index) {
                // Match found
                card1.card.classList.add('matched');
                card2.card.classList.add('matched');
                matchedPairs++;
                flippedCards = [];
                canFlip = true;

                if (matchedPairs === memoryCards.length) {
                    memoryInfo.textContent = 'You matched them all! Amazing! 🎉';
                } else {
                    memoryInfo.textContent = 'Match found! Keep going!';
                }
            } else {
                // No match, flip back after a delay
                memoryInfo.textContent = 'No match. Try again!';
                setTimeout(() => {
                    card1.card.classList.remove('flipped');
                    card2.card.classList.remove('flipped');
                    flippedCards = [];
                    canFlip = true;
                    memoryInfo.textContent = 'Find the matching pairs!';
                }, 1000);
            }
        }
    }

    memoryRestartBtn.addEventListener('click', initializeMemoryGame);
    initializeMemoryGame(); // Initialize on page load

    // --- Catch the Falling Hearts Game Logic ---
    const canvas = document.getElementById('heartGameCanvas');
    const ctx = canvas.getContext('2d');
    const heartGameScoreDisplay = document.getElementById('heartGameScore');
    const heartGameStartBtn = document.getElementById('heartGameStartBtn');
    const heartGameRestartBtn = document.getElementById('heartGameRestartBtn');

    let player = {
        x: canvas.width / 2 - 25,
        y: canvas.height - 60,
        width: 50,
        height: 50,
        speed: 7
    };

    let hearts = [];
    let score = 0;
    let gameInterval;
    let heartSpawnInterval;
    let isGameOver = false;

    // Adjust canvas dimensions for responsiveness
    function resizeCanvas() {
        const gameContainer = canvas.parentElement;
        canvas.width = gameContainer.clientWidth > 600 ? 600 : gameContainer.clientWidth;
        canvas.height = canvas.width * (2/3); // Maintain aspect ratio
        player.x = canvas.width / 2 - player.width / 2; // Recenter player
        player.y = canvas.height - 60; // Adjust player height
        if (isGameOver) drawGameOver(); // Redraw game over screen if applicable
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initial resize

    function drawPlayer() {
        ctx.fillStyle = '#fca5a5'; // Pink player
        ctx.fillRect(player.x, player.y, player.width, player.height);
        ctx.strokeStyle = '#881337';
        ctx.lineWidth = 2;
        ctx.strokeRect(player.x, player.y, player.width, player.height);
    }

    function drawHeart(heart) {
        ctx.font = '30px Poppins'; // Emoji size
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('❤️', heart.x, heart.y);
    }

    function update() {
        if (isGameOver) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

        // Update hearts
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].y += hearts[i].speed;

            // Collision detection (player catches heart)
            if (hearts[i].x < player.x + player.width &&
                hearts[i].x + 20 > player.x && // Approx heart width
                hearts[i].y < player.y + player.height &&
                hearts[i].y + 20 > player.y) { // Approx heart height
                score++;
                hearts.splice(i, 1); // Remove caught heart
                i--;
                heartGameScoreDisplay.textContent = `Score: ${score}`;
            } else if (hearts[i].y > canvas.height) {
                // Heart missed
                hearts.splice(i, 1);
                i--;
                endGame(); // Game over if heart is missed
                return;
            }
        }

        drawPlayer();
        hearts.forEach(drawHeart);
    }

    function spawnHeart() {
        if (isGameOver) return;
        const x = Math.random() * (canvas.width - 30) + 15;
        const speed = Math.random() * 2 + 1; // Random speed
        hearts.push({ x, y: 0, speed });
    }

    function startGame() {
        if (!isGameOver) { // Only start if not already playing
            player.x = canvas.width / 2 - 25;
            player.y = canvas.height - 60;
            hearts = [];
            score = 0;
            heartGameScoreDisplay.textContent = `Score: ${score}`;
            isGameOver = false;

            clearInterval(gameInterval);
            clearInterval(heartSpawnInterval);

            gameInterval = setInterval(update, 1000 / 60); // 60 FPS
            heartSpawnInterval = setInterval(spawnHeart, 1500); // Spawn heart every 1.5 seconds

            heartGameStartBtn.classList.add('hidden');
            heartGameRestartBtn.classList.add('hidden'); // Hide restart button initially
        }
    }

    function endGame() {
        isGameOver = true;
        clearInterval(gameInterval);
        clearInterval(heartSpawnInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGameOver();
        heartGameRestartBtn.classList.remove('hidden'); // Show restart button
    }

    function drawGameOver() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = '40px Great Vibes';
        ctx.fillStyle = '#fca5a5';
        ctx.textAlign = 'center';
        ctx.fillText('Game Over!', canvas.width / 2, canvas.height / 2 - 30);
        ctx.font = '25px Poppins';
        ctx.fillStyle = '#e0f2fe';
        ctx.fillText(`Final Score: ${score}`, canvas.width / 2, canvas.height / 2 + 20);
        ctx.fillText('A heart was missed...', canvas.width / 2, canvas.height / 2 + 60);
    }

    // Keyboard Controls
    document.addEventListener('keydown', (e) => {
        if (isGameOver) return;
        if (e.key === 'ArrowLeft' || e.key === 'a') {
            player.x = Math.max(0, player.x - player.speed);
        } else if (e.key === 'ArrowRight' || e.key === 'd') {
            player.x = Math.min(canvas.width - player.width, player.x + player.speed);
        }
    });

    // Touch Controls (simple left/right halves of screen)
    let touchStartX = 0;
    canvas.addEventListener('touchstart', (e) => {
        if (isGameOver) return;
        touchStartX = e.touches[0].clientX;
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
        if (isGameOver) return;
        e.preventDefault(); // Prevent scrolling
        const touchCurrentX = e.touches[0].clientX;
        const diffX = touchCurrentX - touchStartX;

        if (diffX > 0) { // Moving right
            player.x = Math.min(canvas.width - player.width, player.x + player.speed * (diffX / 50));
        } else if (diffX < 0) { // Moving left
            player.x = Math.max(0, player.x + player.speed * (diffX / 50));
        }
        touchStartX = touchCurrentX; // Update start for continuous movement
    }, { passive: false });

    heartGameStartBtn.addEventListener('click', startGame);
    heartGameRestartBtn.addEventListener('click', startGame); // Restart button also calls startGame
});
