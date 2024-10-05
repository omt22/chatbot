// script.js
const chatMessages = document.querySelector('.chat-messages');
const userInput = document.querySelector('#user-input');
const sendBtn = document.querySelector('#send-btn');
const micBtn = document.querySelector('#mic-btn');

const faqs = {
    'What are the restaurant timings?': 'Our restaurant timings are from 11am to 11pm.',
    'How to track my food order?': 'You can track your food order by clicking on the "Track Order" button on our website.',
    'How to apply coupon codes?': 'You can apply coupon codes by entering the code in the "Coupon Code" field during checkout.',
    'How to report an issue with my order?': 'You can report an issue with your order by contacting our customer support team.',
    'What is your return policy?': 'You can return or exchange an item within 30 days of purchase.',
    'How do I cancel my order?': 'You can cancel your order by contacting our customer support team.',
    'What is your refund policy?': 'We offer a full refund for cancelled orders.',
    'How do I track my package?': 'You can track your package by clicking on the "Track Package" button on our website.',
    'What is your delivery time?': 'Our delivery time is within 30-60 minutes.',
    'Do you offer any discounts?': 'Yes, we offer various discounts and promotions. Please check our website for more information.',
    'How do I contact customer support?': 'You can contact our customer support team by calling our toll-free number or by sending an email to our support email address.',
    'Hi':'Hellow'
};

sendBtn.addEventListener('click', () => {
    const userQuestion = userInput.value.trim();
    if (userQuestion) {
        const answer = faqs[userQuestion];
        if (answer) {
            const message = `<p>User: ${userQuestion}</p><p>Bot: ${answer}</p>`;
            chatMessages.innerHTML += message;
        } else {
            const message = `<p>User: ${userQuestion}</p><p>Bot: Sorry, I didn't understand your question.</p>`;
            chatMessages.innerHTML += message;
        }
        userInput.value = '';
    }
});

micBtn.addEventListener('click', () => {
    // Add speech recognition functionality here
    console.log('Mic button clicked');
});

// Add event listener to chatMessages to scroll to the bottom when a new message is added
chatMessages.addEventListener('DOMSubtreeModified', () => {
    chatMessages.scrollTop = chatMessages.scrollHeight;
});