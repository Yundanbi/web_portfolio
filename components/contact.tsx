"use client";

import { Mail, Github, Copy } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "yundanbi40@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[var(--color-section-alt)]">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            연락바랍니다.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6">
          {/* Email */}
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border/60 bg-background/80 shadow-sm hover:shadow-md transition-all">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm md:text-base font-medium">{email}</span>
            <button
              onClick={handleCopy}
              className="ml-auto flex items-center gap-1 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Copy className="w-4 h-4" />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/Yundanbi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border/60 bg-background/80 shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10">
              <Github className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm md:text-base font-medium">
              github.com/Yundanbi
            </span>
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t text-xs md:text-sm text-muted-foreground">
          <p>© 2025 윤단비. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
