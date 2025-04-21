let userName = '';
let currentState = 'main';

function addMessage(message, isBot = true) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isBot ? 'bot-message' : 'user-message'}`;
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function startChat(){
    document.getElementById('main').style.display = 'block';
}

function selectOption(option) {
    // Hide main options first
    document.getElementById('mainOptions').style.display = 'none';
    
    switch (option) {
        case 'investment':
            currentState = 'investment';
            addMessage(`What kind of help do you need, ${userName}?`, true);
            document.getElementById('helpOptions').style.display = 'block';
            break;

        case 'family':
            currentState = 'family';
            addMessage(`What information are you looking for, ${userName}?`, true);
            document.getElementById('infoOptions').style.display = 'block';
            break;

        case 'property':
            currentState = 'property';
            addMessage(`What information are you looking for, ${userName}?`, true);
            document.getElementById('infoOptions').style.display = 'block';
            break;

        case 'retirement':
            currentState = 'retirement';
            addMessage(`What information are you looking for, ${userName}?`, true);
            document.getElementById('infoOptions').style.display = 'block';
            break;

        case 'insurance':
            currentState = 'insurance';
            addMessage(`What information are you looking for, ${userName}?`, true);
            document.getElementById('infoOptions').style.display = 'block';
            break;
    }
}

function selectSecondaryOption(option) {
    const responses = {
        // Help responses
        'technical': `I'll connect you with our technical support team. What specific technical issue are you experiencing?`,
        'account': `I can help you with account-related issues. What's happening with your account?`,
        'general': `I'll be happy to answer your general questions. What would you like to know?`,
        
        // Info responses
        'products': `Here's our product catalog. We offer various solutions including...`,
        'services': `Our services include consulting, implementation, and support...`,
        'pricing': `Our pricing plans start from $X per month. Would you like a detailed breakdown?`
    };

    addMessage(`I'm interested in ${option}`, false);
    addMessage(responses[option], true);
}

function backToMain() {
    // Hide all secondary option areas
    document.getElementById('helpOptions').style.display = 'none';
    document.getElementById('infoOptions').style.display = 'none';
    
    // Show main options
    document.getElementById('mainOptions').style.display = 'block';
    currentState = 'main';
    
    addMessage('What else can I help you with?', true);
}

function endChat() {
    // Hide all option areas
    document.getElementById('mainOptions').style.display = 'none';
    document.getElementById('helpOptions').style.display = 'none';
    document.getElementById('infoOptions').style.display = 'none';
    
    addMessage(`Thank you for chatting with me, ${userName}! Have a great day!`, true);
    
    // Reset button after 2 seconds
    setTimeout(() => {
        document.getElementById('userInputArea').style.display = 'block';
        document.getElementById('userName').value = '';
        document.getElementById('chatBox').innerHTML = '';
        userName = '';
        currentState = 'main';
    }, 2000);
}
