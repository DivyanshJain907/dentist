"use client";

import { Send } from "lucide-react";
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submitMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setStatus("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setIsSending(false);

    if (!response.ok) {
      const body = (await response.json()) as { message?: string };
      setStatus(body.message || "Could not send message.");
      return;
    }

    setForm(initialForm);
    setStatus("Message sent. The clinic team will see it in admin.");
  }

  return (
    <form
      onSubmit={submitMessage}
      className="rounded-3xl border border-[#dce9e6] bg-white p-5 shadow-[0_22px_60px_rgba(36,63,58,0.12)] md:p-7"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0d766d]">
            Appointment request
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            Send a message
          </h2>
        </div>
        <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e7f6f3] text-[#0d766d] sm:flex">
          <Send size={21} />
        </span>
      </div>
      <div className="mt-3 grid gap-x-4 sm:grid-cols-2">
        <TextInput
          label="Name"
          value={form.name}
          onChange={(value) => updateField("name", value)}
          required
        />
        <TextInput
          label="Phone"
          value={form.phone}
          onChange={(value) => updateField("phone", value)}
          required
        />
      </div>
      <TextInput
        label="Email"
        type="email"
        value={form.email}
        onChange={(value) => updateField("email", value)}
      />
      <label className="mt-4 block text-sm font-bold text-[#31413d]">
        Message
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          required
          maxLength={1000}
          className="mt-2 min-h-36 w-full resize-y rounded-lg border border-[#dce9e6] bg-[#f7fbfa] px-3 py-3 text-[#10211f] outline-none focus:border-[#0d766d]"
        />
      </label>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          disabled={isSending}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#0d766d] px-5 font-bold text-white hover:bg-[#095f58] disabled:opacity-60 sm:w-max"
        >
          <Send size={18} />
          {isSending ? "Sending" : "Send message"}
        </button>
        {status ? <p className="text-sm font-semibold text-[#40514d]">{status}</p> : null}
      </div>
    </form>
  );
}

function TextInput({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="mt-4 block text-sm font-bold text-[#31413d]">
      {label}
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        required={required}
        className="mt-2 h-12 w-full rounded-lg border border-[#dce9e6] bg-[#f7fbfa] px-3 text-[#10211f] outline-none focus:border-[#0d766d]"
      />
    </label>
  );
}
