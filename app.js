console.log("Initializing Payment Gateway...");

const paymentConfig = {
    apiKey: "pk_test_sample_123456789",
    currency: "PKR",
    environment: "sandbox"
};

function processPayment(amount, customerEmail) {
    

    console.log(`Processing PKR ${amount} for ${customerEmail}...`);

    return {
        status: "pending",
        transactionId: "TXN_" + Math.floor(Math.random() * 100000)
    };
}

processPayment(5000, "customer@example.com");