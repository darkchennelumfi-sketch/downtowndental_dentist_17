"use client";

import { useState } from "react";
import Link from "next/link";
import {
  useForm,
  Controller,
  type UseFormRegisterReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { practice } from "@/data/site";
import {
  appointmentSchema,
  type AppointmentValues,
} from "@/lib/appointment-schema";
import { cn } from "@/lib/utils";

const hearAboutOptions = [
  "Advertisement",
  "A Friend",
  "Internet",
  "Staff Member",
  "Yellow Pages",
  "Other",
];

const findWebsiteOptions = [
  "Advertisement",
  "A Friend",
  "Search Engine",
  "Other",
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-xs font-medium text-clay-deep" role="alert">
      {message}
    </p>
  );
}

function RequiredMark() {
  return (
    <span className="ml-1 text-clay" aria-hidden="true">
      *
    </span>
  );
}

function RadioPill({
  value,
  label,
  registration,
}: {
  value: string;
  label: string;
  registration: UseFormRegisterReturn;
}) {
  return (
    <label className="relative cursor-pointer">
      <input
        type="radio"
        value={value}
        className="peer sr-only"
        {...registration}
      />
      <span className="flex h-11 items-center justify-center rounded-full border border-ink/15 bg-white/50 px-5 text-sm font-semibold text-ink/68 transition-all peer-checked:border-pine peer-checked:bg-pine peer-checked:text-cream peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-clay">
        {label}
      </span>
    </label>
  );
}

export function AppointmentForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      newPatient: "yes",
      preferredDays: "",
      convenientTimes: "",
      insurance: "not-sure",
      hearAbout: "",
      findWebsite: "",
      comments: "",
    },
  });

  async function onSubmit(values: AppointmentValues) {
    setServerError("");
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };
      if (!response.ok || !data.ok) {
        setServerError(
          data.message ??
            `We could not send your request. Please call ${practice.phone}.`,
        );
        return;
      }
      setSubmittedName(values.name.split(" ")[0] ?? values.name);
      setSubmitted(true);
      reset();
    } catch {
      setServerError(
        `Something went wrong. Please call us at ${practice.phone}.`,
      );
    }
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-[2rem] border border-pine/20 bg-white/65 p-8 text-center shadow-soft sm:p-12",
          className,
        )}
      >
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage-light text-pine">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-3xl tracking-[-0.025em] text-ink">
          Thank you{submittedName ? `, ${submittedName}` : ""}.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-ink/68">
          Your appointment request has been received. A member of our team will
          contact you to schedule a time. If you need to reach us sooner, please
          call the office.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <a href={practice.phoneHref}>
              <Phone className="h-4 w-4" />
              {practice.phone}
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setSubmittedName("");
          }}
          className="mt-5 cursor-pointer text-xs font-semibold uppercase tracking-[0.12em] text-ink/68 transition-colors hover:text-ink"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn(
        "rounded-[2rem] border border-ink/10 bg-white/55 p-6 shadow-soft sm:p-8 lg:p-10",
        className,
      )}
    >
      <div className="mb-8 flex items-start gap-3 rounded-2xl bg-cream-2/70 p-4 text-xs leading-relaxed text-ink/68">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-pine" />
        <p>
          Please share a few details and one of our team members will contact
          you to schedule. Required fields are marked with an asterisk.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">
            Patient name
            <RequiredMark />
          </Label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="First and last name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          <div id="name-error">
            <FieldError message={errors.name?.message} />
          </div>
        </div>

        <div>
          <Label htmlFor="email">
            Email
            <RequiredMark />
          </Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          <div id="email-error">
            <FieldError message={errors.email?.message} />
          </div>
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(701) 000-0000"
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>

        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            autoComplete="street-address"
            placeholder="Street, city, state, ZIP"
            aria-invalid={Boolean(errors.address)}
            {...register("address")}
          />
          <FieldError message={errors.address?.message} />
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-3 text-[0.78rem] font-bold uppercase tracking-[0.11em] text-ink/70">
          Are you a new patient?
          <RequiredMark />
        </legend>
        <div className="flex flex-wrap gap-2.5">
          <RadioPill
            value="yes"
            label="Yes, I'm new"
            registration={register("newPatient")}
          />
          <RadioPill
            value="no"
            label="No, I've visited before"
            registration={register("newPatient")}
          />
        </div>
        <FieldError message={errors.newPatient?.message} />
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="preferredDays">Preferred days</Label>
          <Input
            id="preferredDays"
            placeholder="e.g. Mondays or Thursday mornings"
            {...register("preferredDays")}
          />
          <FieldError message={errors.preferredDays?.message} />
        </div>
        <div>
          <Label htmlFor="convenientTimes">Convenient times</Label>
          <Input
            id="convenientTimes"
            placeholder="e.g. before 10 a.m."
            {...register("convenientTimes")}
          />
          <FieldError message={errors.convenientTimes?.message} />
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-3 text-[0.78rem] font-bold uppercase tracking-[0.11em] text-ink/70">
          Do you have dental insurance?
        </legend>
        <div className="flex flex-wrap gap-2.5">
          <RadioPill
            value="yes"
            label="Yes"
            registration={register("insurance")}
          />
          <RadioPill
            value="no"
            label="No"
            registration={register("insurance")}
          />
          <RadioPill
            value="not-sure"
            label="Not sure"
            registration={register("insurance")}
          />
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="hearAbout">How did you hear about us?</Label>
          <Controller
            control={control}
            name="hearAbout"
            render={({ field }) => (
              <Select
                value={field.value || ""}
                onValueChange={field.onChange}
              >
                <SelectTrigger id="hearAbout" ref={field.ref}>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {hearAboutOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div>
          <Label htmlFor="findWebsite">How did you find our website?</Label>
          <Controller
            control={control}
            name="findWebsite"
            render={({ field }) => (
              <Select
                value={field.value || ""}
                onValueChange={field.onChange}
              >
                <SelectTrigger id="findWebsite" ref={field.ref}>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {findWebsiteOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>

      <div className="mt-6">
        <Label htmlFor="comments">Anything we should know?</Label>
        <Textarea
          id="comments"
          placeholder="Tell us what brings you in, or any questions you have."
          {...register("comments")}
        />
        <FieldError message={errors.comments?.message} />
      </div>

      {serverError ? (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-clay/25 bg-clay-light/25 px-4 py-3 text-sm text-clay-ink"
        >
          {serverError}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-ink/68">
          By submitting this form, you agree to be contacted about your request.
          Please review our{" "}
          <Link
            href="/privacy-policy"
            className="text-pine underline underline-offset-2"
          >
            privacy policy
          </Link>
          .
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full shrink-0 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Request appointment
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
