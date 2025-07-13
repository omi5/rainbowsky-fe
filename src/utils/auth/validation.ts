import { SignupFormData } from "@/types/auth";

// utils/validation.ts
export const validateSignupForm = (formData: SignupFormData): string[] => {
  const errors: string[] = [];

  if (!formData.name.trim()) errors.push("Name is required");
  if (!formData.email.trim()) errors.push("Email is required");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    errors.push("Invalid email format");
  if (!formData.phone.trim()) errors.push("Phone is required");
  if (formData.password.length < 8)
    errors.push("Password must be at least 8 characters");
  //   if (!/[A-Z]/.test(formData.password))
  //     errors.push("Password must contain at least one uppercase letter");
  //   if (!/[0-9]/.test(formData.password))
  //     errors.push("Password must contain at least one number");
  if (formData.password !== formData.confirmPassword)
    errors.push("Passwords don't match");
  if (!formData.dob) errors.push("Date of birth is required");
  if (!formData.gender) errors.push("Gender is required");

  // Validate age (at least 13 years old)
  //   if (formData.dob) {
  //     const dobDate = new Date(formData.dob);
  //     const today = new Date();
  //     let age = today.getFullYear() - dobDate.getFullYear();
  //     const monthDiff = today.getMonth() - dobDate.getMonth();

  //     if (
  //       monthDiff < 0 ||
  //       (monthDiff === 0 && today.getDate() < dobDate.getDate())
  //     ) {
  //       age--;
  //     }

  //     if (age < 13) errors.push("You must be at least 13 years old");
  //   }

  return errors;
};
