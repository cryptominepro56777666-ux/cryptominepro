function initLibreChat(selector) {
    const container = document.querySelector(selector);
    if (!container) return;

    // Create widget elements
    const widgetHTML = `
        <div id="librechat-widget" style="position: fixed; bottom: 20px; right: 20px; z-index: 1000; font-family: Arial, sans-serif;">
            <div id="librechat-bubble" style="width: 60px; height: 60px; background: linear-gradient(135deg, #06b6d4, #4f46e5); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                <span style="color: white; font-size: 24px;">🤖</span>
            </div>
            <div id="librechat-panel" style="display: none; position: absolute; bottom: 80px; right: 0; width: 350px; height: 500px; background: white; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.3); overflow: hidden;">
                <div style="background: linear-gradient(135deg, #06b6d4, #4f46e5); color: white; padding: 15px; font-weight: bold;">AI Assistant</div>
                <div id="librechat-messages" style="height: 380px; overflow-y: auto; padding: 15px; background: #f9f9f9;">
                    <div style="margin-bottom: 10px;"><strong>AI:</strong> Hello! How can I help you today?</div>
                </div>
                <div style="padding: 15px; border-top: 1px solid #eee;">
                    <input id="librechat-input" type="text" placeholder="Type your message..." style="width: 70%; padding: 8px; border: 1px solid #ccc; border-radius: 5px;">
                    <button id="librechat-send" style="width: 25%; padding: 8px; background: linear-gradient(135deg, #06b6d4, #4f46e5); color: white; border: none; border-radius: 5px; cursor: pointer; margin-left: 5px;">Send</button>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = widgetHTML;

    const bubble = document.getElementById('librechat-bubble');
    const panel = document.getElementById('librechat-panel');
    const messages = document.getElementById('librechat-messages');
    const input = document.getElementById('librechat-input');
    const send = document.getElementById('librechat-send');

    // Toggle panel
    bubble.addEventListener('click', () => {
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    });

    // Send message
    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;

        // Add user message
        messages.innerHTML += `<div style="margin-bottom: 10px; text-align: right;"><strong>You:</strong> ${text}</div>`;
        input.value = '';

        // Generate response
        setTimeout(() => {
            const response = getResponse(text.toLowerCase());
            messages.innerHTML += `<div style="margin-bottom: 10px;"><strong>AI:</strong> ${response}</div>`;
            messages.scrollTop = messages.scrollHeight;
        }, 500);
    }

    send.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function getResponse(message) {
        if (message.includes('usdt') || message.includes('payment') || message.includes('pay')) {
            return 'We accept USDT payments via TRC20 only. Please send to our wallet address: [TRC20 Address Here].';
        } else if (message.includes('invoice')) {
            return 'To get an invoice, please send your payment details to support@cryptominepro.com.';
        } else if (message.includes('support') || message.includes('help')) {
            return 'For support, email us at support@cryptominepro.com.';
        } else if (message.includes('plan') || message.includes('pricing') || message.includes('price')) {
            return 'Check our plans: Basic ($50/month), Standard ($150/month), Premium ($300/month). Visit the Plans section for details.';
        } else if (message.includes('office') || message.includes('location')) {
            return 'Our offices: Dubai (HQ), Oslo (corporate).';
        } else {
            return 'I\'m here to help with payments, invoices, support, plans, and locations. What else can I assist with?';
        }
    }
}
