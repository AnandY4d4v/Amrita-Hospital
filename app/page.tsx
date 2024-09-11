/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pmOvlMQHOAd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from 'next/image';

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#contact" className="flex items-center gap-2" prefetch={false}>
          <HospitalIcon className="h-8 w-7" />
          <span className="text-xl font-bold">Amrita Hospital</span>
        </Link>


        {/* <Button  variant="secondary">Contact  Us</Button> */}
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-02 xl:py-68 bg-gradient-to-r from-primary to-secondary1-foreground flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none">
                    Welcome to Amrita Hospital
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground md:text-xl">
                    Providing exceptional healthcare for our community.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#services"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Explore Services
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <Image
                src="https://i.ibb.co/VtTnZc1/hospital.png"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square border-[2px] border-primary-foreground"
              />
            </div>
          </div>
        </section>

        <section id="services" className="py-12 md:py-20 bg-background flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="flex flex-col gap-2">
                <StethoscopeIcon className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Advanced Gynecological, Obstetric & Infertility Care</h3>
                <p className="text-muted-foreground">
                  Our expert gynecologist and obstetrician, also specializing in infertility, offers comprehensive care for women&apos;s reproductive health. Services include pregnancy check-ups, uterine removal (hysterectomy), treatment for blocked fallopian tubes, sterilization procedures, and both major and minor surgeries. We provide personalized care, ensuring the best outcomes for each patient&apos;s needs throughout their journey, from infertility treatments to complex surgical procedures.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <HeartPulseIcon className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Expert Care for Diabetes, Thyroid & Respiratory Disorders</h3>
                <p className="text-muted-foreground">
                  Our clinic offers expert care for managing diabetes, thyroid imbalances, and respiratory disorders. We provide personalized treatment plans, focusing on accurate diagnosis and long-term management of conditions such as type 1 and type 2 diabetes, hyperthyroidism, hypothyroidism, asthma, and chronic obstructive pulmonary disease (COPD). With a holistic approach, we aim to improve patients&apos; quality of life through preventive care, regular monitoring, and advanced treatments.
                </p>

              </div>
              <div className="flex flex-col gap-2">
                <AmbulanceIcon className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Ambulance Services</h3>
                <p className="text-muted-foreground">
                  Our fleet of ambulances are ready to provide emergency transport.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <MicroscopeIcon className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Advanced Diagnostics</h3>
                <p className="text-muted-foreground">
                  Our state-of-the-art diagnostic equipment ensures accurate results.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <PillBottleIcon className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Pharmacy Services</h3>
                <p className="text-muted-foreground">Our on-site pharmacy provides convenient access to medications.</p>
              </div>

            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 bg-muted flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Meet Our Doctors</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our team of highly skilled and experienced doctors are dedicated to providing the best possible care for our patients.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-background rounded-lg shadow-md overflow-hidden max-w-xs">
                  <Image
                    src="https://i.ibb.co/gZWRCVP/pushpa.png"
                    alt="Dr. Pushpa Yadav"
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover  rounded-xl object-cover lg:order-last lg:aspect-square border-[2px] border-primary-foreground"
                    style={{ aspectRatio: "400/400", objectFit: "cover" }}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">Dr. Pushpa Yadav</h3>
                    <p className="text-muted-foreground">Obst & Gynae</p>
                    <p className="text-muted-foreground">
                      Dr. Pushpa is committed to delivering exceptional care in Obstetrics and Gynaecology, focusing on the well-being and health of her patients.
                    </p>
                  </div>
                </div>
                <div className="bg-background rounded-lg shadow-md overflow-hidden max-w-xs">
                  <Image
                    src="https://i.ibb.co/Y2Smjcv/dileep.png"
                    alt="Dr. Dileep Yadav"
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover  rounded-xl object-cover lg:order-last lg:aspect-square border-[2px] border-primary-foreground"
                    style={{ aspectRatio: "400/400", objectFit: "cover" }}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">Dr. Dileep Yadav</h3>
                    <p className="text-muted-foreground">Physician</p>
                    <p className="text-muted-foreground">
                      Dr. Dileep is a highly skilled physician with extensive experience in diagnosing and treating complex medical conditions.
                      He is known for his expertise in patient care and personalized treatment plans.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Find Us on the Map</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our hospital is conveniently located in the heart of the city. Click the map to get directions.
              </p>
              <Link
                href="https://maps.app.goo.gl/2t3Gin7uioSTthk38"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View on Map
              </Link>
            </div>
            <div className="w-full h-[400px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8351288872545!2d-122.41950268489596!3d37.77493524053007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080a8d2c7d7%3A0x5c256c85b474f8b3!2sVercel%20Inc!5e0!3m2!1sen!2sus!4v1624643702055!5m2!1sen!2sushttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8351288872545!2d-122.41950268489596!3d37.77493524053007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080a8d2c7d7%3A0x5c256c85b474f8b3!2sVercel%20Inc!5e0!3m2!1sen!2sus!4v1624643702055!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 md:py-20 bg-muted flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
                <p className="text-muted-foreground mt-4">
                  Get in touch with us for any inquiries or to schedule an appointment.
                </p>
                <form className="mt-6 space-y-4">
                  <Input type="text" placeholder="Name" className="w-full" />
                  <Input type="email" placeholder="Email" className="w-full" />
                  <Textarea placeholder="Message" className="w-full" />
                  <Button type="submit">Submit</Button>
                </form>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-muted rounded-lg p-4 shadow-md">
                  <h3 className="text-xl font-bold">Address</h3>
                  <p className="text-muted-foreground">Andawa Chauraha, GT Road, Jhunsi, Praygraj, 211019</p>
                </div>
                <div className="bg-muted rounded-lg p-4 shadow-md">
                  <h3 className="text-xl font-bold">Phone</h3>
                  <p className="text-muted-foreground">+91 7238010324</p>
                </div>
                <div className="bg-muted rounded-lg p-4 shadow-md">
                  <h3 className="text-xl font-bold">Email</h3>
                  <p className="text-muted-foreground">amritahospital@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <p className="text-sm">&copy; 2024 Amrita Hospital</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  )
}

function AmbulanceIcon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 10H6" />
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
      <path d="M8 8v4" />
      <path d="M9 18h6" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}


function HeartPulseIcon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  )
}


function HospitalIcon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 6v4" />
      <path d="M14 14h-4" />
      <path d="M14 18h-4" />
      <path d="M14 8h-4" />
      <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
  )
}


function MicroscopeIcon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
}


function PillBottleIcon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" />
      <path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
      <rect width="16" height="5" x="4" y="2" rx="1" />
    </svg>
  )
}



function StethoscopeIcon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  )
}
