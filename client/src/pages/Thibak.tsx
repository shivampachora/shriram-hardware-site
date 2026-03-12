import { useState } from "react";
import { Droplets, CheckCircle, Phone, Send, ChevronDown } from "lucide-react";

const WA_NUMBER = "918329088881";
const CALL_NUMBER = "9403514471";

const VILLAGES = [
  "Akhatwade",
  "Anturli Bk Pr Pachora",
  "Anturli Kh Pr Lohare",
  "Anturli Kh Pr Pachora",
  "Balwade",
  "Bhadgaon (Part)",
  "Devgaon",
  "Kasampura",
  "Sarole Bk",
  "Sarole Kh",
  "Sarve Bk Pr Bhadgaon",
  "Sarve Bk Pr Lohare",
  "Sarve Bk Pr Pachora",
  "Sarve Kh Pr Bhadgaon",
  "Satgaon",
  "Sawkhede Bk",
  "Sawkhede Kh",
  "Shahapure",
  "Shewale",
  "Shindad",
  "Takali Bk",
  "Tarkhede Bk",
  "Tarkhede Kh",
  "Vadgaon Ambe",
  "Vadgaon Ambe Bk",
  "Vadgaon Ambe Kh",
  "Vadgaon Aseri",
  "Vadgaon Bk Pr Pachora",
  "Vadgaon Joge",
  "Vadgaon Kh Pr Bhadgaon",
  "Vadgaon Kh Pr Pachora",
  "Vadgaon Mulane",
  "Vadgaon Tek",
  "Vadgaonkade",
  "Vanegaon",
  "Varasade Pr Bornar",
  "Varasade Pr Pachora",
  "Varkhedi Bk",
  "Varkhedi Kh",
  "Veruli Bk",
  "Veruli Kh",
  "Vishnunagar",
  "Wadi",
  "Waghulkhede",
];

const BENEFITS = [
  "Guidance for drip irrigation scheme",
  "Help understanding eligibility",
  "Support in selecting correct equipment",
  "Assistance through the entire process",
];

