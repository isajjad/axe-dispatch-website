import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block bg-white p-2 rounded-lg">
                            <Image
                                src="/logo.png"
                                alt="AXE Dispatch Logo"
                                width={150}
                                height={40}
                                className="h-8 w-auto"
                            />
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Professional dispatch services tailored for your growth. We connect carriers with top-paying loads across the nation.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                                <Instagram size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Our Services</h3>
                        <ul className="space-y-4">
                            <li className="text-gray-400">Truck Dispatching</li>
                            <li className="text-gray-400">Load Matching</li>
                            <li className="text-gray-400">Billing & Paperwork</li>
                            <li className="text-gray-400">Route Optimization</li>
                            <li className="text-gray-400">Broker Credit Checks</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary" size={20} />
                                <Link href="tel:+13079982087" className="text-gray-400 hover:text-white transition-colors">
                                    +1 (307) 998-2087
                                </Link>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary" size={20} />
                                <Link href="mailto:axedispatchllc@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                    axedispatchllc@gmail.com
                                </Link>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary shrink-0" size={20} />
                                <span className="text-gray-400">
                                    Wyoming, USA
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} AXE Dispatch. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link href="#" className="text-gray-500 hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="text-gray-500 hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
