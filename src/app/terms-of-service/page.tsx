"use client";

import PageHeader from "@/components/PageHeader";

const TermsOfService = () => {
    return (
        <div className="min-h-screen pb-24">
            <PageHeader
                title="Terms of Service"
                description="Please read these terms carefully before using our dispatching services."
            />

            <div className="container mx-auto px-4 mt-16 max-w-4xl">
                <div className="bg-white dark:bg-secondary/40 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800 space-y-8 text-gray-700 dark:text-gray-300">
                    <section>
                        <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">1. Acceptance of Terms</h2>
                        <p className="leading-relaxed">
                            By accessing or using the services provided by AXE Dispatch LLC ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">2. Services Description</h2>
                        <p className="leading-relaxed">
                            AXE Dispatch LLC provides professional truck dispatching services, including load matching, broker credit checks, administrative support, and route optimization. We act as an agent for the carrier to secure freight and streamline logistics operations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">3. Carrier Obligations</h2>
                        <p className="leading-relaxed">
                            Carriers using our services must maintain active authority, valid insurance, and comply with all Department of Transportation (DOT) regulations. The carrier is responsible for the actual transportation of goods and all related safety requirements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">4. Payment and Fees</h2>
                        <p className="leading-relaxed">
                            Dispatching fees are agreed upon prior to the commencement of services. Carriers are responsible for timely payment of fees as outlined in their service agreement. We do not handle the direct payment for freight; that remains between the carrier and the broker/shipper.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">5. Limitation of Liability</h2>
                        <p className="leading-relaxed">
                            AXE Dispatch LLC is not responsible for any delays, damage to cargo, or disputes between the carrier and the broker/shipper. Our liability is limited specifically to the dispatching services provided.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">6. Governing Law</h2>
                        <p className="leading-relaxed">
                            These terms shall be governed by and construed in accordance with the laws of the State of Wyoming, without regard to its conflict of law principles.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">7. Contact Information</h2>
                        <p className="leading-relaxed">
                            For any questions regarding these terms, please contact:
                        </p>
                        <div className="mt-4 p-6 bg-accent/50 dark:bg-gray-900 rounded-2xl">
                            <p className="font-bold">AXE Dispatch LLC</p>
                            <p>30 N Gould St Ste R Sheridan, WY 82801, USA</p>
                            <p>Email: axedispatchllc@gmail.com</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
