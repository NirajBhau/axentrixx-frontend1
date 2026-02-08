import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function FoundersSection() {
    const founders = [
        {
            name: "Niraj Patil",
            role: "Founder & CEO",
            description: "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
            image: "https://ui-avatars.com/api/?name=Niraj+Patil&size=600&background=random&color=fff&bold=true&font-size=0.35",
            ringColor: "border-blue-500",
            barColor: "bg-blue-500",
            socials: [
                { icon: Facebook, link: "#" },
                { icon: Twitter, link: "#" },
                                </p >
                            </div >

        {/* Social Icons Bar - Full Width Colored Bar */ }
        < div className = {`${founder.barColor} py-5 flex justify-center gap-6`
}>
{
    founder.socials.map((social, idx) => (
        <a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-100 transition-colors duration-200"
            aria-label={social.icon.name}
        >
            <social.icon size={24} strokeWidth={2} />
        </a>
    ))
}
                            </div >
                        </div >
                    ))}
                </div >
            </div >
        </section >
    );
}
