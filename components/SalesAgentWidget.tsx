"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/i18n/LanguageContext";

interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

export default function SalesAgentWidget() {
  const { lang, t } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatTurn[]>(
    []
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [leadSaved, setLeadSaved] =
    useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Start a fresh conversation when language changes.
  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content: t("agent.greeting"),
      },
    ]);

    setLeadSaved(false);
    setError("");
  }, [lang, t]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    const content = text.trim();

    if (!content || loading) {
      return;
    }

    const nextMessages: ChatTurn[] = [
      ...messages,
      {
        role: "user",
        content,
      },
    ];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages,
          lang,
          leadCaptured: leadSaved,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || t("agent.error")
        );
      }

      const reply: string = data?.reply ?? "";

      if (!reply) {
        throw new Error(t("agent.error"));
      }

      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: reply,
        },
      ]);

      if (data?.lead_saved) {
        setLeadSaved(true);
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : t("agent.error");

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const quickPrompts = [
    t("agent.quick1"),
    t("agent.quick2"),
    t("agent.quick3"),
  ];

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={t("agent.title")}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gradient-to-br from-[#0B3D91] to-[#00B4D8] px-5 py-4 text-white shadow-2xl transition-transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />

          <span className="hidden sm:inline text-sm font-bold">
            {t("agent.launcher")}
          </span>

          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B35] opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#FF6B35]" />
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-x-3 bottom-3 z-50 flex max-h-[85vh] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:inset-x-auto sm:right-5 sm:bottom-5 sm:w-[400px] sm:max-h-[640px]">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 bg-gradient-to-br from-[#0F172A] to-[#0B3D91] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Sparkles className="h-5 w-5 text-[#00B4D8]" />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  {t("agent.title")}
                </p>

                <p className="flex items-center gap-1.5 text-xs text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  {t("agent.subtitle")}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={t("agent.close")}
              className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto bg-[#F8FAFC] p-4"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "rounded-br-sm bg-[#0B3D91] text-white"
                      : "rounded-bl-sm border border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm border border-slate-200 bg-white px-4 py-3">
                  <Loader2 className="h-4 w-4 animate-spin text-[#0B3D91]" />

                  <span className="text-xs text-slate-500">
                    {t("agent.typing")}
                  </span>
                </div>
              </div>
            )}

            {leadSaved && (
              <div className="flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 p-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />

                <p className="text-xs leading-relaxed text-green-800">
                  {t("agent.leadSaved")}
                </p>
              </div>
            )}

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-3">
                <p className="text-xs leading-relaxed text-red-700">
                  {error}
                </p>
              </div>
            )}

            {messages.length <= 1 &&
              !loading && (
                <div className="space-y-2 pt-1">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() =>
                        sendMessage(prompt)
                      }
                      className="block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-left text-xs font-semibold text-slate-600 transition-colors hover:border-[#00B4D8] hover:text-[#0B3D91]"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
          </div>

          {/* Input */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
            className="border-t border-slate-200 bg-white p-3"
          >
            <div className="flex items-center gap-2">
              <Input
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                placeholder={t(
                  "agent.placeholder"
                )}
                disabled={loading}
                className="flex-1 rounded-xl border-slate-200 text-sm"
              />

              <Button
                type="submit"
                disabled={
                  loading || !input.trim()
                }
                aria-label={t("agent.send")}
                className="rounded-xl bg-[#FF6B35] px-4 text-white hover:bg-[#e55a25]"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>

            <p className="mt-2 text-center text-[10px] leading-relaxed text-slate-400">
              {t("agent.disclaimer")}
            </p>
          </form>
        </div>
      )}
    </>
  );
}
