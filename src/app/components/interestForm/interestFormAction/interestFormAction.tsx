"use client";
import "./interestFormAction.css";
import { FormEvent, useState } from "react";

export default function InterestFormAction() {
  const [activeTab, setActiveTab] = useState("buy");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = "Name is required.";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    if (!quantity.trim()) {
      newErrors.quantity = "Quantity is required.";
    } else if (parseInt(quantity) <= 0) {
      newErrors.quantity = "Quantity must be a positive number.";
    }

    if (message.length > 5000) {
      newErrors.message = "Message cannot exceed 5000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    const form = {
      name,
      email,
      phone,
      quantity,
      message,
      activeTab,
    };

    try {
      const response = await fetch("/api/interestForm", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const content = await response.json();
      console.log(content);
      alert(content.data.tableRange);

      setName("");
      setEmail("");
      setPhone("");
      setQuantity("");
      setMessage("");
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an issue submitting the form. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex tabs-menu">
        <div className="tabs-container">
          <div
            className={`tab ${activeTab === "buy" ? "active-tab" : ""}`}
            onClick={() => handleTabClick("buy")}
          >
            Buy
          </div>
          <div
            className={`tab ${activeTab === "sell" ? "active-tab" : ""}`}
            onClick={() => handleTabClick("sell")}
          >
            Sell
          </div>
        </div>
      </div>

      <div className="form-action-container">
        <div className="h5">A close up of a flag with a lion on it</div>
        <div className="sec-text">
          {activeTab === "buy" ? "₹ 188" : "*Best In Industry"}
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              id="name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              id="email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 0816325794"
              id="phone"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Quantity"
              id="quantity"
            />
            {errors.quantity && (
              <span className="error">{errors.quantity}</span>
            )}
          </div>

          <div>
            <textarea
              maxLength={5000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              id="message"
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <div>
            <button type="submit" className="buy-btn">
              {activeTab === "buy" ? "Buy" : "Sell"}
            </button>
          </div>

          <div>
            <button type="button" className="connect-btn">
              <div className="flex justify-center gap-2 place-items-center">
                <img
                  className="whatsapp-img"
                  src="https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/678b78d87140ff853f2c831c_whatsapp-logo-webflow-cloneable-template-brix-templates.svg"
                  alt="WhatsApp"
                />
                <div>Get Connected Now</div>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
