"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { DraggableCardContainer, DraggableCardBody } from "@/components/DraggableCard";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 relative" 
        style={{ width: '100vw', margin: 0, padding: 0, overflowX: 'hidden' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="absolute inset-0">
          <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-8 right-4 sm:top-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute bottom-32 right-1/4 sm:bottom-40 sm:right-1/3 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
          
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23CCCCCC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-slide opacity-50 sm:opacity-100"></div>
        </div>

        <div className="relative z-10" style={{ width: '100%' }}>
          <header className="px-4 sm:px-6 py-4 sm:py-5 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">bole.to</span>
              </div>
              <nav className="hidden sm:flex items-center gap-4 lg:gap-6 text-sm">
                <Link href="#features" className="hover:opacity-80 transition-opacity">Features</Link>
                <Link href="#contact" className="hover:opacity-80 transition-opacity">Contact</Link>
                <a
                  href="mailto:hello@bole.to"
                  className="rounded-full bg-foreground text-background px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium hover:scale-105 transition-transform duration-200 gpu-accelerated"
                >
                  Get in touch
                </a>
              </nav>
              <div className="sm:hidden">
                <a
                  href="mailto:hello@bole.to"
                  className="rounded-full bg-foreground text-background px-3 py-2 text-xs font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </header>

          <section className="px-4 sm:px-6 pt-16 sm:pt-20 pb-24 sm:pb-32 text-center relative">
            <div className="mx-auto max-w-7xl">
              <div className="inline-flex items-center rounded-full border border-foreground/20 bg-background/50 backdrop-blur-sm px-3 sm:px-4 py-2 text-xs mb-6 sm:mb-8 animate-fade-in-up shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-foreground/80">Introducing</span>
                <span className="mx-2 h-1 w-1 rounded-full bg-foreground/30" />
                <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">bole.to</span>
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 sm:mb-6 animate-fade-in-up animation-delay-200 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground bg-clip-text text-transparent block">
                  Build with
                </span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient block">
                  confidence
                </span>
              </h1>
              
              <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-foreground/70 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 px-2">
                We&apos;re crafting a modern platform at <span className="font-semibold text-foreground">bole.to</span>. Join the waitlist and be the first to know when we launch.
              </p>
              
              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-600 px-2">
                <a
                  href="mailto:hello@bole.to?subject=Join%20the%20bole.to%20waitlist"
                  className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 gpu-accelerated"
                >
                  Join the waitlist
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 gpu-accelerated" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-foreground/20 bg-background/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-foreground/5 hover:scale-105 transition-all duration-300"
                >
                  Learn more
                </Link>
              </div>

              <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 animate-fade-in-up animation-delay-800 px-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/60">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>In development</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-foreground/20"></div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/60">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secure & reliable</span>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Why choose bole.to?
                </h2>
                <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto px-4">
                  Built for the modern web with cutting-edge technology and user experience at the forefront.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-background to-background/50 border border-foreground/10 hover:border-foreground/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">Lightning Fast</h3>
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                    Built with performance in mind. Experience blazing-fast load times and smooth interactions across all devices.
                  </p>
                </div>

                <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-background to-background/50 border border-foreground/10 hover:border-foreground/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors">Secure by Design</h3>
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                    Enterprise-grade security measures protect your data with end-to-end encryption and advanced threat detection.
                  </p>
                </div>

                <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-background to-background/50 border border-foreground/10 hover:border-foreground/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-emerald-600 transition-colors">User-Centric</h3>
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                    Every feature is crafted with your needs in mind, delivering an intuitive experience that just works.
                  </p>
                </div>

                <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-background to-background/50 border border-foreground/10 hover:border-foreground/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors">Seamless Integration</h3>
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                    Connect with your existing tools and workflows through our comprehensive API and integrations.
                  </p>
                </div>

                <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-background to-background/50 border border-foreground/10 hover:border-foreground/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-indigo-600 transition-colors">Innovation First</h3>
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                    Stay ahead with cutting-edge features powered by the latest technology and industry best practices.
                  </p>
                </div>

                <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-background to-background/50 border border-foreground/10 hover:border-foreground/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-rose-600 transition-colors">24/7 Support</h3>
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                    Our dedicated support team is always here to help you succeed, whenever you need assistance.
                  </p>
                </div>
              </div>

              <div className="mt-12 sm:mt-16 text-center">
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-foreground/5 to-foreground/10 border border-foreground/10">
                  <div className="flex -space-x-1 sm:-space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground/80">Trusted by developers worldwide</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <section className="w-full py-16 sm:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-background via-blue-500/5 to-purple-500/5" 
        style={{ width: '100vw', margin: 0, padding: 0 }}>
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl animate-float-delayed"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 backdrop-blur-sm px-3 sm:px-4 py-2 text-xs sm:text-sm mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-purple-700 dark:text-purple-300 font-medium">Social Features</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 px-4">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Build the hype
              </span>
              <br />
              <span className="text-foreground">before the drop</span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto px-4">
              Create buzz and engagement long before your event starts. Connect artists, attendees, and organizers in one vibrant community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Live Event Chat</h3>
                    <p className="text-sm sm:text-base text-foreground/70">Share excitement, coordinate meetups, and connect with fellow attendees through real-time messaging.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Attendee Discovery</h3>
                    <p className="text-sm sm:text-base text-foreground/70">See who&apos;s coming, connect with friends, and discover new people who share your music taste.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Exclusive DJ Content</h3>
                    <p className="text-sm sm:text-base text-foreground/70">DJs share exclusive mixes, unreleased tracks, and behind-the-scenes content to build anticipation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Live Polls & Feedback</h3>
                    <p className="text-sm sm:text-base text-foreground/70">Organizers create polls for song requests, event preferences, and gather real-time feedback from the community.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-foreground/10 p-4 sm:p-6 shadow-2xl">
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse-slow"></div>
                
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h4 className="font-semibold text-base sm:text-lg">Midnight Rave 2024</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs sm:text-sm text-foreground/60">Live</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-2 sm:gap-3 animate-fade-in-up animation-delay-200">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0"></div>
                      <div className="bg-foreground/5 rounded-2xl rounded-tl-none p-2 sm:p-3 flex-1">
                        <div className="text-xs text-foreground/60 mb-1">DJ Nexus • 2m ago</div>
                        <div className="text-xs sm:text-sm">Just dropped an exclusive preview of tonight&apos;s closing track! 🔥</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 sm:gap-3 animate-fade-in-up animation-delay-400">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 flex-shrink-0"></div>
                      <div className="bg-blue-500/10 rounded-2xl rounded-tl-none p-2 sm:p-3 flex-1">
                        <div className="text-xs text-foreground/60 mb-1">Sarah_beats • 5m ago</div>
                        <div className="text-xs sm:text-sm">Can&apos;t wait! Who else is going solo? Let&apos;s meet up! 🎵</div>
                        <div className="flex items-center gap-1 sm:gap-2 mt-2">
                          <button className="text-xs bg-blue-500/20 hover:bg-blue-500/30 px-2 py-1 rounded-full transition-colors">❤️ 12</button>
                          <button className="text-xs text-foreground/60 hover:text-foreground transition-colors">Reply</button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-3 sm:p-4 border border-purple-500/20 animate-fade-in-up animation-delay-600">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                        <span className="text-xs sm:text-sm font-medium">Event Poll</span>
                      </div>
                      <div className="text-xs sm:text-sm mb-3">What genre should dominate the main stage?</div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Techno</span>
                          <span className="text-xs text-foreground/60">45%</span>
                        </div>
                        <div className="w-full bg-foreground/10 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-[45%] animate-scale-in"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">House</span>
                          <span className="text-xs text-foreground/60">35%</span>
                        </div>
                        <div className="w-full bg-foreground/10 rounded-full h-2">
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-[35%] animate-scale-in animation-delay-200"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-foreground/60 animate-fade-in-up animation-delay-800">
                      <div className="flex -space-x-1 sm:-space-x-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-red-400 to-pink-400 border border-background"></div>
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border border-background"></div>
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 border border-background"></div>
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-foreground/20 border border-background flex items-center justify-center text-[10px] font-medium">+</div>
                      </div>
                      <span className="text-xs">247 people are hyped for this event</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-400"></div>
                  <div className="flex-1 bg-foreground/10 rounded-full px-3 sm:px-4 py-2">
                    <div className="text-xs sm:text-sm text-foreground/60 animate-pulse">Share your excitement...</div>
                  </div>
                  <button className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-background to-background/50" 
        style={{ width: '100vw', margin: 0, padding: 0, paddingTop: '4rem', paddingBottom: '8rem' }}>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm px-4 py-2 text-xs sm:text-sm mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-blue-700 dark:text-blue-300 font-medium">For Organizers</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Operate your event</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                from start to finish
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              Create your event in minutes, sell in any currency, control access with offline QR scanning, and track everything in real-time. Add the promoter suite to sell more without losing control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-20">
            <div className="group relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-6 lg:p-8 hover:border-blue-500/20 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">1</div>
              <div className="mt-12">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">Create</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">Cover image, date and venue, capacity and categories. SEO-ready public page ready to share.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-6 lg:p-8 hover:border-cyan-500/20 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm">2</div>
              <div className="mt-12">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-600 transition-colors">Configure Tickets</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">General, VIP, presale, combos and coupons. Quotas, schedules, and price tiers.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-6 lg:p-8 hover:border-emerald-500/20 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center text-white font-bold text-sm">3</div>
              <div className="mt-12">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-600 transition-colors">Collect Payment</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">Checkout in multiple currencies, clear reconciliation, optional refunds and transfers.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-6 lg:p-8 hover:border-orange-500/20 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-sm">4</div>
              <div className="mt-12">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-600 transition-colors">Operate at Door</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">Scanner on your phone (iOS/Android), millisecond validation, real offline mode, multiple checkpoints, staff roles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden" 
        style={{ width: '100vw', margin: 0, padding: 0, paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Access that never fails,
                <br />
                <span className="text-green-400">with or without internet</span>
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">QR without signal:</div>
                    <div className="text-slate-300 text-sm">Ticket list pre-loaded on device</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">Immediate local validation</div>
                    <div className="text-slate-300 text-sm">Auto-sync when network returns</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">Duplicate detection with alerts</div>
                    <div className="text-slate-300 text-sm">Time and door of first check-in</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">Manual check-in by name/email</div>
                    <div className="text-slate-300 text-sm">If QR is damaged or missing</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">Multi-door and roles</div>
                    <div className="text-slate-300 text-sm">Multiple scanners in parallel, staff permissions</div>
                  </div>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-full text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-300">Tested on high-traffic events. If network fails, access continues.</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-slate-800 rounded-3xl p-6 border border-slate-600 shadow-2xl">
                <div className="absolute -top-3 -right-3">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">OFFLINE</div>
                </div>
                
                <div className="bg-slate-900 rounded-2xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-white font-semibold">Midnight Rave Scanner</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-slate-400 text-xs">No Internet</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-green-400 font-medium text-sm">✓ VALID ENTRY</div>
                          <div className="text-slate-300 text-xs">Sarah Johnson • VIP Ticket</div>
                        </div>
                        <div className="text-green-400 text-2xl">✓</div>
                      </div>
                    </div>
                    
                    <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-red-400 font-medium text-sm">✗ ALREADY USED</div>
                          <div className="text-slate-300 text-xs">Mike Chen • Used at Door A, 8:45 PM</div>
                        </div>
                        <div className="text-red-400 text-2xl">✗</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 text-slate-400 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span>Scanned 247 / 500 tickets</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-orange-500/5 to-yellow-500/5" 
        style={{ width: '100vw', margin: 0, padding: 0, paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Sell more
              </span>
              <span className="text-foreground"> with your promoter team</span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
              Built-in promoter management with unique links, tiered commissions, and live leaderboards. Scale your sales without losing control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-optimized rounded-2xl border border-foreground/10 p-6 hover:border-orange-500/20 transition-all duration-200 hover:shadow-lg gpu-accelerated">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Links & Codes</h3>
              <p className="text-foreground/70 text-sm mb-4">Unique UTM links, personal codes and QR codes for each promoter to distribute and track.</p>
              <div className="bg-foreground/5 rounded-lg p-3 text-xs font-mono">
                bole.to/event/rave24?ref=sarah_promo
              </div>
            </div>

            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-optimized rounded-2xl border border-foreground/10 p-6 hover:border-orange-500/20 transition-all duration-200 hover:shadow-lg gpu-accelerated">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Commissions</h3>
              <p className="text-foreground/70 text-sm mb-4">Tiered commission rates by volume, milestone bonuses, and automated payout calculations.</p>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>1-50 tickets: 5%</span>
                  <span className="text-orange-600">$250</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>51-100: 7%</span>
                  <span className="text-orange-600">$350</span>
                </div>
                <div className="flex justify-between text-xs font-semibold">
                  <span>100+ bonus: 10%</span>
                  <span className="text-orange-600">$500</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-optimized rounded-2xl border border-foreground/10 p-6 hover:border-orange-500/20 transition-all duration-200 hover:shadow-lg gpu-accelerated">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Leaderboard</h3>
              <p className="text-foreground/70 text-sm mb-4">Real-time rankings by sales, conversion rates, and attributed revenue to keep competition alive.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <span>🥇</span>
                  <span className="flex-1">Sarah K.</span>
                  <span className="font-semibold">89 sales</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span>🥈</span>
                  <span className="flex-1">Mike R.</span>
                  <span className="font-semibold">67 sales</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span>🥉</span>
                  <span className="flex-1">Alex P.</span>
                  <span className="font-semibold">45 sales</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-6 border border-orange-500/20">
            <h4 className="font-semibold mb-4">Best Practices</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground/70">Set weekly targets with mini-bonuses per milestone</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground/70">Limit codes to key categories (e.g. early bird)</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground/70">Display live rankings to maintain competitive energy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background to-background/50" 
        style={{ width: '100vw', margin: 0, padding: 0, paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Metrics that </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                actually matter
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
              Real-time insights into sales performance, attendee engagement, and operational efficiency. Make data-driven decisions for your events.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-optimized rounded-2xl border border-foreground/10 p-6 text-center gpu-accelerated">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
              <div className="text-sm text-foreground/60 mb-1">Tickets Sold</div>
              <div className="text-xs text-green-600">↗ +23% vs last event</div>
            </div>
            
            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-optimized rounded-2xl border border-foreground/10 p-6 text-center gpu-accelerated">
              <div className="text-3xl font-bold text-purple-600 mb-2">68%</div>
              <div className="text-sm text-foreground/60 mb-1">Conversion Rate</div>
              <div className="text-xs text-green-600">↗ +12% this month</div>
            </div>
            
            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-optimized rounded-2xl border border-foreground/10 p-6 text-center gpu-accelerated">
              <div className="text-3xl font-bold text-emerald-600 mb-2">$89K</div>
              <div className="text-sm text-foreground/60 mb-1">Net Revenue</div>
              <div className="text-xs text-green-600">↗ +34% growth</div>
            </div>
            
            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-6 text-center relative">
              <div className="absolute top-2 right-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">247</div>
              <div className="text-sm text-foreground/60 mb-1">Live Check-ins</div>
              <div className="text-xs text-blue-600">Real-time</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-optimized rounded-2xl border border-foreground/10 p-6 gpu-accelerated">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Sales by Channel</h4>
                <div className="text-xs text-foreground/60">Last 7 days</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Direct</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-foreground/10 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-[65%]"></div>
                    </div>
                    <span className="text-sm font-medium">450</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Instagram</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-foreground/10 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-[45%]"></div>
                    </div>
                    <span className="text-sm font-medium">312</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm">Promoters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-foreground/10 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full w-[35%]"></div>
                    </div>
                    <span className="text-sm font-medium">248</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-optimized rounded-2xl border border-foreground/10 p-6 gpu-accelerated">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Top Promoters</h4>
                <div className="text-xs text-foreground/60">This month</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                    <div>
                      <div className="text-sm font-medium">Sarah Martinez</div>
                      <div className="text-xs text-foreground/60">sarah_beats</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">89</div>
                    <div className="text-xs text-green-600">$4,450</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"></div>
                    <div>
                      <div className="text-sm font-medium">Mike Rodriguez</div>
                      <div className="text-xs text-foreground/60">mike_music</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">67</div>
                    <div className="text-xs text-green-600">$3,350</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-400"></div>
                    <div>
                      <div className="text-sm font-medium">Alex Park</div>
                      <div className="text-xs text-foreground/60">alex_vibes</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">45</div>
                    <div className="text-xs text-green-600">$2,250</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Create My Event
              </button>
              <button className="px-8 py-4 border border-foreground/20 rounded-full font-medium hover:bg-foreground/5 hover:scale-105 transition-all duration-300">
                Request Demo
              </button>
            </div>
            <p className="text-xs text-foreground/60 mt-4">Works on iOS/Android. No extra hardware needed.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-background" 
        style={{ width: '100vw', margin: 0, padding: 0, paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm px-3 sm:px-4 py-2 text-xs sm:text-sm mb-6 sm:mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2"></div>
            <span className="text-blue-700 dark:text-blue-300 font-medium">Coming Soon</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 animate-fade-in-up animation-delay-200">
            <span className="text-foreground">Ready to revolutionize</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              your events?
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-fade-in-up animation-delay-400">
            We&apos;re putting the final touches on bole.to. Join our waitlist to get exclusive early access and be among the first to experience the future of event management.
          </p>

          <div className="mb-8 sm:mb-12 animate-fade-in-up animation-delay-600">
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-foreground/20 bg-background/80 backdrop-blur-sm text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
                  required
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <button
                type="submit"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 gpu-accelerated flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Join Waitlist
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 gpu-accelerated" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 animate-fade-in-up animation-delay-800">
            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-4 sm:p-6 hover:border-blue-500/20 transition-all duration-300 hover:shadow-lg group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">Early Access</h3>
              <p className="text-xs sm:text-sm text-foreground/70">Be the first to experience our revolutionary event platform before anyone else.</p>
            </div>

            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-4 sm:p-6 hover:border-purple-500/20 transition-all duration-300 hover:shadow-lg group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors">Exclusive Benefits</h3>
              <p className="text-xs sm:text-sm text-foreground/70">Special pricing, premium features, and priority support for early adopters.</p>
            </div>

            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-4 sm:p-6 hover:border-emerald-500/20 transition-all duration-300 hover:shadow-lg group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-emerald-600 transition-colors">Shape the Future</h3>
              <p className="text-xs sm:text-sm text-foreground/70">Your feedback will help us build the perfect event management solution.</p>
            </div>
          </div>

          <div className="text-center animate-fade-in-up animation-delay-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-foreground/5 to-foreground/10 border border-foreground/10 text-xs sm:text-sm">
              <div className="flex -space-x-1 sm:-space-x-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border border-background"></div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border border-background"></div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 border border-background"></div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 border border-background"></div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-foreground/20 border border-background flex items-center justify-center text-[10px] font-medium">+</div>
              </div>
              <span className="text-foreground/70 font-medium">Join 500+ people already on the waitlist</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-foreground/5 via-background to-foreground/5" 
        style={{ width: '100vw', margin: 0, padding: 0, paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-float-delayed"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-sm px-3 sm:px-4 py-2 text-xs sm:text-sm mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-emerald-700 dark:text-emerald-300 font-medium">Get in Touch</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="text-foreground">Let&apos;s build the future of</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                events together
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto">
              Have questions about bole.to? Want to partner with us? Or just want to chat about the future of event management? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 lg:space-y-8">
              <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-6 lg:p-8 hover:border-emerald-500/20 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">General Inquiries</h3>
                    <p className="text-foreground/70 text-sm mb-4">Questions about bole.to, partnerships, or just want to say hello? Drop us a line.</p>
                    <a href="mailto:hello@bole.to" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm hover:underline transition-colors">
                      hello@bole.to
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-6 lg:p-8 hover:border-blue-500/20 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Business & Partnerships</h3>
                    <p className="text-foreground/70 text-sm mb-4">Interested in integrating with bole.to or exploring business opportunities?</p>
                    <a href="mailto:partnerships@bole.to" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline transition-colors">
                      partnerships@bole.to
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-6 lg:p-8 hover:border-orange-500/20 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Support & Help</h3>
                    <p className="text-foreground/70 text-sm mb-4">Need help with our platform or have technical questions?</p>
                    <a href="mailto:support@bole.to" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm hover:underline transition-colors">
                      support@bole.to
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-6 lg:p-8">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-xl border border-foreground/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-200"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-xl border border-foreground/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-200"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-foreground/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl border border-foreground/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select a topic...</option>
                    <option value="general">General Inquiry</option>
                    <option value="waitlist">Waitlist & Early Access</option>
                    <option value="partnership">Business & Partnerships</option>
                    <option value="support">Support & Help</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-foreground/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-4 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 gpu-accelerated flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-foreground/10">
                <p className="text-sm text-foreground/60 mb-4">You can also reach us directly:</p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-foreground/70">Usually respond within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-foreground/70">GMT-6 (Central Time)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-foreground/5 via-background to-foreground/5 border-t border-foreground/10" 
        style={{ width: '100vw', margin: 0, padding: 0, paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">bole.to</span>
                <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm px-2 py-1 text-xs">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse mr-1.5"></div>
                  <span className="text-blue-700 dark:text-blue-300 font-medium">Beta</span>
                </div>
              </div>
              <p className="text-foreground/70 text-sm sm:text-base mb-6 max-w-md leading-relaxed">
                The future of event management. Comprehensive ticketing, offline QR scanning, social engagement, and real-time analytics in one powerful platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:hello@bole.to?subject=Join%20the%20bole.to%20waitlist"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 gpu-accelerated"
                >
                  Join Waitlist
                  <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-foreground/20 bg-background/50 backdrop-blur-sm px-4 py-2.5 text-sm font-medium hover:bg-foreground/5 hover:scale-105 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#features" className="text-foreground/70 hover:text-foreground hover:underline transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <span className="text-foreground/40 cursor-not-allowed">
                    Pricing
                  </span>
                  <span className="ml-2 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-1.5 py-0.5 text-xs text-orange-700 dark:text-orange-300">
                    Soon
                  </span>
                </li>
                <li>
                  <span className="text-foreground/40 cursor-not-allowed">
                    API Docs
                  </span>
                  <span className="ml-2 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-1.5 py-0.5 text-xs text-orange-700 dark:text-orange-300">
                    Soon
                  </span>
                </li>
                <li>
                  <span className="text-foreground/40 cursor-not-allowed">
                    Mobile Apps
                  </span>
                  <span className="ml-2 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-1.5 py-0.5 text-xs text-orange-700 dark:text-orange-300">
                    Soon
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="text-foreground/40 cursor-not-allowed">
                    About Us
                  </span>
                  <span className="ml-2 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-1.5 py-0.5 text-xs text-orange-700 dark:text-orange-300">
                    Soon
                  </span>
                </li>
                <li>
                  <span className="text-foreground/40 cursor-not-allowed">
                    Blog
                  </span>
                  <span className="ml-2 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-1.5 py-0.5 text-xs text-orange-700 dark:text-orange-300">
                    Soon
                  </span>
                </li>
                <li>
                  <span className="text-foreground/40 cursor-not-allowed">
                    Careers
                  </span>
                  <span className="ml-2 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-1.5 py-0.5 text-xs text-orange-700 dark:text-orange-300">
                    Soon
                  </span>
                </li>
                <li>
                  <a href="#contact" className="text-foreground/70 hover:text-foreground hover:underline transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-foreground/10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-4">
                  <span className="text-foreground/60">© 2024 bole.to</span>
                  <div className="hidden sm:block w-px h-4 bg-foreground/20"></div>
                  <span className="text-foreground/60">All rights reserved</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden sm:block w-px h-4 bg-foreground/20"></div>
                  <span className="text-foreground/40">
                    Privacy Policy
                  </span>
                  <span className="text-foreground/40">
                    Terms of Service
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-xs text-foreground/60">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Status: All systems operational</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-foreground/20"></div>
                <div className="flex items-center gap-3">
                  <a 
                    href="mailto:hello@bole.to" 
                    className="text-foreground/60 hover:text-foreground transition-colors p-2 rounded-full hover:bg-foreground/5"
                    title="Email"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <span className="text-foreground/40 cursor-not-allowed p-2 rounded-full opacity-50" title="Twitter - Coming Soon">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </span>
                  <span className="text-foreground/40 cursor-not-allowed p-2 rounded-full opacity-50" title="LinkedIn - Coming Soon">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 border-t border-foreground/10 text-center">
            <p className="text-xs text-foreground/50 leading-relaxed max-w-2xl mx-auto">
              bole.to is currently in development. Join our waitlist to be notified when we launch and get exclusive early access to our platform. 
              Built with ❤️ for event organizers and attendees worldwide.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}