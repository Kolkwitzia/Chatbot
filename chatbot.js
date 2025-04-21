let userName = '';
let currentState = 'mainMenu';

const flow = {
    mainMenu: {
        prompt: "Hello, is there anything I can help you with?",
        options: {
            'Family': 'familyMenu',
            'Property': 'propertyMenu',
            'Investment': 'investmentMenu',
            'Retirement': 'retirementMenu',
            'Insurance': 'insuranceMenu'
        }
    },
    familyMenu: {
        prompt: "Our team is here to help with whatever stage of life you're planning for — just let us know what you'd like to explore first.",
        options: {
            'Marriage': 'lifeEventMenu',
            'Children': 'lifeEventMenu',
            'New Business': 'lifeEventMenu',
            'Home': 'propertyMenu'
        }
    },
    lifeEventMenu: {
        prompt: "Great choice — this is a big life moment. Book an appointment with one of our advisers!",
        options: {
            'Back to start': 'mainMenu',
            'Book an appointment': 'Form'
        }
    },
    propertyMenu: {
        prompt: "Whether you're just getting started or looking to grow, our team is here to support your property goals.",
        options: {
            'Investment Property': 'propertyInvestment',
            'First Home': 'firstHome'
        }
    },
    propertyInvestment: {
        prompt: "Looking into property investment? Let's lock in a time to talk!",
        options: {
            'Back to start': 'mainMenu',
            'Book an appointment': 'Form'
        }
    },
    firstHome: {
        prompt: "Exciting times! Buying your first home is a big step!",
        options: {
            'Back to start': 'mainMenu',
            'Book an appointment': 'Form'
        }
    },
    investmentMenu: {
        prompt: "Ready to make your money work for you?",
        options: {
            'Property': 'propertyMenu',
            'KiwiSaver': 'kiwiSaverMenu'
        }
    },
    kiwiSaverMenu: {
        prompt: "KiwiSaver isn’t one-size-fits-all. Choose what you'd like to look into.",
        options: {
            'Provider': 'kiwiSaverProvider',
            'Type': 'kiwiSaverType',
            'Performance': 'kiwiSaverPerformance',
            'PIR': 'kiwiSaverPIR'
        }
    },
    kiwiSaverProvider: {
        prompt: "Choosing the right KiwiSaver provider can really pay off.",
        options: {
            'Back to start': 'mainMenu',
            'Book an appointment': 'Form'
        }
    },
    kiwiSaverType: {
        prompt: "Not sure which KiwiSaver fund type is right for you?",
        options: {
            'Back to start': 'mainMenu',
            'Book an appointment': 'Form'
        }
    },
    kiwiSaverPerformance: {
        prompt: "Curious about how your KiwiSaver’s performing?",
        options: {
            'Back to start': 'mainMenu',
            'Book an appointment': 'Form'
        }
    },
    kiwiSaverPIR: {
        prompt: "Choosing the right PIR helps you keep more of your returns.",
        options: {
            'Back to start': 'mainMenu',
            'Book an appointment': 'Form'
        }
    },
    retirementMenu: {
        prompt: "Retirement looks different for everyone. Pick the area you'd like to focus on.",
        options: {
            'Investment': 'investmentMenu',
            'Plan': 'retirementPlan'
        }
    },
    retirementPlan: {
        prompt: "It’s never too early or too late to make a retirement plan.",
        options: {
            'Back to start': 'mainMenu',
            'Book an appointment': 'Form'
        }
    },
    insuranceMenu: {
        prompt: "When it comes to protecting what matters most, our team’s got you covered.",
        options: {
            'Trauma': 'traumaInsurance',
            'Health': 'healthInsurance',
            'Business': 'businessInsurance',
            'Life': 'lifeInsurance',
            'Income Protection': 'incomeProtectionInsurance',
            'Redundancy': 'redundancyInsurance'
        }
    },
    traumaInsurance: {
        prompt: "Trauma cover offers serious protection for tough times.",
        options: {
            'Back to start': 'mainMenu',
            'Book an appointment': 'Form'
        }
    },
    healthInsurance: {
        prompt: "Want to explore your health insurance options?",
        options: {
            'Back to start': 'mainMenu',
            'Book an appointment': 'Form'
        }
    },
    businessInsurance: {
        prompt: "Your business deserves solid protection.",
        options: {
            'Back to start': 'mainMenu',
            'Book an appointment': 'Form'
        }
    },
    lifeInsurance: {
        prompt: "Life insurance helps you look after the people who matter most.",
        options: {
            'Back to start': 'mainMenu',
            'Book an appointment': 'Form'
        }
    },
    incomeProtectionInsurance: {
        prompt: "Thinking about income protection?",
        options: {
            'Back to start': 'mainMenu',
            'Book an appointment': 'Form'
        }
    },
    redundancyInsurance: {
        prompt: "Redundancy cover offers peace of mind.",
        options: {
            'Back to start': 'mainMenu',
            'Book an appointment': 'Form'
        }
    }
};

function addMessage(message, isBot = true) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isBot ? 'bot-message' : 'user-message'}`;
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function startChat() {
    document.getElementById('main').style.display = 'block';
    showState(currentState);
}

function showState(stateId) {
    const state = flow[stateId];
    addMessage(state.prompt, true);

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    for (const [optionText, nextState] of Object.entries(state.options)) {
        const button = document.createElement('button');
        button.textContent = optionText;
        button.onclick = () => selectOption(optionText);
        optionsDiv.appendChild(button);
    }
}

function selectOption(optionText) {
    const nextState = flow[currentState].options[optionText];

    if (nextState === 'Form') {
        addMessage(`Please fill out this form: [Link to form]`, true);
        setTimeout(() => backToMain(), 3000);
    } else {
        addMessage(`I chose: ${optionText}`, false);
        currentState = nextState;
        showState(currentState);
    }
}

function backToMain() {
    currentState = 'mainMenu';
    showState(currentState);
}
