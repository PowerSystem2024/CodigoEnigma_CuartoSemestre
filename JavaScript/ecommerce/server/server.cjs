const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
const path = require("path");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "TEST-1837951365068322-090822-aec8c88b1aa66ce2c8bbc64ea655d76d-572466616",
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client")));
app.use(cors());
app.get("/", function () {
	path.resolve(__dirname, "client", "index.html")   // en el video puse client y desp index yo no lo puse ya que no tengo la carpeta client
});

app.post("/create_preference", async (req, res) => {
	try {
		console.log("Received request body:", req.body);
		
		const preferenceData = {
			items: [
				{
					title: req.body.description,
					unit_price: Number(req.body.price),
					quantity: Number(req.body.quantity),
				}
			],
			back_urls: {
				"success": "http://localhost:8080",
				"failure": "http://localhost:8080/feedback",
				"pending": "http://localhost:8080/feedback"
			},
		};

		console.log("Creating preference with data:", preferenceData);
		
		const response = await mercadopago.preferences.create(preferenceData);
		console.log("Preference created successfully:", response.body.id);
		
		res.json({
			id: response.body.id
		});
	} catch (error) {
		console.log("Error creating preference:", error);
		res.status(500).json({
			error: "Error creating preference",
			details: error.message
		});
	}
});

app.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

app.listen(8080, () => {
	console.log("The server is now running on Port 8080");
});