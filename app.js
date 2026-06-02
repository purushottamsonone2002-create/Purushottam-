// System Data Registry Models
let dbOrders = JSON.parse(localStorage.getItem('db_orders_mvp')) || [
    { order_id: "HM1041", name: "Rahul", product: "Temple Design (Single Side)", color: "Saffron", size: "L", order_status: "Printing", price: 149, duration: 5 },
    { order_id: "HM1042", name: "Amit", product: "Custom Design (Single Side)", color: "White", size: "M", order_status: "Waiting in Queue", price: 199, duration: 10 }
];

let activeProduct = { name: "Blank T-Shirt", price: 99, duration: 2 };
let selectedColor = "Saffron";
let selectedSize = "M";
let userCalculatedDistance = 2.5;
let currentOrderToken = null;

function routeTo(viewId, tabRef) {
    document.querySelectorAll('.view-container').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    if(tabRef) tabRef.classList.add('active');
}

function requestOtpNode() {
    if(document.getElementById('auth-phone').value.length < 10) { 
        alert("Enter valid phone sequence."); 
        return; 
    }
    document.getElementById('otp-area').style.display = "block";
}

function authenticateUserSession() {
    document.getElementById('view-auth').classList.remove('active');
    document.getElementById('view-home').classList.add('active');
    document.getElementById('sticky-app-nav').style.display = "flex";
    saveStateAndRefresh();
}

function loadProductConfigurator(name, price, duration, icon) {
    activeProduct = { name, price, duration };
    document.getElementById('product-display-title').innerText = `${name} — ₹${price}`;
    
    let customBox = document.getElementById('custom-assets-area');
    let cashOpt = document.getElementById('cash-payment-node');
    let paySelect = document.getElementById('payment-selection');

    if(name.includes("Custom")) {
        customBox.style.display = "block";
        cashOpt.disabled = true;
        paySelect.value = "UPI";
    } else {
        customBox.style.display = "none";
        cashOpt.disabled = false;
    }

    routeTo('view-config', document.querySelectorAll('.nav-tab')[1]);
}

function setColorValue(el, color) {
    document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    selectedColor = color;
}

function setSizeValue(el, size) {
    document.querySelectorAll('.size-chip').forEach(s => s.classList.remove('active'));
    el.classList.add('active');
    selectedSize = size;
}

function calculateGpsDistance() {
    // Mocking GPS response safely within 0-80 KM rule matrix definitions
    userCalculatedDistance = (Math.random() * 45).toFixed(1);
    let feedbackNode = document.getElementById('distance-tracker-feedback');
    feedbackNode.innerText = `Detected Distance: ${userCalculatedDistance} KM from Jam Sawali.`;
    feedbackNode.style.color = "var(--green)";

    let shipSelect = document.getElementById('shipping-selection');
    let wrapper = document.getElementById('shipping-container');
    shipSelect.innerHTML = "";
    wrapper.style.display = "block";

    let dist = parseFloat(userCalculatedDistance);
    if(dist <= 4.0) {
        shipSelect.innerHTML += `<option value="Express">Same Day Express Printing Delivery</option>`;
        shipSelect.innerHTML += `<option value="Pickup">Counter Pickup At Shop</option>`;
    } else if(dist <= 40.0) {
        shipSelect.innerHTML += `<option value="Local">Local Delivery Hub</option>`;
        shipSelect.innerHTML += `<option value="Pickup">Counter Pickup At Shop</option>`;
    } else if(dist <= 80.0) {
        shipSelect.innerHTML += `<option value="Pickup">Counter Pickup Preferred</option>`;
    } else {
        shipSelect.innerHTML += `<option value="Blocked" disabled selected>Service Not Available (>80 KM)</option>`;
        alert("Service Not Available Outside 80KM.");
        document.getElementById('final-submit-btn').disabled = true;
        return;
    }
    document.getElementById('final-submit-btn').disabled = false;
}

function commitOrderToQueue() {
    let tokenStr = "HM" + Math.floor(1043 + Math.random() * 8000);
    let newOrder = {
        order_id: tokenStr,
        name: "Pilgrim",
        product: activeProduct.name,
        color: selectedColor,
        size: selectedSize,
        order_status: "Waiting in Queue",
        price: activeProduct.price,
        duration: activeProduct.duration,
        timestamp: Date.now()
    };

    dbOrders.push(newOrder);
    currentOrderToken = tokenStr;
    saveStateAndRefresh();

    document.getElementById('live-token-label').innerText = `#${tokenStr}`;
    routeTo('view-tracking', document.querySelectorAll('.nav-tab')[2]);
    initializeProcessingLoop(tokenStr);
}

function saveStateAndRefresh() {
    localStorage.setItem('db_orders_mvp', JSON.stringify(dbOrders));
    renderAdminConsole();
    refreshCustomerLiveTicket();
}

function refreshCustomerLiveTicket() {
    if(dbOrders.length === 0) return;
    
    let currentActiveItem = dbOrders[dbOrders.length - 1];
    let ordersAhead = dbOrders.filter(o => o.order_status === "Waiting in Queue" && o.order_id !== currentActiveItem.order_id).length;
    let estimatedWait = ordersAhead * 3 + currentActiveItem.duration;

    document.getElementById('live-token-label').innerText = `#${currentActiveItem.order_id}`;
    document.getElementById('live-status-label').innerText = currentActiveItem.order_status;
    document.getElementById('live-ahead-label').innerText = ordersAhead;
    document.getElementById('live-wait-label').innerText = `${estimatedWait} Mins`;
}

function renderAdminConsole() {
    let totalRevenue = dbOrders.reduce((sum, order) => sum + order.price, 0);
    let activeCount = dbOrders.filter(o => o.order_status !== "Completed").length;

    document.getElementById('adm-rev-val').innerText = `₹${totalRevenue}`;
    document.getElementById('adm-count-val').innerText = activeCount;

    let queueContainer = document.getElementById('admin-queue-container');
    queueContainer.innerHTML = "";

    dbOrders.forEach(order => {
        if(order.order_status !== "Completed") {
            let queueItem = document.createElement('div');
            queueItem.className = 'queue-item';
            queueItem.innerHTML = `
                <strong>${order.order_id}</strong> - ${order.product} (${order.color}, ${order.size}) - ₹${order.price}
                <br><small>${order.order_status}</small>
            `;
            queueContainer.appendChild(queueItem);
        }
    });
}

function initializeProcessingLoop(tokenStr) {
    let order = dbOrders.find(o => o.order_id === tokenStr);
    if(!order) return;

    setTimeout(() => {
        order.order_status = "Printing";
        saveStateAndRefresh();
        refreshCustomerLiveTicket();
    }, 3000);

    setTimeout(() => {
        order.order_status = "Ready for Pickup";
        saveStateAndRefresh();
        refreshCustomerLiveTicket();
    }, 8000);
}

// Initialize on page load
window.addEventListener('load', () => {
    renderAdminConsole();
});