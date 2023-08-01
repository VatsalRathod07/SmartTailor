import React from 'react';

const PricingPage = () => {
    return (
        <section className="pricing-page container px-5 sm:px-10 py-16">
            <h1 className="text-4xl font-bold mb-10 text-center text-black">Our Pricing</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Replace the following placeholder data with your actual pricing information */}
                {pricingData.map((item) => (
                    <div key={item.title} className="pricing-card p-6 bg-white rounded-md">
                        <h2 className="text-2xl font-semibold mb-4 text-black">{item.title}</h2>
                        <p className="text-lg mb-6 text-neutral-700">{item.description}</p>
                        <p className="text-lg text-black">Price: {item.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Replace the placeholder data with your actual pricing information
const pricingData = [
    {
        title: 'Formal Pair',
        description: 'Perfect for formal occasions and events.',
        price: '₹2222',
    },
    {
        title: 'Shirt',
        description: 'Elegant and comfortable shirts for any occasion.',
        price: '₹3024',
    },
    {
        title: 'Pant',
        description: 'Stylish pants that fit well and feel great.',
        price: '₹4163',
    },
    {
        title: 'Trouser',
        description: 'Classic trousers with a modern twist.',
        price: '₹960',
    },
    {
        title: 'Suit',
        description: 'Tailored suits for a sharp and sophisticated look.',
        price: '₹1534',
    },
    {
        title: 'Safari',
        description: 'Adventure-ready safari clothing for the explorer in you.',
        price: '₹2469',
    },
    {
        title: 'Kurta',
        description: 'Traditional kurtas that blend style and comfort.',
        price: '₹3759',
    },
    {
        title: 'Indo-Western',
        description: 'Fusion outfits that combine tradition with modernity.',
        price: '₹2768',
    },
];

export default PricingPage;
