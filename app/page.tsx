import { AutoSliderBanner } from "@/components/auto-slider-banner"
import { ServiceCard } from "@/components/service-card"

export default function Home() {
  const services = [
    {
      id: 1,
      name: "TELECOMMUNICATION DESIGN",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telecommunications.jpg-PGBWh74JwU10hdiQcHd3NWNP4YDdFL.jpeg",
      hoverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telecommunications%20colored.jpg-RyhJOYpUwn8MrFUfoRWbmCabn1uxBA.jpeg",
      description:
        "OUR EXPERTISE IN TELECOMMUNICATION DESIGN SPANS UNDERGROUND, AERIAL, FIBER, COPPER, AND 5G NETWORKS. FROM INITIAL CONCEPT TO DETAILED ENGINEERING, WE ENSURE SEAMLESS INTEGRATION OF TELECOMMUNICATIONS INFRASTRUCTURE INTO URBAN DEVELOPMENT PROJECTS. BY COMBINING TECHNICAL PRECISION WITH INNOVATIVE SOLUTIONS, WE DELIVER HIGH-QUALITY DESIGNS THAT MEET MODERN DEMANDS. WHETHER HANDLING SPECIALTY PERMITS OR OPTIMIZING NETWORK LAYOUTS, OUR TEAM IS DEDICATED TO EFFICIENCY, RELIABILITY, AND COMPLIANCE AT EVERY STEP.",
    },
    {
      id: 2,
      name: "SURVEYING",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SURVEYING.jpg-aN9LO82m2Flb2m9QmEGNG2mCzy9TDx.jpeg",
      hoverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SURVEYINGcolor.jpg-kJ1CLDua73pMIyTv4m22ldflFAEv0E.jpeg",
      description:
        "SURVEYING IS THE BACKBONE OF ACCURATE AND EFFECTIVE PROJECT EXECUTION. WE LEVERAGE CUTTING-EDGE TOOLS AND TECHNOLOGY TO COLLECT PRECISE DATA, OFFERING INSIGHTS CRITICAL FOR PLANNING AND DESIGN. FROM LAND ASSESSMENTS TO DETAILED SITE ANALYSIS, OUR SURVEYS PROVIDE THE FOUNDATION FOR SEAMLESS INTEGRATION WITH ENGINEERING AND CONSTRUCTION EFFORTS. OUR COMMITMENT TO ACCURACY ENSURES EVERY PROJECT ALIGNS WITH REGULATORY STANDARDS AND SITE-SPECIFIC REQUIREMENTS.",
    },
    {
      id: 3,
      name: "ENGINEERING",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/engineering%20(1).jpg-6au8cx8LLUJaKsspvqdfDNpHgGR4WH.jpeg",
      hoverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/engineering%20colored%20(1).jpg-XIneU3m52Dl7jopjN3mM5s1lgFOkbN.jpeg",
      description:
        "WE OFFER END-TO-END ENGINEERING SOLUTIONS TAILORED TO TRANSFORM IDEAS INTO REALITY. SPECIALIZING IN DESIGN, DRAFTING, AND PROJECT MANAGEMENT, OUR SERVICES PRIORITIZE SUSTAINABILITY, INNOVATION, AND COMPLIANCE. FROM COMPLEX URBAN DEVELOPMENTS TO TAILORED DESIGNS, WE FOCUS ON CREATING EFFICIENT AND COST-EFFECTIVE SOLUTIONS. OUR MULTIDISCIPLINARY APPROACH ENSURES SMOOTH COLLABORATION ACROSS ALL PROJECT PHASES, MEETING TIMELINES AND EXCEEDING CLIENT EXPECTATIONS.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AutoSliderBanner />

      <section id="about-us" className="w-full py-12 md:py-24 bg-[#010101]">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">ABOUT US</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300">
              WE ARE A DEDICATED TELECOMMUNICATION DESIGN FIRM. WITH EXTENSIVE EXPERIENCE IN BOTH UNDERGROUND AND AERIAL
              PROJECTS, WE PRIDE OURSELVES ON DELIVERING HIGH-QUALITY WORK EFFICIENTLY AND EFFECTIVELY. OUR COMMITMENT
              TO EXCELLENCE ENSURES THAT YOUR PROJECTS ARE COMPLETED ON TIME AND TO THE HIGHEST STANDARDS.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24 bg-[#010101]">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-100">SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact-us" className="w-full py-12 md:py-24 bg-[#010101]">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-100">CONTACT US</h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-gray-300">
              <p className="mb-4">
                <strong>Address:</strong>
                <br />
                <a
                  href="https://www.google.com/maps?sca_esv=74f7731948ddd43d&rlz=1C1ONGR_enCA1046CA1046&output=search&q=25+SHEPPARD+AVE.+W.+SUITE+%23300,+NORTH+YORK,+ON,+M2N+6S6&source=lnms&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpIgVFCTcbZI9VMGzNoV0iOW2r2RmmbgIG0Wrb1wPZ_5-5ZhyOApT8uhUDcWen8VYAbEzSycY2vztd5NAB-wyDpImFEz5JbNoaCeOl_Bk_qeVFjmcoMbtplpR8IsToCrsEBIpUnoqI3eBpKSCh_v3dtKNhiU4jW4P1hsLFg7Tzj1j1H7TlcG2X_h_k-YFlw5FQnZBeOg&entry=mc&ved=1t:200715&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  25 SHEPPARD AVE. W. SUITE #300,
                  <br />
                  NORTH YORK, ON, M2N 6S6
                </a>
              </p>
              <p className="mb-4">
                <strong>Email:</strong>
                <br />
                General@FHASolutions.ca
              </p>
              <p>
                <strong>Phone:</strong>
                <br />
                (647) 492-7193
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

