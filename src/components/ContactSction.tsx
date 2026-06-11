// src/components/ContactSection.tsx
"use client";

import { useForm } from "react-hook-form";
import { Send, User, Mail, MessageSquare, Lightbulb, CheckCircle, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import MotionWrapper from "./MotionWrapper";
import { useState } from 'react';
import type { SuggestionFormData, ApiError } from "@/types/suggestion";
import { submitSuggestion } from "@/lib/api/apiSuggestion";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  suggestion: string;
};

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [generalError, setGeneralError] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    clearErrors,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setGeneralError('');
    setSuccessMessage('');
    
    // مسح أي أخطاء سابقة
    clearErrors();

    try {
      const suggestionData: SuggestionFormData = {
        name: data.name.trim(),
        email: data.email.trim(),
        subject: data.subject.trim(),
        suggestion: data.suggestion.trim(),
      };

      const response = await submitSuggestion(suggestionData);
      
      setSubmitStatus('success');
      setSuccessMessage(response.message || 'Your suggestion has been sent successfully!');
      reset();
      
      // إخفاء رسالة النجاح بعد 5 ثواني
      setTimeout(() => {
        setSubmitStatus('idle');
        setSuccessMessage('');
      }, 5000);

    } catch (error) {
      const apiError = error as ApiError;
      setSubmitStatus('error');

      // معالجة أخطاء الـ validation وإظهارها تحت كل حقل
      if (apiError.status === 422 && apiError.errors) {
        // تعيين أخطاء الـ validation لكل حقل
        Object.keys(apiError.errors).forEach((field) => {
          const fieldErrors = apiError.errors![field];
          if (fieldErrors && fieldErrors.length > 0) {
            setError(field as keyof FormValues, {
              type: 'server',
              message: fieldErrors[0], // أول رسالة خطأ
            });
          }
        });
        
        setGeneralError('Please fix the errors below and try again.');
      } 
      // معالجة أخطاء أخرى
      else {
        let errorMsg = 'Failed to submit suggestion. Please try again.';
        
        switch (apiError.status) {
          case 0:
            errorMsg = 'Network error. Please check your internet connection.';
            break;
          case 400:
            errorMsg = 'Invalid request. Please check your input.';
            break;
          case 500:
            errorMsg = 'Server error. Please try again later.';
            break;
          case 429:
            errorMsg = 'Too many requests. Please try again later.';
            break;
          default:
            errorMsg = apiError.message || errorMsg;
        }
        
        setGeneralError(errorMsg);
      }
      
      // إخفاء رسالة الخطأ العامة بعد 10 ثواني
      setTimeout(() => {
        if (submitStatus === 'error') {
          setSubmitStatus('idle');
          setGeneralError('');
        }
      }, 10000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="my-48">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <MotionWrapper animation="fade-up" delay={0.1}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
              Contribute{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                Your Ideas
              </span>
            </h2>
          </MotionWrapper>
          <MotionWrapper animation="fade-up" delay={0.2}>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl lg:max-w-2xl mx-auto px-4">
              Didn&apos;t find your favorite language or topic? Share your
              suggestion and we&apos;ll consider adding it soon!
            </p>
          </MotionWrapper>
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && successMessage && (
          <MotionWrapper animation="fade-down" delay={0.1}>
            <div className="flex justify-center mb-6">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center gap-3 text-green-800 dark:text-green-200 max-w-md shadow-sm">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">{successMessage}</span>
              </div>
            </div>
          </MotionWrapper>
        )}

        {/* General Error Message */}
        {submitStatus === 'error' && generalError && (
          <MotionWrapper animation="fade-down" delay={0.1}>
            <div className="flex justify-center mb-6">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-start gap-3 text-red-800 dark:text-red-200 max-w-lg shadow-sm">
                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">{generalError}</p>
                </div>
              </div>
            </div>
          </MotionWrapper>
        )}

        {/* Form Section */}
        <div className="flex justify-center">
          <Card className="w-full max-w-3xl overflow-hidden shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        Full Name
                        <span className="text-red-500">*</span>
                      </div>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      {...register("name", { 
                        required: "Name is required",
                        minLength: {
                          value: 3,
                          message: "Name must be at least 3 characters"
                        },
                        maxLength: {
                          value: 255,
                          message: "Name must not exceed 255 characters"
                        }
                      })}
                      className={
                        errors.name ? "border-red-500 focus-visible:ring-red-500" : ""
                      }
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        Email Address
                        <span className="text-red-500">*</span>
                      </div>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid email address"
                        },
                        maxLength: {
                          value: 255,
                          message: "Email must not exceed 255 characters"
                        }
                      })}
                      className={
                        errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
                      }
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-muted-foreground" />
                      Subject
                      <span className="text-red-500">*</span>
                    </div>
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What's your suggestion about?"
                    {...register("subject", {
                      required: "Subject is required",
                      maxLength: {
                        value: 255,
                        message: "Subject must not exceed 255 characters"
                      }
                    })}
                    className={
                      errors.subject ? "border-red-500 focus-visible:ring-red-500" : ""
                    }
                    disabled={isSubmitting}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Suggestion Field */}
                <div className="space-y-2">
                  <Label htmlFor="suggestion" className="text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-muted-foreground" />
                      Your Suggestion
                      <span className="text-red-500">*</span>
                    </div>
                  </Label>
                  <Textarea
                    id="suggestion"
                    rows={5}
                    placeholder="Tell us about your idea in detail. What language, topic, or feature would you like to see?"
                    {...register("suggestion", {
                      required: "Suggestion is required",
                      minLength: {
                        value: 10,
                        message: "Suggestion must be at least 10 characters"
                      }
                    })}
                    className={
                      errors.suggestion
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }
                    disabled={isSubmitting}
                  />
                  {errors.suggestion && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.suggestion.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4 border-t border-border">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      We&apos;ll review your suggestion and get back to you soon!
                    </p>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full cursor-pointer bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] hover:opacity-90 transition-all sm:w-auto min-w-[180px] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Suggestion
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}