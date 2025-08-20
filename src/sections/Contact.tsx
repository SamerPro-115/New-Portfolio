import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Send, CheckCircle, Mail, User, MessageSquare } from "lucide-react";
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowError(false);
    setShowSuccess(false);

    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',     // Replace with your service ID
        'YOUR_TEMPLATE_ID',    // Replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Your Name',
        },
        'YOUR_PUBLIC_KEY'      // Replace with your public key
      );

      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setShowError(true);
      
      // Hide error message after 5 seconds
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-16 px-4 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>

        {/* Contact Form Card */}
        <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl md:text-3xl text-white flex items-center justify-center gap-3">
              <Mail className="w-8 h-8" />
              Send Me a Message
            </CardTitle>
            <CardDescription className="text-gray-400 text-lg">
              I'll get back to you as soon as possible
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {/* Success Alert */}
            {showSuccess && (
              <Alert className="mb-6 bg-green-900/50 border-green-700/50 text-green-100">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription className="font-medium">
                  Message sent successfully! I'll get back to you soon.
                </AlertDescription>
              </Alert>
            )}

            {/* Error Alert */}
            {showError && (
              <Alert className="mb-6 bg-red-900/50 border-red-700/50 text-red-100">
                <AlertDescription className="font-medium">
                  Failed to send message. Please try again or contact me directly.
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white text-base font-medium flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-white focus:ring-white/20 h-12"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-base font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-white focus:ring-white/20 h-12"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white text-base font-medium flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-white focus:ring-white/20 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-white text-black hover:bg-gray-200 font-semibold text-lg transition-all duration-300 hover:scale-[1.02] disabled:hover:scale-100"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Prefer email? Reach me directly at{' '}
            <a 
              href="mailto:your.email@example.com" 
              className="text-white hover:text-gray-200 underline underline-offset-4 transition-colors"
            >
              your.email@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}