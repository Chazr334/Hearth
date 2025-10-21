"use client";

import { FormEvent, useState } from "react";

import { cn } from "@/lib/utils";

type TopicOption = "General" | "Accessibility" | "Media" | "Volunteer";

interface FormState {
  name: string;
  email: string;
  topic: TopicOption;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  topic: "General",
  message: ""
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedMessage = formState.message.trim();

    if (!formState.name.trim()) {
      setError("Please add your name so we know how to greet you.");
      setStatus("error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    if (trimmedMessage.length < 10) {
      setError("Let us know a bit more - messages should be at least 10 characters.");
      setStatus("error");
      return;
    }

    setError(null);
    setStatus("success");
    setFormState(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
      aria-describedby="contact-form-status"
    >
      <div>
        <label className="block text-sm font-semibold uppercase tracking-[0.3em] text-amber">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={(event) =>
            setFormState((prev) => ({ ...prev, name: event.target.value }))
          }
          className="mt-2 w-full rounded border border-amber/30 bg-obsidian/60 px-4 py-3 text-sm text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          autoComplete="name"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold uppercase tracking-[0.3em] text-amber">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={(event) =>
            setFormState((prev) => ({ ...prev, email: event.target.value }))
          }
          className="mt-2 w-full rounded border border-amber/30 bg-obsidian/60 px-4 py-3 text-sm text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          autoComplete="email"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold uppercase tracking-[0.3em] text-amber">
          Topic
        </label>
        <select
          name="topic"
          value={formState.topic}
          onChange={(event) =>
            setFormState((prev) => ({
              ...prev,
              topic: event.target.value as TopicOption
            }))
          }
          className="mt-2 w-full rounded border border-amber/30 bg-obsidian/60 px-4 py-3 text-sm text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
        >
          <option value="General">General question</option>
          <option value="Accessibility">Accessibility support</option>
          <option value="Media">Media / press</option>
          <option value="Volunteer">Volunteer interest</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold uppercase tracking-[0.3em] text-amber">
          Message
        </label>
        <textarea
          name="message"
          value={formState.message}
          onChange={(event) =>
            setFormState((prev) => ({ ...prev, message: event.target.value }))
          }
          className="mt-2 h-32 w-full rounded border border-amber/30 bg-obsidian/60 px-4 py-3 text-sm text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          required
          aria-required="true"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded bg-iron px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-bone transition hover:bg-amber hover:text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
      >
        Send Message
      </button>
      <div
        id="contact-form-status"
        className={cn(
          "text-sm",
          status === "success"
            ? "text-amber"
            : status === "error"
            ? "text-iron"
            : "text-bone/60"
        )}
        role="status"
        aria-live="polite"
      >
        {status === "success" && "Thanks for reaching out. We will respond shortly."}
        {status === "error" && error}
      </div>
    </form>
  );
}
