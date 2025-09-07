"use client";

import type React from "react";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Twitter, Loader2 } from "lucide-react";
import { toast } from "sonner";
// Zod schema: at least one of email or twitterUsername must be filled
const waitlistSchema = z
  .object({
    email: z.string().email("Invalid email").optional().or(z.literal("")),
    twitterUsername: z
      .string()
      .min(2, "Username too short")
      .optional()
      .or(z.literal("")),
  })
  .refine((data) => data.email || data.twitterUsername, {
    message: "Please provide either an email or a Twitter username.",
  });

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [twitterUsername, setTwitterUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formUrl = process.env.NEXT_PUBLIC_FORM_URL as string;
  const emailCol = process.env.NEXT_PUBLIC_EMAIL_COL as string;
  const usernameCol = process.env.NEXT_PUBLIC_USERNAME_COL as string;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const result = waitlistSchema.safeParse({ email, twitterUsername });
    if (!result.success) {
      console.log(JSON.parse(result.error.message)[0].message);
      setError(JSON.parse(result.error.message)[0].message);
      return;
    }

    setIsLoading(true);

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors", // required for Google Forms
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          [emailCol]: email,
          [usernameCol]: twitterUsername,
        }).toString(),
      });
      toast.success("CHIRPPPP!!! You have been added to Wait List");
      setEmail("");
      setTwitterUsername("");
    } catch (err) {
      console.log("Error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mx-auto max-w-md">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground "
            >
              Email Address
            </label>
            <div className="relative py-2">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary" />
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="twitter"
              className="text-sm font-medium text-foreground"
            >
              X (Twitter) Username
            </label>
            <div className="relative py-2">
              <Twitter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary" />
              <Input
                id="twitter"
                type="text"
                placeholder="@username"
                value={twitterUsername}
                onChange={(e) => setTwitterUsername(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Joining...
              </>
            ) : (
              "Join the Waitlist"
            )}
          </Button>

          <p className="text-xs text-center text-secondary">
            Unsubscribe at any time.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
