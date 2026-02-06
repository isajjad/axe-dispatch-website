"use client";

import PageHeader from "@/components/PageHeader";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen pb-24">
            <PageHeader
                title="Privacy Policy"
                description="Your privacy is important to us. Learn how we handle and protect your information."
            />

            <div className="container mx-auto px-4 mt-16 max-w-4xl">
                <div className="bg-white dark:bg-secondary/40 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800 space-y-8 text-gray-700 dark:text-gray-300">
                    <section>
                        <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">1. Information We Collect</h2>
                        <p className="leading-relaxed">
                            We collect information that you provide directly to us through our contact forms, service applications, and communication channels. This may include your name, email address, phone number, company name, and details about your trucking operations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">2. How We Use Your Information</h2>
                        <p className="leading-relaxed">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                            <li>Provide, maintain, and improve our dispatch services.</li>
                            <li>Communicate with you regarding loads, brokers, and administrative tasks.</li>
                            <li>Respond to your inquiries and support requests.</li>
                            <li>Send you relevant updates and industry insights.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">3. Data Security</h2>
                        <p className="leading-relaxed">
                            We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">4. Sharing of Information</h2>
                        <p className="leading-relaxed">
                            We do not sell your personal information. We may share information with brokers, shippers, and administrative partners only as necessary to provide our dispatching services and fulfill your logistical requirements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">5. Contact Us</h2>
                        <p className="leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <div className="mt-4 p-6 bg-accent/50 dark:bg-gray-900 rounded-2xl">
                            <p className="font-bold">AXE Dispatch LLC</p>
                            <p>Email: info@axedispatch.com</p>
                            <p>Address: 30 N Gould St Ste R Sheridan, WY 82801, USA</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
