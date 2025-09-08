"use client";
import Link from "next/link";
import { DraggableCardContainer, DraggableCardBody } from "@/components/DraggableCard";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { TicketStubCard } from "@/components/TicketStubCard";
import { CardContainer, CardBody, CardItem } from "@/components/3DCard";
import { useTranslation } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-8 right-4 sm:top-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute bottom-32 right-1/4 sm:bottom-40 sm:right-1/3 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
          
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23CCCCCC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-slide opacity-50 sm:opacity-100"></div>
        </div>

        <div className="relative z-10">
          <header className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">bole.to</span>
              </div>
              <nav className="hidden sm:flex items-center gap-3 md:gap-4 lg:gap-6 text-sm">
                <Link href="#features" className="hover:opacity-80 transition-opacity px-2 py-1 rounded-md hover:bg-foreground/5">{t('features')}</Link>
                <Link href="#contact" className="hover:opacity-80 transition-opacity px-2 py-1 rounded-md hover:bg-foreground/5">{t('contact')}</Link>
                <LanguageSwitcher />
                <a
                  href="mailto:hello@bole.to"
                  className="rounded-full bg-foreground text-background px-3 md:px-4 py-2 text-xs md:text-sm font-medium hover:scale-105 transition-transform duration-200 gpu-accelerated mobile:touch-target"
                >
                  {t('getInTouch')}
                </a>
              </nav>
              <div className="sm:hidden flex items-center gap-2">
                <LanguageSwitcher />
                <a
                  href="mailto:hello@bole.to"
                  className="rounded-full bg-foreground text-background px-3 py-2 text-xs font-medium mobile:touch-target"
                >
                  {t('contact')}
                </a>
              </div>
            </div>
          </header>

          <section className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-28 lg:pb-32 text-center relative">
            <div className="mx-auto max-w-7xl">
              <div className="inline-flex items-center rounded-full border border-foreground/20 bg-background/50 backdrop-blur-sm px-3 sm:px-4 py-2 text-xs sm:text-sm mb-6 sm:mb-8 animate-fade-in-up shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-foreground/80">{t('introducing')}</span>
                <span className="mx-1 sm:mx-2 h-1 w-1 rounded-full bg-foreground/30" />
                <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">bole.to</span>
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 sm:mb-6 animate-fade-in-up animation-delay-200 leading-tight px-2">
                <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground bg-clip-text text-transparent block mb-2">
                  {t('buildWith')}
                </span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient block">
                  {t('confidence')}
                </span>
              </h1>
              
              <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-foreground/70 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mobile:leading-relaxed animate-fade-in-up animation-delay-400 px-4">
                {t('heroCopy')}
              </p>
              
              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-600 px-4">
                <a
                  href="mailto:hello@bole.to?subject=Join%20the%20bole.to%20waitlist"
                  className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 gpu-accelerated mobile:touch-target"
                >
                  {t('joinWaitlist')}
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 gpu-accelerated" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-foreground/20 bg-background/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-foreground/5 hover:scale-105 transition-all duration-300 mobile:touch-target"
                >
                  {t('learnMore')}
                </Link>
              </div>

              <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 animate-fade-in-up animation-delay-800 px-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/60">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>{t('inDevelopment')}</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-foreground/20"></div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/60">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>{t('secureReliable')}</span>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-3 sm:mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent px-2">
                  {t('whyChoose')}
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-4xl lg:max-w-5xl mx-auto px-4 leading-relaxed">
                  <span className="relative">
                    <span className="float-left text-5xl sm:text-6xl lg:text-7xl font-bold mr-0.5 -mt-2 sm:-mt-3 leading-none bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                      {t('featuresSubtitle').charAt(0)}
                    </span>
                    {t('featuresSubtitle').slice(1)}
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <CardContainer>
                  <CardBody className="group p-4 sm:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-background to-background/50 border border-foreground/10 hover:border-foreground/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardItem translateZ={20} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </CardItem>
                    <CardItem translateZ={10}>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">{t('lightningFast')}</h3>
                      <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                        {t('lightningFastDesc')}
                      </p>
                    </CardItem>
                  </CardBody>
                </CardContainer>

                <CardContainer>
                  <CardBody className="group p-4 sm:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-background to-background/50 border border-foreground/10 hover:border-foreground/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardItem translateZ={20} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </CardItem>
                    <CardItem translateZ={10}>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors">{t('secureByDesign')}</h3>
                      <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                        {t('secureByDesignDesc')}
                      </p>
                    </CardItem>
                  </CardBody>
                </CardContainer>

                <CardContainer>
                  <CardBody className="group p-4 sm:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-background to-background/50 border border-foreground/10 hover:border-foreground/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardItem translateZ={20} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </CardItem>
                    <CardItem translateZ={10}>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-emerald-600 transition-colors">{t('userCentric')}</h3>
                      <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                        {t('userCentricDesc')}
                      </p>
                    </CardItem>
                  </CardBody>
                </CardContainer>

                <CardContainer>
                  <CardBody className="group p-4 sm:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-background to-background/50 border border-foreground/10 hover:border-foreground/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardItem translateZ={20} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </CardItem>
                    <CardItem translateZ={10}>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors">{t('seamlessIntegration')}</h3>
                      <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                        {t('seamlessIntegrationDesc')}
                      </p>
                    </CardItem>
                  </CardBody>
                </CardContainer>

                <CardContainer>
                  <CardBody className="group p-4 sm:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-background to-background/50 border border-foreground/10 hover:border-foreground/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardItem translateZ={20} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </CardItem>
                    <CardItem translateZ={10}>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-indigo-600 transition-colors">{t('innovationFirst')}</h3>
                      <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                        {t('innovationFirstDesc')}
                      </p>
                    </CardItem>
                  </CardBody>
                </CardContainer>

                <CardContainer>
                  <CardBody className="group p-4 sm:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-background to-background/50 border border-foreground/10 hover:border-foreground/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardItem translateZ={20} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </CardItem>
                    <CardItem translateZ={10}>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-rose-600 transition-colors">{t('support247')}</h3>
                      <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                        {t('support247Desc')}
                      </p>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>

              <div className="mt-12 sm:mt-16 text-center">
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-foreground/5 to-foreground/10 border border-foreground/10">
                  <div className="flex -space-x-1 sm:-space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground/80">{t('trustedBy')}</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <section className="w-full py-24 sm:py-32 lg:py-40 xl:py-48 bg-gradient-to-br from-background via-blue-500/5 to-purple-500/5" 
        style={{ width: '100vw', margin: 0, padding: 0 }}>
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl animate-float-delayed"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 backdrop-blur-sm px-3 sm:px-4 py-2 text-xs sm:text-sm mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-purple-700 dark:text-purple-300 font-medium">{t('socialFeatures')}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 px-4">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                {t('buildHype')}
              </span>
              <br />
              <span className="text-foreground">{t('beforeTheDrop')}</span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto px-4">
              {t('socialSubtitle')}
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
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{t('liveEventChat')}</h3>
                    <p className="text-sm sm:text-base text-foreground/70">{t('liveEventChatDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{t('attendeeDiscovery')}</h3>
                    <p className="text-sm sm:text-base text-foreground/70">{t('attendeeDiscoveryDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{t('exclusiveDjContent')}</h3>
                    <p className="text-sm sm:text-base text-foreground/70">{t('exclusiveDjContentDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{t('livePolls')}</h3>
                    <p className="text-sm sm:text-base text-foreground/70">{t('livePollsDesc')}</p>
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
                      <span className="text-xs sm:text-sm text-foreground/60">{t('live')}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-2 sm:gap-3 animate-fade-in-up animation-delay-200">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0"></div>
                      <div className="bg-foreground/5 rounded-2xl rounded-tl-none p-2 sm:p-3 flex-1">
                        <div className="text-xs text-foreground/60 mb-1">{t('djNexus')} • 2m ago</div>
                        <div className="text-xs sm:text-sm">{t('djNexusMessage')}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 sm:gap-3 animate-fade-in-up animation-delay-400">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 flex-shrink-0"></div>
                      <div className="bg-blue-500/10 rounded-2xl rounded-tl-none p-2 sm:p-3 flex-1">
                        <div className="text-xs text-foreground/60 mb-1">{t('sarahBeats')} • 5m ago</div>
                        <div className="text-xs sm:text-sm">{t('sarahMessage')}</div>
                        <div className="flex items-center gap-1 sm:gap-2 mt-2">
                          <button className="text-xs bg-blue-500/20 hover:bg-blue-500/30 px-2 py-1 rounded-full transition-colors">❤️ 12</button>
                          <button className="text-xs text-foreground/60 hover:text-foreground transition-colors">Reply</button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-3 sm:p-4 border border-purple-500/20 animate-fade-in-up animation-delay-600">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                        <span className="text-xs sm:text-sm font-medium">{t('eventPoll')}</span>
                      </div>
                      <div className="text-xs sm:text-sm mb-3">{t('pollQuestion')}</div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs">{t('techno')}</span>
                          <span className="text-xs text-foreground/60">45%</span>
                        </div>
                        <div className="w-full bg-foreground/10 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-[45%] animate-scale-in"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">{t('house')}</span>
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
                      <span className="text-xs">{t('peopleHyped')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-400"></div>
                  <div className="flex-1 bg-foreground/10 rounded-full px-3 sm:px-4 py-2">
                    <div className="text-xs sm:text-sm text-foreground/60 animate-pulse">{t('shareExcitement')}</div>
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
              <span className="text-blue-700 dark:text-blue-300 font-medium">{t('forOrganizers')}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground">{t('operateEvent')}</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                {t('startToFinish')}
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              {t('organizersSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-20">
            <TicketStubCard className="group">
              <div className="relative bg-gradient-to-br from-blue-500/90 via-blue-600/80 to-cyan-500/90 backdrop-blur-sm border border-blue-400/30 p-6 lg:p-8 ticket-stub">
                {/* Ticket perforations */}
                <div className="absolute top-0 right-20 w-px h-full border-l-2 border-dashed border-blue-300/40"></div>
                <div className="absolute top-4 right-16 w-4 h-4 bg-blue-300/20 rounded-full"></div>
                <div className="absolute bottom-4 right-16 w-4 h-4 bg-blue-300/20 rounded-full"></div>
                
                {/* Main content area */}
                <div className="relative z-10 flex items-center">
                  <div className="flex-1 pr-6">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/30">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-semibold mb-3 text-white group-hover:text-blue-100 transition-colors">{t('create')}</h3>
                    <p className="text-blue-100/90 text-lg leading-relaxed">{t('createDesc')}</p>
                  </div>
                  
                  {/* QR Code area */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-silver-200 via-gray-100 to-silver-300 rounded-lg p-1 shadow-lg border border-gray-300">
                      <div className="w-full h-full bg-white rounded grid grid-cols-4 gap-px p-1">
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TicketStubCard>

            <TicketStubCard className="group">
              <div className="relative bg-gradient-to-br from-cyan-500/90 via-teal-600/80 to-emerald-500/90 backdrop-blur-sm border border-cyan-400/30 p-6 lg:p-8 ticket-stub">
                {/* Ticket perforations */}
                <div className="absolute top-0 right-20 w-px h-full border-l-2 border-dashed border-cyan-300/40"></div>
                <div className="absolute top-4 right-16 w-4 h-4 bg-cyan-300/20 rounded-full"></div>
                <div className="absolute bottom-4 right-16 w-4 h-4 bg-cyan-300/20 rounded-full"></div>
                
                {/* Main content area */}
                <div className="relative z-10 flex items-center">
                  <div className="flex-1 pr-6">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/30">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-semibold mb-3 text-white group-hover:text-cyan-100 transition-colors">{t('configureTickets')}</h3>
                    <p className="text-cyan-100/90 text-lg leading-relaxed">{t('configureTicketsDesc')}</p>
                  </div>
                  
                  {/* QR Code area */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-silver-200 via-gray-100 to-silver-300 rounded-lg p-1 shadow-lg border border-gray-300">
                      <div className="w-full h-full bg-white rounded grid grid-cols-4 gap-px p-1">
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-black rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TicketStubCard>

            <TicketStubCard className="group">
              <div className="relative bg-gradient-to-br from-emerald-500/90 via-green-600/80 to-teal-500/90 backdrop-blur-sm border border-emerald-400/30 p-6 lg:p-8 ticket-stub">
                {/* Ticket perforations */}
                <div className="absolute top-0 right-20 w-px h-full border-l-2 border-dashed border-emerald-300/40"></div>
                <div className="absolute top-4 right-16 w-4 h-4 bg-emerald-300/20 rounded-full"></div>
                <div className="absolute bottom-4 right-16 w-4 h-4 bg-emerald-300/20 rounded-full"></div>
                
                {/* Main content area */}
                <div className="relative z-10 flex items-center">
                  <div className="flex-1 pr-6">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/30">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-semibold mb-3 text-white group-hover:text-emerald-100 transition-colors">{t('collectPayment')}</h3>
                    <p className="text-emerald-100/90 text-lg leading-relaxed">{t('collectPaymentDesc')}</p>
                  </div>
                  
                  {/* QR Code area */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-silver-200 via-gray-100 to-silver-300 rounded-lg p-1 shadow-lg border border-gray-300">
                      <div className="w-full h-full bg-white rounded grid grid-cols-4 gap-px p-1">
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TicketStubCard>

            <TicketStubCard className="group">
              <div className="relative bg-gradient-to-br from-orange-500/90 via-red-600/80 to-pink-500/90 backdrop-blur-sm border border-orange-400/30 p-6 lg:p-8 ticket-stub">
                {/* Ticket perforations */}
                <div className="absolute top-0 right-20 w-px h-full border-l-2 border-dashed border-orange-300/40"></div>
                <div className="absolute top-4 right-16 w-4 h-4 bg-orange-300/20 rounded-full"></div>
                <div className="absolute bottom-4 right-16 w-4 h-4 bg-orange-300/20 rounded-full"></div>
                
                {/* Main content area */}
                <div className="relative z-10 flex items-center">
                  <div className="flex-1 pr-6">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/30">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-semibold mb-3 text-white group-hover:text-orange-100 transition-colors">{t('operateAtDoor')}</h3>
                    <p className="text-orange-100/90 text-lg leading-relaxed">{t('operateAtDoorDesc')}</p>
                  </div>
                  
                  {/* QR Code area */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-silver-200 via-gray-100 to-silver-300 rounded-lg p-1 shadow-lg border border-gray-300">
                      <div className="w-full h-full bg-white rounded grid grid-cols-4 gap-px p-1">
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-black rounded-sm"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-black rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TicketStubCard>
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
                {t('accessTitle')}
                <br />
                <span className="text-green-400">{t('withOrWithoutInternet')}</span>
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">{t('qrWithoutSignal')}</div>
                    <div className="text-slate-300 text-sm">{t('qrDesc')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">{t('immediateValidation')}</div>
                    <div className="text-slate-300 text-sm">{t('validationDesc')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">{t('duplicateDetection')}</div>
                    <div className="text-slate-300 text-sm">{t('duplicateDesc')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">{t('manualCheckin')}</div>
                    <div className="text-slate-300 text-sm">{t('manualDesc')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">{t('multiDoor')}</div>
                    <div className="text-slate-300 text-sm">{t('multiDoorDesc')}</div>
                  </div>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-full text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-300">{t('accessNote')}</span>
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
                      <span className="text-slate-400 text-xs">{t('noInternet')}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-green-400 font-medium text-sm">{t('validEntry')}</div>
                          <div className="text-slate-300 text-xs">Sarah Johnson • VIP Ticket</div>
                        </div>
                        <div className="text-green-400 text-2xl">✓</div>
                      </div>
                    </div>
                    
                    <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-red-400 font-medium text-sm">{t('alreadyUsed')}</div>
                          <div className="text-slate-300 text-xs">Mike Chen • {t('usedAt')}</div>
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
                    <span>{t('scannedTickets')}</span>
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
                {t('sellMore')}
              </span>
              <span className="text-foreground">{t('withPromoterTeam')}</span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
              {t('promotersSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-optimized rounded-2xl border border-foreground/10 p-6 hover:border-orange-500/20 transition-all duration-200 hover:shadow-lg gpu-accelerated">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('linksAndCodes')}</h3>
              <p className="text-foreground/70 text-sm mb-4">{t('linksDesc')}</p>
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
              <h3 className="text-xl font-semibold mb-3">{t('commissions')}</h3>
              <p className="text-foreground/70 text-sm mb-4">{t('commissionsDesc')}</p>
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
              <h3 className="text-xl font-semibold mb-3">{t('leaderboard')}</h3>
              <p className="text-foreground/70 text-sm mb-4">{t('leaderboardDesc')}</p>
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
            <h4 className="font-semibold mb-4">{t('bestPractices')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground/70">{t('practice1')}</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground/70">{t('practice2')}</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground/70">{t('practice3')}</span>
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
              <span className="text-foreground">{t('metricsThatMatter')} </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('actuallyMatter')}
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
              {t('metricsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-optimized rounded-2xl border border-foreground/10 p-6 text-center gpu-accelerated">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
              <div className="text-sm text-foreground/60 mb-1">{t('ticketsSold')}</div>
              <div className="text-xs text-green-600">↗ +23% vs last event</div>
            </div>
            
            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-optimized rounded-2xl border border-foreground/10 p-6 text-center gpu-accelerated">
              <div className="text-3xl font-bold text-purple-600 mb-2">68%</div>
              <div className="text-sm text-foreground/60 mb-1">{t('conversionRate')}</div>
              <div className="text-xs text-green-600">↗ +12% this month</div>
            </div>
            
            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-optimized rounded-2xl border border-foreground/10 p-6 text-center gpu-accelerated">
              <div className="text-3xl font-bold text-emerald-600 mb-2">$89K</div>
              <div className="text-sm text-foreground/60 mb-1">{t('netRevenue')}</div>
              <div className="text-xs text-green-600">↗ +34% growth</div>
            </div>
            
            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-6 text-center relative">
              <div className="absolute top-2 right-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">247</div>
              <div className="text-sm text-foreground/60 mb-1">{t('liveCheckins')}</div>
              <div className="text-xs text-blue-600">{t('realTime')}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-optimized rounded-2xl border border-foreground/10 p-6 gpu-accelerated">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">{t('salesByChannel')}</h4>
                <div className="text-xs text-foreground/60">{t('lastDays')}</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">{t('direct')}</span>
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
                    <span className="text-sm">{t('instagram')}</span>
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
                    <span className="text-sm">{t('promoters')}</span>
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
                <h4 className="font-semibold">{t('topPromoters')}</h4>
                <div className="text-xs text-foreground/60">{t('thisMonth')}</div>
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
                {t('createMyEvent')}
              </button>
              <button className="px-8 py-4 border border-foreground/20 rounded-full font-medium hover:bg-foreground/5 hover:scale-105 transition-all duration-300">
                {t('requestDemo')}
              </button>
            </div>
            <p className="text-xs text-foreground/60 mt-4">{t('worksOnMobile')}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-purple-500/5 to-pink-500/5 dark:from-slate-900/50 dark:via-purple-500/5 dark:to-pink-500/5 overflow-hidden" 
        style={{ width: '100vw', margin: 0, padding: 0, paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animate-float-delayed"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 backdrop-blur-sm px-3 sm:px-4 py-2 text-xs sm:text-sm mb-6">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-yellow-700 dark:text-yellow-300 font-medium">{t('cameraFeatures')}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="text-foreground">{t('captureTheMoment')}</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                {t('revealTomorrow')}
              </span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              {t('cameraSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="space-y-6 lg:space-y-8">
              <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-6 lg:p-8 hover:border-yellow-500/20 transition-all duration-300 hover:shadow-lg group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-600 transition-colors">{t('disposableStyle')}</h3>
                    <p className="text-foreground/70 text-sm">{t('disposableStyleDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-6 lg:p-8 hover:border-pink-500/20 transition-all duration-300 hover:shadow-lg group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-600 transition-colors">{t('autoReveal')}</h3>
                    <p className="text-foreground/70 text-sm">{t('autoRevealDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-6 lg:p-8 hover:border-blue-500/20 transition-all duration-300 hover:shadow-lg group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{t('sharedGallery')}</h3>
                    <p className="text-foreground/70 text-sm">{t('sharedGalleryDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-6 lg:p-8 hover:border-emerald-500/20 transition-all duration-300 hover:shadow-lg group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-600 transition-colors">{t('moderationIncluded')}</h3>
                    <p className="text-foreground/70 text-sm">{t('moderationIncludedDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2 text-foreground">{t('eventGallery')}</h3>
                <p className="text-sm text-foreground/60 mb-4">{t('dragToExplore')}</p>
              </div>
              
              <DraggableCardContainer className="relative min-h-[400px] sm:min-h-[500px] flex items-center justify-center px-4">
                <div className="relative grid grid-cols-2 gap-2 sm:gap-4 max-w-xs sm:max-w-lg">
                  <DraggableCardBody className="w-32 h-40 sm:w-48 sm:h-64 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border-4 sm:border-8 border-white dark:border-slate-700 shadow-xl">
                    <div className="h-full w-full bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200 dark:from-yellow-900/50 dark:via-orange-900/50 dark:to-pink-900/50 rounded-sm flex flex-col">
                      <div className="flex-1 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-sm m-2 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div className="text-xs text-white/80 font-medium">DJ Set Vibes</div>
                        </div>
                      </div>
                      <div className="bg-white dark:bg-slate-800 p-2 rounded-b-sm">
                        <div className="text-xs text-foreground/60">23:45 PM</div>
                      </div>
                    </div>
                  </DraggableCardBody>

                  <DraggableCardBody className="w-32 h-40 sm:w-48 sm:h-64 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border-4 sm:border-8 border-white dark:border-slate-700 shadow-xl">
                    <div className="h-full w-full bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 dark:from-pink-900/50 dark:via-purple-900/50 dark:to-blue-900/50 rounded-sm flex flex-col">
                      <div className="flex-1 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-sm m-2 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                            </svg>
                          </div>
                          <div className="text-xs text-white/80 font-medium">Dance Floor</div>
                        </div>
                      </div>
                      <div className="bg-white dark:bg-slate-800 p-2 rounded-b-sm">
                        <div className="text-xs text-foreground/60">01:20 AM</div>
                      </div>
                    </div>
                  </DraggableCardBody>

                  <DraggableCardBody className="w-32 h-40 sm:w-48 sm:h-64 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border-4 sm:border-8 border-white dark:border-slate-700 shadow-xl col-span-2 justify-self-center">
                    <div className="h-full w-full bg-gradient-to-br from-orange-200 via-red-200 to-pink-200 dark:from-orange-900/50 dark:via-red-900/50 dark:to-pink-900/50 rounded-sm flex flex-col">
                      <div className="flex-1 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-sm m-2 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                          <div className="text-xs text-white/80 font-medium">Best Friends</div>
                        </div>
                      </div>
                      <div className="bg-white dark:bg-slate-800 p-2 rounded-b-sm">
                        <div className="text-xs text-foreground/60">02:15 AM</div>
                      </div>
                    </div>
                  </DraggableCardBody>
                </div>

                {/* Camera Interface Overlay */}
                <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 px-4 w-full max-w-xs sm:max-w-none sm:w-auto">
                  <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-3 sm:p-4 min-w-[240px] sm:min-w-[280px] mx-auto">
                    <div className="text-center text-white mb-2 sm:mb-3">
                      <div className="text-xs sm:text-sm font-medium mb-1">{t('dayAfterReveal')}</div>
                      <div className="text-xs text-white/70">{t('revealCountdown')} 8 {t('hours')}</div>
                    </div>
                    <div className="flex items-center justify-center gap-2 sm:gap-4">
                      <div className="text-xs text-white/60">7/12 {t('photosTaken')}</div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/40"></div>
                      </div>
                      <div className="text-xs text-white/60">5 {t('photosRemaining')}</div>
                    </div>
                  </div>
                </div>
              </DraggableCardContainer>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-foreground/5 to-foreground/10 border border-foreground/10">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-foreground/70 font-medium">{t('cameraIncluded')}</span>
            </div>
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
            <span className="text-blue-700 dark:text-blue-300 font-medium">{t('comingSoon')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 animate-fade-in-up animation-delay-200">
            <span className="text-foreground">{t('readyToRevolutionize')}</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              {t('yourEvents')}
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-fade-in-up animation-delay-400">
            {t('waitlistCopy')}
          </p>

          <div className="mb-8 sm:mb-12 animate-fade-in-up animation-delay-600">
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder={t('enterEmail')}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-foreground/20 bg-background/80 backdrop-blur-sm text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
                  required
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <button
                type="submit"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 gpu-accelerated flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {t('joinWaitlist')}
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
              <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">{t('earlyAccess')}</h3>
              <p className="text-xs sm:text-sm text-foreground/70">{t('earlyAccessDesc')}</p>
            </div>

            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-4 sm:p-6 hover:border-purple-500/20 transition-all duration-300 hover:shadow-lg group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors">{t('exclusiveBenefits')}</h3>
              <p className="text-xs sm:text-sm text-foreground/70">{t('exclusiveBenefitsDesc')}</p>
            </div>

            <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-2xl border border-foreground/10 p-4 sm:p-6 hover:border-emerald-500/20 transition-all duration-300 hover:shadow-lg group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-emerald-600 transition-colors">{t('shapeTheFuture')}</h3>
              <p className="text-xs sm:text-sm text-foreground/70">{t('shapeTheFutureDesc')}</p>
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
              <span className="text-foreground/70 font-medium">{t('joinWaitlistCount')}</span>
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
              <span className="text-emerald-700 dark:text-emerald-300 font-medium">{t('getInTouch')}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="text-foreground">{t('letsBuild')}</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {t('eventsTogether')}
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto">
              {t('contactCopy')}
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
                    <h3 className="text-xl font-semibold mb-2">{t('generalInquiries')}</h3>
                    <p className="text-foreground/70 text-sm mb-4">{t('generalInquiriesDesc')}</p>
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
                    <h3 className="text-xl font-semibold mb-2">{t('businessPartnerships')}</h3>
                    <p className="text-foreground/70 text-sm mb-4">{t('businessPartnershipsDesc')}</p>
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
                    <h3 className="text-xl font-semibold mb-2">{t('supportHelp')}</h3>
                    <p className="text-foreground/70 text-sm mb-4">{t('supportHelpDesc')}</p>
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
              <h3 className="text-2xl font-semibold mb-6">{t('sendMessage')}</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">{t('firstName')}</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 sm:py-4 rounded-xl border border-foreground/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-200 mobile:touch-target"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">{t('lastName')}</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 sm:py-4 rounded-xl border border-foreground/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-200 mobile:touch-target"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">{t('email')}</label>
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
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">{t('subject')}</label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl border border-foreground/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">{t('selectTopic')}</option>
                    <option value="general">{t('generalInquiry')}</option>
                    <option value="waitlist">{t('waitlistEarlyAccess')}</option>
                    <option value="partnership">{t('partnership')}</option>
                    <option value="support">{t('support')}</option>
                    <option value="press">{t('pressMedia')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">{t('message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-foreground/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder={t('messagePlaceholder')}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-4 sm:py-5 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 gpu-accelerated flex items-center justify-center gap-2 mobile:touch-target"
                >
                  {t('sendMessageBtn')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-foreground/10">
                <p className="text-sm text-foreground/60 mb-4">{t('reachDirectly')}</p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-foreground/70">{t('respondTime')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-foreground/70">{t('timezone')}</span>
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
                {t('footerDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:hello@bole.to?subject=Join%20the%20bole.to%20waitlist"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 gpu-accelerated"
                >
                  {t('joinWaitlist')}
                  <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-foreground/20 bg-background/50 backdrop-blur-sm px-4 py-2.5 text-sm font-medium hover:bg-foreground/5 hover:scale-105 transition-all duration-300"
                >
                  {t('getInTouch')}
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t('product')}</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#features" className="text-foreground/70 hover:text-foreground hover:underline transition-colors">
                    {t('footerFeatures')}
                  </a>
                </li>
                <li>
                  <span className="text-foreground/40 cursor-not-allowed">
                    {t('pricing')}
                  </span>
                  <span className="ml-2 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-1.5 py-0.5 text-xs text-orange-700 dark:text-orange-300">
                    {t('soon')}
                  </span>
                </li>
                <li>
                  <span className="text-foreground/40 cursor-not-allowed">
                    {t('apiDocs')}
                  </span>
                  <span className="ml-2 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-1.5 py-0.5 text-xs text-orange-700 dark:text-orange-300">
                    {t('soon')}
                  </span>
                </li>
                <li>
                  <span className="text-foreground/40 cursor-not-allowed">
                    {t('mobileApps')}
                  </span>
                  <span className="ml-2 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-1.5 py-0.5 text-xs text-orange-700 dark:text-orange-300">
                    {t('soon')}
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t('company')}</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="text-foreground/40 cursor-not-allowed">
                    {t('aboutUs')}
                  </span>
                  <span className="ml-2 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-1.5 py-0.5 text-xs text-orange-700 dark:text-orange-300">
                    Soon
                  </span>
                </li>
                <li>
                  <span className="text-foreground/40 cursor-not-allowed">
                    {t('blog')}
                  </span>
                  <span className="ml-2 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-1.5 py-0.5 text-xs text-orange-700 dark:text-orange-300">
                    Soon
                  </span>
                </li>
                <li>
                  <span className="text-foreground/40 cursor-not-allowed">
                    {t('careers')}
                  </span>
                  <span className="ml-2 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-1.5 py-0.5 text-xs text-orange-700 dark:text-orange-300">
                    Soon
                  </span>
                </li>
                <li>
                  <a href="#contact" className="text-foreground/70 hover:text-foreground hover:underline transition-colors">
                    {t('contact')}
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
                  <span className="text-foreground/60">{t('allRightsReserved')}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden sm:block w-px h-4 bg-foreground/20"></div>
                  <span className="text-foreground/40">
                    {t('privacyPolicy')}
                  </span>
                  <span className="text-foreground/40">
                    {t('termsOfService')}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-xs text-foreground/60">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>{t('systemsOperational')}</span>
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
              {t('footerNote')}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}