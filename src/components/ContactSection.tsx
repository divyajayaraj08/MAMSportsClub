import { Phone, MapPin, Instagram, MessageCircle } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <img
        src={contactBg}
        alt="Modern sports training facility exterior"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-muted/85" />
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <p className="text-secondary font-heading tracking-[0.2em] text-sm mb-2">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
            Contact <span className="text-gradient-primary">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-heading text-foreground font-semibold">Phone</p>
                <p className="text-muted-foreground text-sm">+91 XXXXX XXXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-heading text-foreground font-semibold">WhatsApp</p>
                <p className="text-muted-foreground text-sm">Chat with us instantly</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-heading text-foreground font-semibold">Location</p>
                <p className="text-muted-foreground text-sm">Your training centre address here</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Instagram className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-heading text-foreground font-semibold">Instagram</p>
                <p className="text-muted-foreground text-sm">@mamsc_wushu</p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-video bg-card/80 backdrop-blur-sm border border-border rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground text-sm font-heading">📍 Map Placeholder</p>
            </div>
          </div>

          {/* Enquiry Form */}
          <form
            action="https://formsubmit.co/wushukungfufitnesscenter@gmail.com"
            method="POST"
            className="space-y-4 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Student Application - MAM Sports Club" />
            <input type="hidden" name="_next" value="http://localhost:8080" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="text"
              name="age"
              placeholder="Age"
              className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md font-heading font-semibold tracking-wider bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
            >
              SEND ENQUIRY
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
