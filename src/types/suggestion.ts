// src/types/suggestion.ts

export interface Suggestion {
  id: number;
  name: string;
  email: string;
  subject: string;
  suggestion: string;
  status?: string;
  created_at?: string;
}

export interface SuggestionFormData {
  name: string;
  email: string;
  subject: string;
  suggestion: string;
}

export interface SuggestionResponse {
  message: string;
  data?: Suggestion;
}

export interface ValidationError {
  message: string;
  errors: {
    [key: string]: string[];
  };
}

export interface ApiError {
  status: number;
  message: string;
  errors?: {
    [key: string]: string[];
  };
}