export default function Thibak() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [village, setVillage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; mobile?: string; village?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Please enter your full name";
    if (!mobile.trim() || !/^[6-9]\d{9}$/.test(mobile.trim()))
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    if (!village) newErrors.village = "Please select your village";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = encodeURIComponent(
      `Hello Shriram Hardware,\n\nI want to apply for the Thibak (Drip Irrigation) scheme.\n\nName: ${name.trim()}\nVillage: ${village}\nMobile Number: ${mobile.trim()}\n\nPlease guide me about the process.`
    );

    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, "_blank");
    }, 600);
  };

  return (
    <div className="w-full">

      {/* ── Hero ── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/8 to-white border-b border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 mb-8">
            <Droplets className="w-10 h-10 text-primary" />
          </div>

          <p
            className="text-sm font-semibold tracking-widest uppercase text-primary mb-4"
            data-testid="text-thibak-tag"
          >
            Drip Irrigation
          </p>

          <h1
            className="text-4xl md:text-6xl font-black text-foreground leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
            data-testid="text-thibak-title"
          >
            Apply for Thibak<br className="hidden md:block" />
            <span className="text-primary">(Drip Irrigation) Guidance</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-thibak-subtitle">
            We help farmers understand and apply for the Thibak (drip irrigation) scheme. Fill the details below and our team will guide you.
          </p>
        </div>
      </section>

      {/* ── Benefits + Form ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — Info */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-black text-foreground mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                How We Help You
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Shriram Hardware Pachora guides farmers through the complete Thibak (drip irrigation) process — from understanding the scheme to getting the right equipment installed.
              </p>

              <div className="space-y-5 mb-12">
                {BENEFITS.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground font-medium text-lg">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* Call us strip */}
              <div className="flex items-center gap-4 bg-secondary/50 rounded-2xl p-5 border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Prefer a call? Reach us at</p>
                  <a
                    href={`tel:+91${CALL_NUMBER}`}
                    className="text-xl font-black text-primary hover:underline"
                    data-testid="link-thibak-call"
                  >
                    {CALL_NUMBER}
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Form Card */}
            <div
              className="bg-white rounded-3xl shadow-2xl shadow-foreground/8 border border-border/60 p-8 md:p-10"
              data-testid="card-thibak-form"
            >
              <div className="mb-8">
                <h3
                  className="text-2xl font-black text-foreground mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Apply for Thibak
                </h3>
                <p className="text-muted-foreground">
                  Fill in your details and we'll reach out via WhatsApp.
                </p>
              </div>

              {submitted ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center py-12 text-center gap-5">
                  <div className="w-20 h-20 rounded-full bg-[#25D366]/15 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-[#25D366]" />
                  </div>
                  <p
                    className="text-xl font-bold text-foreground"
                    data-testid="text-thibak-success"
                  >
                    Opening WhatsApp to send your application.
                  </p>
                  <p className="text-muted-foreground">
                    If WhatsApp didn't open,{" "}
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-primary underline font-semibold"
                    >
                      try again
                    </button>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="thibak-name">
                      Full Name
                    </label>
                    <input
                      id="thibak-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      className={`w-full rounded-2xl border px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/30 focus:border-primary bg-secondary/30 ${
                        errors.name ? "border-red-400" : "border-border/60"
                      }`}
                      data-testid="input-thibak-name"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-sm text-red-500 font-medium" data-testid="error-thibak-name">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="thibak-mobile">
                      Mobile Number
                    </label>
                    <input
                      id="thibak-mobile"
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      value={mobile}
                      onChange={(e) => {
                        setMobile(e.target.value.replace(/\D/g, "").slice(0, 10));
                        if (errors.mobile) setErrors((prev) => ({ ...prev, mobile: undefined }));
                      }}
                      inputMode="numeric"
                      maxLength={10}
                      className={`w-full rounded-2xl border px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/30 focus:border-primary bg-secondary/30 ${
                        errors.mobile ? "border-red-400" : "border-border/60"
                      }`}
                      data-testid="input-thibak-mobile"
                    />
                    {errors.mobile && (
                      <p className="mt-1.5 text-sm text-red-500 font-medium" data-testid="error-thibak-mobile">
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  {/* Village dropdown */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="thibak-village">
                      Village
                    </label>
                    <div className="relative">
                      <select
                        id="thibak-village"
                        value={village}
                        onChange={(e) => {
                          setVillage(e.target.value);
                          if (errors.village) setErrors((prev) => ({ ...prev, village: undefined }));
                        }}
                        className={`w-full appearance-none rounded-2xl border px-5 py-4 text-base text-foreground outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/30 focus:border-primary bg-secondary/30 pr-12 cursor-pointer ${
                          errors.village ? "border-red-400" : "border-border/60"
                        } ${!village ? "text-muted-foreground/60" : "text-foreground"}`}
                        data-testid="select-thibak-village"
                      >
                        <option value="" disabled>
                          Select your village
                        </option>
                        {VILLAGES.map((v) => (
                          <option key={v} value={v}>
                            {v}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    </div>
                    {errors.village && (
                      <p className="mt-1.5 text-sm text-red-500 font-medium" data-testid="error-thibak-village">
                        {errors.village}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] text-white font-bold py-5 px-6 rounded-2xl text-lg shadow-xl shadow-[#25D366]/25 transition-all duration-300 mt-2"
                    data-testid="button-thibak-submit"
                  >
                    <Send className="w-5 h-5" />
                    Send Application via WhatsApp
                  </button>

                  <p className="text-center text-sm text-muted-foreground pt-1">
                    Your details will be sent directly to our WhatsApp.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Droplets className="w-14 h-14 text-white/30 mx-auto mb-6" />
          <h2
            className="text-3xl md:text-4xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Save Water. Grow More.
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Drip irrigation helps farmers save up to 70% water while improving crop yield. Start your application today.
          </p>
          <a
            href={`tel:+91${CALL_NUMBER}`}
            className="inline-flex items-center gap-3 bg-white text-primary hover:bg-white/95 font-bold px-10 py-5 rounded-2xl text-lg transition-all duration-300 active:scale-95 shadow-2xl"
            data-testid="link-thibak-cta-call"
          >
            <Phone className="w-5 h-5 fill-current" />
            Call: {CALL_NUMBER}
          </a>
        </div>
      </section>

    </div>
  );
}
