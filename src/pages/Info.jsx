import React from "react";

const Info = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-semibold text-center mb-6">About Us</h1>

      <section className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <img
          src="https://st3.depositphotos.com/1092019/15323/i/450/depositphotos_153233456-stock-photo-who-we-are-concept-on.jpg"
          alt=""
        />
        <p className="text-gray-700">
          Welcome to our online store! We are a dedicated team focused on
          offering the best products to meet your needs. Our mission is to
          provide you with high-quality products and exceptional customer
          service.
        </p>
      </section>

      <section className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <img
          src="https://cdn.corporatefinanceinstitute.com/assets/product-mix3.jpeg"
          alt=""
        />
        <p className="text-gray-700">
          Our mission is to make shopping simple, affordable, and enjoyable. We
          strive to offer a wide range of products from trusted brands at great
          prices. We are constantly improving our services to make sure your
          shopping experience is outstanding.
        </p>
      </section>

      <section className="bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <img
          src="https://www.bapcor.com.au/uploads/content/bapcor_value_1.png"
          alt=""
        />
        <ul className="list-disc list-inside text-gray-700">
          <li>Quality: We only offer the best products to our customers.</li>
          <li>
            Customer Satisfaction: We prioritize your happiness and
            satisfaction.
          </li>
          <li>Innovation: We are constantly improving to meet your needs.</li>
          <li>
            Integrity: We are transparent and honest in all our business
            dealings.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Info;
